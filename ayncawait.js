async function addContainer() {
     return 'container added';
}

async function addSugar() {
     return 'sugar added';
}


async function addMilk() {
    return 'Milk added';
}

async function makeTea() {
    let container = await addContainer();
    let milk = await addMilk();
    let sugar = await addSugar();
    console.log(container + milk + sugar);
}

makeTea();
console.log('Hello');