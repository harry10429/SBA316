let nav = document.getElementsByClassName("nav")[0];

let li1 = document.createElement("li");
li1.classList.add("nav-item");
let li2 = document.createElement("li");
li2.classList.add("nav-item");
let li3 = document.createElement("li");
li3.classList.add("nav-item");
let li4 = document.createElement("li");
li4.classList.add("nav-item");
let li5 = document.createElement("li");
li5.classList.add("nav-item");
let li6 = document.createElement("li");
li6.classList.add("nav-link");
li6.style.marginLeft = "auto";

nav.appendChild(li6);
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);
nav.appendChild(li4);
nav.appendChild(li5);
nav.appendChild(li6);

let a1 = document.createElement("a");
a1.textContent = "Best Seller";
a1.classList.add("nav-link");
a1.href = "#";
a1.style.display = "block";
a1.style.color = "white";
a1.style.textAlign = "center";
a1.style.marginTop = "10px";
let a2 = document.createElement("a");
a2.textContent = "New Release";
a2.classList.add("nav-link");
a2.href = "#";
a2.style.display = "block";
a2.style.color = "white";
a2.style.textAlign = "center";
a2.style.marginTop = "10px";
let a3 = document.createElement("a");
a3.textContent = "Groceries";
a3.classList.add("nav-link");
a3.href = "#";
a3.style.display = "block";
a3.style.color = "white";
a3.style.textAlign = "center";
a3.style.marginTop = "10px";
let a4 = document.createElement("a");
a4.textContent = "Electronic";
a4.classList.add("nav-link");
a4.href = "#";
a4.style.display = "block";
a4.style.color = "white";
a4.style.textAlign = "center";
a4.style.marginTop = "10px";
let a5 = document.createElement("a");
a5.textContent = "Weekly Price off";
a5.classList.add("nav-link");
a5.href = "#";
a5.style.display = "block";
a5.style.color = "white";
a5.style.textAlign = "center";
a5.style.marginTop = "10px";

let a6 = document.createElement("a");
a6.classList.add("nav-link");
a6.style.display = "block";
a6.style.color = "black";
a6.style.textAlign = "center";

a6.style.backgroundColor = "orange";

a6.href = "#";

a6.textContent = "Shopping Cart";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);
li6.appendChild(a6);

const searchContent = document.getElementById("searchText");
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", validateSearch);

function validateSearch() {
  console.log(searchContent.value);
  if (searchContent.value.toLocaleLowerCase() === "apple") {
    alert("You are currently on the right page");
  } else {
    alert(
      "The website is still under development. Sorry for any inconvenience"
    );
  }
}

let image = document.createElement("img");
image.setAttribute("src", "06.jpg");
image.style.width = "30px";
image.style.height = "30px";
image.style.marginTop = "13px";
image.style.marginRight = "10px";

nav.appendChild(image);

let li7 = document.createElement("li");
li7.classList.add("nav-item");
nav.appendChild(li7);

let a7 = document.createElement("a");
a7.textContent = "Login";
a7.classList.add("nav-link");
a7.href = "#";
a7.style.display = "block";
a7.style.color = "white";
a7.style.textAlign = "center";
a7.style.marginTop = "8px";

li7.appendChild(a7);

let imageBox = document.querySelectorAll("img");

function addImageSrc() {
  for (let i of imageBox) {
    i.src = "05.webp";
  }
  console.log(i);
}

addImageSrc();
