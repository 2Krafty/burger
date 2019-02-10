const router = require("express").Router();
// import database conn
const db = require("../../config/connection");

// setup home page route
router.route("/")
.get((req, res)=>{
  db.query("SELECT * FROM burgers", (err,dbBurgers)=>{
    if(err){
      console.log(err);
      return res.status(500).json(err);
    }
    res.render("burgers", {burger_name,dbBurgers})
  });
}); 

