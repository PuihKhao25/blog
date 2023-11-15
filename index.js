const express = require('express')
const app = express()
const port = 3000
const router = require('./src/routes')
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})