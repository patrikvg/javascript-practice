function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let help = arr[i];

        if (help < a || help > b) {
            arr.splice(i, 1);
            i--;
        } 
    }
}
