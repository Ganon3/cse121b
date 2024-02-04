/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Fuad J Torres",
    photo: "images/Shaggy_head_fuad.jpg",

    favoritFoods: [ 
        "sushi", 
        "posole", 
        "ceviche", 
        "fried rice", 
        "goulash", 
        "grapes", 
        "icreams" 
    ],

    hobbies: [
        'deep thinking',
        'judgeing',
        'observing',
        // "i lift my hands down to the dark for i am up-si-down in life. come save my soul from shround and blite for they'v be-come my freinds in life. evil thinks it will win me but God has shown that he is stong so stand be hind me lowly chre-achers dont think that you can come own me",
        'songs', 
        'poetry', // and
        'videogames',
    ],

    placesLived: [],
    
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: 'Galveston, TX',
    length: '14 years ++',
    }
);

myProfile.placesLived.push(
    {
    place: 'Orem, UT',
    length: '4 years',
    }
);

myProfile.placesLived.push(
    {
    place: 'Mexico',
    length: '9 months',
    }
);

/* DOM Manipulation - Output */
/* Name */

document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoritFoods.forEach((i) => { // i for index or item in index

    let liElement = document.createElement('li');
    liElement.textContent = i;
    document.getElementById('favorite-foods').appendChild(liElement);

});

/* Hobbies List */

myProfile.hobbies.forEach((i) => {  

    let liElement = document.createElement('li');
    liElement.textContent = i;
    document.getElementById('hobbies').appendChild(liElement);

  });


/* Places Lived DataList */

myProfile.placesLived.forEach((i) => {

    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = i.place;
    dd.textContent = i.length;

    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);

});
