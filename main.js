const wordsArray = [
    "apple",
    "banana",
    "grape",
    "orange",
    "kiwi",
    "mango",
    "peach",
    "pear",
    "plum",
    "cherry",
    "strawberry",
    "blueberry",
    "blackberry",
    "pineapple",
    "watermelon",
    "cantaloupe",
    "papaya",
    "apricot",
    "nectarine",
    "lime",
    "lemon",
    "rhubarb",
    "pomegranate",
    "fig",
    "date",
    "dragonfruit",
    "tangerine",
    "quince",
    "coconut",
    "passionfruit",
    "starfruit",
    "persimmon",
    "currant",
    "cranberry",
    "clementine",
    "raspberry",
    "honeydew",
    "jackfruit",
    "lychee",
    "mulberry",
    "soursop",
    "kumquat",
    "longan",
    "salak",
    "sweetlime",
    "ugli",
    "tamarind",
    "blood orange",
    "mandarin",
    "butternut",
    "acorn",
    "zucchini",
    "carrot",
    "celery",
    "potato",
    "tomato",
    "cucumber",
    "radish",
    "lettuce",
    "onion",
    "garlic",
    "ginger",
    "beet",
    "eggplant",
    "spinach",
    "kale",
    "asparagus",
    "broccoli",
    "cauliflower",
    "bell pepper",
    "chili",
    "jalapeno",
    "corn",
    "pea",
    "pumpkin",
    "squash",
    "turnip",
    "parsnip",
    "bok choy",
    "fennel",
    "artichoke",
    "rhubarb",
    "broccolini",
    "brussels sprout",
    "shallot",
    "chard",
    "seaweed",
    "nori",
    "mushroom",
    "tofu",
    "tempeh",
    "seitan",
    "lentil",
    "bean",
    "quinoa",
    "rice"
];

let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

let players = [] 

function start() {
    document.querySelector('.choose').style.display = 'inline';
    let player_count = document.getElementById('count').value;

    for (let i=0; i<player_count; i++) {
        players.push(word)
    }

    
    let player = Math.floor(Math.random() * players.length);
    
    players[player] = "spy"
    
    console.log(players); 
}