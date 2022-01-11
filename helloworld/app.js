// Defualt variables needed to run the application
const express = require('express');
const app = express();
const port = 3000;

app.set('views','./views')
app.set('view engine','jade')

app.get('/', (req, res) => res.send('Hello World'))
app.get('/hello', function (_req,res) {
    res.render('index', {title: 'Hello World', message: 'Hello world!'})
})

app.use(express.static('public'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))

