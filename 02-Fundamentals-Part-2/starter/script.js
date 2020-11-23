'use strict';

// Assignment 1 - Functions

function describeCountry(country, population, capitalCity){
    return (`${country} has ${population} mill people, and its capital is ${capitalCity}`)
}

const france = describeCountry("france", 50, "Paris")

console.log(france);

// Assignment 2 - Function Declarations vs Expressions

//function declaration
function percentageOfWorld1(population){
    return population / 7990 * 100
}

let ausPopulationPer = percentageOfWorld1(23)
console.log(ausPopulationPer);

//function expression 

const percentageOfWorld2 = function (population) {
    return population / 7990 * 100
}

console.log(percentageOfWorld2(23));

// Assignment 3 - Arrow Functions

const percentageOfWorld3 = (population) => population /7990 *100
console.log(percentageOfWorld3(23));

// Assignment 4 - Functions Calling Other Functions

function describePopulation (country, population){
    let populationPer = percentageOfWorld1(population);
    return `${country} has ${population}mil people, which is %${populationPer} of the world.`
}

const descpop = describePopulation("australia",23)
console.log(descpop);

////////////////////////
// Coding Challenge 1 //
////////////////////////

let calcAverage = (score1,score2,score3)=> (score1+score2+score3)/3;

function checkWinner(avgDol,avgKoa){
    if (avgDol < avgKoa && avgKoa >= (2*avgDol)){
        console.log(`Koa win (${avgKoa} v. ${avgDol})`);
    }else if (avgDol > avgKoa && avgDol >= (2*avgKoa)){
        console.log(`Doa win (${avgDol} v. ${avgKoa})`);
    } else console.log("non one win");
}

let avgDol = calcAverage(10,10,10);
let avgKoa = calcAverage(1005,5,6)

checkWinner(avgDol,avgKoa)

// Assignment 5 - Intro to Arrays

const populations = [23, 30, 101, 4];

console.log(populations.length == 4);
let percentages = [percentageOfWorld1(populations[0]), 
                    percentageOfWorld1(populations[1]), 
                    percentageOfWorld1(populations[2]), 
                    percentageOfWorld1(populations[3]), ]
console.log(percentages);


// Assignment 6 - Basic Array Operations (Methods)

const neighbours = ["new zealand", "png", "malaysia"];
neighbours.push("utopia");
console.log(neighbours);
neighbours.pop();
if(!neighbours.includes("Germany")) console.log("probs not in central euro");
neighbours[1] = "papa new ginue"
console.log(neighbours);