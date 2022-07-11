const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const app = require('./app')

app.listen(8000,function(){
    console.log("Listening for requests on port 8000");
});
   
process.on('unhandledRejection',function(err){
    console.log(err)
})