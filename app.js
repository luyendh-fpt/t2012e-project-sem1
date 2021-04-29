const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs'); // sử dụng ejs làm view engine chính.
app.set('views', 'views'); // sử dụng thư mục myviews để chứa các file ejs

app.get('/index', function (req, resp) {
    resp.send(`Hello World`);
})

app.get('/contact', function (req, resp) {
    resp.render('client/contact-us');
})

app.get('/map', function (req, resp) {
    resp.render('client/google-map');
})

app.listen(PORT, function () {
    console.log(`Server start success! Port: ${PORT}`);
})
