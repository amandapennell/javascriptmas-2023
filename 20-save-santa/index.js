const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧛", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
]

document.getElementById('danger-array').innerText = dangerArray.flat(Infinity).join(' ')

function saveSanta() {
    const deepArray = JSON.parse(JSON.stringify(dangerArray))

    const santaArray = []
    const villainArray = []

    function recursiveArray(subArray) {
        subArray.forEach(item => {
            if (Array.isArray(item)) {
                recursiveArray(item);
            } else {
                if (item === "🎅") {
                    santaArray.push(item)
                } else {
                    villainArray.push(item)
                }
            }
        });
    }

    recursiveArray(deepArray)

    document.getElementById('santa').innerHTML = santaArray.join(' ')
    document.getElementById('villain').innerHTML = villainArray.join(' ')
    document.getElementsByClassName('jail')[0].classList.remove('hidden');
    document.getElementsByClassName('safe')[0].classList.remove('hidden');
    document.getElementById('btn').innerHTML = 'You saved Santa!';

    console.log("Danger Array:", dangerArray)
    console.log("Santa Array:", santaArray)
    console.log("Villain Array:", villainArray)
}