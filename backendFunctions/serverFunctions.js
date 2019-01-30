const projectModel = require('../models/projects');
const sendMail = require('./sendMail')
module.exports = {
    
    saveProject: async (req)=>{
        console.log(req)
       var mappedRequest = {
           name: req.name,
           url : req.url,
           title: req.title,
           category: req.category,
           date: Date.now(),
       }
       var success
       await projectModel.create(mappedRequest)
       .then(project=>{console.log( `${project.title} saved sucessfully`); success = true})
       .catch(err=>{console.log(err); success = false})
       return success
    },
    
    getProjects: async ()=>{
        var result
        await projectModel.find()
        .then(projects=>{result = projects})
        .catch(err=>{console.log(err); result = null})
        return result
    },

    sendMail: async (req)=>{
        var result = await sendMail(req.name, req.email,req.phone, req.message)
        return result
    } 


}