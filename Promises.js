

function fetchUsers() {
    return [
        {
            firstName: 'Yuvi',
            lastName: 'Mule',
            Course: 'BE-07'
        },
        {
            firstName: 'Pallab',
            lastName: 'Nandi',
            Course: 'BE-07'
        },
        {
            firstName: 'Prince',
            lastName: 'Pritam',
            Course: 'BE-07'
        },
        {
            firstName:'Mayur',
            lastName: 'Srivas',
            Course: 'BE-07'
        } 
    ];
    return{error : true};
} 

function fetchUsersPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(fetchUsers());
        }, 2000)
    })
}

function fetchEmployees() {
    return [
        {
            FirstName: ''
        }
    ]
}