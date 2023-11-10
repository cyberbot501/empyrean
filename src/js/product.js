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
console.log(product-containers)
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
              <button>ADD TO CART</button>
          </div>
      </div>`
      // console.log(product)
      productcontainer.innerHTML =+ product
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


   