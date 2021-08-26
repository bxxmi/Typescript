let isDone: boolean = true;
isDone = true;
console.log(typeof isDone); // 'boolean'

// primitive type은  literal 방식으로 값을 직접 넣어야 함
let isOk: Boolean = true;
// error: 객체를 통해 값을 주입했기 때문
let isNotOk: boolean = new Boolean(true);