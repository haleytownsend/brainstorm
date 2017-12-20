//middleware routing between client requests and end-points

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


//post endpoint
router.post('/', jsonParser, validate, (req, res) => {
  const requiredFields = ['intensity', 'water'];
  const field = requiredFields[i];

  try {
    ['intensity', 'water'].forEach(requiredField = > {
      if (!(requiredField in req.body)) {
        throw `\`${field}\` is not in request body`
      }
    })
  }
  catch (message) {
    return res.status(400).end({error: true, message})
  }
  res.status(201).end('Created')
})

function validate(req, res, next) {
  const requiredFields = ['intensity', 'water'];
  if(req.body.intensity && req.body.water) {
    next();
  }
}

\\module.exports = router;
