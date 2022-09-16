/*
this inside function - caller reference would be this kyeword
this inside arrow function - this kyeword would give the value of object
*/

function print() {
    console.log(this);

}

let print1 = ( ) => {
    console.log(this);
}

print();
print1();

