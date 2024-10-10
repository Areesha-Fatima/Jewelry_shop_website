import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function Payment() {
    return (
        <>
        <div>
        <Navbar></Navbar>
        <div>
       
  <center>
<h1> <b>PAYMENT DETAIL</b> </h1>

      <form>
       <h2>Contact </h2>
       <h3><label><input placeholder="Email"type="text"/></label> </h3>
      <p>Email me with news and offers</p>
      <h3><p> <label><h2>Shipping Address </h2>
    <input placeholder="Country / Region"type="text"/></label></p> 
       <label><input placeholder="First Name"type="text"/></label>
       <label><input placeholder="Last Name"type="text"/></label>
       <p> <label>
     <input placeholder="Address"type="text"/></label></p>
     <p> <label>
     <input placeholder="Appartment,Suite,etc.(optional)"type="text"/></label></p>
     <label><input placeholder="City"type="text"/></label> 
     <label> <input placeholder="Postal code"type="text"/></label> 
     <p><label> <input placeholder="Phone"type="text"/></label> </p>
     </h3>
    <p><input type="checkbox" ></input>Save this information for next time</p>
    <p><input type="checkbox" ></input>Text me with news and offers</p>

        <p><center> <button class="ship" type="ship" >
       <h2>CONTINUE TO SHIPPING</h2></button></center></p>
         

         
      </form>
    </center>  
    </div>
    
        </div><Footer></Footer></>
     

    );
}
export default Payment;