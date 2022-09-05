// // // function Father() {}

// // // Father.prototype.ability = function() {
// // //     console.log('runs fast');
// // // }

// // // function Child() {
// // //     super();
// // // }

// // // Child.prototype.ability = function(){
// // //     console.log('writes fast');
// // // }



// // // class Child extends Father {

// // //     constructor() {
// // //         super();
// // //     }

// // //     ability() {
// // //         console.log('writes faster');
// // //     }
// // // }

// // // this -> parent and child both...
// // // super -> we only talk about parent..
// // // let obj = new Child();
// // // obj.ability();

// // // function Father() {
// // //     this.ability = function() {
// // //         console.log('runs fast');
// // //     }
// // // }

// // // let obj1 = new Father();
// // // obj1.ability();

// // /*
// // this -----> mai khud
// // */


// // class Father {
// //     age;
// //     constructor(age, name) {
// //         this.age = age;
// //         this.name = name;
// //     } 
// // }

// // let obj1= new Father(37, 'Mayur');
// // console.log(obj1.age);


// class Rectangle {
//     #length;
//     #breadth;
//     constructor(length, breadth) {
//         this.#length = length;
//         this.#breadth = breadth;
//     }

//     get area() {
//         return this.#calculateArea();
//     }

//     #calculateArea() {
//         return this.#length * this.#breadth;
//     }
// }

// let rec1 = new Rectangle(3, 4);
// console.log(rec1.calulateArea());


// function Father() {

// }

// Father.ability = function() {
//     console.log(this);
// }

// Father.ability();

class Father {

    static gender = Father.provideGender();
    
    static isMarried;


    // static {
    //     gender = 'Male';
    //     isMarried = true;
    // }

    static provideGender() {
        return ability();
    }

    ability() {
        console.log('Runs faster');
    }
}

Father.provideGender();

class Child extends Father {
    // static ability() {
    //     console.log('writes fast');
    // }
}

console.log(Father.gender);
//let obj1 = new Father();

