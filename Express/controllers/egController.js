/*exports.getRoute1=(req,res)=>{
    res.json({
       message:"Get request work"
    })
}

exports.postRoute1=(req,res)=>{
    const name=req.body.name
    res.json({
       message:"post request work"
    })
   res.send(`I am ${name}`)
}
exports.putRoute=(req,res)=>{
    res.json({
       message:"put request work"
    })
}*/
const Todo= require('../models/todo')


exports.getRoute=async(req,res)=>{
    const todoList = await Todo.find();
    res.json(todoList)
}
exports.getByIdRoute=async(req,res)=>{
    const Task = await Todo.findById(req.params.id)
    res.json(Task)
}
exports.postRoute =async(req,res)=>{
    const {task,completed}=req.body
    const exist =await Todo.findOne({task});
    if(exist) return res.status(404).json({
        completed:"Task Already exist",
})
    const newTask = new Todo({task,completed})
    await newTask.save();
        res.status(201).json({
        completed:"Task Added sucessfully",
        task:newTask
    })
}
exports.putRoute =async(req,res)=>{
    const update= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update){
        return res.status(404).send('id not found')
    }
    res.status(201).send(update)
}


exports.deleteRoute =async(req,res)=>{
    const deleteById= await Todo.findByIdAndDelete(req.params.id)
    res.status(201).send('ID deleted')
}
