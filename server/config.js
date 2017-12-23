var twit = require('twit');

let config = {
    consumer_key:'Kdp0NQFlOeHTKV4gTkxinsEnO',
    consumer_secret:'ivymS8GsuhXjLZ4bdAEnXxYgqU7SGij83YJsxzRScsqR3xr3FV',
    access_token:'909002939498250240-XrnHhfkM4nb5yLMVDQhThD4Aa0Avq4c',
    access_token_secret:'SpkuC2iCverxIvU5swek3gf9AnvxwfTsJgZxevrOubyd9'
}

module.exports = new twit(config);