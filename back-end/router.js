const express = require('express')
const axios = require('axios')
const router = express.Router()


router.route('/news').get(function(request, response) {

	axios.get('https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=055ef3f98c0548b19c3e0e1cf69e1ca4')
   .then((httpResponse) => response.send(httpResponse.data))

})
router.route('/comment').get(function(request, response) {

  })

module.exports = router