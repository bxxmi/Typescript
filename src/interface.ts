// interface: 클래스 또는 객체에 대한 타입을 지정할 때 사용
// 특정 조건을 준수해야하는 클래스를 만들 때 interface를 사용해서 클래스가 가져야 할 요구사항을 설정한다.
// 클래스를 서언할 때 implements 키워드를 사용해서 해당 클래스가 특정 interface의 요구사항을 구현한다고 명시한다.

// Shape 이라는 interface 선언
interface Shape {
  // getArea 함수가 꼭 있어야하고 해당 함수의 반환 값은 숫자타입
  getArea(): number;
}

// circle 클래스가 shape interface의 조건을 충족하겠다고 명시
class Circle implements Shape {
  // 멤버변수 선언
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // shape 내의 getArea 함수 사용
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // 멤버변수 선언
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(6, 10)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
