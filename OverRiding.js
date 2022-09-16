// OverRiding\

class Father{
   
     ability() {
        console.log('Run fast');
     }
    

}

class Child  extends Father {

      ability() {
        console.log('X-ray vision');
      }

}

let child = new Child();
child.ability;



/**
 Father -------> Child
 */


 class Papa {
    constructor() {
        console.log('Hye I am Father');
    }
 }
 class baccha extends Papa{

    constructor() {
        super();
        console.log("Hye i am child");
    }
 }


 // Super --> super kyeword is used to accses parent.
 // propertise , functions, kyes, and constructer.

 
