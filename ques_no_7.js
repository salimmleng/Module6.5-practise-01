
//remove duplicate


const numbers = new Set([1, 2, 3, 3, 4, 4,4,5,
     6, 7, 8, 9, 10]);

let res = [];
for (const x of numbers) {
    res.push(x);
  }

console.log(res);
