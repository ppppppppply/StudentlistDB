const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    text:{
        type: String,
        require:true
    },
    gender:{
        type: String,
        require:true
    }
})

module.exports = mongoose.model('Student',studentSchema)