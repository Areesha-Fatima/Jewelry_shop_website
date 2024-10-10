import React from 'react';
import Navbar from "./navbar";
import Footer from './footer';
import './App.js';

 function Categories() {
  return (
  <> <div>
    <div>
        <Navbar></Navbar>
          <h1><b><center><h3>CATEGORIES</h3></center></b></h1>
     
       <center><h1> <a href="/earings">EARRINGS</a> </h1></center>
       <center><h1> <a href="/ring">RINGS</a> </h1></center>
       <center><h1> <a href="/bracelet">BRACELETS</a> </h1></center>
       <center><h1> <a href="/necklace">NECKLACE</a> </h1></center>
</div>

      </div>
      <Footer></Footer></>
     
  );
}
        export default Categories;
