const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
    
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    }

})

const collection=new mongoose.model('collection',logInSchema)

module.exports=collection
