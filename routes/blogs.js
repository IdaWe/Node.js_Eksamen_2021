const router = require("express").Router();

/*
    Project Schema
        Title - (string)
        Description: (string)
        StartDate: (date)
        EndDate: (date)
        Language(s): (array)
        Tech used: (array)
        Image: (string)
        HostedLink: (string)
        GitLink: (string)
*/

/* On the projects page fetch all the projects from the route below */


const blogs = [{
    title: "Life",
    date: "Start dato: " + new Date("2021-02-24").toDateString(),
    description: "Personal blog about life",
    cardPicture: src=""
},

{
    title: "Favorite food",
    date: "Start dato: " + new Date("2021-01-27").toDateString(),
    description: "A blog about my favorite food",
    cardPicture: src=""
}]

router.get("/api/blogs", (req, res) => {
    res.send({ blogs });
});

module.exports = {
    router
};