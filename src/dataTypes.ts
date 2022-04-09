let count = 0; // 숫자
count += 1; // 가능
count = "갑자기 문자열을 넣는다면?"; // 에러발생

const message: string = "hello typescript"; // 문자열

const done: boolean = false; // 불리언

const numbers: number[] = [1, 2, 3]; // 숫자배열

const messages: string[] = ["hello", "world"]; // 문자열 배열
messages.push(1); // 숫자 넣으려고 하면 에러 발생

let mightBeUndefined: string | undefined = undefined; // 문자열 또는 undefined일 수도 있음

let nullableNumber: string | null = null; // number 또는 null일 수도 있음

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow"; // 가능
color = "blue"; // 에러발생
