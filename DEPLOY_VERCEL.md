# How to Deploy 'CAcalc' to Vercel

Since you have already uploaded all 32 files to GitHub, deploying to Vercel is very easy.

## Step 1: Login to Vercel
1.  Go to [vercel.com](https://vercel.com).
2.  Click **"Sign Up"** or **"Log In"**.
3.  **IMPORTANT:** Choose **"Continue with GitHub"** and authorize it. This connects Vercel to your GitHub account.

## Step 2: Import Your Project
1.  Once logged in, you will see your Vercel Dashboard.
2.  Click the **"Add New..."** button (usually top right) and select **"Project"**.
3.  You will see a list of your GitHub repositories.
4.  Find your `CAcalc` (or whatever you named it) repository in the list.
5.  Click the **"Import"** button next to it.

## Step 3: Configure and Deploy
1.  Vercel will show a "Configure Project" screen.
2.  **Framework Preset:** It should automatically say "Other" or "None". This is correct because your site is pure HTML/CSS/JS.
3.  **Root Directory:** Leave it as `./` (default).
4.  **Build Command:** Leave empty.
5.  **Output Directory:** Leave empty.
6.  Click **"Deploy"**.

## Step 4: Go Live!
1.  Vercel will run for a few seconds (Building...).
2.  Once finished, you will see a big "Congratulations!" screen.
3.  Click the preview image or the domain link (e.g., `cacalc-xyz.vercel.app`) to visit your live website.

## Why Vercel?
- It's faster than GitHub Pages.
- Updates are instant (just push changes to GitHub, and Vercel updates the site automatically).
