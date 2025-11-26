# YHA India - Mobile (Demo)
This is a small mobile-first React + Vite + Tailwind demo focusing on three components: Programs, Memberships, and Hostels. Uses fake/sample data and placeholder images.

## Setup (locally)
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deploy to Netlify
1. Build the project (`npm run build`).
2. Go to https://app.netlify.com/drop and drag the `dist/` folder produced by the build step.
3. Or connect your GitHub repo and set the build command to `npm run build` and publish directory to `dist`.

## Notes
- Images are hotlinked from Unsplash for demo purposes.
- Replace fake data in `src/data/*.js` with real data before publishing.
