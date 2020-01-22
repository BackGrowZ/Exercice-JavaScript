var number1 = process.argv.slice(2);
var number2 = process.argv.slice(3);
var number3 = process.argv.slice(4);
var number4 = process.argv.slice(5);
var number5 = process.argv.slice(6);
tri(number1,number2,number3,number4,number5)

function tri(number1,number2,number3,number4,number5){
    var number=[""];
    number[0] = number1, number2, number3, number4, number5
    console.log(number[0].sort().join(" "))
}