let express = require('express');
let app = express();
let wordRepo = require('./wordsRepo.js');
let cors = require('cors');
let router = express.Router();

// Configure middleware to support JSON data
app.use(express.json());

// Configure CORS
app.use(cors());

// GET to return all words
router.get('/', function(req,res,next) {
  wordRepo.get(function(data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All words retrieved",
      "data": data
  });
  }, function(err) {
      next(err);
  })
});

// GET by search
router.get('/search', function(req, res, next) {
  let searchObject = { 
    "search": req.query.search
  };

  wordRepo.search(searchObject, function(data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "Words retrieved",
      "data": data
    });
  }, function(err){
    next(err);
  })
})

// GET to return a single word
router.get('/:id', function(req,res,next) {
  wordRepo.getByID(req.params.id, function(data) {
    if(data) {
      res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "Searched id retrieved",
        "data": data
      });
    } else {
      res.status(404).json({
        "status": 404,
        "statusText": "Not found",
        "message": "The id '" + req.params.id + "' could not be found.",
        "error": {
          "code" : "NOT_FOUND",
          "message": "The searched id could not be found"
        }
      });
    }
  }, function(err) {
    next(err);
  });
});

router.post('/', function(req,res,next) {
  wordRepo.insert(req.body, function(data) {
    res.status(201).json({
      "status": 201,
      "statusText": "Created",
      "message" : "New word added",
      "data" : data
    });
  }, function(err) {
    next(err);
  })
})

router.delete('/id=:id', function(req,res,next) {
  wordRepo.getByID(req.params.id, function(data) {
    if(data) {
      //attempt delete
      wordRepo.delete(req.params.id, function(data) {
        res.status(200).json( {
          "status": 200,
          "statusText" : "OK",
          "message" : "The word was successfuly deleted",
        })
      })
    } else {
      res.status(404).json({
        "status": 404,
        "statusText" : "Not deleted",
        "message" : "The word was not deleted",
        "error" : { 
          "code": "NOT_FOUND",
          "message": "The word was not found to be deleted"
        }
      })
    }
  })
})

app.use('/api/', router);

var server = app.listen(5000, function() {
  console.log('Node server is running on 5000');
})