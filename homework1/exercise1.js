

Array.prototype.removeNum =  function(number){
    const arr = this
    return new Promise(function(resolve, reject){
        resolve(arr.filter(val => val != number))
    })
}

array = [1,3,4,2,1,5]

console.log('Start')
array.removeNum(1).then(result=> console.log(result));
console.log('Finish')
