# Introduction

- index.js is the entry point of our app
- We first setup package.json using `npm init`. Then we add our custom script `start` (here) and add the desired 
  command `node index.js` (here).
- When we do `npm run start`, we start our custom script and it runs our desired command, which runs `index.js`
- Our app finally gets run.
- We have used express to build a small app.
- By adding a port number, we can do several things.
- To make the app production ready, we do `npm i dotenv`, add a `.env` file inside which we have a `PORT (or foo)`. We use this in port in index.js as `process.env.foo`
- To publish the app, we can use sevices like digitalocean, azure etc. 