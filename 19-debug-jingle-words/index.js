import JSConfetti from 'js-confetti'
const word = 'santa' 
const wordArr = word.split('')
const wordDisplay = document.getElementById('word-display')
document.addEventListener('submit', handleGuess)

function renderSpaces() {
    const wordHtml = wordArr.map(() => {
        return `<span class="letter">-</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

function renderGuess(arr) {
    const wordHtml = arr.map((letter) => {
        return `<span class="letter">${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}

function handleGuess(e) {
    e.preventDefault()
/**
 * Debug Challenge:
 * 1. There are loads of problems with the 
 *    code below. Find them and fix them!
 **/
    
    /* bugs begin 🦠
    let currentState = []
    let input = document.getElementById('users-input')
    let guess = input.id
    const guessArr = guess.split(' ')
    wordArr.foreach((letter) => {
        if (letter === guessArr['']) {
            currentState.push(letter)
        } else {
            currentState.push(letter)
        }
    })
    /* bugs end 🦠*/ 

    /* Bug Fixes
     typo; changed 'users-input' to 'user-input'
     guess was assigned element instead of value; changed input.id to input.value
     string was split into array of words instead of characters ; changed .split(' ') to .split('')
     capitalization error; changed foreach to forEach
     each letter was being pushed into currentState regardless of position; added index to forEach,
     changed if statement to push matching letters into currentState, otherwise push '-'       
    */

    let currentState = []
    let input = document.getElementById('user-input')
    let guess = input.value  
    const guessArr = guess.split('')
    wordArr.forEach((letter, index) => {
        if (letter === guessArr[index]) {
            currentState.push(letter)
        } else {
            currentState.push('-')
        }
    })

    renderGuess(currentState)
    checkWin(guess)
    input.value = ''
}

function checkWin(guess) {
    if (word === guess) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        })
        jsConfetti.addConfetti()
    }
}
