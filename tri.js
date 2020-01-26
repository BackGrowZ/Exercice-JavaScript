var number1 = process.argv[2];
var number2 = process.argv[3];
var number3 = process.argv[4];
var number4 = process.argv[5];
var number5 = process.argv[6];
tri(number1,number2,number3,number4,number5)

function tri(number1,number2,number3,number4,number5){
    var number=[""];
    number[0] = number1, number2, number3, number4, number5
    console.log(number[0].sort().join(" "))
}
