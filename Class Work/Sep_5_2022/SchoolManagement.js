let {Class} = require('./Class');

class School extends Class{
    #classDetails;
    #nameSchool
    #noOfFaculties

    constructor(name, noOfFaculites){
        super();
        this.#nameSchool = name;
        this.#noOfFaculties = noOfFaculites;
        this.#classDetails = [];
    }

    createNewClass(std, div, teacher){
        let newClass = new Class();
        newClass.addDetails(std, div, teacher);
        this.#classDetails.push(newClass);
    }

    getAllClassDetails(){
        for(let val of this.#classDetails){
            console.log(val.getDetails());
        }
    }

}

let VidyaCollege = new School('Vidya', 93);

VidyaCollege.createNewClass('IV', 'B', 'abc');
VidyaCollege.createNewClass('I', 'A', 'xyz');
VidyaCollege.createNewClass('V', 'C', 'ccc');
VidyaCollege.createNewClass('X', 'B', 'aaa');
VidyaCollege.createNewClass('LKG', 'B', 'bbb');


VidyaCollege.getAllClassDetails();


