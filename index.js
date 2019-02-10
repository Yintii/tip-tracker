const express = require('express')
const path = require('path')
const pug = require('pug')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req,res) => {
    res.render('index', { title: 'Hello' })
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))