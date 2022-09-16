// // Private

// class Father {
//     #age // Private
//     constructor(age, name) {
//         this.#age = age;
//         this.name = name;
//     }
// }

// let obj1 = new Father(37, 'Mayur');
// console.log(obj1.age);


class ReactAngle {
    area;
    length;
    breadth;
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    get area() {
        this.calculateArea();
    }
    calculateArea() {
        return this.length * this.breadth;
    }
}

let rec1 = new ReactAngle(3, 4);
console.log(rec1.area);
