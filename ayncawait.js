async function fetchUsers() {
    return [
        {
            firstName: 'prince',
            lastName: 'pritam',
            course: 'BE-6'
        },
        {
            firstName: 'pallab',
            lastName: 'nandi',
            course: 'BE-6'
        },
        {
            firstName: 'Haganesh',
            lastName: 'kumar',
            course: 'BE-6'
        },
        {
            firstName: 'Mayur',
            lastName: 'shrivas',
            course: 'BE-6'
        }
    ];
}

async function concat(users) {
    let result = [];
    for(let user of users) {
        result.push(user.firstName + user.lastName);
    }
    return result;
}


async function display(value) {
    console.log(value);
}

async function performOperation() {
    let users = await fetchUsers();
    let concatenated = await concat(users);
    await display(concatenated);
}
performOperation();
console.log('hey');