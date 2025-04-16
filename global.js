//movement logic
const mapMoveJs = document.getElementById("mapMove");
$(".movement").click(function()
{   
    const curHor = parseInt(getComputedStyle(mapMoveJs).getPropertyValue("left"));
    const curVert = parseInt(getComputedStyle(mapMoveJs).getPropertyValue("top"));
    var elementId = $(this).attr("id");
    console.log("Clicked button: " + $(this).attr("id"));
    if (curHor === 0 && curVert ===0)
    {
        const doorOpen = new Audio("assets/openDoor.wav");
        doorOpen.play();
    }
    else {
    const footSteps = new Audio("assets/footSteps.wav");
    footSteps.play();
    }
    if (elementId == "moveRight")
    {
        console.log(`Your STARTING point was: ${curHor}px horizontal and ${curVert}px vertical`);
        var newRight = parseInt(curHor) - 825;
        mapMoveJs.style.left = newRight + "px";
        console.log('Your CURRENT point is' + newRight + 'px horizontal and ' + curVert + ' vertical');
        if (newRight === -825 && curVert === 0)
        {
            $("#moveUp, #moveLeft, #moveRight").toggleClass("movementHide");
        }
    }
    else if (elementId == "moveLeft")
    {
        console.log(`Your STARTING point was: ${curHor}px horizontal and ${curVert}px vertical`);
        var newLeft = parseInt(curHor) + 825;
        mapMoveJs.style.left = newLeft + "px";
        console.log(`Your CURRENT point is ${newLeft}px horizontal and ${curVert}px vertical`);
        if (newLeft === 0 && curVert === 0)
        {
            $("#moveUp, #moveLeft, #moveRight").toggleClass("movementHide");
        }
    }
    else if (elementId == "moveUp")
    {
        console.log(`Your STARTING point was: ${curHor}px horizontal and ${curVert}px vertical`);
        var newUp = parseInt(curVert) + 425;
        mapMoveJs.style.top = newUp + "px";
        console.log(`Your CURRENT point is ${curHor}px horizontal and ${newUp}px vertical`);
        if (curHor === -825 && newUp === 425)
            {
                $("#moveUp, #moveDown, #moveLeft").toggleClass("movementHide");
            }
    }
    else if (elementId == "moveDown")
    {
        console.log(`Your STARTING point was: ${curHor}px horizontal and ${curVert}px vertical`);
        var newDown = parseInt(curVert) - 425;
        mapMoveJs.style.top = newDown + "px";
        console.log(`Your CURRENT point is ${curHor}px horizontal and ${newDown}px vertical`);
        if (curHor === -825 && newDown === 0)
            {
                $("#moveUp, #moveDown, #moveLeft").toggleClass("movementHide");
            }
    }
})
//Inventory fill each slot
$("#crate").click(function()
    {
        $(".invItems").each(function()
        {
            if (!$(this).hasClass("filled"))
            {
                $(this).prepend("Yo!"); 
                $(this).addClass("filled");
                const pickupSound = new Audio("assets/clickSoundPick.mp3");
                pickupSound.play(); 
                return false;
            }
        }
        )
    });
    
//Inventory remove each slot
$("#door").click(function()
            {
                $(".invItems").each(function()
                {
                    if ($(this).hasClass("filled"))
                    {
                        $(this).empty("Yo!"); 
                        $(this).removeClass("filled");
                        const useSound = new Audio("assets/clickSoundUse.mp3");
                        useSound.play();  
                        return false;
                    }
                }
                )
            });