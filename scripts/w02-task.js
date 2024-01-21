/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

// tring to fiqure it out , dont know whats going on ,
// following instructions ,

/* Step 2 - Variables */

const fullName = "Fuad J Torres";
let currentYear = new Date().getFullYear();
const profilePicture = "images/Shaggy_head_fuad.jpg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img"); // img has no id or query i think
const foodElement = document.getElementById('food');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);



/* Step 5 - Array */


let favoritFoods = ["sushi", "posole", "ceviche", "fried rice", "goulash", "grapes", "icreams"];
foodElement.innerHTML = favoritFoods;
const aFoodItem = "good pizza";
favoritFoods.push(aFoodItem);
foodElement.innerHTML += `<br>${favoritFoods}`;
const newFoodList = favoritFoods.shift();
foodElement.innerHTML += `<br> ${newFoodList}`;
