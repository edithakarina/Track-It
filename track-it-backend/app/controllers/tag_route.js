const express = require("express");
const tagRouter = express.Router();
const db = require("../models/index");
const Tag = db.tag;

tagRouter.get("/allTags", (req,res)=>{
  Tag.find({}, (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.status(200).send(result);
    }
  });
});

tagRouter.post("/newTag", (req,res)=>{
  const newTag = new Tag({
    name: req.body.name
  });

  newTag.save((err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("successfully added new tag");
    }

    res.status(200).send(newTag);
  });
});

module.exports = tagRouter;