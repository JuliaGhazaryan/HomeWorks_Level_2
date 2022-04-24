// 1. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

function wrongNumber(arr){
    let result = []
      for(let i=0; i<arr.length; i++){
          if(arr[i]<arr[i-1]) {
              result.push(arr[i])
          }
      }
              return arr.indexOf(result[0])
      }
  
  wrongNumber([-9, -4, -4, 3, 12, 4, 5])

// 2. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array
function rowSum(arr){
    let result =[]
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = 0; j < arr[i].length; j++){
        sum+=arr[i][j]

}
        result.push(sum)
}
console.log(result)
}
rowSum([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]])

// 3. Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length

function oddArr(arr){
    let result = []
        for(let i = 0; i<arr.length; i++){
            if(arr[i] % 2 !== 0){
                result.push(arr[i])
            }
        }
            return result.map(function(el){
               return el*result.length})
        }
        oddArr([5, 4, 78, 0, -3, 7])

// 4. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function digitSum(number){
    let result = String(number)
    while(result.length>1) {
        let sum = 0
        for(let i = 0; i < result.length; i++) {
            sum += +result[i]
        }
        result = String(sum)
    }
    return +result 
}
    digitSum(29)

// 5. Write a recursive function which receives  a number as arguments and returns the fibonacci sequence as array.

function fibSequence(num){
    let result = [0,1]
    for(let i = 2; i <= num; i++) {
        result[i] = result[i-1] + result[i-2]
    }
    if(num === 0){
        return []
    }else{
        
    return result.slice(1)
}
}
fibSequence(10)