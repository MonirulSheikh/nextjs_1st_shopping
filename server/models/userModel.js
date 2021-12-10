const mongoose=require("mongoose")

const userShema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    } ,
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user",'admin','root']
    }

})

module.exports=mongoose.models.Userinfo || mongoose.model("Userinfo",userShema) 