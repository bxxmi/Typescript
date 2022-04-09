"use strict";
var count = 0; // 숫자
count += 1; // 가능
count = "갑자기 문자열을 넣는다면?"; // 에러발생
var message = "hello typescript"; // 문자열
var done = false; // 불리언
var numbers = [1, 2, 3]; // 숫자배열
var messages = ["hello", "world"]; // 문자열 배열
messages.push(1); // 숫자 넣으려고 하면 에러 발생
var mightBeUndefined = undefined; // 문자열 또는 undefined일 수도 있음
var nullableNumber = null; // number 또는 null일 수도 있음
var color = "red"; // red, orange, yellow 중 하나
color = "yellow"; // 가능
color = "blue"; // 에러발생
