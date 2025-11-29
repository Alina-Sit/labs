const store = (x) => () => x;

const read = store(123);
const value = read();
console.log(value); 
