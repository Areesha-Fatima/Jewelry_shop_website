import React from "react";
import Footer from "./footer";
import bracelet1 from  './bracelet1.jpg';
import bracelet2 from  './bracelet2.jpg';
import Navbar from "./navbar";

function Bracelet() {
    return (
        <>
        <div>
        <Navbar></Navbar>
<div>
<h2><center>---BRACELETS---</center></h2>
<div style={{flexDirection:'row',justifyContent:'space-between',display:'flex',flex:1}}>


<div className="card" style={{textAlign:"center"}}>
<h3>MAYA BRACELET</h3>
        <img
          className="avatar"
          src={bracelet1}
          alt=""
          width={190}
          height={190}
        />
        <p><b><h3>RS. 20,000</h3></b></p>
        <p><button className="buy" type="button" >
       <h2>BUY</h2></button></p>


       <div className="card-a" style={{textAlign:"center"}}>
<h3>PINK BRACELET</h3>
        <img
          className="avatar"
          src={bracelet2}
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
      </div><Footer></Footer></>

    );
}
export default Bracelet;