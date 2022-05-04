# Create client

1. Create a folder for the project

2. Open a terminal and on the project folder run
```
npm create vite@latest
```
3. This is going to ask for some settings, in which we are entering:
```
Project name: client
Framework: variant
Variant: react
```
4. Now run:
```
cd client
npm install
```
At this point we can already run `npm run dev` and the client will be initilized with some sample Web App.

However, the purpose of this template is to have everything set up to make a simple GET HTTP request to and Express server.

Therefore, we are going to leave the client and come back when the server is finished.


# Create server

1. On the project folder create a directory "server"
2. Open a terminal on "server" and run
```
npm init -y
```
3. Install the basic dependencies
```
npm i express morgan cors
```
`Express` is the server itself, `Morgan` is used to visuelize HTTP requests on console/terminal and `Cors` idk.

4. Intall `nodemon` for hot-reaload
```
npm install nodemon -D
```

5. Create a `/src` directory on `/server`.

6. On `/src` add the following folders and files:
- `/routes`
- `/controllers`
- `config.js`
- `db.js`
- `index.js`

7. On the folder `/routes` add `routes.js` and on `/controllers` add `controllers.js`

On `routes.js` we are going to use the `Router` module from `Express` to declare the HTTP methods.

On `controllers.js` we are going to develop the endpoints that are to be called by the HTTP methods from `routes.js`.

8. On `src/index.js` do the following:
    1. Import `express` and `morgan`
    ```js
    const express = require('express');
    const morgan = require('morgan');
    ```
    2. Import the routes
    ```js
    const routes = require("./routes/routes");
    ```

    3. Initialize `express`:
    ```js
    const app = express();

    app.use(morgan('dev'));
    app.use(express.json());

    app.use(routes);
    ```
    4. Start the server
    ```js
    const PORT = 4000;
    app.listen(PORT);

    console.log(`Server UP on ${PORT}`);
    ```

9. On controllers.js we are going to create and export a very simple endpoint:
    1. Create endpoint `home` that simply returns a string.
    ```js
    const home = (req, res) => {
        res.json("Home backend");
    };
    ```
    Each endpoint needs to be exported to be used on routes.
    
    2. Export the end point:
    ```js
    module.exports = {
        home
    }
    ```


Now we are going call that endpoint on a HTTP method from `routes`.

To do this we are going to use `Router` from `Express`.

10. On `routes/route.js` do the following:
    1. Import `Router`
    
    ```js
    const {Router} = require("express");
    ```

    2. Import the `home` endpoint from `controllers`
    ```js
    const { home } = require("../controllers/controllers");
    ```

    3. Initialize `Router`
    ```js
    const router = Router();
    ```

    4. Create a `GET` HTTP method for the `home` endpoint
    ```js
    router.get("/", home);
    ```

    5. Export the whole module to be called on `index.js` (as seen on before on step 8.2)
    ```js
    module.exports = router;
    ```

At this point we finished all the basic scripts for the server to run and receive a HTTP request.

# Run the server.

1. To run the server we need to add some scripts to `server/package.json`:
```json
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
},
```
2. Finally, open a terminal on server and run:
```
npm run dev
```
### Now the server is up and running!
And we can make requests.

# Set Up client
As said before, the client can be started with a sample Web App. 

On the following steps we are going to make a request to the `home` endpoint just created.

