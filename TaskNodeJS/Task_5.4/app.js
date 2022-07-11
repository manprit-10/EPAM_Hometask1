const express = require('express');
const userRouter = require('./routes/userRoutes');


const app = express();
app.use(express.json());

app.use('/api/v1/users',userRouter)
app.use((err,req,res,next)=>{
    if(err){
        const {error} = err;
        return res.status(400).json({
            status:"Fail",
            message: error.details.map(err=>err.message).join(" & ")
        })
    }

    next();
})

   
module.exports = app;
