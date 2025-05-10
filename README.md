# Rent A Room Application

This is a repository bootstraped with React. It is a application with 4 pages: home, rooms, login, and register. A single-page application is an app that works inside a browser and does not require the page to be reloaded when used.

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

## Running as a Service on Ubuntu (Production)

To manage your production application effectively on an Ubuntu server, it's highly recommended to run it as a systemd service. This allows the application to start automatically on boot, be easily started/stopped/restarted, and have its logs managed.

This guide assumes you are serving your React application's `build` directory using `serve`.

**Prerequisites:**

1.  **Node.js and npm installed:** Ensure Node.js and npm are installed on your Ubuntu server.
2.  **Application Code:** Your project code, including the `build` directory (after running `npm run build`), should be on the server (e.g., in `/var/www/roomrentor`).
3.  **`serve` package:**
    *   Globally installed: `sudo npm install -g serve`
    *   Or you can use `npx serve` directly in the service file, which doesn't require global installation but means `npx` must be in the `PATH` for the service user.

**Steps to Create the systemd Service:**

1.  **Create a Service File:**
    You'll need to create a `.service` file for your application. For example, `roomrentor.service`.
    Open a new service file for editing using a text editor like `nano` (with `sudo`):

    ```bash
    sudo nano /etc/systemd/system/roomrentor.service
    ```

2.  **Add Service Configuration:**
    Paste the following configuration into the file. **Adjust `User`, `WorkingDirectory`, and `ExecStart` paths according to your setup.**

    ```ini
    [Unit]
    Description=RoomRentor Frontend Application
    After=network.target

    [Service]
    Type=simple
    User=your_username       # Replace with the user you want to run the app as (e.g., 'ubuntu', 'www-data', or a dedicated user)
    WorkingDirectory=/var/www/roomrentor  # Replace with the actual path to your project's root
    
    # Option 1: If 'serve' is installed globally
    ExecStart=/usr/bin/serve -s build -l 3000  # Adjust port (3000) if needed. Use full path to 'serve'
    
    # Option 2: If using 'npx serve' (ensure npx is in the PATH for the service user)
    # ExecStart=/usr/bin/npx serve -s build -l 3000
    
    Restart=on-failure
    RestartSec=5s
    Environment=NODE_ENV=production

    [Install]
    WantedBy=multi-user.target
    ```

    **Explanation of fields:**
    *   `Description`: A human-readable description of your service.
    *   `After=network.target`: Ensures the network is up before starting your app.
    *   `User`: The system user that will run the application. It's good practice not to run as `root`. Create a dedicated user or use an existing non-root user.
    *   `WorkingDirectory`: The absolute path to your project's root directory where the `build` folder is located.
    *   `ExecStart`: The command that starts your application.
        *   Make sure to use the **absolute path** to `serve` (or `npx`). You can find the path by running `which serve` or `which npx`. Common paths are `/usr/bin/serve`, `/usr/local/bin/serve`, etc.
        *   `-s build`: Tells `serve` to serve the `build` directory and handle SPA routing.
        *   `-l 3000`: Tells `serve` to listen on port 3000. Change this if you need a different port.
    *   `Restart=on-failure`: Restarts the service if it fails.
    *   `RestartSec=5s`: Waits 5 seconds before attempting a restart.
    *   `Environment=NODE_ENV=production`: Sets the environment to production (though `serve` primarily cares about the static files, this is good practice).
    *   `WantedBy=multi-user.target`: Enables the service to start on boot.

3.  **Save and Close the File:**
    If using `nano`, press `Ctrl+X`, then `Y`, then `Enter`.

4.  **Reload systemd Manager Configuration:**
    This makes systemd aware of the new service file.

    ```bash
    sudo systemctl daemon-reload
    ```

5.  **Enable the Service to Start on Boot:**

    ```bash
    sudo systemctl enable roomrentor.service
    ```

6.  **Start the Service:**

    ```bash
    sudo systemctl start roomrentor.service
    ```

7.  **Check the Service Status:**

    ```bash
    sudo systemctl status roomrentor.service
    ```
    Look for "active (running)". You can also see recent log entries here. Press `q` to exit the status view.

**Managing the Service:**

*   **Stop:** `sudo systemctl stop roomrentor.service`
*   **Restart:** `sudo systemctl restart roomrentor.service`
*   **View Logs:**
    *   `sudo journalctl -u roomrentor.service` (for all logs)
    *   `sudo journalctl -u roomrentor.service -f` (to follow new logs in real-time)
    *   `sudo journalctl -u roomrentor.service -n 50` (to see the last 50 lines)

This setup provides a robust way to manage your production React application served via `serve` on an Ubuntu server.

