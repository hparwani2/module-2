const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "abc.txt");

// program to open and update the file
fs.open(fileName, "r+", (err, fd) => {
  if (err) console.log(err);
  else
    fs.write(fd, "updating the content", (err, data) => {
      if (err) console.log(err);
      else console.log("updated");
    });
});

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

// generators
const generator = function* (st = 1, end = null, steps = 1) {
  for (let i = st; i <= end; i += steps) {
    yield i;
  }
};

const iter = generator(1, 10, 2);
it = iter.next();
while (!it.done) {
  console.log(it.value);
  it = iter.next();
}
