# Backend

- We do `npm innit` and then make our package.json by following the given steps.
- We change type from commonjs to module in the `package.json` in this case, since we wanted to use import instead 
  of require
- We then installed `express` and make our server on `server.js`. In this we make a students array containing many 
student data 
  which we send on the `/students` route
    - As you can see we have used import statement to add express in the file instead of require keyword
  - Don't forget to add custom script in package.json. Here we have added `start` and add `node script.js` in it.
  
- After doing all this, we have successfully created our backend.

# Frontend

- We do `npm create vite@latest .` in the frontend directory to add all the files in the directory itself. Then we 
  do `npm i` to install the node modules
- After this, we do `npm install axios`.
  - This is used here instead of fetch to handle our custom API. Axios allows us to get several extra features.
  - Now import `axios` in App.jsx
  - We don't need to do res.json(), parsing etc here, because all of that is handled by the axios itself 
- If we try to access the API or response from the server from our frontend at this point, we will get error due to 
  blocking by CORS policy. 
  - If url is different, then it is treated as Cross Origin and hence the access is blocked by default in such case 
    for safety.
- There are multiple ways to address the CORS issue, however here we will be using proxy to by-pass the CORS issues.
  - Different bundlers have different ways of setting up proxy. Here we will be exploring for Vite.
  - Go to `vite.config.js` and add a proxy inside it as shown. The value will be appended before the key, whenever 
    used (here in App.jsx in axios)

### Commonly made mistake

- Making a build version of frontend, adn then adding that folder to the backend directory, then adding the build 
  folder as a middleware on the page, which helps us bypass the issue of CORS, but if we change anything int he 
  frontend, we will have to again make a dist folder (build version), copy-paste it to the backend, and then delete 
  the earlier folder, making it a very bad pratice. 
