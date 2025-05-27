# MilFIT Website Deployment Script
# This script uploads the static website to your hosting

param(
    [string]$FtpServer = "milfit.au",
    [string]$Username = "testy@milfit.au",
    [string]$Password = "s/H~[.mKl5P^",
    [string]$RemotePath = "/public_html/website"
)

Write-Host "🚀 MilFIT Website Deployment Starting..." -ForegroundColor Green

# Check if out directory exists
if (-not (Test-Path "out")) {
    Write-Host "❌ 'out' directory not found. Please run 'npm run export' first." -ForegroundColor Red
    exit 1
}

# Function to upload files via FTP
function Send-FileViaFtp {
    param(
        [string]$LocalPath,
        [string]$RemotePath,
        [string]$FtpServer,
        [string]$Username,
        [string]$Password
    )
    
    try {
        $ftpUri = "ftp://$FtpServer$RemotePath"
        $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $ftpRequest.UseBinary = $true
        $ftpRequest.UsePassive = $true
        
        $fileContent = [System.IO.File]::ReadAllBytes($LocalPath)
        $ftpRequest.ContentLength = $fileContent.Length
        
        $requestStream = $ftpRequest.GetRequestStream()
        $requestStream.Write($fileContent, 0, $fileContent.Length)
        $requestStream.Close()
        
        $response = $ftpRequest.GetResponse()
        $response.Close()
        
        return $true
    }
    catch {
        Write-Host "❌ Failed to upload $LocalPath : $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Function to create FTP directory
function New-FtpDirectory {
    param(
        [string]$RemotePath,
        [string]$FtpServer,
        [string]$Username,
        [string]$Password
    )
    
    try {
        $ftpUri = "ftp://$FtpServer$RemotePath"
        $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        
        $response = $ftpRequest.GetResponse()
        $response.Close()
        return $true
    }
    catch {
        # Directory might already exist, which is fine
        return $false
    }
}

# Create website directory
Write-Host "📁 Creating website directory..." -ForegroundColor Yellow
New-FtpDirectory -RemotePath $RemotePath -FtpServer $FtpServer -Username $Username -Password $Password

# Upload all files from out directory
Write-Host "📤 Uploading website files..." -ForegroundColor Yellow

$uploadCount = 0
$failCount = 0

Get-ChildItem -Path "out" -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 5) # Remove "out\" prefix
    $remotePath = "$RemotePath/$($relativePath -replace '\\', '/')"
    
    # Create directory structure
    $remoteDir = Split-Path $remotePath -Parent
    if ($remoteDir -ne $RemotePath) {
        New-FtpDirectory -RemotePath $remoteDir -FtpServer $FtpServer -Username $Username -Password $Password
    }
    
    Write-Host "  Uploading: $relativePath" -ForegroundColor Cyan
    
    if (Send-FileViaFtp -LocalPath $_.FullName -RemotePath $remotePath -FtpServer $FtpServer -Username $Username -Password $Password) {
        $uploadCount++
    }
    else {
        $failCount++
    }
}

Write-Host ""
Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "📊 Files uploaded: $uploadCount" -ForegroundColor Green
Write-Host "❌ Files failed: $failCount" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Red" })
Write-Host ""
Write-Host "🌐 Your website should now be available at:" -ForegroundColor Yellow
Write-Host "   https://milfit.au/website/" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔑 Admin Login:" -ForegroundColor Yellow
Write-Host "   URL: https://milfit.au/website/login/" -ForegroundColor Cyan
Write-Host "   Email: admin@milfit.au" -ForegroundColor Cyan
Write-Host "   Password: admin123" -ForegroundColor Cyan 