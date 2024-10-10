import axios from 'axios';
import React, {useState} from 'react'
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

function REGISTER() {
  
  const [values,Setvalues]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
  });
 
  const handleSubmit=(event)=>{
   event.preventDefault();
  axios.post("http://localhost:8080/areesha", values)
  .then(res=>{
    if(res.data.Status=== "Success"){
      
    }else{
      alert("error");
    }
  }).then(err=>console.log(err));
   
}
  return (
    <><div>
      <Navbar/>
    <div>    
      <h1> <b><center><h1>REGISTER</h1></center></b> </h1>
  </div>
      <form onSubmit={ handleSubmit}>
        <label><h2><center><h3>First_Name : </h3></center></h2></label>
        <center><input  onChange={(e)=>
        Setvalues({...values, first_name:e.target.value})
        } type="text"style={{width: "300px",height: "40px"}}/></center>
        
        <label><h2><center><h3>Last_Name : </h3></center></h2></label>
        <center><input  onChange={(e)=>
        Setvalues({...values, last_name:e.target.value})
        } type="text"style={{width: "300px",height: "40px"}}/></center>

        <label><h2><center><h3>Email : </h3></center></h2></label>
        <center><input type="email" onChange={(e)=>
        Setvalues({...values, email:e.target.value})
        }style={{width: "300px",height: "40px"}}  /></center>
  

        <label><h2><center><h3>Password : </h3></center></h2></label>
        <center><input onChange={(e)=>
        Setvalues({...values, password:e.target.value})
        } type="password" style={{width: "300px",height: "40px"}}/></center>
    

    <p><center> <button class=" login-button" type="LOGIN">
          <h2>REGISTER </h2></button></center></p>
         
       

         
      </form>
      
    </div>
    <Footer/>
    </>
  )
}

export default REGISTER;



