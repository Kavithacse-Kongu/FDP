const express = require('express')
const router =express.Router()
//const {getRoute,postRoute} = require('../controllers/egController')
//router.get('/get',getRoute)
//router.post('/post',postRoute)
/*router.get('/',(req,res)=>{
    res.json({
        message:"Get request working"
    })
})*/

const {getRoute,getByIdRoute,postRoute,putRoute,deleteRoute} = require('../controllers/egController')
router.get('/get',getRoute)
router.get('/get/:id',getByIdRoute)
router.post('/post',postRoute)
router.put('/put/:id',putRoute)
router.delete('/delete/:id',deleteRoute)
module.exports=router