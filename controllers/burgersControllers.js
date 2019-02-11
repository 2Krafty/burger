const db = require("../config/connection");

module.exports = {

  findAll: (req, res)=> {
    db.query("SELECT * FROM burgers", (err, dbBurgers)=> {
      if(err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json(dbBurgers);
    });
  },

findById: (req, res)=> {
  db.query("SELECT * FROM burgers WHERE id = ?", [req.params.id], 
  (err, dbBurgers)=> {
    if (err) {
console.log(err);
return res.status(400).json(err);
    }
    res.json(dbBurgers[0]);
  });
},

createBurger: (req, res)=> {
  db.query("INSERT INTO burgers SET ?", req.body, (err, dbBurgers)=> {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(dbBurgers)
  })
},

updateBurger: (req, res)=> {
  db.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], (err, dbBurgers)=> {
    if (err) {
console.log(err);
return res.status(400).json(err);
    }
    res.json(dbBurgers);
  })
},

deleteBurger: (req, res)=> {

  db.query("DELETE FROM burgers WHERE id = ?", [req.params.id], (err, dbBurgers)=> {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(dbBurgers);
  });
}

}