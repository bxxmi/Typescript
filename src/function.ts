// 숫자 타입의 x, y 매개변수 그리고 반환되는 값의 타입도 number
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 3);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

// 아무것도 반환하지 않아야하고 반환할 것이 없다면 void
function returnNothing(): void {
  console.log("I am just saying hellow");
}
