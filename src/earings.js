import React from "react";
import Footer from "./footer";
import ear from  './ear.jpg';
import ear2 from  './ear2.jpg';
import Navbar from "./navbar";

function Earing() {
    return (
        <>
        <div>
        <Navbar></Navbar>
        <div>
<div>
<h2><center>---EARRINGS---</center></h2>
<div style={{flexDirection:'row',justifyContent:'space-between',display:'flex',flex:1}}>
<div className="card" style={{textAlign:"center"}}>
<h3>MAYA EARRING</h3>
        <img
          className="avatar"
          src={ear}
          alt=""
          width={190}
          height={190}
        />
        <p><b><h3>RS. 20,000</h3></b></p>
      <button className="buy" type="button" >
       <center><h2> <a href="/product">BUY</a> </h2></center></button>


       <div className="card-a" style={{textAlign:"center"}}>
<h3>PINK EARRING</h3>
        <img
          className="avatar"
          src={ear2}
          alt=""
          width={200}
          height={200}
        />
        <p><b><h3>RS. 16,000</h3></b></p>
        <p><button className="buy" type="button" >
       <h2>BUY</h2></button></p>
      </div>

      </div>
      </div>
      </div>
      </div>
      </div><Footer></Footer></>
     

    );
}
export default Earing;