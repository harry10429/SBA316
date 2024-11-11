console.log("hello");
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
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);
nav.appendChild(li4);
nav.appendChild(li5);

let a1 = document.createElement("a");
a1.textContent = "Best Seller";
a1.classList.add("nav-link");
a1.href = "#";
a1.style.display = "block";
a1.style.color = "white";
a1.style.textAlign = "center";
let a2 = document.createElement("a");
a2.textContent = "New Release";
a2.classList.add("nav-link");
a2.href = "#";
a2.style.display = "block";
a2.style.color = "white";
a2.style.textAlign = "center";
let a3 = document.createElement("a");
a3.textContent = "Groceries";
a3.classList.add("nav-link");
a3.href = "#";
a3.style.display = "block";
a3.style.color = "white";
a3.style.textAlign = "center";
let a4 = document.createElement("a");
a4.textContent = "Electronic";
a4.classList.add("nav-link");
a4.href = "#";
a4.style.display = "block";
a4.style.color = "white";
a4.style.textAlign = "center";
let a5 = document.createElement("a");
a5.textContent = "Weekly Price off";
a5.classList.add("nav-link");
a5.href = "#";
a5.style.display = "block";
a5.style.color = "white";
a5.style.textAlign = "center";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);

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

let li6 = createElement("li");
li6.classList.add("nav-link");
nav.appendChild(li6);

let a6 = createElement("a");
a6.classList.add("nav-link");
a6.style.marginLeft = "auto";
a6.textContent = "Shopping Cart";

li6.appendChild(a6);
