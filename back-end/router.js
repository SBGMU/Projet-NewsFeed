const express = require('express')
const axios = require('axios')

const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    const news = [{'Title' : 1}]
})

router.route('/comments').get(function(request,response){
	axios.get('https://newsapi.org/v2/top-headlines'+
		'sources=lequipe&'+
		'apiKey=055ef3f98c0548b19c3e0e1cf69e1ca4')
	.then((httpResponse) => response.send(httpResponse.data))
})
module.exports = router