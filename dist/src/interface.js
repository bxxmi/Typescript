"use strict";
// interface: 클래스 또는 객체에 대한 타입을 지정할 때 사용
// 특정 조건을 준수해야하는 클래스를 만들 때 interface를 사용해서 클래스가 가져야 할 요구사항을 설정한다.
// 클래스를 선언할 때 implements 키워드를 사용해서 해당 클래스가 특정 interface의 요구사항을 구현한다고 명시한다.
// circle 클래스가 shape interface의 조건을 충족하겠다고 명시
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // shape 내의 getArea 함수 사용
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(6, 10)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
