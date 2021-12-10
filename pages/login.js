import React,{useState} from 'react'
import Layout from '../components/Layout'
import cookis from "js-cookie"
import sweetAlt from "sweetalert"
import axios from "axios"

const Login = () => {

const [user, setUser] = useState({mail:"",password:""})

const {mail,password}=user

const InputHandler=(e)=>{
const  {name,value}=e.target
setUser({...user,[name]:value})
}

const userLogin=(e)=>{
e.preventDefault()

sweetAlt({title:"Login Status" ,text:"Error",timer:3000 ,buttons:false})
}
    return (
        <Layout>
       
           
 
            <div class="container">
  <div class="row mt-5">
    <div class="col-lg-6 m-auto">
    <form onSubmit={userLogin}>
  <fieldset >
    <legend className="text-center">Login Page</legend>
    <div class="mb-3">
      <label className="form-label">Email</label>
      <input name="mail" type="text" value={mail} id="disabledTextInput" className="form-control" placeholder="Mobile or Email"/>
    </div>
    
    <div class="mb-3">
      <label  className="form-label">Password</label>
      <input name="password" type="text" value={password} id="disabledTextInput" className="form-control"  placeholder="Password"/>
    </div>
    
    <button type="submit" className="btn btn-primary">Login</button>
  </fieldset>
</form>
    </div>
    
    
  </div>
</div>






        </Layout>
    )
}

export default Login
