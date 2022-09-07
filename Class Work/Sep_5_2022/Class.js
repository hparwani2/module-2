class Class{
    #std;
    #div;
    #classTeacher;
    #nameOfStudents;
    #noOfStudents
    
    addDetails(std, div, classTeacher){
        this.#std = std;
        this.#div = div;
        this.#classTeacher = classTeacher;
        this.#nameOfStudents = [];
        this.#noOfStudents = 0;
    }

    nameOfStudent(name){
        this.#nameOfStudents.push(name);
        this.#noOfStudents = this.#nameOfStudents.length;
    }

    noOfStudents() {
        return this.#noOfStudents;
    }

    studentList(){
        return this.#nameOfStudents;
    }

    getDetails(){
        return [this.#std, this.#div, this.#classTeacher];
    }
}


// let IV_B = new Class('IV', 'B', 'Abc');

// let noOfStudents = 5;

// while(noOfStudents--){
//     IV_B.nameOfStudent(`abc${noOfStudents}`);
// }

// console.log(IV_B.noOfStudents());
// console.log(IV_B);

// console.log(IV_B.nameOfStudents);

// console.log(IV_B.studentList());


module.exports = {Class};