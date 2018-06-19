import axios from 'axios'

axios.get('http://127.0.0.1:8080/news')

.then((response) =>{

   console.log(response)    

   var news = "";

   for(var i = 0; i < response.data.articles.length; i++ )

   {


       news = news + response.data.articles[i].publishedAt + "  -  "+ response.data.articles[i].title  +"<li href><a href="+response.data.articles[i].url +"><p>"+'<br><img class="" src= '+response.data.articles[i].urlToImage + ' alt="_blank"></img></br>'+"</p></a></li>"
      
       console.log(news)

   }

   document.getElementById("filenews").innerHTML = news
   
})