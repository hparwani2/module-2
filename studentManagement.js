//Student Management System

class Student {
    
    schooolName = 'Relevel Academy';
    studentName;
    dateOfBirth;
    age;
    gender;
    rollNum = this.#assignRollNum();

    constructor(Name, dateOfBirth, gender) {
        this.studentName = Name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;

        this.age = this.#calculateAge(dateOfBirth);
    }

    #calculateAge(dateOfBirth) {
        // let currentYear = new Date().getFullYear();
        // let birthArr = dateOfBirth.split('.');
        // let birthYear = Number(birthArr);
        // let age = currentYear - birthYear;
        return new Date().getFullYear() - Number(dateOfBirth.split('.')[2]);
    }

    #assignRollNum() {
        return Math.floor(Math.random() * 1000);
    }
}

let student1 = new Student('Pallab', '25.01.2000', 'Male');
let student2 = new Student('Saraswati', '15.03.2002', 'Female');
let student3 = new Student('Abhimanyu', '02.12.2001', 'Male');
console.log(student1);
console.log(student2);
console.log(student3);