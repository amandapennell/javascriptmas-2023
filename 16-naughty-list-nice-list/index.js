const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const sortBtn = document.getElementById("sort-btn")
const resetBtn = document.getElementById("reset-btn")
const name = document.getElementById("name")
const naughty = document.getElementById("naughty")
const nice = document.getElementById("nice")
const addBtn = document.getElementById("add-btn")

sortBtn.addEventListener("click", sortList)
resetBtn.addEventListener("click", resetList)
addBtn.addEventListener("click", addToList)

const sorteesArr = [
    { name: "David", hasBeenGood: false },
    { name: "Del", hasBeenGood: true },
    { name: "Valerie", hasBeenGood: false },
    { name: "Astrid", hasBeenGood: true }
]

function updateLists() {
    niceList.innerHTML = ""
    naughtyList.innerHTML = ""

    for (let i = 0; i < sorteesArr.length; i++) {
        const listItem = document.createElement("li")
        listItem.textContent = sorteesArr[i].name

        if (sorteesArr[i].hasBeenGood) {
            niceList.appendChild(listItem)
        } else {
            naughtyList.appendChild(listItem)
        }
    }
}

function addToList(event) {
    event.preventDefault()

    const personName = {
        name: name.value,
        hasBeenGood: !naughty.checked
    };

    sorteesArr.push(personName)
    updateLists()
    name.value = ""
    naughty.checked = false
}

function resetList() {
    niceList.innerHTML = ""
    naughtyList.innerHTML = ""
}

function sortList() {
    // Sorting is done dynamically when updating the lists in the updateLists function
    updateLists()
}


/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, 
  according to whether they have been good or not. 
  Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/