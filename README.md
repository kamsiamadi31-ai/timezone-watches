# TimeZone Watches

A responsive online watch store built with React JS as an individual practical project.

## Features
- Home, About, Products and Contact pages
- React Router navigation
- Reusable Navbar, Footer and ProductCard components
- Product data rendered with JavaScript `.map()`
- Search and category filtering
- Shopping cart with quantity controls
- Cart data saved in Local Storage using `useEffect`
- Controlled contact form with required-field and email validation
- Responsive layout for phones, tablets and desktop computers

## Technologies
- React JS
- JavaScript
- React Router DOM
- HTML5
- CSS3
- Vite

## Installation
1. Install Node.js.
2. Download or clone this repository.
3. Open the project folder in VS Code.
4. Open the terminal in the project folder.
5. Run:

   ```bash
   npm install
   ```

## Run the application

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Notes
- Product images are loaded from Unsplash, so an internet connection is needed to display them.
- The contact form validates the information and displays a confirmation in the browser. It does not send an email because no backend/email service is connected.
- Product prices and contact details are sample project data.
