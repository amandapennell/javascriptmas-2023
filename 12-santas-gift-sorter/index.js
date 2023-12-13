const sorterizerInterface = document.getElementById('sorterizer')

const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

const sortedAZ = xmasGifts.slice().sort()/* write code here */
console.log('A-Z: ', sortedAZ)
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const sortedZA = xmasGifts.slice().sort().reverse() /* write code here */
console.log('Z-A: ', sortedZA)
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]

function sortAZ() {
    sorterizerInterface.innerHTML = sortedAZ.map(gift => `<li class="gift">${gift}</li>`).join('')
}

function sortZA() {
    sorterizerInterface.innerHTML = sortedZA.map(gift => `<li class="gift">${gift}</li>`).join('')
}

function reset() {
    sorterizerInterface.innerHTML = '`<p>Waiting...</p>'
}

document.querySelector('.sort-buttons > button:last-child').onclick = reset