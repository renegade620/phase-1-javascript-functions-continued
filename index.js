// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork());

function wrapAdjective(flairString="*") {
    return function(adjective="special") {
        return `You are ${flairString}${adjective}${flairString}!`;
    }
}

console.log(wrapAdjective()("a dedicated programmer"));