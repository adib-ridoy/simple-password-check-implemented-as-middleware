//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
// import bodyParser from "body-parser"; //body-parser is now included in express
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// const password = "ILoveProgramming"; // without middleware
var userIsAuthorized = false;

app.use(express.urlencoded({ extended: true }));

// Middleware function to check password
function passwordCheck(req, res, next) {
    const userPassword = req.body.password;
    if (userPassword === "ILoveProgramming") {
        userIsAuthorized = true;
        next();
    }
}
app.use(passwordCheck); // Apply middleware to all routes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // var userPassword = req.body.password; //without middleware
    // if (userPassword === password) {
    //     res.sendFile(__dirname + "/public/secret.html");
    // } else {
    //     res.redirect("/");
    // }
    if (userIsAuthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});