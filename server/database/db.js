const mongoose = require('mongoose')

mongoose
    .connect('localhost:27017/landlords', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db