function ages(persons) {
  const result = {};
  for (person of Object.keys(persons)) {
    result[person] = persons[person].died - persons[person].born;
  }
  return result;
};

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));

let counter = 0;
for (let i = 1; i < 10000; i++) {
  counter += 1/i;
}
console.log(counter); 
