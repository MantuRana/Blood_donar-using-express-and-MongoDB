const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
    
})
.catch((e)=>{
    console.log('failed');
})





                            //  create other collection for find donor
const logInSchema1=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    blood_type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
   

})



const doonerdata=new mongoose.model('dooner_data',logInSchema1)

module.exports=doonerdata