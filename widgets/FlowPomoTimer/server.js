require("dotenv").config();
const toggl_api_token = process.env.TOGGL_API_TOKEN;

const express = require('express');
const app = express();
const port = 3000;

// app.use(epxress.json())
app.use(express.static("public"))

// app.post("/toggl-track", (req, res) => {

// })

app.listen(port, () => { 
    console.log(`Server started`)
})