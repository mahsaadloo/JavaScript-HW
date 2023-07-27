function weather() {
    const temp = +prompt(" Enter Temperature in C to change it to F : ");
    const frnheit = temp * 1.8 + 32;
    return (frnheit);
}

console.log(weather());

// function weather(a) {
//     const frnheit = a * 1.8 + 32;
//     return(frnheit);
// }

// console.log(weather(10));