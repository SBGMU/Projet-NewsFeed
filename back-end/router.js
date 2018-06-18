const express = require('express')
const router = express.Router()
const axios = require('axios')

router.route('/news').get(function(request, response) {
	axios.get('https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=055ef3f98c0548b19c3e0e1cf69e1ca4')
	.then((httpResponse) => response.send(httpResponse.data))
})
module.exports = router
