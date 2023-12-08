const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(people) {
    let peopleShuffle = [...people];
    let currentIndex = peopleShuffle.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = peopleShuffle[currentIndex];
        peopleShuffle[currentIndex] = peopleShuffle[randomIndex];
        peopleShuffle[randomIndex] = tempValue;
    }

    let santaPairs = {};
    for (let i = 0; i < people.length; i++) {
        if (people[i] !== peopleShuffle[i]) {
            santaPairs[people[i]] = peopleShuffle[i];
        } else {
            let nextIndex = (i + 1) % people.length;
            santaPairs[people[i]] = peopleShuffle[nextIndex];
            peopleShuffle[nextIndex] = peopleShuffle[i];
        }
    }

    return santaPairs;
}

function displayArray() {
    const resultElement = document.getElementById("results");
    const secretSantaPairs = generateSecretSantaPairs(people);

    // Display the result on the page
    let resultString = `<h3 class="rtitle">YOUR PAIRS<br></h3>`;
    for (const person in secretSantaPairs) {
        resultString += `${person} <span class="gift"> ➡️ </span> ${secretSantaPairs[person]}<br>`;
    }

    resultElement.innerHTML = resultString;
    console.log(secretSantaPairs);
}

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */