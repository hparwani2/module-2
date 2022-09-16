/*
class Laptop{
    make;
    module;
    ram;

// Constructer is a kyeWord

    constructor(make, module, ram) {
        this.make = make;
        this.module = module;
        this.ram = ram;
    }
    print () {
        console.log(this);
    }

}
let laptop1 = new Laptop('Dell', 'Inspiro', '16GB');
console.log(laptop1.make);
laptop1.print();
*/

/*

// getters and setters - when you try to accses a property
class Reactangle {

    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calculateArea();
    }

    set area(aresize) {
         console.log(aresize);
    }

    calculateArea() {
        return this.height * this.width;
    }
}

let reactangle = new Reactangle(3, 4);
reactangle.area = 22; // Setting
console.log(reactangle.area);

console.log(reactangle); */


class Shape{
    area;
    parametere;

    set radius(value) {
        this.type = 'Circle';
        this.calculateAndSetArea(value);

    }
    set lengthAndBreadth(value) {
        this.type = 'reactangle';
        this.calculateAndSetArea(value);

    }
   
    calculateAndSetArea(value) {
        if(this.type === 'circle') {
            this.area = Math.PI * value * value;

        } else {
            this.area = value[0] * value[1];
        }

    }

    calculateAndSetParametere() {

    }

}

let shape1 = new Shape();
shape1.radius = 2;
shape1.area;
shape1.lengthAndBreadth = [2, 4];
shape1.area;

