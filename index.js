"use strict";
window.addEventListener('load', onLoaded, false);


//change background color depending on time of day
var weather = 0;
var today = new Date();

//sky color var stuff here
let hourlyColors = [
    '#080f44',
    '#071042',
    '#000e4a',
    '#000b4a',
    '#183058',
    '#2c5478',
    '#578f92',
    '#94baf1',
    '#78abff',
    '#53a6ff',
    '#65bcff',
    '#60b9ff',
    '#499aff',
    '#4694ff',
    '#4897ff',
    '#88baff',
    '#99d2ff',
    '#a4aeff',
    '#db887d',
    '#002063',
    '#032167',
    '#01104a',
    '#0f184a',
    '#080c42'

]
/* for weather:
    0 is sunny / clear
    1 is cloudy
    2 is rainy
    3 is snowy */

if (weather == 0) {
    var bgcolor = hourlyColors[today.getHours()]
} else if (weather == 1) {
    //todo
};
document.body.style.backgroundColor = bgcolor;
//document.getElementById("test").innerHTML = bgcolor;
document.getElementById("tnd").innerHTML = "Catch for ".concat(today.getMonth()+1,"/",today.getDate(),"/",today.getFullYear());

//--------------seperator :)---------------\\

function onLoaded(_event)
{
    fixedFish.forEach( item => document.body.appendChild(makeItemDisplay(item)) );
    //change 'fixedFish' in above line to 'fish' to see all fish for debugging or the like
    function makeItemDisplay(data)
    {
        let src = document.getElementById('fishTemplate');
        let newFish = src.content.cloneNode(true);
        let file = "icons/fish/".concat(data.File);
        if  (data.Hours.length == 24) {
            var lastHour = "All day";
        } else if (data.Hours.slice(-1) > 12) { //24-to-12hr conversion 
            var lastHour = "Until " + (data.Hours.slice(-1)-12)+ "pm"; //if past 12 (ex 14hr), subtract 12, add pm (2pm)
        } else if (data.Hours.slice(-1) == 0) { //if 0hr, make 12am
            var lastHour = "Until 12am";
        } else if (data.Hours.slice(-1) == 12) { //if 12hr, make 12pm
            var lastHour = "Until 12pm";
        } else { //if it is between 1-11hr, append "am"
            var lastHour = "Until " + (data.Hours.slice(-1)) + "am";
        }
        

        newFish.querySelector('.fishname').textContent = data.Type;
        newFish.querySelector('.fishico').src = file;
        newFish.querySelector('.fishuntil').textContent = lastHour;
        newFish.querySelector('.fishloc').textContent = data.Location;
        return newFish;
    }
};

//--------------seperator :)---------------\\
var toggled = 1
var listSelect = "#F68900" //highlighted color, orange
var prefSelect = "#F5F0C2" //nonhighlighted color, tan-ish
var infoSelect = "#F5F0C2"
function currentHighlightedAction() {
    document.getElementById("list").style.color = listSelect;
    document.getElementById("pref").style.color = prefSelect;
    document.getElementById("info").style.color = infoSelect;
    
}

function list() {
    listSelect = "#F68900";
    prefSelect = "#F5F0C2";
    infoSelect = "#F5F0C2";
    currentHighlightedAction();
    document.getElementById("pill").innerHTML = "Collection";
    document.getElementById("pill").style.transform = "translate(-55px, 55px)";
    document.getElementById("listSection").style.transform = "translateY(130px)";
    document.getElementById("prefSection").style.transform = "translateY(-2000px)";
    document.getElementById("infoSection").style.transform = "translateY(-2000px)";
}
function pref() {
    listSelect = "#F5F0C2";
    prefSelect = "#F68900";
    infoSelect = "#F5F0C2";
    currentHighlightedAction();
    document.getElementById("pill").innerHTML = "Preferences";
    document.getElementById("pill").style.transform = "translate(0px, 55px)";
    document.getElementById("listSection").style.transform = "translateY(-2000px)";
    document.getElementById("prefSection").style.transform = "translateY(0px)";
    document.getElementById("infoSection").style.transform = "translateY(-2000px)";

}
function info() {
    listSelect = "#F5F0C2";
    prefSelect = "#F5F0C2";
    infoSelect = "#F68900";
    currentHighlightedAction();
    document.getElementById("pill").innerHTML = "About";
    document.getElementById("pill").style.transform = "translate(54px, 55px)";
    document.getElementById("listSection").style.transform = "translateY(-2000px)";
    document.getElementById("prefSection").style.transform = "translateY(-2000px)";
    document.getElementById("infoSection").style.transform = "translateY(-200px)";

}
//------------------------:)
function toggleNav() {
    if (toggled == 0) {
    document.getElementById("mySidenav").style.height = "95%";
    document.getElementById("wipbadge").style.opacity = "1";
    document.getElementById("mySidenav").style.boxShadow = "0px 0px 0px 58px rgba(0,0,0,0.4)";
    list()
    toggled = 1;
  } else {
    document.getElementById("mySidenav").style.height = "0px";
    document.getElementById("wipbadge").style.opacity = "0";
    document.getElementById("mySidenav").style.boxShadow = "none";
    toggled = 0
    }
} 