const express = require('express');
const router = express.Router();
import tweet from '../twitterBot'

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/tweet', (req, res) => {
    var response = tweet(req.params.ticker).then((response)=>{
        console.log(response);
        res.send(response);
    });
    // console.log(response);
    // res.send(response);
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB

});

module.exports = router;