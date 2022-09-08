function addContainer() {
    return 'container added';
}

function addSugar() {
    return 'sugar added';
}

function addTea() {
    return ' tea added';
}

function addMilk() {
    return ' Milk added';
}

function makeTea() {
    new Promise(function(resolve, reject) {
        resolve(addContainer()); // whatever function inside the resolve
        // will return that would be passed to next 'then'.
        reject((error) => console.log('error occured while making tea', error));
        // if there is any error inside resolve it'll passed to resolve and
        // whatever returned from reject will be passed to onRejected.

    }).then((onFulfilled, onRejected) => {
        if(!onRejected) {
            return onFulfilled + addMilk();
        }
    }).then((onFulfilled, onRejected) => {
        if(!onRejected) {
            return onFulfilled + addTea();
        }
    }).then((onFulfilled, onRejected) => {
        console.log(onFulfilled);
    });
}

makeTea();
console.log('Bye');