import React from "react";
import Footer from "./footer";
import neck1 from  './neck1.jpg';
import neck2 from  './neck2.jpg';
import Navbar from "./navbar";

function Necklace() {
    return (
        <>

        <div>
        <Navbar></Navbar>
<div>
<h2><center>---NECKLACE---</center></h2>
<div style={{flexDirection:'row',justifyContent:'space-between',display:'flex',flex:1}}>


<div className="card" style={{textAlign:"center"}}>
<h3>MAYA NECKLACE</h3>
        <img
          className="avatar"
          src={neck1}
          alt=""
          width={190}
          height={190}
        />
        <p><b><h3>RS. 20,000</h3></b></p>
        <p><button className="buy" type="button" >
       <h2>BUY</h2></button></p>


       <div className="card-a" style={{textAlign:"center"}}>
<h3>PINK NECKLACE</h3>
        <img
          className="avatar"
          src={neck2}
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
export default Necklace;