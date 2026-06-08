# Maison Fashion Store

A React + Vite assignment project that implements a fashion storefront experience with routing, product listings, seasonal collections, and an about page.

## Overview

This project is built with React and Vite and demonstrates:

- A multi-page SPA with client-side routing using `react-router-dom`
- A polished homepage featuring hero content, brand strip, categories, featured products, editorial content, and testimonials
- A shop page with product cards, filter buttons, and a sort dropdown
- A collections page highlighting seasonal fashion drops
- An about page with brand philosophy and team information
- Shared navigation and footer components across all pages

## Tech Stack

- React 19
- Vite
- React Router DOM 7
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in the browser at the URL shown in the terminal.

## Build & Preview

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/main.jsx` — application entry point and router setup
- `src/App.jsx` — top-level application layout, routes, navbar, and footer
- `src/Components/` — reusable UI components such as `Navbar`, `Hero`, `Categories`, `FeaturedProducts`, `ProductCard`, `Footer`, and more
- `src/Pages/` — page views for `Home`, `Shop`, `Collections`, and `About`
- `src/index.css` — global styling
- `public/` — static assets served by Vite

## Routes

- `/` — Home page
- `/shop` — Shop page with product filtering
- `/collections` — Seasonal collections overview
- `/about` — About page with brand story and team

## Notes

- The app uses component-based styling in JSX for layout and interactions.
- Product images are loaded from remote image URLs with fallback handling.
- Navigation uses `BrowserRouter` and the `Routes` / `Route` API.

## How to Use

1. Run `npm install`.
2. Run `npm run dev`.
3. Visit the local development URL.
4. Navigate between Home, Shop, Collections, and About.

## License

This project is provided as an assignment/demo and does not include a specific license. Feel free to adapt it for your own learning or portfolio.
