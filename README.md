# Inayat Khan — Portfolio

React, Vite, Tailwind CSS v4, and React Router portfolio site.

## Local development

```sh
npm install
npm run dev
```

Run the production checks with:

```sh
npm run lint
npm run build
```

## Contact form

The form submits to the existing contact API. Set `VITE_CONTACT_API_URL` in
the frontend deployment environment to override its configured endpoint, then
redeploy the frontend. The API requires its own environment configuration; do
not put database credentials in frontend variables.

## Deploy to Vercel

1. Import the repository in Vercel and use the repository root as the project
   root.
2. Use `npm run build` as the build command and `dist` as the output directory.
3. If the contact API is deployed separately, add `VITE_CONTACT_API_URL` with
   that API's `/api/contact` endpoint and redeploy.

`vercel.json` rewrites application routes to the Vite entry point so React
Router case-study and contact URLs work when opened directly.

## Deploy to Netlify

1. Import the repository in Netlify.
2. Use `npm run build` as the build command and `dist` as the publish directory.
3. If the contact API is deployed separately, add `VITE_CONTACT_API_URL` with
   that API's `/api/contact` endpoint and redeploy.

`public/_redirects` supplies the SPA fallback for React Router routes.

## Portfolio content notes

- Project descriptions and live links are in `src/data/projects.js`.
- The experience section intentionally shows a TODO until verified details are
  supplied.
- The CV control remains disabled until a real CV file is added.
- Case studies mark missing problem, solution, and result details as TODOs
  rather than inventing project outcomes.
