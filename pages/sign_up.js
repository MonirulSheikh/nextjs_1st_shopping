import React from 'react'
import Layout from '../components/Layout'
import {useState} from "react"
import axios from "axios"
import baseUrl from "../Helpers/Baseurl"
import sweetAlt from "sweetalert"
import {useRouter} from "next/router"

const SignUp = () => {
  const router=useRouter()
const [data, setData] = useState({})

const [user,setUser]=useState({fname:"",email:"",phone:"",cpass:"",password:""})


const {fname,email,phone,password,cpass}=user

const OnchangeInputHandler=(e)=>{

  const {name,value}=e.target

  setUser({...user,[name]:value})
}




const userSignup=async(e)=>{

  e.preventDefault()

//  const {data}= await axios.post(`${baseUrl}/api/user`,{fname,email,phone,password,cpass},{
   
//    headers:{
//     "Content-Type":"Application/json"
//    }
//  })

 const res=await fetch(`${baseUrl}/api/user`,{method:"post",headers:{
  "Content-Type":"Application/json"
 },
 body:JSON.stringify({fname,email,phone,password,cpass})
})

const data=await res.json()
 console.log(res)
setData(data)

if(res.status==422){
 return sweetAlt({icon:"error",text:data.msg,timer:3000 ,buttons:false})

  
}
if(res.status==200){
  sweetAlt({icon:"success",text:data.msg,timer:3000 ,buttons:false})
router.push("/login")
}


}
    return (
        <Layout>
           
            
 
            <div className="container mt-3">
  <div className="row">
    <div className="col-lg-6 m-auto">
    <form onSubmit={userSignup}>
  <fieldset style={{border:`1px solid blue`, padding:"20px"}}> 
    <legend className="text-center">Registation Page</legend>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input onChange={OnchangeInputHandler} name="fname" value={fname} type="text"  className="form-control" placeholder="Enter Your name"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input onChange={OnchangeInputHandler} name="email" type="text"  value={email} className="form-control" placeholder="Email"/>
    </div>
    <div className="mb-3">
      <label className="form-label">Mobile Or Phone Numner</label>
      <input onChange={OnchangeInputHandler} name="phone" type="text"  value={phone} className="form-control" placeholder="Mobile Or Phone Numner"/>
    </div>
    
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input onChange={OnchangeInputHandler} name="password"  value={password} type="text"  className="form-control" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Conform Password</label>
      <input onChange={OnchangeInputHandler} name="cpass" type="text" value={cpass}  className="form-control"  placeholder="Conform Password"/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
    
    
  </div>
</div>






        </Layout>
    )
}

export default SignUp
