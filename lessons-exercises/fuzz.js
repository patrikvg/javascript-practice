let answer = parseInt(prompt("Please enter a number greater than 0:"));

function fuzz(answer) {
    for (let i = 1; i < answer; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}

console.log(fuzz(answer));