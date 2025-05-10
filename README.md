# Rent A Room Single-page Application

This is a repository bootstraped with React. It is a single-page application with 4 pages: home, rooms, login, and register. A single-page application is an app that works inside a browser and does not require the page to be reloaded when used.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Production Setup

This project is built using Create React App, which provides scripts to manage development and production builds.

### Building for Production

To create an optimized production build of the application, run the following command in the project's root directory:

```bash
npm run build
```

This command bundles React in production mode and optimizes the build for the best performance. The build artifacts will be stored in the `build` folder. The files will be minified, and filenames will include hashes for caching efficiency.

Your app is then ready to be deployed to a static site hosting service (like AWS S3 with CloudFront, Netlify, Vercel, GitHub Pages, etc.).

### Serving the Production Build Locally

After running `npm run build`, if you want to test the production build locally before deploying, you can use a static server. A common and simple way to do this is with the `serve` package:

1.  **Install `serve` globally (if you haven't already):**
    ```bash
    npm install -g serve
    ```
    (Alternatively, you can use `npx serve` without a global installation, see step 2.)

2.  **Serve the `build` folder:**
    Navigate to your project's root directory in the terminal and run:
    ```bash
    serve -s build
    ```
    Or, using `npx`:
    ```bash
    npx serve -s build
    ```
    The `-s` flag ensures that all requests are routed to `index.html`, which is necessary for single-page applications using client-side routing.

    `serve` will typically make the production build available at a local URL like `http://localhost:3000` or `http://localhost:5000` (it will specify the URL in the terminal output). This allows you to interact with the optimized version of your app as if it were deployed.

### Deployment
For detailed deployment instructions to various platforms, refer to the Create React App deployment documentation: [Deployment | Create React App](https://facebook.github.io/create-react-app/docs/deployment).

