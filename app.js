const express = require('express');
const app = express();
const PORT = 3000;

app.use('view engine', 'ejs');
app.use('views', 'views');

app.get('/index', function (req, resp){
    resp.send(`Hello World`);
})

app.listen(PORT, function (){
    console.log(`Server start success! Port: ${PORT}`);
})
