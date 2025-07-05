//hoisting

function hoistfunc(){
    a=10;
    let b=20;
}
hoistfunc();
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
 