const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const blogsRouter = require("./routes/blogs.js");
const contactRouter = require("./routes/contact.js");

app.use(blogsRouter.router);
app.use(contactRouter.router);


const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/index.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const about = fs.readFileSync(__dirname + "/public/about/about.html", "utf-8");
const blogs = fs.readFileSync(__dirname + "/public/blogs/blogs.html", "utf-8");





// ------------------------------------------


const databaseConnection = require("./database/connection.js");

//app.use(databaseConnection.)


// ------------------------------------------



app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});


app.get("/about", (req, res) => {
    res.send(header + about + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
});

app.get("/blogs", (req, res) => {
    res.send(header + blogs + footer);
});




// ------------------------------------------


const port = process.env.PORT || 8080;

console.log(port);
// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
app.listen(port, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});