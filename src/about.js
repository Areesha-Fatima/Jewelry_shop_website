import React from 'react';
import Navbar from "./navbar";
import './App.js';
import girl from  './girl.jpg';
import Footer from './footer';

function ABOUT() {
  return (
    <><div>
      <div>
      <Navbar></Navbar>
      <div>
        <h1> <b><center>ABOUT US</center></b> </h1></div>
        <h1> <b><center>Hello, I’m MARIA.</center></b> </h1>
        <div className="slider">
        <h2> <b><center>Entrepreneur | Designer | Traveler</center></b> </h2></div>

<div class="container">
      <div class="image">
      <img style={{ width: 500,
         height:500 }} src={girl} alt="" />
      </div>
      <div class="text">
      <h2>MARIA & Co.</h2>
        <h3>The Person Who Runs The Show</h3>
<p>MARIA is a designer by nature and an entrepreneur by passion, currently dwelling in Saudi Arabia with her husband, son, and two fur babies. She is the Creative Head at Shaista Jewelry, and every piece created to date is her brainchild.</p>

<p>She has a Foundation degree in Arts, and after that, she had to move to Canada, where she completed her Software Programming degree and pursued her career in the same field for a few years. With her quest for creativity, Shaista had been exploring other art mediums over the years, like weaving, silk painting, and pottery, then finally indulged herself in jewelry designing.
</p>
<p>She loves backpacking around the world. In fact, all the stones and pearls used are procured and hand-picked by Shaista from antique stores, ethnic bazaars, and galleries around the globe. Always ready to explore new places and looking out for exciting experiences, Shaista also carries a notebook on her sleeves and never misses a chance to sketch away whenever inspiration knocks at her door. She takes inspiration from everything around her and a lot of her designs come from her own mood and personality!
</p>  

      </div>
</div>
<div className="slider">
        <h1> <b><center>Pay us a Visit</center></b> </h1></div>
        <center>   <h2> <b>Located in Karachi, Pakistan</b> </h2>
<p>We stock our jewelry at XYZ, located at DHA Phase 1, Karachi.</p>

<p>Drop by to see our exquisite pieces live and shop away.</p>

<p><b>Address:  10th street, Khayaban-e-Mujahid, DHA, Karachi</b></p>

<p><b>Timings: 11:30am – 6:30pm (Mon-Sat)</b></p>
        </center>
        <div className="slider">
        <h1> <b><center>Contact:+952364785151</center></b> </h1></div>
      <div>
      </div>
    </div>
    
    </div><Footer></Footer></>
  );
}

export default ABOUT;