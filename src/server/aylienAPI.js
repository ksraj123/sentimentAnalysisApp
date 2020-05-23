const dotenv = require('dotenv');
const aylien = require("aylien_textapi");

dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const getApiResponse = (url, fn) => {
    textapi.sentiment({
        'url': url
      }, function(error, response) {
        if (error === null) {
          fn(response);
        }
        return error;
      });
}

module.exports = getApiResponse


/*

API response format

{
  polarity: 'positive',
  subjectivity: 'objective',
  text: 'John is a very good football player!',
  polarity_confidence: 0.9940106272697449,
  subjectivity_confidence: 0.943706847162803
}

*/
