import React from "react";
import Footer from "./footer";
import ear from  './ear.jpg';
import Navbar from "./navbar";

function Product() {
    return (
        <>
        <div>
        <Navbar></Navbar>
        <div>
        
<div class="container">
<div class="image-e">
<img style={{ width: 500,
 height:440 }} src={ear} alt="" />
</div>

<div class="text-a">
<h1>MAYA EARRING</h1>
<div className="slider"><h1>RS. 20,000</h1></div>
<div id=" shopify_quantity"class="quantity">
<input type='button'value="-"class="minus"></input>
<input type="number" step="1" min="1" max="999" name="quantity" value="1" class="input" size="4" pattern='[0-9]*' inputMode='numeric'>
</input>
<input type='button'value="+"class="plus"></input>

</div>
<p> <button class="button cart-button" type="CART" >
<h3>ADD TO CART</h3></button></p>
<h3><p><center>-OR-</center></p></h3>
 <button class="button buy-button" type="button" >

       <center><h2> <a href="/payment">BUY IT NOW</a> </h2></center></button>

</div> 

</div>
</div>
<div>
<h2><b>DESCRIPTION AND SHIPPING</b></h2>
<p>The blue and lime hues create a striking contrast,
making these earrings a versatile accessory for both
formal occasions and casual outings.</p>
<p> The natural Variscite stones carefully chosen for their exquisite
beauty and unique pattern are enhancing the allure of these earrings.</p>
<ul type="circle">
<li>21K gold plating</li>
<li>Natural Freshwater Nugget Pearls</li>
<li>Hand Painted</li>
<li>Mix Metal</li>
<li>Natural Variscite Stones</li>
<li>Approx. length 2”</li>
</ul>

</div>

      </div><Footer></Footer></>
     

    );
}
export default Product;