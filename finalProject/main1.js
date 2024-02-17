// import section <>
// predefine <>


const generalSituation = document.getElementById("generalSituation");
const weatherForecast = document.getElementById("weatherForecast");
const rawData = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"


// small funtions ------- suports
// small funtions ------- string fixing
// small funtions ------- display 

function reset(element) {element.innerHTML = "";} // dat for data but a singular pice 
function aDisplayTest(report) {report.forEach((dat) => console.log(dat.display))}
// function caseAction(report, cas) {report = report[0] + report.filter(dat => dat.week.toLowerCase().includes(cas)); return report.flat();} 


function fixDate(string) {
        
    let text = string.split("");
    text.splice(4, 0, "-");
    text.splice(7, 0, "-");
    return text.join("");

}
function removePeriod(string) { 
    
    if (string[string.length - 1] == ".") 
    {
        string = string.split("");
        string[string.length - 1] = "";
        string = string.join("");
    }
    return string;
} // add a capital remover


                                            //display 

function display(report) {report.forEach((dat) => {

    if (dat.week === "NA") {generalSituation.textContent = dat.display}
    else {

        let par = document.createElement('p');
        par.textContent = dat.display;
        weatherForecast.appendChild(par);
    }})}


// large funtions         ----------------  organize 
// large funtions         ----------------  switch

function OrganizeReport(report) {

    let list = [];
    list.push({    

            week: "NA",
            display: report.generalSituation,

        });

    report.weatherForecast.forEach((dat) => { 
         
        dat.forecastDate = fixDate(dat.forecastDate); removePeriod(dat.forecastWind)
        let text = 
        {
            week: dat.week,
            display: `Date: ${dat.forecastDate} | day: ${dat.week} | 
                      Forecast for this day ${removePeriod(dat.forecastWeather)} | 
                      The Wind Report shows ${removePeriod(dat.forecastWind)} |
                      Tempetures range from ${dat.forecastMintemp.value} to ${dat.forecastMaxtemp.value} in Celcious | 
                      Rain percent is looking to be around ${dat.forecastMinrh.value} to ${dat.forecastMaxrh.value} |
                      Finaly, for those who want to know, the PSR is ${dat.PSR}`
        }
        list.push(text);
    })
    return list;
}

function switchDisplay(report) {

    reset(weatherForecast);
    let filter = document.getElementById("filtered").value;
    switch(filter) { // WARNING1: need to fiqure out a better way to filter week without taking week NA away

        case "sun":
            //display(caseAction(report, "sun"));
            display(report.filter(dat => dat.week.toLowerCase().includes("sun")));
            break
        case "mon":
            display(report.filter(dat => dat.week.toLowerCase().includes("mon")));
            break
        case "tus":
            display(report.filter(dat => dat.week.toLowerCase().includes("tues")));
            break
        case "wed":
            display(report.filter(dat => dat.week.toLowerCase().includes("wednes")));
            break
        case "thr":
            display(report.filter(dat => dat.week.toLowerCase().includes("thurs")));
            break
        case "fri":
            display(report.filter(dat => dat.week.toLowerCase().includes("fri")));
            break
        case "sat":
            display(report.filter(dat => dat.week.toLowerCase().includes("satur")));
            break
        case "all":
            display(report);
            break
        default:
            display(report);
            break
}}


// async funtion or MAIN funtion -- realm of tests
// async funtion or MAIN funtion -- main

async function main() {
    
    let data = await fetch(rawData);

            if (data.ok)                               //realm of tests
    {
        report = await data.json();                 //console.log(report);
        report = OrganizeReport(report);            //console.log(report);
                                                    //aDisplayTest(report);
                                                    display(report); //-- while my comment warrning1 is up
        switchDisplay(report);                      //console.log(report);
    }                                            
}




// activation place
console.log("let us get started");
main();

document.querySelector("#filtered").addEventListener("change", () => {switchDisplay(report);})
