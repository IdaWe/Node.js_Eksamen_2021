const express = require("express");
require('dotenv').config();

//const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const blogsRouter = require("./routes/blogs.js");
const contactRouter = require("./routes/contact.js");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

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

io.on("connection", (socket) => {  //when a client socket connects to our server socket, then a connection event has been fired. This is all about events and event emitters. This event is a default event called connection. This takes a callback thant contains the socket (socket)
    console.log("A scoket connected with id: ", socket.id); //this callback ( (socket) => {onsole.log} ) is called everytime a socket connects
   

    socket.on("disconnect", () => {
        console.log("A socket disconnected"); //denne kan fx bruges til at vise at folk forlader en chat, eller stadig er i rummet 
    });

});   



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

app.post("/blogs", (req, res) => {
    console.log(req.body)
    res.redirect("/blogs")
});





// ------------------------------------------


const port = process.env.PORT || 8080;

console.log(port);
// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
server.listen(port, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});