// type 은 특정 타입에 별칭을 붙이는 용도로 사용한다.
// 객체, 배열, 또는 그 어떤 타입이던 type으로 별칭을 지어줄 수 있다.
type Person2 = {
  name: string;
  age?: number;
};

type Developer3 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "김인간",
};

const expert2: Developer3 = {
  name: "김개발",
  skills: ["java", "javascript"],
};

type People = Person[]; // person[] 를 앞으로 people 이라는 타입으로 사용 가능
const people2: People = [person2, expert2];

type Color = "red" | "orange" | "yellow";
const color2: Color = "red";
const colors: Color[] = ["red", "yellow"];
