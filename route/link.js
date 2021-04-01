var express=require('express');
var router=express.Router();
var {db}=require('../database/database');
var validUrl = require('valid-url');

// url - long form URL supplied by user
// slug - key part of short-form URL just like URL code. Can be supplied by user or we generate one
// clicks - no. of clicks on the short URL

router.post("/new", async (req, res, next) => {
  // get url and full from input
  let { url, slug } = req.body;
  console.log("req.body: ", req.body);
  if(!req.body.url) {
    return res.status(400).send({"status": "error", "message": "A long URL is required"});
   }
  
   db.get("SELECT * FROM test WHERE url=?",
   [req.body.url],
   function (err, data) {
   if(err) return res.status(500).json({
     success:false,
     message:err.message
   })
      if (!slug) {
      // generate slug if not provided by user
      const cryptoRandomString = require("crypto-random-string");
      slug = cryptoRandomString({ length: 10, type: "url-safe" }).toLowerCase();
    }
   console.log(data);
  if(data){
    res.json({
          url: data.url,
          slug:data.slug,
          shorturl: `http://${req.headers.host}/${data.slug}`
    })
  }else {
    try {
     if (!slug) {
      // generate slug if not provided by user
      const cryptoRandomString = require("crypto-random-string");
      slug = cryptoRandomString({ length: 10, type: "url-safe" }).toLowerCase();
    }
    
     // insert everything in DB
    //check if the link is the same the slug remains the same
    
     db.exec(
      `INSERT INTO test(url, slug , clicks) VALUES('${url}', '${slug}', 0)`,
      (err) => {
        console.log("err: ", err);
        if (err) next(err);
        // response message has the short URL
        if (validUrl.isUri(url)){
        res.json({
          shorturl: `http://${req.headers.host}/${slug}`,
          slug: slug,
          url: url,
        });
      }else{
        res.json({message:"invalid url"})
      }
    
      }
  ); 
    }
  catch (e) {
    next(e);
  }
 

  }
   }) 
   
});

router.get("/:id", (req, res) => {
  db.get(`SELECT * FROM test  WHERE slug = ? AND url=?`,
      [req.params.id,req.body.url],
      function (err,data) {
      if (err){
        res.json({
          success:false
        })
      }else
       db.exec(
      `UPDATE test SET clicks = clicks + 1 WHERE slug='${req.params.id}'`,
      (err) => {
        if (err) console.error(err);
        
        else res.redirect(data.url);
      }
    );
      });
});

router.get("/list", (req, res) => {
  db.all(`SELECT * FROM test`, (err, data) => {
    if (err) next(err);

    res.json({
      data: data,
    });
  });
});
module.exports=router; 

//firebase implementation of this 
