function navbar() {
  return `<!-- main navbar box -->
  <nav id="navbar">
    <!-- upper box -->
    <div>
      <!-- logo -->
      <a href="/"><img src="./images/meesho_logo.JPG" alt="meesho_logo" /></a>
      <!-- input -->
      <input
        type="text"
        id="search"
        placeholder="Try Saree,Kurti or Search by Product Code"
      />
      <!-- middle-section -->
      <div id="nav_thirt_item">
        <a href=""><p>Download App</p></a>
        <a href="./supplier_index.html"><p>Become a Supplier</p></a>
        
      </div>
      <!-- icon section -->
      <div id="nav_fourth_item">
        <a class="newlink" href="./signup-signin/signup.html">
          <div class="thirt_item">
            <i class="fas fa-user-alt" id="cart_logo"></i>
            <p>Profle</p>
          </div>
        </a>
        <a class="newlink" href="/">
          <div class="thirt_item">
            <i class="fas fa-shopping-cart" id="cart_logo"></i>
            <p>Cart</p>
          </div>
        </a>
      </div>
    </div>
    <!-- lower box , drop down menu-->
    <div id="nav_options">
       <ul>
         <li><a href="./product/womens.html">Women Ethnics</a></li>
         <li><a href="">Women Western</a></li>
         <li><a href="./product/jwellery.html">Jewellery & Accessories</a></li>
         <li><a href="">Men</a></li>
         <li><a href="">Beauty & Health</a></li>
         <li><a href="">Bags & Footwear</a></li>
         <li><a href="">Home & Kitchen</a></li>
         <li><a href="">Kids</a></li>
         <li><a href="">Electronics</a></li>
       </ul>
    </div>
  </nav>`;
}
export default navbar;
