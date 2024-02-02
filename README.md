# 100yearsofnursing


## Dependencies
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

## Json-server database
- Before deployment, add json-server in package-json to connect to local database db.json
`"scripts": {
    "start": "nodemon src/app.js -e html,hs,hbs **&& json-server --watch db.json --port 3000**"
}`

## Deployment
- Deployed in Railway using private github repository
