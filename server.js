// Import node modules
const mongoose = require("mongoose");
const express = require("express");
const compression = require('compression')
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require('path')

// import serving functions
const serverFunctions = require('./serverFunctions')



// server configureation
const app = express();
const router = express.Router();
const env = process.env.NODE_ENV;
console.log(env)
// import config
const configuration = require('./config')
const config = configuration[env] 
console.log(config)



const dev = app.get('env') !== 'production'
console.log(dev)
normalizePort = port=> parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)


// connect to the database
mongoose.connect(
    config.database.connectionString,
    {useNewUrlParser: true}
)
const db = mongoose.connection
// listen for success and errors
db.once('open', ()=> console.log("conneccted to the database")) 
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// body-parser
app.use(bodyParser.json())
app.use((bodyParser.urlencoded({extended: true})))

app.use("/api", router)
// end of server configuration


//  routes for production
if(!dev){
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'build')))

    // default page handler
    app.get('/', (req,res)=>{
        res.sendFile(path.resolve(__dirname, "build", 'index.html'))
    })

    router.get('/projects',async (req,res)=>{
        let response= await serverFunctions.getProjects()
        res.send(response)
    })
   //  projects post request
    router.post('/save-project', async (req,res)=>{
        let response = await serverFunctions.saveProject(req.body)
         res.send(response)
    })

}

// routes for development
if(dev){
    app.use(morgan('dev'))

    // projects get request
    router.get('/projects',async (req,res)=>{
        let response= await serverFunctions.getProjects()
        res.send(response)
    })
   //  projects post request
    router.post('/save-project', async (req,res)=>{
        let response = await serverFunctions.saveProject(req.body)
         res.send(response)
    })
}

app.use("/api", router)




// launch server into a port
app.listen(PORT, () => console.log(`server started on port ${PORT}`));