const MCChoice = localStorage.getItem("MCChoice");
let floorUnlock = true;
let floor6First = true;
console.log("Your MCChoice is: " + MCChoice);
//movement logic
$(document).ready(function () {
    //movement logic
    X = 0
    Y = 0
    Z = 3
    coord = ""
    room = ``
    const walkNoise = new Audio("assets/footSteps.wav");
    const dining3Music = new Audio("assets/Ragtime_Annie.mp3");
    const dining6Music = new Audio("assets/Intro_And_Tarantelle.mp3");
    $(".movement, .floors").click(function () {
        ID = this.id
        if (ID === "moveRight" || ID === "moveLeft" || ID === "moveUp" || ID === "moveDown") {
            walkNoise.play();
            walkNoise.volume = .2;}
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
                room = "Bedroom"
                $(".clickables").addClass("hide");
                $(".clickables.MCRoom").removeClass("hide");
                $("#moveUp, #moveDown, #moveLeft").addClass("hide");
                $("#moveRight").toggleClass("hide");
                $("#playView").css("background-image", "url('images/rooms/MCRoom.jpg')");
                break;
            case "3,1,0":
                room = "Hallway"
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
                $("#moveRight, #moveDown, #charHugh").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/DiningHall.jpg')");
                dining3Music.play();
                dining3Music.volume = .2;
                break;
            case "4,2,2":
                room = "DiningLeft"
                $("#moveLeft, #moveUp, #charCapn").addClass("hide");
                $("#moveRight, #moveDown, #charHugh").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/DiningLft.jpg')");
                dining3Music.play();
                dining3Music.volume = .3;
                break;
            case "4,3,2":
                room = "DiningRight"
                $(".clickables, #charHugh").addClass("hide");
                $(".clickables.DiningLeft, #charCapn").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/DiningRgt.jpg')");
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
                $(".clickables.elevator").removeClass("hide");
                $("#moveRight, #moveDown").addClass("hide");
                $("#moveLeft, #moveUp").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/ObsvHall.png')");
                break;
            case "7,2,2":
                room = "OutO1"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
                $("#moveUp, #moveLeft").addClass("hide");
                $(" #moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/ObsvOut.jpg')");
                break;
        }
        if (floorUnlock) {
        switch(coord) {
            case "0,1,2":
                room = "FloorB1"
                $(".clickables").addClass("hide");
                $(".clickables.floors").removeClass("hide");
                $("#moveUp, #moveLeft").addClass("hide");
                $("#moveDown").removeClass("hide");
                $("#playView").css("background-image", "url('images/rooms/FloorsB-346O.jpg')");
                break;
            case "0,1,1":
                room = "ElevatorB1"
                $(".clickables").addClass("hide");
                $(".clickables.elevator").removeClass("hide");
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
                        firstDia = "???: Excuse me, may I see your holocard?_Knock yourself out._???: ...I see. Third Class up to First Class? You must be someone particularly special._I'm a...friend of the captain I guess._???: A friend. I suppose then we are friends too. Call me Mads."
                        $("#roomFade").removeClass("hide");
                        diaSplit(firstDia);
                        floor6First = false;
                    }
                    $(".clickables").addClass("hide");
                    $(".clickables.elevator, #charMads").removeClass("hide");
                    $("#moveDown").addClass("hide");
                    $("#moveLeft, #moveRight, #moveUp").removeClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
                    dining6Music.play();
                    dining6Music.volume = .5;
                    break;
                case "6,0,1":
                    room = "Dining6Lft"
                    $(".clickables, #charMads").addClass("hide");
                    $(".clickables.elevator").removeClass("hide");
                    $("#moveLeft, #moveUp").addClass("hide");
                    $("#playView").css("background-image", "url('images/rooms/Dining6Lft.jpg')");
                    break;
                case "6,2,1":
                    room = "Dining6Rgt"
                    $(".clickables, #charMads").addClass("hide");
                    $(".clickables.elevator").removeClass("hide");
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
        }}
        console.log("Coordinates:" + coord + " Room:" + room)
    });});
    //Clickables
    $(".clickables").click(function () {
        const thisItem = this;
        let desc
        console.log("Clickable activated:" + thisItem.id)
        for (const c of clickable) {
            if (thisItem.id === "mirror") {
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

            if (thisItem.id === c.name) {
                desc = c.desc;
                diaSplit(desc);
                break; // stop searching after match
            }
        }
    });
    //Characters
    $(".characters").click(function () {
        const thisChar = this;
        $("#roomFade").removeClass("hide");
        for (const ch of character) {
            if (thisChar.id === ch.name) {
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
    //Inventory fill each slot
    $(".items").click(function () {
        thisItem = this;
        console.log("Clicked on:", thisItem.id);
        items.forEach(n => {
            if (thisItem.id === n.name) {
                console.log("Comparing to item:", n.name);
                n.inInv = true;
                console.log("You got the" + n.name + items[0].inInv);
            }
            else { }
        });
        $(".invItems").each(function () {
            if (!$(this).hasClass("filled")) {
                $(this).prepend(thisItem.id);
                $(this).addClass("filled");
                const pickupSound = new Audio("assets/clickSoundPick.mp3");
                pickupSound.play();
                return false;
            }
        }
        )
    });
    //Inventory remove each slot
    $("#door").click(function () {
        $(".invItems").each(function () {
            if ($(this).hasClass("filled")) {
                $(this).empty("Yo!");
                $(this).removeClass("filled");
                const useSound = new Audio("assets/clickSoundUse.mp3");
                useSound.play();
                return false;
            }
        }
        )
    });
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
