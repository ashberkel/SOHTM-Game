const MCChoice = localStorage.getItem("MCChoice");
console.log("Your MCChoice is: " + MCChoice);
//movement logic -- FIX ARROW PLACEMENT & FIX COORDINATES (UP / DOWN INVERTED CUZ OF QUILT)
$(document).ready(function()
{
  X = 0
  Y = 0
  Z = 0
  coord = ""
  room = ``
  $(".movement").click(function()
  {
  	ID = this.id
    if (ID == "moveRight")
     {X += 1}
    else if (ID == "moveLeft")
     {X -= 1}
    else if (ID == "moveUp")
     {Y += 1}
    else {Y -= 1}
   coord = `${Z},${X},${Y}`
   switch(coord) {
   case "0,0,0":
   room = "Bedroom"
   $("#moveUp").addClass("hide");
   $("#moveDown").addClass("hide");
   $("#moveLeft").addClass("hide");
   $("#moveRight").toggleClass("hide");
      $("#playView").css("background-image", "url('images/rooms/MCBed.jpg')");
   break;
   case "0,1,0":
   room = "Hallway"
   $("#moveUp").removeClass("hide");
   $("#moveDown").addClass("hide");
   $("#moveLeft").removeClass("hide");
   $("#moveRight").addClass("hide");
   $("#playView").css("background-image", "url('images/rooms/MCHall.jpg')");
   break;
   case "0,1,1":
   room = "Elevator"
   $("#moveDown").toggleClass("hide");
   $("#moveLeft").addClass("hide");
      $("#playView").css("background-image", "url('images/rooms/Elev.jpg')");
   break;
   }
     $("#coordinates").text("Coordinates:" + coord + "Room:" + room)
  });
});

//Inventory fill each slot
$(".items").click(function()
    {
        thisItem = this;
        console.log("Clicked on:", thisItem.id);
        items.forEach(n =>
        {
            if (thisItem.id === n.name)
            {
                console.log("Comparing to item:", n.name);
                n.inInv = true;
                console.log("You got the" + n.name + items[0].inInv);
            }
            else {}
        });
        $(".invItems").each(function()
        {
            if (!$(this).hasClass("filled"))
            {
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

//Dialogue splitting
function diaSplit(dia) {
    const splitUp = dia.split("_");
    var n = 0;
    diaButton.style.display = "inline";
    document.getElementById('diaBox').innerHTML = splitUp[n];
    $('#moveIcons').addClass("hide");
    $("#diaButton").off("click");
    $("#diaButton").click(function(){
        n += 1;
        if (splitUp[n] != undefined)
        {
        document.getElementById('diaBox').innerHTML = splitUp[n];
        }
        else {
        document.getElementById('diaBox').innerHTML = "";
        diaButton.style.display = "none";
        $('#moveIcons').removeClass("hide");
        n = 0;
    }
    console.log(`Current n count is` + n);
    })
}