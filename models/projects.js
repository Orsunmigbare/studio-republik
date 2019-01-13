const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
        name : String,
        url: String,
        category: String,
        preceedence: Number,
        title: String
})

module.exports = mongoose.Model('Projects', ProjectsSchema)