// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("show-items");
//         }else{
//             entry.target.classList.remove("show-items");
//         }
//     });
// });




const productcontainer= document.getElementById('product-containers');
console.log(productcontainer)
// const productNameElement = document.getElementById('product-name');
// const productDescriptionElement = document.getElementById('product-description');
// const productPriceElement = document.getElementById('product-price');

fetch("http://empyrean.washrytelaundry.com.ng/api/v1/products",
 {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => {
  if (res.ok) {
    res
      .json()
      .then((res) => {
        // productcontainer
        console.log(res)
        res.data.map((item)=> {
          let product = `<div class="products">
          <div class="product-grid">
              <img src="/public/asset/imges/Frame 21 (3).svg" alt="" id="product-image">
              <h3 class="product-name" id="product-name">${item.name}</h3>
              <p id="product-description">${item.description}</p>
              <div class="star">
                  <img src="/public/asset/imges/Star 1.svg" alt="">
                  <img src="/public/asset/imges/Star 1.svg" alt="">
                  <img src="/public/asset/imges/Star 1.svg" alt="">
                  <img src="/public/asset/imges/Star 1.svg" alt="">
                  <img src="/public/asset/imges/Star 5.svg" alt="">
                  <img src="/public/asset/imges/Star 5.svg" alt="">
              </div>
              <h3 id="product-price">${item.price}</h3>
              <button id="show-popup">ADD TO CART</button>
          </div>
      </div>`
      // console.log(productcontainer?.innerHTML)
      productcontainer.innerHTML += product
        })
        // localStorage.setItem("token", res.data.api_token);
        // window.location.href = "/product_page";
      })
      .catch((err) => {
        console.log(err);
        // let msg = "Something went wrong";
        // setErrorMessage(msg);
      });
  }
});


// // Retrieve the username from the cookie
// const username = getCookie('username');

// // Display the username on the page
// if (username) {
//     document.body.innerHTML += `<p>Hello, ${username}!</p>`;
// } else {
//     // Redirect to the login page if the username is not found
//     window.location.href = '/login';
// }

// // Function to get a cookie by name
// function getCookie(name) {
//     const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
//     return match ? match[1] : null;
// }














document.addEventListener('DOMContentLoaded', function () {
  const showPopupButton = document.getElementById('show-popup');
  const popupBackground = document.getElementById('popup-background');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('close-popup');

  // Show the popup and background
  showPopupButton.addEventListener('click', function () {
      popupBackground.style.display = 'block';
      popup.style.display = 'block';
  });

  // Close the popup and background
  closePopupButton.addEventListener('click', function () {
      popupBackground.style.display = 'none';
      popup.style.display = 'none';
  });

  // Close the popup and background if clicked outside the content
  window.addEventListener('click', function (event) {
      if (event.target === popupBackground) {
          popupBackground.style.display = 'none';
          popup.style.display = 'none';
      }
  });
});
