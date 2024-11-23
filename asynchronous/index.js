/** 
function fun(callback) {
    var num;
    setTimeout(() => {
        num = callback(3, 2)
        console.log(num)
    }, 2000);
    setTimeout(() => {
        console.log(num)
    }, 2000);
}

function add(x, y) {
    return x + y
}

fun(add)


let myPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3+10)
    }, 2000);
    reject("some error")
})
myPromis.then((x) => {
    console.log(x)
}).catch((error) => {
    console.log(error)
})


console.log("Pubbdf".padEnd(10, "zdf"));

var x = 3;

console.log(`df${x}`);

var x = BigInt(436457);
var y = 45435n;
var z = 56;
console.log(typeof x, typeof y, typeof z);

var r = 0;

console.log(r || 33);

const user = { id: 2, isFat: true}

var {id , isFat } = user

console.log(id)

var myArr = [2,5,6]

var sum = 0

myArr.forEach(myFunction)

console.log(sum);

console.log(myArr.map(myFunction))

function myFunction(item) {
    sum += item;
    return sum;
}

const obj3 =
{
 a: 10,
 b: 15,
 c: 18
};
const obj2 = Object.assign({c: 7, d: 1}, obj3);
console.log(obj2.c, obj2.d);

const obj1 = {
property1: 2
};
Object.seal(obj1);
obj1.property1 =4;
delete obj1.property1;
console.log(obj1.property1);

var tensquared = (function(x) {return x*x;}(10));

console.log(tensquared)


function constfuncs()
{
 var funcs = [];
 for(var i = 0; i < 10; i++)
 funcs[i] = function() { return i; };
 return funcs;
}
var funcs = constfuncs();
console.log(funcs[1]());

function Connect() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => json)
}

Connect().then(x => console.log(x))

async function Connect2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await response.json()
    return json
}

var res  = Connect2().then(json => json[0]);

console.log(res)

*/

function helloWorld() {
    console.log("hello world!")
}

setTimeout(helloWorld, 2000);