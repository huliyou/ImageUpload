var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('upload',{title:'Photo Upload'});
});

var Photo = require('../model/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;
router.post('/',function(req,res,next){
  var img = req.file;
  console.log(req.body);
  console.log(req.files);
  console.log({
    name: req.body.photoName,
    path: req.files[0].path
  });

  Photo.create({
        name: req.body.photoName,
        path: req.files[0].path
      }, function(err) {
        if(err) return next(err);
        res.redirect('/photos');
  });


  //Photo.create({
  //  name: req.body.photoName,
  //  path: req.files[0].path
  //});
  //console.log(img.path);
  //var name = req.body.photo.name || img.name;
  //var path = join(express().get('photos'), img.name);
  //fs.rename(img.path, path, function(err) {
  //  if (err) return next(err);
  //  Photo.create({
  //    name: name,
  //    path: img.name
  //  }, function(err) {
  //    if(err) return next(err);
  //    res.redirect('/photos');
  //  })
  //});
});

module.exports = router;