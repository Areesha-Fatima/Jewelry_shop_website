import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function ContactPage() {
  return (
    <><div>
      <div>
        <Navbar></Navbar>
        <div>
          <h1> <b><center>CONTACT US</center></b> </h1>
        </div>
        <p><center><h3>Karachi, Pakistan</h3></center></p>
        <p><center><h3>Email : hello@shopjewelery.com</h3></center></p>
        <p><center><h3>Phone : +921541214165</h3></center></p>
        <p><center><h2><b>DROP US A MESSAGE </b></h2></center></p>

        <label><h3><center>YOUR NAME : </center></h3></label>
        <center>< input type="text" style={{width: "300px",height: "40px"}}/></center>

        <label><h3><center>YOUR EMAIL : </center></h3></label>
        <center><input type="text" style={{width: "300px",height: "40px"}}/></center>

        <label><h3><center>YOUR MESSAGE : </center></h3></label>
        <center><input type="text"style={{width: "300px",height: "40px"}} /></center>


        <p><center> <button class="btn btn-rgba signin-button" type="REGISTER">
          <h2>SEND</h2></button></center></p>
  
      </div>
    </div><Footer></Footer></>
  );
}

export default ContactPage;
