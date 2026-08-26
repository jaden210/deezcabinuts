# Deployment Guide

This guide will help you deploy the DeezCabinuts website to Firebase Hosting.

## Prerequisites

1. **Firebase CLI**: Install the Firebase CLI globally
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase Account**: Make sure you have a Firebase account and project set up

## Deployment Steps

### 1. Login to Firebase

```bash
firebase login
```

### 2. Initialize Firebase (First time only)

```bash
firebase init hosting
```

When prompted:
- Select your Firebase project (deezcabnuts)
- Set public directory to: `dist/deezcabnuts/browser`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

### 3. Build the Application

```bash
npm run build
```

This creates the production build in the `dist/deezcabnuts/browser` directory.

### 4. Deploy to Firebase

```bash
firebase deploy
```

Or use the convenience script:
```bash
npm run deploy
```

### 5. Verify Deployment

After deployment, Firebase will provide you with a URL where your site is live (usually `https://deezcabnuts.web.app`).

## Custom Domain Setup

1. **Add Custom Domain**:
   - Go to Firebase Console > Hosting
   - Click "Add custom domain"
   - Enter your domain (e.g., `deezcabnuts.com`)

2. **Update DNS Records**:
   - Add the provided DNS records to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

3. **SSL Certificate**:
   - Firebase automatically provisions SSL certificates
   - No additional configuration needed

## Environment Variables

If you need to add environment variables:

1. Create `.env` file in the project root
2. Add your variables:
   ```
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   ```

3. Update `src/app/firebase.config.ts` to use environment variables

## Continuous Deployment

For automatic deployments on code changes:

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Firebase
      uses: FirebaseExtended/action-hosting-deploy@v0
      with:
        repoToken: '${{ secrets.GITHUB_TOKEN }}'
        firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
        channelId: live
        projectId: deezcabnuts
```

## Troubleshooting

### Common Issues

1. **Build Errors**:
   - Check for TypeScript errors: `npm run lint`
   - Ensure all dependencies are installed: `npm install`

2. **Deployment Errors**:
   - Verify Firebase project ID in `.firebaserc`
   - Check Firebase CLI is logged in: `firebase login`
   - Ensure build completed successfully

3. **404 Errors**:
   - Verify `firebase.json` has correct rewrite rules
   - Check that `public` directory points to correct build output

### Performance Optimization

1. **Enable Compression**:
   - Firebase Hosting automatically enables gzip compression

2. **Cache Headers**:
   - Static assets are cached for 1 year
   - HTML files are cached for 1 hour

3. **CDN**:
   - Firebase Hosting uses Google's global CDN
   - No additional configuration needed

## Monitoring

1. **Analytics**: Firebase Analytics is already configured
2. **Performance**: Use Firebase Performance Monitoring
3. **Errors**: Check Firebase Console > Hosting for deployment status

## Rollback

To rollback to a previous version:

```bash
firebase hosting:clone deezcabnuts:live deezcabnuts:live --version <version-id>
```

Or use the Firebase Console to revert to a previous deployment.
