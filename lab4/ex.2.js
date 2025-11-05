function max(args) {
    let maxValue = 0;
    for (let i = 0; i < args.length; i++) {
        for (let o = 0; o < args[i].length; o++) {
            if (args[i][o] > maxValue) {
                maxValue = args[i][o];
            }
        }
    }
    return maxValue;
}

const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(max(m));
