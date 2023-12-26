/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/

document.addEventListener("DOMContentLoaded", function () {
    const redLights = document.querySelectorAll('.lights.red');
    const blueLights = document.querySelectorAll('.lights.blue');
    const star = document.querySelector('.star');

    function turnOnLights(lights) {
        lights.forEach(light => {
            light.classList.add('lights-on');
        });
    }

    function turnOffLights(lights) {
        lights.forEach(light => {
            light.classList.remove('lights-on');
        });
    }

    function starToggle() {
        star.classList.toggle('twinkle');
    }

    let redLightsOn = true;

    setInterval(() => {
        if (redLightsOn) {
            turnOnLights(redLights);
            turnOffLights(blueLights);
        } else {
            turnOnLights(blueLights);
            turnOffLights(redLights);
        }

        starToggle();

        redLightsOn = !redLightsOn;
    }, 800);
});
