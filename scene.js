console.log("Are floors unlocked?" + floorUnlock);

const character = [
  {
    name: "charCapn", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???: G'evening, sir. I hope you're enjoying the refreshments._Enjoying it enough. What's the deal anyways?_???: We've had some issues with our heading, that's all. Bad data. We're trying to figure out how to get back on course._Hm._???: Sir?_Gotta call bullshit when I hear it. The wind doesn't sound like we're moving, and the clouds are near stopped out the window._???: ...interesting. I don't think I have your name._I didn't give it. But it's Nicholas Carter._???: That’s...Detective Carter, isn’t it? I’m Captain Niccals._Captain Niccals: I couldn't quite place that face until you said it. Quite famous work you do._I just like making sure problems get solved._Captain Niccals: Problems.._Captain Niccals: ...._Captain Niccals: Look, I'll be frank. Normally I wouldn't even be humoring you, but these are...odd circumstances._Captain Niccals: It's...looking like someone from our own crew is causing the issue. It's the only explanation._Causing the problem?_ Captain Niccals: Basically, our engines are dead in the water. Someone sabotaged it._Captain Niccals: And the narrow group of people who could even get close to the reactor is..._So...basically. It may not be smart to rely on inside help only._ Captain Niccals: Mm. Seems so. I can't exactly just let you waltz in just like that...it isn't my authority. _ Captain Niccals: But...may I see your holocard for a moment._Knock yourself out._ ...._ Captain Niccals: There. I've given you access to a few more floors, notably the first class ballroom._Captain Niccals: Head scientist Gven is up there now trying to keep the peace._Why is she there and the captain down uh...here in the slums?_Captain Niccals: I might be captain, but I'm really just pointing the nose ahead. She's the one actually keeping us afloat._ Right..._Captain Niccals: Talk to her. Show her your holocard...I've left a note so that she'll humor you. From there, who knows.._Captain Niccals: But it's the only real place to start. She knows more about this mess than I do._...and she can be trusted?_Captain Niccals: This ship is her magnum opus. I hardly believe she'd sabotage things after all this._Right...fine. Not really one for R&R anyways. I'll be back if I have anything._ Captain Niccals: Good man."
        dia = "Captain test. REMOVE THIS."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Captain Niccals: I wish I could help you more...I really  do. But I think it's better if you do some work on your own before we chat some more.";
        return dia;
      }
    }
  },
  {
    name: "charSci", firstTalk: true,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Excuse me...are you Gwen?_Gwen: I don't recognize you so I can't understand why you're being so informal with me. Can I help you, sir?_Yeah. Captain Murdoch sent me about a hunch I have regarding the ship. Said to give you this to prove he sent me._Gwen:...oh really? He sent you up here...based on a hunch of some kind?_I wouldn't really call 14 solved cases under my belt a hunch. Seems like you guys have a...delicate situation on your hands and he just wants some professional help that's not so..._Gwen: Close to the source?_Yeah, that._Gwen: Hm._Gwen:...._Gwen: I suppose I can humor you. There's really not any other choice as without the culprit...we could be stuck here much longer._Gwen: But I also can't just let a random citizen waltz around sensitive areas...especially when it comes to the delicate nature of how this airship gets around._Can't argue with that. I wouldn't do it either._Gwen: For now...here's what I suggest. Go talk to the engineer on Level B1. Apparently he saw some information regarding the hours before this incident._Right...thanks, m'am._Gwen: Ugh, no. Just call me Gwen if the alternative is that."
        dia = "Scientist test. REMOVE THIS."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "Gwen: Well? Unless you have actual news, I'd prefer you not waste my time.";
        return dia;
      }
    }
  },
  {
    name: "charMads", firstTalk: true, envelopeTalk: false, withHugh: false,
    addEnvelope: function () {
      for (t in $('.invItems')) {
        invCount += 1;
        if (!$('.invItems').hasClass("hide")) {
          console.log("Count is", invCount)
          $("#" + invCount).addClass("envelope");
          $("#" + invCount).append("<img width= '70px' src='images/objects/envelope.png' />")
          $("#" + invCount).addClass("filled");
          pickupSound.play();
          console.log("Added envelope to inventory");
          return false;
        }
      }
    },
    diaOptions: function () {
      var dia;
      if (character[1].firstTalk == false && this.envelopeTalk == false) {
        dia = "Mads: By the way...did you happen to come across a grumpy looking ram? His name is Hugh._Maybe...not sure._Mads: Might I ask a favor? I have a letter I've been meaning to give him...unfortunately, it's been impossible to get ahold of him lately._Mads: Likely because he is avoiding me._And you want me to be your errand boy?_I assure you that it won't be for nothing. I overheard your chat with Miss Gwen._Eavesdropping too?_Mads: It's my job to be on the lookout for anything suspicious. I can't help but...oversee many things._Uh huh.._)Mads: Regardless. It might interest you to know there's someone of interest that may have...taken something._Taken something?_Mads: Yes, rather important. Out of the senior technicians pocket._...that's not considered suspicious?_Mads: It is. But that particular technician was awfully rude to me the other day. And I dont tolerate the rude._...._Mads: Regardless, you should know this thief is extremely...nosy. If they knew something most don't, and the theft had something to do with it.._Right. And you think that's considered a lead?_Mads: Perhaps, but that's for you to decide detective. Well? I look forward to your return after you talk to Hugh. "
        dia = "Mads wants Hugh test. REMOVE THIS."
        this.addEnvelope();
        this.envelopeTalk = true;
        return dia;
      }
      if (this.withHugh == true) {
        dia = "Hannibal: I cannot thank you enough for helping with my letter. I think this worked out quite well."
        return dia;
      }
      if (character[3] && character[3].giveEnvelope == true) {
        dia = "Mads: You shouldn't be so irate. And you even left your post.._Hug: I don't give a damn, Mads. Don't go sending shit like this with random strangers. What if he opened it??_Mads: Of course he wouldn't. We had a deal after all._Hugh: Do I want to know?_Mads: Don't worry, dear Hugh. Well, thank you detective...just for you, I'll let you know the culprit was...._Mads: Miss Penelope Parker._Penelope Parker, the tabloid reporter?? Yeah, if anyone's snooping around, it's her. I'll keep my eye out for her..._Mads: Please do. And thank you again."
        this.withHugh = true;
        dia = "Mads and Hugh finish. Penelope unlocked. REMOVE THIS."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "He doesn't seem interested in addressing you anymore. He's too busy looking around the ballroom.";
        return dia;
      }
    }
  },
  {
    name: "charHugh", firstTalk: true, giveEnvelope: false,
    diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "????:...what? You need something?_Not really...ehh, I guess...what's your opinion on this situation?_???: I don't really know, or care. All I know is we're dead in the water; they can keep saying it's navigational issues but that's a lot of shit._Yeah, my sentiments exactly."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???:Don't you have anything better to do than standing around and botherin' me?";
        return dia;
      }
    }
  },
  {name:"charHugh2",
    diaOptions: function () {
        dia = "Hugh: Sorry you had to put up with this idiot."
        return dia;
      }},
  {
    name: "charPen", firstTalk: true,
      diaOptions: function () {
      var dia;
      if (this.firstTalk == true) {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "????:...what? You need something?_Not really...ehh, I guess...what's your opinion on this situation?_???: I don't really know, or care. All I know is we're dead in the water; they can keep saying it's navigational issues but that's a lot of shit._Yeah, my sentiments exactly."
        return dia;
      }
      else {
        console.log("First time you've met this character?" + this.firstTalk);
        dia = "???:Don't you have anything better to do than standing around and botherin' me?";
        return dia;
      }
  }},
  {
    name: "charMon", firstTalk: true,
    diaOptions: function () {
      var dia = "...?_???: BAD OMEN._Excuse me, are you alright?";
      return dia;
    }
  },]
console.log("Loading char test:" + character[0].name);

const clickable = [
  { name: "mirror", desc: "Still got the same dead look in my eyes. It'd be nice if I left that back in Eastwyn." },
  { name: "newspaper", desc: "Enough of that self-serving crap. Ain't helping my mood." },
  { name: "bed", desc: "Middle class comfort? Maybe, but it's too gaudy for my tastes." },
  { name: "luggage", desc: "Delayed indefinitely and only about four days worth of luggage. Just my luck." },
  { name: "doorNum", desc: "Numbers with no real meaning._Besides telling me where I'm supposed to sleep, there's nothing else to figure out." },
  { name: "carpet", desc: "Maybe the ship stopped cuz the crew’s just sittin’ somewhere, mesmerized by these godawful carpet patterns." },
  { name: "elevator", desc: "Real pretty design. Hope it works better than the rest of this ship." },
  { name: "floatLights", desc: "The lights in there just float. I don't really understand how it works.." },
  { name: "Dine4Lamp", desc: "Tacky. That's the only polite way to put it honestly." },
  { name: "Dine4Window", desc: "At least the view is nice to look at._No bullshit, no pomp...just the sea of stars out there." },
  { name: "papeitemlScrap1", desc: "...? Is that...paper tucked into the wall?_The board was pulled enough to wedge it in. Pulling it out without a tool is just going to rip the damn thing..." },
  { name: "largeFloat", desc: "An artificial sea of stars...at least, that's what it looks like to me._Kinda embarrassing when the real deal is right outside the window." },
  { name: "bigSky", desc: "...._Makes you realize all the shit down here doesn't matter much." },
  { name: "umbrella", desc: "I'm sure they're nice to have on a day flight, but right now they're just taking up the view." },
  { name: "poolSeat", desc: "I can imagine some pretty dames soaking up the sun on these things." },
  { name: "brokenWall", desc: "The evidence of my dedication to seeing a case through to the end._Sounds better than tearing a hole in the wall for a damn piece of paper." }]
console.log("Loading clickables test:" + clickable[2].name);

const item = [
  { name: "crowbar", inInv: false, desc: "It's a crowbar...makes it easy to get into things that don't wanna open up." },
  { name: "paperScrap1", inInv: false, desc: "A half of a paper scrap. Might be important, might not be." },
  { name: "envelope", inInv: false, desc: "An envelope. It's sealed with wax and smells of cologne." }]
console.log("Loading item test:" + item[0].name);