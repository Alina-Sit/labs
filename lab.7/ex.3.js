'use strict'

const unique = (arr) => {
    let newArr = arr;
    newArr.sort();

    let i = 0;
    let j = 0;
    let prev = null;
    while (i < arr.length) {
        if (arr[i] !== prev) {
            arr[j++] = arr[i];
        }
        prev = arr[i];
        ++i;
    }
    
    arr.length = j;
}

const arr = [1, 1, 2, 1, 2, 3, 3, 1, 2, 3, 1];
unique(arr);

console.log(arr);
