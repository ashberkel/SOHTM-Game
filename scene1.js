//array of characters, items, points of interest
const chars = [
    {name: "Frank", firstTalk: false, occupation: "Captain", desc: "Frank is the ship's janitor. He doesn't look happy to see you.", 
      diaOptions: function()
      {
        var dia;
        if (this.firstTalk == false)
        {
          this.firstTalk = true;
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "Guess you're the new meat?_Well, whatever. I'm Frank. Just don't get in my way."
          return dia;
        }
        else if (items[0].inInv == true)
        {
          dia = "Wait...where the hell did you get that?_Did you go into my room or something??";
          return dia;
        }
        else {
          console.log(this.firstTalk);
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "Don't you have anything better to do??";
          return dia;
        }
      },
    },
    {name: "Rose", firstTalk: false, occupation: "Scientist", desc: "Rosie looks troubled.", locketGet: "..._Wait, where did you..._...pardon, forget I said anything."}];
    console.log(typeof chars);
    console.log(chars[0].desc);

const clickable = [
    {name: "mirror", desc: "Still got the same dead look in my eyes. It'd be nice if I left that back in Eastwyn."},
    {name: "newspaper", desc: "Enough of that self-serving crap. Ain't helping my mood."},
    {name: "bed", desc: "Middle class comfort? Maybe, but it's too gaudy for my tastes."},
    {name: "luggage", desc: "Delayed indefinitely and only about four days worth of luggage. Just my luck."},
    {name: "doorNum", desc: "Numbers with no real meaning._Besides telling me where I'm supposed to sleep, there's nothing else to figure out."},
    {name: "carpet", desc: "Maybe the ship stopped cuz the crew’s just sittin’ somewhere, mesmerized by these godawful carpet patterns."},
    {name: "elevator", desc: "Real pretty design. Hope it works better than the rest of this ship."}]

const items = [
    {name: "Crate", inInv: false, desc: "It's worn and water damaged."},
    {name: "Key", inInv: false, desc: "This key is oddly shaped."}]
  console.log(items[0].inInv);