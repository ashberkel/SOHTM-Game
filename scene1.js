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

const items = [
    {name: "Crate", inInv: false, desc: "It's worn and water damaged."},
    {name: "Key", inInv: false, desc: "This key is oddly shaped."}]
  console.log(items[0].inInv);