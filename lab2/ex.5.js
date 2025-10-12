const member = [
    { name: 'Alina', phone: '+380993470230' },
    { name: 'Rafael Mo', phone: '+380674821590' }
]

const findPhoneByName1 = (name) => {
    for (const obj of member) {
        if (obj.name === name) return obj.phone;
    }
};

const hash_table = {
    Alina: '+380993470230',
    Rafael Mo: '+380674821590'
};

const findPhoneByName2 = (name) => hash_table[name];
