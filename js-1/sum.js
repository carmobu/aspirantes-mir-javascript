function suma(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(suma(4))
console.log(suma(10))
console.log(suma(15))