// movement stuff
const mapMoveJs = document.getElementById("mapMove");

$("#moveRight").click(function()
    {
    const curHor = getComputedStyle(mapMoveJs).getPropertyValue("left");
    console.log(curHor);
    var newLft = parseInt(curHor) - 825;
    mapMoveJs.style.left = newLft + "px";})

$("#moveLeft").click(function()
    {
    const curHor = getComputedStyle(mapMoveJs).getPropertyValue("left");
    console.log(curHor);
    var newRght = parseInt(curHor) + 825;
    mapMoveJs.style.left = newRght + "px";})

    $("#moveUp").click(function()
    {
    const curVert = getComputedStyle(mapMoveJs).getPropertyValue("top");
    console.log(curVert);
    var newUp = parseInt(curVert) + 425;
    mapMoveJs.style.top = newUp + "px";})

    $("#moveDown").click(function()
    {
    const curVert = getComputedStyle(mapMoveJs).getPropertyValue("top");
    console.log(curVert);
    var newDown = parseInt(curVert) - 425;
    mapMoveJs.style.top = newDown + "px";})

//Inventory fill each slot
$("#crate").click(function()
    {
        $(".invItems").each(function()
        {
            if (!$(this).hasClass("filled"))
            {
                $(this).prepend("Yo!"); 
                $(this).addClass("filled"); 
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
                        return false;
                    }
                }
                )
            });