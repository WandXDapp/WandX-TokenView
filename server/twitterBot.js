var twit = require('twit');
var Twitter = require('./config.js');

export var tweet = (ticker) => {
    return new Promise ((resolve,reject)=>{
        var params = {
            q: '#'+ ticker,
            result_type: 'recent',
            lang: 'en'
          }
          Twitter.get('search/tweets', params, function (err, data) {
            if (!err) {
              var retweetId = data.statuses[0].id_str;

              Twitter.post('statuses/retweet/:id', {
                id: retweetId
              }, function (err, response) {
                if (response) {
                  console.log('Retweeted!!');
                return resolve({
                    "tweets" : response
                    });
                }
                if (err) {
                  console.log('Something went wrong while Retweeting!!');
                  return reject({
                      "message":err
                  });
                }

              });
            } else {
              console.log('Something went wrong while searching..')
            }
          });
    });
}

//retweet();
//setInterval(retweet, 3000000);

var favoriteTweet = function () {
  var params = {
    q: '#nodejs',
    result_type: 'recent',
    lang: 'en'
  }

  Twitter.get('search/tweets', params, function (err, data) {
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);

    if (typeof randomTweet != 'undefined') {
      Twitter.post('favorites/create', {
        id: randomTweet.id_str
      }, function (err, response) {
        if (err) {
          console.log('Cannot be favorite');
        } else {
          console.log('Favorite Success!!');
        }
      });
    }
  });
}
favoriteTweet();

setInterval(favoriteTweet, 3600000);

function ranDom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
