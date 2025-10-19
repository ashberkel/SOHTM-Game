//array of characters, items, points of interest
console.log("Are floors unlocked?" + floorUnlock);

const character = [
    {name: "charCapn", firstTalk: false, 
      diaOptions: function()
      {
        var dia;
        if (this.firstTalk == false)
        {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "Hello."
          return dia;
        }
        else {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "Captain Niccals: I wish I could help you more...I really  do. But I think it's better if you do some work on your own before we chat some more.";
          return dia;
        }}
    },]
console.log("Loading char test:" + character[0].name);

const clickable = [
    {name: "mirror", desc: "Still got the same dead look in my eyes. It'd be nice if I left that back in Eastwyn."},
    {name: "newspaper", desc: "Enough of that self-serving crap. Ain't helping my mood."},
    {name: "bed", desc: "Middle class comfort? Maybe, but it's too gaudy for my tastes."},
    {name: "luggage", desc: "Delayed indefinitely and only about four days worth of luggage. Just my luck."},
    {name: "doorNum", desc: "Numbers with no real meaning._Besides telling me where I'm supposed to sleep, there's nothing else to figure out."},
    {name: "carpet", desc: "Maybe the ship stopped cuz the crew’s just sittin’ somewhere, mesmerized by these godawful carpet patterns."},
    {name: "elevator", desc: "Real pretty design. Hope it works better than the rest of this ship."}]
    console.log("Loading clickables test:" + clickable[2].name);