/* W05: Programming Tasks */
/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

/* async displayTemples Function */

const displayTemples = (temples) => {temples.forEach(temp => {

let articale = document.createElement('artical'); 
let h3 = document.createElement("h3");
let img = document.createElement("img");

h3.innerHTML = temp.templeName;
img.src = temp.imageUrl;
img.alt = temp.location;

articale.appendChild(h3);
articale.appendChild(img);
templesElement.appendChild(articale);

});}

/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const responce = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(responce.ok) {
        templeList = await responce.json();
        //console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */

function reste() {templesElement.innerHTML = "";}

/* filterTemples Function */

const filterTemples = (templs) => {

    reste()
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(templs.filter(templ => templ.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(templs.filter(templ => !(templ.location.toLowerCase().includes("utah"))));
            break;
        case "older":
            displayTemples(templs.filter(templ => new Date(templ.dedicated) < new Date(1950,0,1,)));
            break;
        case "all":
            displayTemples(templs);
            break;
        default:
            break;       
    }
}


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)})