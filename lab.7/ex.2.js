'use strict'

const removeElements = (arr, ...elems) => {
    const removeSet = new Set(elems);

    let i = 0;
    let j = 0;

    while (i < arr.length) {
        if (!removeSet.has(arr[i])) {
            arr[j++] = arr[i];
        }
        ++i;
    }

    arr.length = j;
}

const arr = [1, 1, 1, 2, 3, 4, 5, 5, 5];

removeElements(arr, 1, 5);
console.log(arr);
