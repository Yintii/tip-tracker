const express = require('express')
const path = require('path')
const pug = require('pug')
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, "public")))
app.set('view engine', 'pug')

app.get('/', (req,res) => {
    res.render('index', { title: 'Hello' })
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))