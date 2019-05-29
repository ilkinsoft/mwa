
Array.prototype.pluck = function (boolVal) {
    const arr = this
    if (boolVal)
        process.nextTick(() => console.log(Math.max(...arr)));
    else
        process.nextTick(() => console.log(Math.min(...arr)))
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('start')
array.pluck(true)
array.pluck(false)
console.log('end')

