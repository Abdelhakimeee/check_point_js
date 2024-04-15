// reverse:  ->    "odba"             good
var lst = "abdo"
function my(x){
    return x.split("").reverse().join("");
}
console.log(my(lst)) 


//roverse a list: -> [10, "form", 9, "data", "name"]   good
var lst = [ "name", "data", 9, "form",10]
function my(x){
    return x.reverse();
}
console.log(my(lst))


// Count characters: 
var input = "the name"
function myFonc(x){
    return x.length;
}
console.log(myFonc(input))


// Capitalize Words: 
// all 
var input = "the name is ahamd and the last is mido"
function myFonc(x){
    return x.toUpperCase();
}
console.log(myFonc(input))


//Find Maximum and Minimum:
var numbers = [ 2, 3, 30, 1,7, 44, 5, 7, 13, 17, 25]
var numbersSS = [ 2, 3, 30,7, 88, 5, 7, 13, 17, 25]

function myFun(x){
    var minValue = Math.min(...x);
    var maxValue = Math.max(...x);
    return `Minimum value is ${minValue} and maximum value is ${maxValue}`
}

console.log(myFun(numbers))
console.log(myFun(numbersSS))


// Sum of Array:
var numbers = [ 2, 3, 30, 1,7, 44, 5, 7, 13, 17, 25]
function myFun(lst){
    var total = 0
    for (i of lst){
        total += i 
    }return `total ${total} and i ${i}.`
}

console.log(myFun(numbers))



// Mathematical Functions:
// Factorial: 
function myFun(x , y){
    var factorial = x*y
    return factorial

}
console.log(myFun(8,10))


//Fibonacci Sequence:
var num_x = 0
var num_y = 1
while (true) {
    var tot = num_x + num_y 
    var num_x = num_y
    var num_y = tot
    
    console.log(tot)
}


