import {EXPECTED_MINUTES_IN_OVEN} from './Task1_export_solution.mjs';

function remainingMinutesInOven(minutes){
    return console.log("remaining time in oven = ", EXPECTED_MINUTES_IN_OVEN - minutes);
}

remainingMinutesInOven(15);

const TIME_2_EACH_LAYER = 2;

function preparationTimeInMinutes(layers){
    return TIME_2_EACH_LAYER * layers;
}

console.log("preparation time =",preparationTimeInMinutes(3));

function totalTimeInMinutes(layers, oventime){
    let preparationTime = preparationTimeInMinutes(layers)
    return console.log("Total working time in minutes = ", preparationTime + oventime)
}

totalTimeInMinutes(3, 25);