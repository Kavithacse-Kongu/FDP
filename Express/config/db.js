const mongoose = require('mongoose')
const connectDB=async()=>{
    console.log("inside connectdb")
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectDB