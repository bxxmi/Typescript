"use strict";
// 숫자 타입의 x, y 매개변수 그리고 반환되는 값의 타입도 number
function sum(x, y) {
    return x + y;
}
sum(1, 3);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// 아무것도 반환하지 않아야하고 반환할 것이 없다면 void
function returnNothing() {
    console.log("I am just saying hellow");
}
