// class Engine{
//     hp:number;
//     constructor (hp:number){
//         this.hp=hp;
//     }
// }
// class Engine{
//     hp:number;
//     stroke:number;
//     constructor (hp:number,stroke:number){
//         this.hp=hp;
//         this.stroke=stroke;
//     }
// }
var Engine = /** @class */ (function () {
    function Engine(hp, stroke, rpx) {
        this.hp = hp;
        this.stroke = stroke;
        this.rpx = rpx;
    }
    return Engine;
}());
var Engine2 = /** @class */ (function () {
    function Engine2(hp) {
        this.hp = hp;
    }
    return Engine2;
}());
var Car = /** @class */ (function () {
    function Car(e) {
        this.e = e;
    }
    return Car;
}());
var e = new Engine(400, 4, 4500);
// let e2=new Engine2(400)
var c = new Car(e);
console.log(c);
// class Car {
//     e:Engine=new Engine(400)
//     constructor() {
//     }
// }
