var express = require('express');
var router = express.Router();
const Image = require("../models/image.js");
const {unlink} = require("fs-extra");
const path = require("path");


/* GET home page. */
router.get('/', async(req, res, next)=>{
    const images = await Image.find();
    console.log(images);
    res.render("index",{images})
});

router.get('/subir',(req,res)=>{

  res.render("subir")
})

router.post('/subir',async(req,res)=>{
  const image = new Image();

  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = "/images/up/" + req.file.filename;
  image.originalname = req.file.originalname;
  image.minetype = req.file.minetype;
  image.size = req.file.size;

  await image.save();
  res.redirect("/")
})

router.get("/image/:id",async(req,res)=>{
  const {id} = req.params;
  const image = await Image.findById(id);
  res.render("image",{image});

})

router.get("/image/:id/eliminar",async(req,res)=>{
  const {id} = req.params;
  const image = await Image.findByIdAndDelete(id)
  await unlink(path.resolve("./public/"+image.path))
  res.redirect("/")
})

module.exports = router;
