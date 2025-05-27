# MilFIT Website Deployment Instructions

## Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd website
   vercel
   ```

3. **Follow prompts:**
   - Link to existing project? No
   - Project name: milfit-website
   - Directory: ./
   - Override settings? No

## Option 2: Deploy to Netlify

1. **Build the project:**
   ```bash
   cd website
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

## Environment Variables

Set these environment variables in your deployment platform:

```
NEXT_PUBLIC_API_URL=https://milfit.au/api/v1
```

## Access URLs

After deployment:
- **Admin Interface**: `https://your-domain.com/admin`
- **Login**: `https://your-domain.com/login`
- **Main Site**: `https://your-domain.com`

## Demo Credentials

For testing the admin interface:
- Email: `admin@milfit.au`
- Password: `admin123` 