import React from 'react'
import Link from "next/link"

import {useRouter} from "next/router"
const Navbar = () => {

const router=useRouter()

const isActive=(path)=>{
    if(path==router.pathname){
        return "active"
    }else{
        return ""
    }
}
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-3" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <a className={`nav-link  ${isActive("/")}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isActive("/login")}`} href="/login">Login</a>

        </li>
        
        <li className="nav-item">
          <a className={`nav-link  ${isActive("/sign_up")}`} href="/sign_up">SignUP</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${isActive("/cart")}`} href="/cart">Cart</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
