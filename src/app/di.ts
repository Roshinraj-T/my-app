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
class Engine{
    hp:number;
    stroke:number;
    rpx:number;
    constructor (hp:number,stroke:number,rpx:number){
        this.hp=hp;
        this.stroke=stroke;
        this.rpx=rpx;
    }
}
class Engine2{
    hp:number;
    constructor (hp:number){
        this.hp=hp;
    }
}
class Car {
    e:Engine;
    constructor(e:Engine) {
        this.e=e;
    }
}
let e= new Engine(400,4,4500);
let e1=new Engine2(400);
let c =new Car(e);
console.log(c);
// class Car {
//     e:Engine=new Engine(400)
//     constructor() {        
//     }
// }
