console.log('The JS has loaded!');
//array of characters, items, points of interest
const chars = [
    {name: "Frank", num: 0, occupation: "Captain", desc: "Frank doesn't look happy to see you."},
    {name: "Rose", num: 1, occupation: "Scientist", desc: "Rosie looks troubled."}];
console.log(chars[0].desc);

const items = [
    {name: "Box", num: 0, desc: "It's worn and water damaged."},
    {name: "Key", num: 1, desc: "This key is oddly shaped."}];
console.log(items[1].desc);

// click to start dialogue code
var diaId;
var dia;
const diaButton = document.getElementById("diaButton");

const myClickables = document.querySelectorAll('.clickables button');

myClickables.forEach(clickable => {
    clickable.addEventListener('click', processClick);
});

function processClick() {
    window.diaId = this.id;
    diaButton.style.display = "inline";
    switch(window.diaId) {
        case "frank": 
        dia = ["Frank doesn't look too happy."]; break;
        case "rosie": 
        dia = ["Rosie looks happy to see you!"]; break;
    }
    document.getElementById('diaBox').innerHTML = dia;

    setTimeout(function(){document.getElementById('diaBox').innerHTML = ""; diaButton.style.display = "none";},3000);
    //fix so that I calling a clearTimeout on the setTimeout 
}

function leftMove() {
    const mapMoveJs = document.getElementById("mapMove");
    const curLft = getComputedStyle(mapMoveJs).getPropertyValue("left");
    console.log(curLft);
    var newLft = parseInt(curLft) - 825;
    mapMoveJs.style.left = newLft + "px";
}