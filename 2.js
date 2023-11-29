function checkPropertyExistence(propertyName, obj) {
    return propertyName in obj;
}

const myObject = {
    name: 'John',
    age: 30
};

console.log(checkPropertyExistence('name', myObject));
console.log(checkPropertyExistence('address', myObject));