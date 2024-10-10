import React from 'react';

import banner from './banner.jpg';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import banner1 from './banner1.jpg';


function CenteredLogo() {
  return (
    <div className="slick-list draggable">
      <img style={{ width: 1500,
         height:600 }} src={banner} alt="" />

    <div className="slider-content">
      <p><h1><center>-----------NEW ARRIVAL-----------</center></h1></p>
    </div>



    <div className="content">
    <center> <img style={{ width: 300,
         height:300 }} src={one} alt="" />

      <img style={{ width: 300,
         height:300,marginLeft:30 }} src={two} alt="" />


      <img style={{ width: 300,
         height:300 ,marginLeft:30}} src={three} alt="" />


      <img style={{ width: 300,
         height:300,marginLeft:30 }} src={four} alt="" /></center> 
</div>


    <div className="slider-content">
      <p><h1><center>-----------SHOP BY CATEGORIES-----------</center></h1></p></div>
      <div className="slider">
      <p><h3><center>THE ELEGANT SECTIONS AT JEWELRY.COM</center></h3></p>
      
      <div className="content">
      <center><img style={{ width: 1300,
         height:500, paddingBottom:"50px" }} src={banner1} alt="" /></center>
</div>

    </div>
    <div>

    </div>
</div>

  );
}

export default CenteredLogo;
