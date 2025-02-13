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
// movement stuff
const mapMoveJs = document.getElementById("mapMove");

function moveLeft() {
    const curHor = getComputedStyle(mapMoveJs).getPropertyValue("left");
    console.log(curHor);
    var newLft = parseInt(curHor) - 825;
    mapMoveJs.style.left = newLft + "px";
}
function moveRight() {
    const curHor = getComputedStyle(mapMoveJs).getPropertyValue("left");
    console.log(curHor);
    var newRght = parseInt(curHor) + 825;
    mapMoveJs.style.left = newRght + "px";
}
function moveUp() {
    const curVert = getComputedStyle(mapMoveJs).getPropertyValue("top");
    console.log(curVert);
    var newUp = parseInt(curVert) + 425;
    mapMoveJs.style.top = newUp + "px";
}
function moveDown() {
    const curVert = getComputedStyle(mapMoveJs).getPropertyValue("top");
    console.log(curVert);
    var newDown = parseInt(curVert) - 425;
    mapMoveJs.style.top = newDown + "px";
}

//use this as a means to construct the ship and people
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  let passengers = {
    jack: {
      
    }
  }