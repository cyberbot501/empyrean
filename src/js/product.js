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

// const productImageElement = document.getElementById("product-image");
// const productNameElement = document.getElementById("product-name");
// const productDescriptionElement = document.getElementById(
//   "product-description"
// );
// const productPriceElement = document.getElementById("product-price");

// Fetch product data from the API
// fetch("https://empyrean.washrytelaundry.com.ng/api/v1/products", {
//   method: "GET",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Assuming the API response is an array of products
//     if (data.length > 0) {
//       // Display the first product in the array
//       const firstProduct = data[0];
//       productImageElement.src = firstProduct.image; // Update the product image source
//       productNameElement.textContent = firstProduct.name;
//       productDescriptionElement.textContent = firstProduct.description;
//       productPriceElement.textContent = `Price: $${firstProduct.price}`;
//     } else {
//       productNameElement.textContent = "No products found";
//       productDescriptionElement.textContent = "";
//       productPriceElement.textContent = "";
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Display the product data on the page.
document.getElementById('product-name').innerHTML = productData.name;
document.getElementById('product-image').src = productData.attributes[0].variations[0].image; // Update to the correct image URL
document.getElementById('product-description').textContent = productData.description;

fetch('https://empyrean.washrytelaundry.com.ng/api/v1/products')
.then((res) => {
    if (res.ok) {
        res
        .json()
        .then((res) => {

            
        

        })
    }

    .catch((err) => {
        // console.log(err);
        let msg = "Something went wrong";
        setErrorMessage(msg);
      });
       
})


const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const credentials = {
    productName: e.target[0].value,
    productDescription: e.target[1].value,
    productPrice: e.target[2].value,
  };

  product(credentials);
});

function product(credentials) {
  setErrorMessage("");

  let errorMessage;
  fetch("http://empyrean.washrytelaundry.com.ng/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.ok) {
        res
          .json()
          .then((res) => {
            localStorage.setItem("token", res.data.api_token);
            window.location.href = "/product_page";
         
          })
          .catch((err) => {
            // console.log(err);
            let msg = "Something went wrong";
            setErrorMessage(msg);
          });
      } else
        res
          .json()
          .then((res) => {
            errorMessage = res?.error?.message;
            setErrorMessage(errorMessage);
          })
          .catch((err) => {
            // console.log(err);
            let msg = "Something went wrong";
            setErrorMessage(msg);
          });
    })
    .catch((err) => {
      let msg = "Something went wrong";
      setErrorMessage(msg);
    });
}

function setErrorMessage(msg) {
  errorContainer.innerText = `${msg}`;
}
   