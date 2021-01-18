//Variables
var myName = 'Poom';
myName = 8;
let ourName = 'freeCodeCamp';
const pi = 3.14;

var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);
var firstName = "\"Poom\""; 

function ourFucntion(Name) {
    var greet = "Hello";
    greet += Name;
    return greet;
}

console.log(ourFucntion("Poom"));

function switchFunciton(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
    
        default:
            answer = "Not Low"
            break;
    }

    return answer;
}

console.log(switchFunciton(2));

//Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "his friends": ["everything"]
};
ourDog.bark = "bow bow!";
delete ourDog.tails

var dogName = ourDog.name;
var dogFriends = ourDog["his friends"];

console.log(dogName);
console.log(dogFriends);
console.log(ourDog.bark);
console.log(ourDog.tails);

function checkObj(checkProp) {
    if (ourDog.hasOwnProperty(checkProp)) {
        return ourDog[checkProp];
    }
    else {
        return "Not Found";
    }
}

console.log(checkObj("name"));
console.log(checkObj("hello"));

var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release year" : 1973,
        "formats" : ["CD","8T","LP"],
        "gold" : true
    },
    {
        "artist" : "Beau Carnes",
        "title" : "Cereal Man",
        "release year" : 2003,
        "formats" : "Youtube Video"
    }
]

console.log(myMusic[0].artist);
console.log(myMusic[1].artist);

var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

console.log(myStorage.car.inside["glove box"]);

var myArray = []

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

for (var i = 0; i < 5; i++) {
    myArray.push(i);
}

console.log(myArray);

myArray.length>4 ? console.log("Greater") : console.log("Lesser");

function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkSign(-10));

var varTest;
let letTest;

//Arrow Function
const magic = () => new Date();

const sum = (function () {
    return function sum(...args) {
        return args.reduce((a,b) => a+b ,0);
    };
})();

console.log(sum(1,2,3,4));

//Spread Operator
const arr1 = ['JAN','FEB','MAR'];
let arr2;
(function () {
    arr2 = [...arr1];  //Spread Content in arr1 and put it in arr2
    arr1[0] = 'potato';
})();

console.log(arr2);

//Destructing Operator
var voxel = {x: 1 , y: 2, z: 3};
const {x: num1, y: num2, z: num3} = voxel; // a = 1, b = 2, c = 3

const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow : 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    var {tomorrow : tempOfTomorrow} = avgTemperatures;

    return  tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Rest Operator with Destructing Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Create Object 
const createPerson = (his_name,age,gender) => ({his_name,age,gender});
console.log(createPerson("Mark",30,"male"));

//Class
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

//Getter $ Setter
class Book {
    constructor(author) {
        this.author = author;
    }

    get writer() {
        return this.author;
    }

    set writer(updateAuthor) {
        this.author = updateAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = temp;
        }

        get temperature() {
            return this._temp;
        }
        
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);