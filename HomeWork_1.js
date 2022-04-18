// 1. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

function invertObj(obj){
  let result = {}
  for(let key in obj){
    result[obj[key]] = result[obj[key]]  || []
     result[obj[key]].push(key) 
  }
  return result
}
invertObj({ a: "1", b: "2", c: "2", d: "2" })

  // 2. Given two objects. Write a function that performs shallow compare.
  
  function shallowCompare(a, b) {
    for(let key in a) {
        if(b[key]!==a[key]) {
            return false
        }
    }
    for(let key in b) {
        if(a[key]!==b[key]) {
            return false
        }
    }
    return true;
}

var a = { a: '1' }
var b = { a: '1', b: '2' }
shallowCompare(a, b)

 

  // 3.	Given an array. Determine whether it consists only from uniques or not.

 function uniqueArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false
      }
    }
    return true
  }
 
 uniqueArr([1,2,3,4,5,6,57])

  // 4. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.
  
  function findIsogram(str){
  
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++) {
      for(let j = i + 1; j < str.length; j++) {
        if(str[i] === str[j]) {
          return false
        }
      }
    }
    return true
 }
 findIsogram("surname")


  // 5.	Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

    let arr = [1,2,5,6,8,9]
    range = 10
    missingNumbers = []

  for (let i = 1; i <= range; i++) {
    if (arr.indexOf(i) === -1) {
      missingNumbers.push(i)
    }
  }
  console.log(missingNumbers)
  console.log(missingNumbers.length)