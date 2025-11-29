'use strict'

const removeElement = (arr, elem) => {
    let i = 0;
    let j = 0;

    while (i < arr.length) {
        if (arr[i] !== elem) {
            arr[j++] = arr[i];
        }
        ++i;
    }

    arr.length = j;
}

const arr = [1, 1, 1, 2, 3, 4, 5, 5];

removeElement(arr, 1);
console.log(arr);

removeElement(arr, 5);
console.log(arr);
