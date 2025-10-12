const fn = () => {
  const obj1 = { name: 'Rafael' };
  let obj2 = { name: 'Rafael' };

  obj1.name = 'Mo';
  obj2.name = 'Mo';

  obj2 = { name: 'Rafael Mo' };
};

const createUser = (name, city) => {
    return { name: name, city: city };
};

console.log(createUser('Rafael Mo', 'Whitesand Bay'))
