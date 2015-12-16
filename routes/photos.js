var express = require('express');
var router = express.Router();
var Photo = require('../model/Photo');
var path = require('path');


router.get('/',function(req,res) {
   Photo.find({}, function(err, photos) {
      res.render('photos', {
         title:'Photos',
         photos: photos
      });
   });

});

router.get('/public/photos/:fileName',function(req,res) {
   res.download(path.join(__dirname,'../','public/photos/'+req.params.fileName));
});

router.get('/:id/download', function(req,res,next) {
   var id = req.params.id;
   Photo.findById(id, function(err, photo) {
      if (err) return next(err);
      res.download(path.join(__dirname,'../',photo.path),photo.name+'.jpeg');
   })
})

module.exports = router;
