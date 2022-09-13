function RangeInterator(start = 1, end = Infinity, steps = 1) {
    let latest = 0;
    this.next = function() {
        if(latest <= end) {
            if(latest = 0) {
                latest = start;
                return latest;
            }
            latest+=steps;
            return latest;
        } 
        return { done: true };
    }
}

// let it = new RangeInterator(1, 20, 2);
// while(!it.next().done) {
//     console.log(it.next());
// }

/*
Generators -> it is used to create iterators
*/

function* rangeIterator(start=1, end=Infinity, steps=1) {
    for(let i=start;i<=end;i+=steps) {
        yield i;
    }
}

// whenever yield keyword gets encountered the execution
// of next function would be returned.


// let it = rangeIterator(1, 20, 4);
// let nextVal = it.next();
// while(!nextVal.done) {
//     console.log(nextVal.value);
//     nextVal = it.next();
// }


function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

// let it = generator();

// for(let item of it) {
//     console.log(item);
// }
// for(let item of it) {
//     console.log(item);
// }

//let it = generator();

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().done);

// when we'll trigger next function it'll 
// execute the generator till next yield.
// when there is no yield left then done value would be true.


function* fibonacci() {

    let first = 0;
    let second = 1;
    yield first;
    yield second;
    while(true) {
        let temp = second;
        second = first + second;
        first = temp;
        let reset = yield second;
        if(reset) {
            first = 0;
            second = 1;
        }
    }
}

// let it = fibonacci();
// let i=0;
// while(i<=5) {
//     console.log(it.next().value);
//     i++;
// }
// it.next(true);
// console.log(it.next(true).value);


// function* toIterator() {
//      yield* ['a', 'b', 'c'];
// }

// let arrIt = toIterator();

// console.log(arrIt.next().value);



