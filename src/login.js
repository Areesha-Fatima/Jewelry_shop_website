
import axios from 'axios';
import React, {useState} from 'react'
import './App.css';
import { useNavigate } from 'react-router';
import Navbar from './navbar';
import Footer from './footer';


function LOGIN() {
  
 
  const [values,Setvalues]=useState({
    email:"",
    password:"",
  });
  const navigate= useNavigate();
  axios.defaults.withCredentials=true;
  const handleSubmit=(event)=>{
   event.preventDefault();
  axios.post("http://localhost:8081/login", values)
  .then(res=>{
    if(res.data.Status=== "Success"){
      navigate("/CenteredLogo")
    }else{
      alert("error");
    }
  }).then(err=>console.log(err));
   
}
  return (
  <>  <div>
      <Navbar/>
    <div>    
      <h1> <b><center><h1>LOGIN</h1></center></b> </h1>
  </div>
      <form onSubmit={ handleSubmit}>
  
       <label><h2><center><h2>Email : </h2></center></h2></label>
        <center><input type="mail" style={{width: "300px",height: "40px"}}onChange={(e)=>
        Setvalues({...values, email:e.target.value})
        }  /></center>
       

        <label><h2><center><h2>Password : </h2></center></h2></label>
        <center><input onChange={(e)=>
        Setvalues({...values, password:e.target.value})
        } type="password" style={{width: "300px",height: "40px"}}/></center>
    

    <p><center> <button class=" login-button" type="LOGIN">
          <h2>LOGIN </h2></button></center></p>
         
       

         
      </form>
      
    </div>
    <Footer/></>
  )
}

export default LOGIN;