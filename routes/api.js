const express = require('express');
const router = express.Router();
const Desa = require('../models/desa');

//GET
router.get('/desa',function(request, response){
  Desa.find({}).then(function(datae){
    response.send(datae);
  });
});

//GET id
router.get('/desa/:id',function(request, response, next){
  Desa.find({_id : request.params.id}).then(function(datae){
    response.send(datae);
  });
});

//POST
router.post('/desa',function(request, response, next){
  console.log(request.body);
  Desa.create(request.body).then(function(datae){
    console.log(datae);
    response.send(datae);
  }).catch(next);
});

//PUT
router.put('/desa/:id',function(request, response, next){
  Desa.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(datae){
    Desa.findOne({_id: request.params.id}).then(function(datae){
      response.send(datae);
    });
  });
});

//DELETE
router.delete('/desa/:id',function(request, response, next){
  Desa.findByIdAndRemove({_id: request.params.id}).then(function(datae){
    response.send(datae);
  });
});

module.exports = router;
