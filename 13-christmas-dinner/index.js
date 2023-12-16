/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const dinnerContainer = document.querySelector('#dinner-container')
const dinner = document.querySelector('#dinner')
const dinnerImg = document.querySelector('#img')
const dinnerRecipe = document.querySelector('#recipe')
const numGuests = document.querySelector('#num-input')
const grinchInput = document.querySelector('#grinch-input')
const calculator = document.querySelector('#btn')

const suggestions = [

    {
        name: "Ham",
        image: "ham.png",
        recipe: "https://www.recipetineats.com/easy-maple-sticky-glazed-ham/"
    },
    {
        name: "Turkey",
        image: "turkey.png",
        recipe: "https://www.gordonramsay.com/gr/recipes/roast-turkey-with-lemon-parsley-and-garlic/"
    }
]

const grinchSuggestions = [
    {
        name: "Who Hash",
        image: "who-hash.png",
        recipe: "https://www.seussville.com/activity/who-hash/"
    },
    {
        name: "Roast Beast",
        image: "roast-beast.png",
        recipe: "https://www.foodandwine.com/recipes/standing-rib-roast-beef"
    }
]