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