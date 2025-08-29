function add7(number) {
    return number + 7;
}

function multiply(number, number2) {
    return (number * number2);
}

function capitalize(string) {
    let allSmall = string.toLowerCase();
    let firstLetter = allSmall.at(0).toUpperCase();
    let rest = allSmall.slice(1, allSmall.length);
    let solution = firstLetter + rest;
    
    return solution;
}

function lastLetter(string) {
    return string.at(string.length - 1); 
}

console.log(add7(2));
console.log(multiply(4,5));
console.log(capitalize("pATriK"));
console.log(lastLetter("Elmir"));
