import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ring1 from  './ring1.jpg';
import ring2 from  './ring2.jpg';

function Ring() {
    return (
        <>
        <div>
            <Navbar></Navbar>
<div>
<h2><center>---RINGS---</center></h2>
<div style={{flexDirection:'row',justifyContent:'space-between',display:'flex',flex:1}}>


<div className="card" style={{textAlign:"center"}}>
<h3>MAYA RING</h3>
        <img
          className="avatar"
          src={ring1}
          alt=""
          width={190}
          height={190}
        />
        <p><b><h3>RS. 20,000</h3></b></p>
        <p><button className="buy" type="button" >
       <h2>BUY</h2></button></p>


       <div className="card-a" style={{textAlign:"center"}}>
<h3>PINK RING</h3>
        <img
          className="avatar"
          src={ring2}
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
export default Ring;