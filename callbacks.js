// let's make a tea.

function addContainer(addMilk) {
    console.log('container added');
    addMilk(addSugar);
}

function addSugar(addTea) {
    console.log('sugar added');
    addTea();
}

function addTea() {
    console.log('tea added');
}

function addMilk(addSugar) {
    console.log('Milk added');
    addSugar(addTea);
}


function makeTea(addContainer) {
    addContainer(addMilk);
}

//makeTea(addContainer);

// callback hell.

// promises

setTimeout(() => {
    console.log('First Outside');
    setTimeout(() => {
        console.log('First Inside');
    }, 1000);
}, 1000);


setTimeout(() => {
    console.log('Second Outside');
    setTimeout(() => {
        console.log('Second Inside');
    }, 1000);
}, 1000);

