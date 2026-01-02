# Secrets Project

A small Express app that gates a "secret" page behind a simple password check implemented as middleware.

## What it does
- Serves a password form from `public/index.html` and reveals `public/secret.html` when the password matches.
- Uses Express middleware to parse URL-encoded form data and to validate the password.
- Demonstrates routing with `GET /` and `POST /check`.

## Tech stack
- Node.js + Express (ES modules)
- body parsing via `express.urlencoded`

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the app
   ```bash
   node index.js   # or nodemon index.js
   ```
3. Open http://localhost:3000

## How the password check works
- The middleware `passwordCheck` runs before routes and compares the submitted `password` field to `ILoveProgramming`.
- On success it sets `userIsAuthorized = true` and calls `next()`.
- `POST /check` sends `public/secret.html` when authorized, otherwise redirects back to `/`.

## Routes
- `GET /` → serves the password form (`public/index.html`).
- `POST /check` → validates password and either shows `public/secret.html` or redirects to `/`.

## Files
- `index.js` – current implementation using `express.urlencoded` and a password-check middleware.
- `public/index.html` – form that posts `password` to `/check`.
- `public/secret.html` – page shown after successful password validation.

## Notes
- Default port is `3000`; change the `port` constant in `index.js` if needed.
- The example uses an in-memory flag (`userIsAuthorized`); in real apps you would use sessions or tokens instead.

