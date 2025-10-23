//array of characters, items, points of interest
let madsTalk = false;
let sciTalk = false;

console.log("Are floors unlocked?" + floorUnlock);

const character = [
    {name: "charCapn", firstTalk: true, 
      diaOptions: function()
      {
        var dia;
        if (this.firstTalk == true)
        {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "???: G'evening, sir. I hope you're enjoying the refreshments._Enjoying it enough. What's the deal anyways?_???: We've had some issues with our heading, that's all. Bad data. We're trying to figure out how to get back on course._Hm._???: Sir?_Gotta call bullshit when I hear it. The wind doesn't sound like we're moving, and the clouds are near stopped out the window._???: ...interesting. I don't think I have your name._I didn't give it. But it's Nicholas Carter._???: That’s...Detective Carter, isn’t it? I’m Captain Niccals._Captain Niccals: I couldn't quite place that face until you said it. Quite famous work you do._I just like making sure problems get solved._Captain Niccals: Problems.._Captain Niccals: ...._Captain Niccals: Look, I'll be frank. Normally I wouldn't even be humoring you, but these are...odd circumstances._Captain Niccals: It's...looking like someone from our own crew is causing the issue. It's the only explanation._Causing the problem?_ Captain Niccals: Basically, our engines are dead in the water. Someone sabotaged it._Captain Niccals: And the narrow group of people who could even get close to the reactor is..._So...basically. It may not be smart to rely on inside help only._ Captain Niccals: Mm. Seems so. I can't exactly just let you waltz in just like that...it isn't my authority. _ Captain Niccals: But...may I see your holocard for a moment._Knock yourself out._ ...._ Captain Niccals: There. I've given you access to a few more floors, notably the first class ballroom._Captain Niccals: Head scientist Gven is up there now trying to keep the peace._Why is she there and the captain down uh...here in the slums?_Captain Niccals: I might be captain, but I'm really just pointing the nose ahead. She's the one actually keeping us afloat._ Right..._Captain Niccals: Talk to her. Show her your holocard...I've left a note so that she'll humor you. From there, who knows.._Captain Niccals: But it's the only real place to start. She knows more about this mess than I do._...and she can be trusted?_Captain Niccals: This ship is her magnum opus. I hardly believe she'd sabotage things after all this._Right...fine. Not really one for R&R anyways. I'll be back if I have anything._ Captain Niccals: Good man."
          return dia;
        }
        else {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "Captain Niccals: I wish I could help you more...I really  do. But I think it's better if you do some work on your own before we chat some more.";
          return dia;
        }}
    },
    {name: "charHugh", firstTalk: true, 
      diaOptions: function()
      {
        var dia;
            if (this.firstTalk == true)
        {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "????:...what? You need something?_Not really...ehh, I guess...what's your opinion on this situation?_???: I don't really know, or care. All I know is we're dead in the water; they can keep saying it's navigational issues but that's a lot of shit._Yeah, my sentiments exactly."
          return dia;
        }
        else {
          console.log("First time you've met this character?" + this.firstTalk);
          dia = "???:Don't you have anything better to do than standing around and botherin' me?";
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
    {name: "elevator", desc: "Real pretty design. Hope it works better than the rest of this ship."},
    {name: "floatLights", desc: "The lights in there just float. I don't really understand how it works.."},
    {name: "Dine4Lamp", desc: "Tacky. That's the only polite way to put it honestly."},
    {name: "Dine4Window", desc: "At least the view is nice to look at._No bullshit, no pomp...just the sea of stars out there."},
    {name: "largeFloat", desc: "An artificial sea of stars...at least, that's what it looks like to me._Kinda embarrassing when the real deal is right outside the window."},
    {name: "bigSky", desc: "...._Makes you realize all the shit down here doesn't matter much."},
    {name: "umbrella", desc: "I'm sure they're nice to have on a day flight, but right now they're just taking up the view."},
    {name: "poolSeat", desc: "I can imagine some pretty dames soaking up the sun on these things."}]
    console.log("Loading clickables test:" + clickable[2].name);