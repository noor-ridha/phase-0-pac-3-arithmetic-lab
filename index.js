function add(a,b){
    return a+b;
}
console.log(add(2,5));

function subtract(a,b){
    return a-b;
}
console.log(subtract(2,5));

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,5));


function divide(a,b){
    return a/b;
}
console.log(divide(2,5));

function increment(n){
    return ++n;
}
console.log(increment(7));

function decrement(n){
    return --n;
}
console.log(decrement(7));

function makeInt(n){
    return parseInt(n);
}
console.log(makeInt(7.67777));

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal(9.239999));


function makeInt(n){
    return parseInt(n);
}
console.log(makeInt("2.2222", 10));
