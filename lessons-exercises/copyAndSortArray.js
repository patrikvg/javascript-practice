let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return [...arr].sort();
}

console.log(copySorted(arr)); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)