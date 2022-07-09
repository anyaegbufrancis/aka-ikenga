const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");
const moment = require("moment");


const { clientOrigins, serverPort, db_host, db_user, db_password, db_name} = require("./config/env.dev");


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: clientOrigins }))


//Databse Setup
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
  

//Multer Setup 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/root/1')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split("|")
        cb(null, "image-" + fileName[1] + '.png')
    }
  })
  
  const upload = multer({ storage: storage });
  

// API Post call to User to Update User data
app.post("/imagesave", upload.single("image"), (req, res) => {
  console.log(req.body)
    const fileName = req.body.id.split("|")
    const mytime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const sqlQuery = `INSERT  INTO users ( user_id, date_update, width_icon, height_icon) VALUES ('${fileName[1]}', '${mytime}', ${req.body.width_icon}, ${req.body.height_icon}) ON DUPLICATE KEY UPDATE date_update=VALUES(date_update), width_icon=VALUES(width_icon), height_icon=VALUES(height_icon)`
    
    con.query(sqlQuery, function (err, result) {
      if (err) throw err;
      console.log("updated!")
    })  
    res.json({ message: fileName[1], width_icon: req.body.width_icon, height_icon: req.body.height_icon });
  });

  app.post("/vanillasave", (req, res) => {
    console.log(req.body)
      // const fileName = req.body.id.split("|")
      // const mytime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
      // const sqlQuery = `INSERT  INTO users ( user_id, date_update, width_icon, height_icon) VALUES ('${fileName[1]}', '${mytime}', ${req.body.width_icon}, ${req.body.height_icon}) ON DUPLICATE KEY UPDATE date_update=VALUES(date_update), width_icon=VALUES(width_icon), height_icon=VALUES(height_icon)`
      
      // con.query(sqlQuery, function (err, result) {
      //   if (err) throw err;
      //   console.log("updated!")
      // })  
      res.json({ fname: req.body.fname, lname: req.body.lname, width_icon: req.body.width_icon, height_icon: req.body.height_icon });
    });

  app.get("/userid/:id", (req, res) => {
    const sqlQuery = `SELECT * FROM users WHERE user_id = '${req.params.id}' ORDER BY date_update  LIMIT 1`
    con.query(sqlQuery, (err, result, fields) => {
      if (err) throw err;
      if ((result[0] == "") || (result[0] == undefined)) {
        res.json(null)
      }else {
        res.json({id: result[0].user_id, width_icon: result[0].width_icon, height_icon: result[0].height_icon})
      }
    })
  })
  



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