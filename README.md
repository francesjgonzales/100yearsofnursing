# 100yearsofnursing

## About the project

1. Install all dependencies `npm init` then `npm install`
2. Used MVC architecture
3. Used Bootstrap as CSS framework
4. Used Mongoose for database
5. Used (Axios)[https://axios-http.com/] for data fetching
    - (Handling Errors)[https://axios-http.com/docs/handling_errors]
5. Used Express JS as Node JS framework for handling routes, request and response
6. [HBS for compiling HTML templates](https://www.npmjs.com/package/express-hbs)
7. **SECURING THE SERVER** Used Error Middleware as callback function that can detect request and response when called in from client to HTTP server. This secures error paths that can be hidden in browser and customized by using the callback function written.

## Testing Error-Handling Middleware

1. Import the function `app.use(errorMiddleware)` in app.js and add a `Throw new Error('fake error message')` in any of the routes where the path selected can be used to test in Postman.
2. Add the error messages with require express-async-error in controller. (eg. in albertaController.js, add the `Throw new Error` in catch error)
3. (Documentation)[https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling]

## Dependencies
- Mongoose for MongoDB database
- (hbs)[https://www.npmjs.com/package/hbs] for creating template
- (express js)[https://expressjs.com/] node js framework that creates endpoints for multiple pages
- Used (reload)[https://github.com/alallier/reload-sample-app/blob/master/server.js] for reloading server and browser during development stage
  - `npm install [-g] [--save-dev] reload`
- favicon - https://www.npmjs.com/package/serve-favicon
- (install json-server to create local database server) [https://my-json-server.typicode.com/]
  - https://my-json-server.typicode.com/typicode/demo
- (to format json data)[https://onlinetexttools.com/json-stringify-text]
- (adding line break in json)[https://hardiquedasore.medium.com/how-to-use-a-line-break-in-json-3c27d7ee8fc6#:~:text=As%20we%20can't%20add,code%20in%20the%20HTML%20file]
- (favicon for express js)[https://www.npmjs.com/package/serve-favicon]
- (websocket)[https://socket.io/docs/v4/server-installation/] for client-server communication

## Json-server database

- Before deployment, add json-server in package-json to connect to local database db.json
  `"scripts": {
    "start": "nodemon src/app.js -e html,hs,hbs **&& json-server --watch db.json --port 3000**"
}`

## Deployment

- Deployed in Railway using private github repository
- Change NODE_ENV status to 'production' before deployment

## Axios

[https://blog.logrocket.com/understanding-axios-get-requests/]
