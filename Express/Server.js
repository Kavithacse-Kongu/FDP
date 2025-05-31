const express = require('express')
const dotenv=require('dotenv')
dotenv.config()
const app =express()
const connectDB=require('./config/db')
const router =require('./Router/egRouter')
const cors=require('cors')
connectDB()
const PORT=process.env.PORT

app.use(cors())
app.use(express.json())
app.use(router)

//app.get('/',(req,res)=>{
  //  res.json({
   //     message:"Get request work"
   // })
//})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})