// import section <>

// outer var, let, const <>
const generalSituation = document.getElementById("generalSituation");
const weatherForecast = document.getElementById("weatherForecast");
const rawData = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"

// small funtions <>
function displaytest(report) {report.forEach((i) => console.log(i.display))}

function reset(element) {element.innerHTML = "";}

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
}


// large funtions

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
                      Forecast for today is ${removePeriod(dat.forecastWeather)} | 
                      The Wind Report shows ${removePeriod(dat.forecastWind)} |
                      Tempetures range from ${dat.forecastMintemp.value} to ${dat.forecastMaxtemp.value} in Celcious | 
                      Rain percent is looking to be around ${dat.forecastMinrh.value} to ${dat.forecastMaxrh.value} |
                      Finaly, for those who want to know, the PSR is ${dat.PSR}`
        }
        list.push(text);
    })
    return list;
}


function display(report) {report.forEach((dat) => {

        if (dat.week === "NA") {generalSituation.textContent = dat.display}
        else {

            let par = document.createElement('p');
            par.textContent = dat.display;
            weatherForecast.appendChild(par);
        }
})}



// async funtion or MAIN funtion
// async funtion or MAIN funtion

async function main() {
    
    let data = await fetch(rawData);

            if (data.ok)                               //realm of tests
    {
        report = await data.json();                 //console.log(report);
        report = OrganizeReport(report);            //console.log(report);
                                                    //displaytest(report);
        display(report);
    }
}




// activation place
console.log("let us get started");
main();
