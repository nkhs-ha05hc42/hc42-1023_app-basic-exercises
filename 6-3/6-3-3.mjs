const Array1 = [98, 85, 80, 82]
const Array2 = [98, 85, -79, 82]
console.log(Array1.some(value => value < 0))
console.log(Array2.some(value => value < 0))
