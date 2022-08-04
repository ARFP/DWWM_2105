let a = [11, 3, 5, 23, 3, 12]

let result = a.sort((x, y) => x - y).reverse();

console.log(result)

let b = [
    {votes: 111, name: "toto"},
    {votes: 5, name: "zaza"},
    {votes: 87, name: "titi"}
]

result = b.sort((x, y) => x.votes - y.votes);

console.warn(result);

result = b.sort((x, y) => {
    if(x.name < y.name) {
        return -1;
    } else if (x.name > y.name) {
        return 1;
    }
    
    return 0;
})

console.error(result)