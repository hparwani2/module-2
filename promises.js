/*

chaining of dependent operations.
    1. fetchingUsers
    2. concatinating first and lastname
    3. display
*/

function fetchUsers() {
    // return [
    //     {
    //         firstName: 'prince',
    //         lastName: 'pritam',
    //         course: 'BE-6'
    //     },
    //     {
    //         firstName: 'pallab',
    //         lastName: 'nandi',
    //         course: 'BE-6'
    //     },
    //     {
    //         firstName: 'Haganesh',
    //         lastName: 'kumar',
    //         course: 'BE-6'
    //     },
    //     {
    //         firstName: 'Mayur',
    //         lastName: 'shrivas',
    //         course: 'BE-6'
    //     }
    // ];
    return { error: true };
}

function fetchUserPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(fetchUsers());
        }, 2000)
    })
}

function fetchEmployees() {
    return [
        {
            firstName: 'prince',
            lastName: 'pritam',
            course: 'BE-6'
        },
        {
            firstName: 'Haganesh',
            lastName: 'kumar',
            course: 'BE-6'
        }
    ];
}

function fetchEmployeesPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(fetchEmployees());
        }, 3000)
    })
}

function concat(users) {
    let result = [];
    for(let user of users) {
        result.push(user.firstName + user.lastName);
    }
    return result;
}


function display(value) {
    console.log(value);
}


function performOperation() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            let users = fetchUsers();
            if(users.error) {
                reject('Error Occurred');
            } else {
                resolve(users);
            }
        }, 2000);
    }).then((data) => {
        return concat(data);
    })
    .then((data) => {
        display(data);
    }).catch((error) => {
        console.log('inside catch');
    });
}

// then accepts two functions
/*
1. onFulfiled
2. onRejected
*/

/*
1. promise.all
2. promise.any
3. promise.race
*/

performOperation();

/*
promise.any -> 
1. if any one of them resolves that will be passed next
callback.
2. if every promise is rejected then the first rejected
promise will be passed as onRejected.
*/

/*
promise.race ->
1. whichever promise resolves or rejects first will be 
passed as onFulfilled or onRejected.
*/