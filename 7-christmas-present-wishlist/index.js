
/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

/* const wishlist = [
    "Macbook Air M2"
    // TODO: Add more items here
]; */

const input = document.getElementById("input")
const btn = document.getElementById("btn")
let myWishlist = document.getElementById("my-wishlist")
let wishlist = ["Macbook Air M2", "Scrimba Pro subscription", "Chanel No. 5", "Stranger in a Strange Land"]

loadEventListeners()
function loadEventListeners() {
    btn.addEventListener("click", addWish);
}

function displayWish() {
    let totalList = "";
    for (let i = 0; i < wishlist.length; i++) {
        totalList += `<li>${wishlist[i]}  <span class="remove-icon" onclick="removeItem(this)"> ❎</span></li>`;
    }
    myWishlist.innerHTML = totalList;
}
displayWish();

function addWish() {
    let addWish = "";
    if (input.value === "") {
    } else {
        addWish = input.value;
        myWishlist.innerHTML += `<li>${addWish} <span class="remove-icon" onclick="removeItem(this)">❎</span></li>`;
        input.value = "";
    }
}

function removeItem(icon) {
    let listItem = icon.parentElement;
    listItem.remove();
}