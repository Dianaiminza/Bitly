var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/bitly.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } 
  });
  module.exports={db}

  // router.get("/:id", (req, res) => {
  //   db.get(`SELECT * FROM test where slug='${req.params.id}'`, (err, data) => {
  //     if(err){
  //       res.json({
  //         mesage:"invalid",
  //         success:false
  //       })
  //     }else 
  //     db.exec(
  //       `UPDATE test SET clicks = clicks + 1 WHERE slug='${req.params.id}'`,
  //       (err) => {
  //         if (err) console.error(err);
  //         res.redirect(res.data.url);
         
       
  //     );
  //     // add clicks
  //   });
  // });