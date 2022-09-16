// lets make a tea

function addContainer() {
    console.log('container added');
    addMilk;(addSugar);
}
function addSugar() {
    console.log('sugar added');
    addTea();
}
function addTea() {
    console.log('Tea added');
}
function addMilk() {
    console.log('milk');
    addSugar(addTea)
}



function makeTea(addContainer) {
    addContainer();
}
makeTea(addContainer);


// Callback Hell.

// Promises