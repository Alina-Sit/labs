'use strict'

const difference = (arr1, arr2) => {
    const set2 = new Set(arr2);

    let j = 0;
    for (let i = 0; i < arr1.length; ++i) {
        if (!set2.has(arr1[i])) {
            arr1[j++] = arr1[i];
        }
    }

    arr1.length = j;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 4];

difference(arr1, arr2);

console.log(arr1);
