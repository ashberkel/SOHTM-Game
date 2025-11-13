//assets
const MCChoice = localStorage.getItem("MCChoice");
let floorUnlock = false;
let floor6First = true;
let invCount = 0;
const woodCrack = new Audio("assets/WoodCrack.mp3");
const walkNoise = new Audio("assets/footSteps.wav");
const dining3Music = new Audio("assets/Ragtime_Annie.mp3");
const dining6Music = new Audio("assets/Intro_And_Tarantelle.mp3");
const pickupSound = new Audio("assets/clickSoundPick.mp3");
const useSound = new Audio("assets/clickSoundUse.mp3");
const errorSound = new Audio("assets/Error.mp3");

console.log("Your MCChoice is: " + MCChoice);
//movement logic
$(document).ready(function () {
    //movement logic
    X = 0
    Y = 0
    Z = 3
    coord = ""
    room = ``
    $(".movement, .floors").click(function () {
        ID = this.id
        if (ID === "moveRight" || ID === "moveLeft" || ID === "moveUp" || ID === "moveDown") {
            walkNoise.play();
            walkNoise.volume = .2;
        }
        if (ID == "floorB1") { Z = 0 }
        if (ID == "floor3") { Z = 3 }
        if (ID == "floor4") { Z = 4 }
        if (ID == "floor6") { Z = 6 }
        if (ID == "floorO1") { Z = 7 }
        if (ID == "moveRight") { X += 1 }
        else if (ID == "moveLeft") { X -= 1 }
        else if (ID == "moveUp") { Y += 1 }
        else if (ID == "moveDown") { Y -= 1 }
        coord = `${Z},${X},${Y}`
        switch (coord) {
            case "3,0,0":
                room = "MCRoom"
                $(".clickables").addClass("hide");
                $(".clickables.MCRoom").removeClass("hide");
                $("#moveUp, #moveDown, #moveLeft").addClass("hide");
                $("#moveRight").toggleClass("hide");
                $("#playView").css("background-image", "url('images/rooms/MCRoom.jpg')");
                break;
            case "3,1,0":
                room = "MCHall"
                $(".clickables").addClass("hide");
                $(".clickables.MCHall").removeClass("hide");
                $("#moveDown, #moveRight").addClass("hide");
                $("#moveUp, #moveLeft").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/MCHall.jpg')");
                break;
            case "3,1,1":
                room = "Elevator3"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveLeft").addClass("hide");
                $("#moveDown, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                break;
            case "3,1,2":
                room = "Floor3"
                $(".floors").removeClass("current");
                $("#floor3").addClass("current");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp").addClass("hide");
                $("#moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors3-4O.jpg')");
                break;
            case "4,1,2":
                room = "Floor4"
                $(".floors").removeClass("current");
                $("#floor4").addClass("current");
                $("#moveDown").removeClass("hide");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp").addClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors34-O.jpg')");
                dining3Music.play();
                dining3Music.volume = 0;
                break;
            case "4,1,1":
                room = "Elevator4"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveDown, #moveLeft").addClass("hide");
                $("#moveRight, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                dining3Music.play();
                dining3Music.volume = .1;
                break;
            case "4,2,1":
                room = "Hall4"
                $(".clickables").addClass("hide");
                $(".clickables.Hall4").removeClass("hide");
                $("#moveRight, #moveDown, #charCapn").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Hallway4.jpg')");
                dining3Music.play();
                dining3Music.volume = .2;
                break;
            case "4,2,2":
                room = "Dining4Left"
                $(".clickables").addClass("hide");
                $(".clickables.Dining4Left").removeClass("hide");
                $("#moveLeft, #moveUp, #charHugh, .dining4Wall").addClass("hide");
                $("#moveRight, #moveDown, #charCapn").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Dining4Lft.jpg')");
                dining3Music.play();
                dining3Music.volume = .3;
                break;
            case "4,3,2":
                room = "Dining4Right"
                $(".clickables").addClass("hide");
                $(".clickables.Dining4Right").removeClass("hide");
                $(".clickables, #charCapn").addClass("hide");
                $(".clickables.DiningLeft, #charHugh, .dining4Wall").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft").removeClass("hide");
                if (item[1].inInv == false) { $("#playView").css("background-image", "url('images/rooms/Dining4Rgt.jpg')"); }
                else { $("#playView").css("background-image", "url('images/rooms/Dining4RgtAft.jpg')"); }
                break;
            case "7,1,2":
                room = "FloorO1"
                $(".floors").removeClass("current");
                $("#floorO1").addClass("current");
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp, #moveRight").addClass("hide");
                $("#moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Floors34O-.jpg')");
                break;
            case "7,1,1":
                room = "ElevatorO1"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveLeft, #moveDown").addClass("hide");
                $("#moveRight, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                break;
            case "7,2,1":
                room = "HallO1"
                $(".clickables").addClass("hide");
                $(".clickables.HallO1").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/HallO1.png')");
                break;
            case "7,2,2":
                room = "HallO1Out"
                $(".clickables").addClass("hide");
                $(".clickables.HallO1Out").removeClass("hide");
                $("#moveUp, #moveLeft").addClass("hide");
                $(" #moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/HallO1Out.jpg')");
                break;
        }
        if (floorUnlock) {
            switch (coord) {
                case "0,1,2":
                    room = "FloorB1"
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveLeft, #crowbar").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB-346O.jpg')");
                    break;
                case "0,1,1":
                    room = "ElevatorB1"
                    $(".clickables").addClass("hide");
                    $(".clickables.elevator, #crowbar").removeClass("hide");
                    $("#moveDown, #moveLeft").addClass("hide");
                    $("#moveUp").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/ElevB.jpg')");
                    break;
                case "3,1,2":
                    room = "Floor3"
                    $(".floors").removeClass("current");
                    $("#floor3").addClass("current");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB3-46O.jpg')");
                    break;
                case "4,1,2":
                    room = "Floor4"
                    $(".floors").removeClass("current");
                    $("#floor4").addClass("current");
                    $("#moveDown").removeClass("hide");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB34-6O.jpg')");
                    dining3Music.play();
                    dining3Music.volume = 0;
                    break;
                case "6,1,2":
                    room = "Floor6"
                    $(".floors").removeClass("current");
                    $("#floor6").addClass("current");
                    $(".clickables, #charMads").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveRight").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB346-O.jpg')");
                    dining6Music.play();
                    dining6Music.volume = 0;
                    break;
                case "6,1,1":
                    room = "Elevator6"
                    if (floor6First === true) {
                        firstDia = "???: Excuse me, may I see your holocard?_Knock yourself out._???: ...Third Class up to First Class? You must be someone particularly special._I'm a...friend of the captain I guess._???: A friend. I suppose then we are friends too. You may call me Mads. Please, I won't interrupt any further."
                        $("#roomFade").removeClass("hide");
                        diaSplit(firstDia);
                        floor6First = false;
                    }
                    $(".clickables, #charSci").addClass("hide");
                    $(".clickables.elevator, #charMads").removeClass("hide");
                    if (character[2].withHugh = true) {
                    $(".clickables.elevator, #charMads2").removeClass("hide");
                    }
                    $("#moveDown").addClass("hide");
                    $("#moveLeft, #moveRight, #moveUp").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                    dining6Music.play();
                    dining6Music.volume = .3;
                    break;
                case "6,0,1":
                    room = "Dining6Lft"
                    $(".clickables, #charMads, #charSci").addClass("hide");
                    $("#moveLeft, #moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Dining6Lft.jpg')");
                    break;
                case "6,2,1":
                    room = "Dining6Rgt"
                    $(".clickables, #charMads").addClass("hide");
                    $("#charSci").removeClass("hide");
                    $("#moveRight, #moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Dining6Rgt.jpg')");
                    break;
                case "7,1,2":
                    room = "FloorO1"
                    $(".floors").removeClass("current");
                    $("#floorO1").addClass("current");
                    $(".clickables").addClass("hide");
                    $(".clickables.floors").removeClass("hide");
                    $("#moveUp, #moveRight").addClass("hide");
                    $("#moveDown").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/FloorsB346O-.jpg')");
                    break;
            }
        }
        console.log("Coordinates:" + coord + " Room:" + room)
    });
});
//Clickables
$(".clickables").click(function () {
    const thisClick = this;
    const Hugh = $("#charHugh");
    let desc
    console.log("Clickable activated:" + thisClick.id)
    for (const c of clickable) {
        if (thisClick.id === "mirror") {
            if (MCChoice === "MCCat") {
                $("#MCMirrorPic").attr("src", "images/characters/MCCat.gif");
            } else {
                $("#MCMirrorPic").attr("src", "images/characters/MCDog.gif");
            }
            desc = c.desc;
            diaSplit(desc, () => {
                // Clear the image after diaSplit finishes
                $("#MCMirrorPic").attr("src", "");
            });
            break; // stop searching after mirror
        }
        if ($(this).hasClass("inactive")) {
            desc = "Locked out. Looks like some floors are off-limits._Maybe they don't like the creaturefolk mixing with the elites.";
            diaSplit(desc);
            break;
        }
        if ($(this).hasClass("current")) {
            desc = "I'm already on that floor.";
            diaSplit(desc);
            break;
        }
        if (thisClick.id === Hugh && character[2].envelopeTalk === true) {
            desc = c.desc;
            diaSplit(desc);
            $(Hugh).addClass("deleted");
            break; // stop searching after match
        }
        if (thisClick.id === c.name) {
            desc = c.desc;
            diaSplit(desc);
            break; // stop searching after match
        }
    }
});
//Special Characters
$(".characters").click(function () {
    const thisChar = this;
    $("#roomFade").removeClass("hide");
    for (const ch of character) {
        if (thisChar.id === ch.name) {
            if (thisChar.id === "charMon") {
            console.log("BAD OMEN INCOMING")
            setTimeout(() => {
            $("#charMon").attr("src", "images/characters/Mon2.gif");
            $("#diaButton").addClass("hide");
            dia = "BADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMENBADOMEN"
            diaSplit(dia);
            errorSound.play();
            errorSound.volume = .5;
            }, 3000);
            setTimeout(() => {
            window.parent.badOmenAdd();
            }, 3500);
            setTimeout(() => {
            window.parent.badOmenClear();
            $("#charMon").addClass("deleted");
            $("#diaButton").removeClass("hide");
            errorSound.volume = .0;
            }, 11000);
            setTimeout(() => {
            dia = "...?_Huh. Thought I saw someone._...nevermind."
            diaSplit(dia);
            }, 11500);
            }
            dia = ch.diaOptions();
            diaSplit(dia);
            ch.firstTalk = false;
            if (thisChar.id === "charCapn") {
                floorUnlock = true;
                $("#floorB1, #floor6").removeClass("inactive");
            }
            console.log("Are floors unlocked?" + floorUnlock);
            break; // stop searching after match
        }
    }
});
//MAJOR - Item Handling
$(".items").click(function () {
    const thisItem = this;
    const id = thisItem.id;
    const obj = item.find(x => x.name === thisItem.id);
    const crowbar = item.find(x => x.name === 'crowbar');
    item.forEach(i => {
        //special cases
        if (!obj) {
            console.warn('No data object found for', id);
            return;
        }
        if (id === 'paperScrap1') {
            if (crowbar.inInv == true) {
                woodCrack.play();
                console.log("You DO have the crowbar.");
                obj.inInv = true;
                diaSplit("Ugh! Right...well._I hope that no one important saw that. I'd rather not pay for damages because of this.");
                woodCrack.play();
                //INSERT CROWBAR REMOVE FROM INVENTORY HERE
                $('.dining4Wall').addClass('deleted');
                return;
            }
            if (crowbar.inInv == false) {
                diaSplit(clickable[10].desc);
                console.log("You DON'T have the crowbar.");
                return;
            }
        }
        if (obj && !obj.inInv) {
            console.log("Comparing to item database:", thisItem.id, " = ", i.name);
            obj.inInv = true;
            for (t in $('.invItems')) {
                invCount += 1;
                if (!$('.invItems').hasClass("hide")) {
                    console.log("Count is", invCount)
                    $(thisItem).addClass("hide");
                    $("#" + invCount).addClass(obj.id);
                    $("#" + invCount).append("<img width= '70px' src='images/objects/" + i.name + ".png' />")
                    $("#" + invCount).addClass("filled");
                    pickupSound.play();
                    console.log("Added:", i, " to inventory");
                    return false;
                }
            }
        }
    })
});


//adds to the inventory slot

//Inventory desc click
$(".invItems").click(function () {
    const thisPic = this;
    console.log("Click on:", thisPic.id);
    item.forEach(i => {
        if ($(thisPic).hasClass(i.name)) {
            desc = i.desc;
            invClick(desc);
        }
    })
});

//Inventory remove each slot
function removeItem(id) {
    var id
    $(".invItems").each(function () {
        if ($(this).hasClass("filled") && $(this).hasClass(id)) {
            $(this).empty();
            $(this).removeClass("filled");
            useSound.play();
            return false;
        }
    }
    )};

//Inventory click
function invClick(dia, onDone) {
    document.getElementById('diaBox').innerHTML = dia;
    const clear = () => {
        document.getElementById('diaBox').innerHTML = "";
    }
    const myTimeout = setTimeout(clear, 2000);
}

//Dialogue splitting
function diaSplit(dia, onDone) {
    const splitUp = dia.split("_");
    var n = 0;
    diaButton.style.display = "inline";
    document.getElementById('diaBox').innerHTML = splitUp[n];
    $('#moveIcons').addClass("hide");
    $("#diaButton").off("click");
    $("#diaButton").click(function () {
        n += 1;
        if (splitUp[n] != undefined) {
            document.getElementById('diaBox').innerHTML = splitUp[n];
        }
        else {
            document.getElementById('diaBox').innerHTML = "";
            diaButton.style.display = "none";
            $('#moveIcons').removeClass("hide");
            $("#roomFade").addClass("hide");
            n = 0;
        }
        console.log(`Current n count is` + n);
        if (onDone) onDone();
    })
}
