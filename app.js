const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/index', function (req, resp){
    resp.send(`Hello World`);
})

app.get('/feedback', function (req, resp){
    resp.render('client/feed-back');
})

app.listen(PORT, function (){
    console.log(`Server start success! Port: ${PORT}`);
})
