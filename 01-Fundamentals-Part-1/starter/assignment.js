
// Assingment 1 - Values and Variables
let country = "Australia"
let continent = "Oceania"
let population = 32

console.log( country +", "+ continent +", "+ population)

// // Assignment 2 - Data Types
let isIsland = true;
// // let language;

// console.log("isIsland:  "+typeof isIsland)
// console.log("population:"+typeof population)
// console.log("country:   "+typeof country)
// console.log("language:  "+typeof language)

// Assignment 3 - let, const and var
// const country = "Australia"
// const continent = "Oceania"
// const isIsland = true;
const language = "English";
// language = "French";

// Assignment 4 - Basic Operators
let halfPopulation = population / 2
console.log("Each Half would contain", halfPopulation)

population++;
console.log("Population is now", population)

let finlandPopulation = 6;
console.log(population > finlandPopulation)

let averagePopulation = 33;
console.log(population > averagePopulation)

let description = country + " is in " + continent + ", and its " + population + " million residents speak " + language
console.log(description)

////////////////////////
// Coding Challenge 1 //
////////////////////////

let markWeight = 78;
let markHeight = 1.69;
let joshWeight = 92;
let joshHeight = 1.95;

let markBMI = 0;
let joshBMI = 0;

markBMI = markWeight / (markHeight**2)
joshBMI = joshWeight / (joshHeight**2)

let markHigherBMI = markBMI > joshBMI;

console.log("markBMI: ", markBMI)
console.log("joshBMI: ", joshBMI)
console.log(markHigherBMI)

// Assignment 5 - Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million residents speak ${language}`
console.log(description)

// Assignment 6 - Taking Decisions: if / else Statements
if (population > 33){
    console.log(`${country} is greater than the average`);
}else{
    console.log(`${country} is less than ${33 - population}mil below the average`);
}


////////////////////////
// Coding Challenge 2 //
////////////////////////

if (markHigherBMI){
    console.log(`Marks BMI (${markBMI}) is higher than Joshs (${joshBMI}))`)
}else{
    console.log(`Joshs BMI (${joshBMI}) is higher than Mark (${markBMI}))`)
}


// Assignment 7

// all in the console

// Assignment 8 - Equality Operators: == vs. ===

const numNeighbours = 1 //prompt("How many neighbouring countrys do you have?")

if (numNeighbours === 1){
    console.log("only 1 neighbout")
}else if (numNeighbours > 1){
    console.log("more than one nieghbour");
}else{
    console.log("none neighbours");
}


// Assignment 9 - Logical Operators

if (language == "English" && population < 50 && !isIsland){
    console.log(`${country} is good`)
}else console.log(`${country} is not good`)

////////////////////////
// Coding Challenge 3 //
////////////////////////

const dolRound1= 96, dolRound2= 108, dolRound3= 96
const kolRound1 = 88, kolRound2 = 91, kolRound3 = 88

dolAverage = (dolRound1 + dolRound2 + dolRound3) / 3
kolAverage = (kolRound1 + kolRound2 + kolRound3) / 3

if(dolAverage>=100 && kolAverage>=100){
    if (dolAverage == kolAverage){
        console.log("Draw!");
    }else if(dolAverage <kolAverage){
        console.log("kol wins!");
    }else {console.log("dol")}
}else {console.log("both teams not 100");}


// Assignment 10 - The switch Statement
switch (language){
    case("chinese"):
    case("mandarin"):
        console.log("Most number of native speakers!");
        break;
    case("spanish"):
        console.log("2nd number of native speakers!");
        break;
    case("English"):
        console.log("3rd number of native speakers!");
        break;
    case("hindi"):
        console.log("4th number of native speakers!");
        break;
    case("arabic"):
        console.log("5th number of native speakers!");
        break;
    default:
        console.log("nice lang too!");
        break;
}


// Assignment 11 - The Conditional (Ternary) Operator

let populationType = (population <= 33) ? "below" : "above";

console.log(`${country} population is ${populationType} average!`)

// Better way to do it console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`,);

////////////////////////
// Coding Challenge 4 //
////////////////////////
let billValue = 100
let tip = (50 > billValue && billValue < 300) ? billValue * .15 : billValue * .20;
console.log(`the bill was ${billValue}, the tip ${tip}, therefore total ${billValue+tip}`)