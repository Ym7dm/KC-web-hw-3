let addItemId = 0;
function addToCart(item) {
  addItemId += 1;
  let selectedItem = document.createElement("div");
  selectedItem.classList.add("cartCard");
  selectedItem.classList.add("cartImg");
  selectedItem.setAttribute("id", addItemId);
  let img = document.createElement("img");
  img.setAttribute("src", item.children[0].currentSrc);
  let title = document.createElement("h2");
  selectedItem.classList.add("carth2");
  title.innerText = item.children[1].innerText;
  let price = document.createElement("h3");
  selectedItem.classList.add("carth3");
  price.innerText = item.children[2].innerText;
  let delBtn = document.createElement("button");
  selectedItem.classList.add("cartbtn");
  delBtn.innerText = "Delete";
  delBtn.setAttribute("onclick", "deleteBtn(" + addItemId + ")");
  let cartItems = document.getElementById("cart");
  selectedItem.append(img);
  selectedItem.append(title);
  selectedItem.append(price);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
}
function deleteBtn(item) {
  document.getElementById(item).remove();
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector("#span span").textContent = productNumbers - 1;
  }
}
// counter-------------------------------------------------------------------------
let cartCounter = document.querySelectorAll(".bts");

for (let x = 0; x < cartCounter.length; x++) {
  cartCounter[x].addEventListener("click", () => {
    cartNumbers();
    totalCost(priceArray[x]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector("#span span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#span span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#span span").textContent = 1;
  }
}
onLoadCartNumbers();
// total----------------------------------------------------------
let priceArray = [
  { name: "Dumbbells", price: 16 },
  { name: "Kettlebell", price: 10 },
  { name: "Weight bar", price: 75 },
  { name: "Tread mill", price: 766 },
  { name: "Indoor Cycles", price: 582 },
];
function totalCost(product) {
  // console.log("The product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");

  // console.log(typeof cartCost);
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

let btnTotal = document.getElementById("btnTotal");
btnTotal.setAttribute("onclick", "total()");
function total() {
  let cartCost = localStorage.getItem("totalCost");
  let h3 = document.getElementById("h3");
  h3.innerHTML = `$${cartCost},000`;
}
