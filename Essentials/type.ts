// 📌 인터페이스와 타입 알리아스 적용 시점
// 데이터를 표현할 때는 타입 알리아스를 쓰고
// 테이터를 포괄하는 객체(클래스 ...)를 묘사하는 경우에만 인터페이스를 사용한다.

// type: 컴파일 시 해당 값이 들어가는지에 대한 검사 용도이다.
export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';
// enum: 실제 데이터로 런타임 시 해당 값이 실제로 들어간다.
export enum DayOfTheWeek { '월', '화', '수', '목', '금', '토', '일' };

export type Name = string;
export type Email = string;
// 함수의 리턴 값에 대한 타입을 규정할 수 있음
// string 형태의 리턴 값을 갖는 FooFunction
export type FooFunction = () => string;

// 인터페이스
// 객체 타입 정의
// 이름이 중복되어도 하나의 인터페이스로 취급받아 오류 발생 X (권장하는 요소는 아님)
export interface IUser {
  readonly id: number;
  readonly name: Name;
  email: Email;
  receiveInfo: boolean;
  active: YesOrNo;
}

// ?: 선택 항목
// 해당 속성이 있어도 되고 없어도 됨을 의미
export interface IUser {
  address?: string;
}

// 상속: 인터페이스 확장
export interface IUserProfile extends IUser {
  profileImage: string;
  github?: string;
  twitter?: string;
}
 
// 상속: 타입 alias 내에서 확장
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
}

// 여러 속성을 상속받기 
export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: 'none' | 'block';
  visibility: boolean;
  opacity: number;
}

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface IStyle extends Color, Display, Geometry {
  tagName : string;
}

export type TStyle = Color & Display & Geometry & {
  tagName : string;
}

// 속성명의 타입과 속성의 값의 타입을 지정
export interface IOnlyNumberValueObject {
  [key: string]: number;
}

// 함수 규격 설정
// 규격 설정을 한 함수를 적용할 때에는 항상 함수 표현식을 써야한다.
export interface IGetApi { 
  (url: string, search?: string) : Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string) : Promise<string>;
}