// import express from 'express';

/* The above can also be used to bring express into the file. But to use it we need to add/edit "type": "module"
 inside package.json

By default, "type" is set to "commonjs". require way can be used in that, while for import way we need to add/edit the type as "module" inside package.json

*/

//The purpose of express is to serve and listen at any route

require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 3000 //we are getting port number from the .env file else 3000 (hard-coded)

// Go to localhost:3000 to access the home route. Add /twitter, /login etc to access others

const githubData = {
    "login": "prana-W",
    "id": 177040319,
    "node_id": "U_kgDOCo1rvw",
    "avatar_url": "https://avatars.githubusercontent.com/u/177040319?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/prana-W",
    "html_url": "https://github.com/prana-W",
    "followers_url": "https://api.github.com/users/prana-W/followers",
    "following_url": "https://api.github.com/users/prana-W/following{/other_user}",
    "gists_url": "https://api.github.com/users/prana-W/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/prana-W/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/prana-W/subscriptions",
    "organizations_url": "https://api.github.com/users/prana-W/orgs",
    "repos_url": "https://api.github.com/users/prana-W/repos",
    "events_url": "https://api.github.com/users/prana-W/events{/privacy}",
    "received_events_url": "https://api.github.com/users/prana-W/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pranaw Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "NIT JSR'28 | Aspiring Web Developer | Official Web Team, NIT JSR | Web Team, Team Innoreva",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 7,
    "following": 10,
    "created_at": "2024-07-30T15:57:15Z",
    "updated_at": "2025-05-20T08:04:34Z"
}

app.get('/', (req, res) => {
    res.send('Hello World, I am backend!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter, I am backend!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})

// Like the below we can send json response
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
