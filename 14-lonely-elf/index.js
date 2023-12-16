const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById('reset-btn');

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
    const totalElves = document.querySelectorAll('.elf').length;

    if (totalElves >= 100) {
        alert('Too many elves! Please stop clicking');
        return;
    }

    const clone = elf.cloneNode(true);
    elf.parentNode.appendChild(clone);

    updateElfMood();
}

function updateElfMood() {
    const numberOfElves = document.querySelectorAll('.elf').length;
    const h1 = document.querySelector('h1');

    if (numberOfElves === 0) {
        h1.textContent = 'No Elves Around';
    } else if (numberOfElves === 1) {
        h1.textContent = 'Lonely Elf';
    } else if (numberOfElves <= 10) {
        h1.textContent = 'Happy Elf';
    } else if (numberOfElves <= 50) {
        h1.textContent = 'Excited Elf';
    } else {
        h1.textContent = 'Overwhelmed Elf';
    }
}   

resetBtn.addEventListener('click', function() {

    const elves = document.querySelectorAll('.elf');

    for(let i = 1; i < elves.length; i++) {
        elves[i].parentNode.removeChild(elves[i]);
    }

    updateElfMood();
});

/** Challenge:
        - Write a function to duplicate the elf when the button is clicked.
        - See index.css for optional styling challenges.
**/

/** Stretch goals:
        - Write a function to give the elves some tools, or a cup of tea!
        - Limit the total number of elves to 100.
**/