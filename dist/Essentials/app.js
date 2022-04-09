"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IUser = {
    id: 1,
    name: '빌 게이츠',
    email: 'bill@ms.com',
    receiveInfo: false,
    active: 'Y',
};
var foo = function () {
    return '필요없는 함수';
};
var IStyle = {
    borderWidth: 5,
    width: 300,
    height: 100
};
// 함수 표현식 사용
var getApi = function (url, search) {
    if (search === void 0) { search = ''; }
    return new Promise(function (resolve) { return resolve('OK'); });
};
