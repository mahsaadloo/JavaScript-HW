const randomThingsList = [];

const things = ["Fun", "Tree", "Dark", "Vacation", "Marshmallow", "Life", "You", "Moonwalk", "Food", "Dream", "Sun"];
const thing = things[Math.floor(Math.random()*things.length)];

const randomThings = (id , randomDate , randomWord) => {
    const newRandom = {
        id : Math.random (), // Or we can use id : date.now(),
        randomDate : new Date(),
        randomWord : thing
    }
    randomThingsList.push(newRandom);
}

randomThings();
console.log(randomThingsList);