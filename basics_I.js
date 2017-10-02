let x = [];
console.log(x);

x.push('coding', 'dojo', 'rocks');
console.log(x);

x.pop();
console.log(x);

const y = [];
// console.log(y);
y.push(88);
console.log(y);

let z = [9, 10, 6, 5, -1, 20, 13, 2];

for (var i = 0; i < z.length - 1; i++){
    console.log(z[i]);
}

let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

for (i in names){
    if (names[i].length === 5){
        console.log(names[i]);
    }
}

function yell(string){
    var res = string.toUpperCase();
    return res;
}

console.log(yell('coding'));