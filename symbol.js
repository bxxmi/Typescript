"use strict";
// Symbol
// new Symbol 형태로 사용할 수 없음
// primitive type 을 인자로 가진 함수로 만들어서 symbol 타입을 만들어냄
console.log(Symbol('foo') === Symbol('foo')); // false
