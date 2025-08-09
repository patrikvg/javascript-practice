let array = [1,2,3,4,5,6];

function sumOfTripledEvens(array) {

    const evenNumbers = array.filter((num) => num % 2 === 0);
    const numbersTripled = evenNumbers.map((num) => num * 3);
    const sum = numbersTripled.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0); // reduce nimmt 2 argumente das erste ist: (total, currentItem) => { return total + currentItem; } also einfach die funktion die man braucht und das 2. ist 0 | die 0 hier ist für das initalisieren von total da;

    return sum;
}

console.log(sumOfTripledEvens(array));