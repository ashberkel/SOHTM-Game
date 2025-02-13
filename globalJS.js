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