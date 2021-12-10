const userModel=require("../models/userModel")



const SignUp=async(req,res)=>{
const {fname,email,password,cpass,phone}=req.body

    try {
        
      if(!fname || !email ||!password || !cpass ||!phone){
         return  res.status(428).json({msg:"Please Fil All  Field"})
      }
const exitingUser =await userModel.findOne({email})

if(exitingUser){
 return   res.status(428).json({msg:"This EmailId Alredy Used"})

}else{
    if(password===cpass){
        const data = await new userModel({name:fname,email,password,phone})

        console.log(data)
      const result=await  data.save()
    //   console.log(result)
      if(result){
   return res.status(200).json({msg:"Sign Up Successfully"})

      }else{
      return  res.status(420).json({msg:"Sign Up failed"})  
      }

    }else{
   return res.status(450).json({msg:"password Not Match"})

    }


}

       
    } catch (error) {
        res.json({error}) 

        console.log(error)
    }

}

module.exports={SignUp}