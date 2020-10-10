const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

//---------------0-----------------0-----------------------0-----------
//callback forEach
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
//print users
console.log('Metodo forEach, imprime los usurios');
forEachNames = myForEach(users, user => console.log(user));

//---------------0-----------------0-----------------------0-----------
console.log('');
//callback filter
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])==true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//print users age > 32
console.log('Metodo filter, regresa los usurios mayores de 32 años. usersAges= [Erik=29, Georg=33, Andrea=42, Oscar=31]');
const ageFilter = myFilter(users, user => user.age > 32);
console.log(ageFilter);

//---------------0-----------------0-----------------------0-----------
console.log('');
//callback Map
function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray;
}
//print emails academlo
console.log('Metodo Map, regresa los correos de los usurios');
const mapEmails = myMap(users, user => user.email);
console.log(mapEmails);

//---------------0-----------------0-----------------------0-----------
console.log('');
//callback Find
function myFind(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return array[i];
            break;
        }
    }
}
//print find(Erik)
console.log('Metodo Find, regresa el arreglo de Erik si lo encuentra en users.name');
const findUser = myFind(users, user => user.name === 'Erik');
console.log (findUser);

//---------------0-----------------0-----------------------0-----------
console.log('');
//callback FindIndex
function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return i;
            break;
        }
    }
}
//print findIndex(Oscar) = position 3
console.log('Metodo FindIndex, regresa la posicion del usurio si lo encuentra. (oscar = 3), names{Erik, Georg, Andrea, Oscar, Daniela}');
const findindexUser = myFindIndex(users, user => user.name === 'Oscar');
console.log (findindexUser);

//---------------0-----------------0-----------------------0-----------
console.log('');
const vals = [1, 2, 3];
//callback contains
function myContains(array, callback) {
        for(let i = 0; i < array.length; i++ ) {
        if(array[i] === callback(array)) {
            return true;
            break;
        } 
    }
    return false;
}
//print findIndex(Oscar) = position 3
console.log('Metodo Constains, regresa true si se encuetra el valor. vals[1,2,3], search val=2');
const containsNumber = myContains(vals, val => val = 2);
console.log (containsNumber);

//---------------0-----------------0-----------------------0-----------
console.log('');
//callback Pluck
function myPluck(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i][callback(array)]);
    }
    return newArray;
}
//print names of users academlo
const pluckNames = myPluck(users, key => key = 'name');
console.log('Metodo Pluck, imprime los nonmbres de los usuarios');
console.log(pluckNames);

//---------------0-----------------0-----------------------0-----------
console.log('');
//array
numbers = [1, 2, 1, 0, 3, 1, 4];
//callback without
function myWithout(array, callback, callback2) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] != callback(array) && array[i] != callback2) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//print without numbers 
console.log('funcion without, arreglo de numeros');
console.log(numbers); 
//print numbers out 1
const numersWithout = myWithout(numbers, outs => 1);
console.log('arreglo sin el 1',numersWithout);
//print numbers out 1 and 2
const numersWithout2 = myWithout(numbers, outs => 1, 2);
console.log('arreglo sin el 1 y 2',numersWithout2);