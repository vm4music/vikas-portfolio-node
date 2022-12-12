const express = require('express');
const app = express()

app.set('view engine', 'ejs')

//Router Imports
const userRoute = require('./routers/userRoute')

app.get('/', (req, res) => {
    console.log('Here');
    res.render('index')
})

app.use('/users', userRoute)

app.listen(3000)