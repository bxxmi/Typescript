"use strict";
var _a;
// Symbol
// new Symbol 형태로 사용할 수 없음
// primitive type 을 인자로 가진 함수로 만들어서 symbol 타입을 만들어냄
// 📌 Symbol 을 통해 만들어진 값은 고유하고 수정이 불가능한 값으로 변환된다.
console.log(Symbol('foo') === Symbol('foo')); // false
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = 'value',
    _a);
obj[sym];
