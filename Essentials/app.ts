import * as allTypes from './type';

const IUser: allTypes.IUser = {
  id: 1,
  name: '빌 게이츠',
  email: 'bill@ms.com',
  receiveInfo: false,
  active: 'Y',
}; 

const foo: allTypes.FooFunction = function() {
  return '필요없는 함수';
}

const IStyle: allTypes.IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  height: 100
};

// 함수 표현식 사용
const getApi: allTypes.IGetApi = (url, search = '') => {
  return new Promise(resolve => resolve('OK'));
};