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
  
  try {
    
    if (!slug) {
      // generate slug if not provided by user
      const cryptoRandomString = require("crypto-random-string");
      slug = cryptoRandomString({ length: 10, type: "url-safe" }).toLowerCase();
    }
    // insert everything in DB
    
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
    
  } catch (e) {
    next(e);
  }
});
router.get("/:id", (req, res) => {
  db.get(`SELECT * FROM test where slug='${req.params.id}'`, (err, data) => {
    if (err) next(err);
    // if (!data) res.redirect(`/?error=${req.params.id} not found!`);
    // else res.redirect(data.url);

    // add clicks
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
