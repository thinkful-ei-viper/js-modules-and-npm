function add(a,b){
    let c= a+b;
    console.log(`${a}+${b}=${a+b}`);
    console.log('a+b='+ c);

}
function subtract(a,b){
    let c= a-b;
    console.log(`a-b=${c}`);
}
function multiply(a,b){
    let c= a*b;
    console.log(`a*b=${c}`);
}
function divide(a,b){
    let c= a/b;
    console.log(`a/b=${c}`);
}

module.exports= {add, subtract, multiply, divide};