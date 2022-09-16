// Constructer - It is a way to create an object

function Laptop(type) {
    this.make = type;
    this.ram = "8GB";
    this.addCoreAndPrint = function(core) {
        this.core = core;
        let print = () => {
            console.log(this);
        }
        print();
    }
    }
    


let laptop1 = new Laptop('Dell');
laptop1.addCoreAndPrint();

//let laptop2 = new Laptop('Apple');
//let laptop3 = new Laptop('HP');


//console.log(laptop1);
//console.log(laptop2);
//console.log(laptop3);


