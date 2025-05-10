console.log('The JS has loaded!');
//array of characters, items, points of interest
const chars = [
    {name: "Frank", num: 0, occupation: "Captain", desc: "Frank doesn't look happy to see you.", intro: "...what? What are you starin' at?_Whatever, just mind yer own business."},
    {name: "Rose", num: 1, occupation: "Scientist", desc: "Rosie looks troubled.", locketGet: "..._Wait, where did you..._...pardon, forget I said anything."}];
console.log(chars[0].desc);

const items = [
    {name: "Box", num: 0, desc: "It's worn and water damaged."},
    {name: "Key", num: 1, desc: "This key is oddly shaped.", dia:"Huh? What do you want?_You want me to open that door?_Fat chance; no one goes in or out."}]

console.log(items[0].desc);

//use this as a means to construct the ship and people
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  let passengers = {
    jack: {
      
    }
  }