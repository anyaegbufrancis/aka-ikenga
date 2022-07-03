const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");
const moment = require("moment");


const { clientOrigins, serverPort, db_host, db_user, db_password, db_name} = require("./config/env.dev");


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const con = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name
})

con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
  });
  



app.listen(serverPort, () => 
console.log(`Backend Server Running on Port: ${serverPort}`)
)
//   Fix the Error EADDRINUSE
.on("error", function (err) {
    process.once("SIGUSR2", function () {
      process.kill(process.pid, "SIGUSR2");
    });
    process.on("SIGINT", function () {
      // this is only called on ctrl+c, not restart
      process.kill(process.pid, "SIGINT");
    });
  });