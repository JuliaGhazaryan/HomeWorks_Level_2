
//2.   Write a JavaScript function to get all possible subsets of given length of the given array.

function subSet(array, length) {
    let result = []

      function combine(myArray, subArray) {
          
          if (subArray.length === length) {
              result.push(subArray)
              return;
          }

          let size = myArray.slice()
            while (size.length) {
              combine(size, subArray.concat(size.shift()))
          }
      }
    
      combine(array, [])
      return result
    }
subSet([1, 2, 3, 4], 3)

//3.   Write a recursive function to determine whether all digits of the number are odd or not.

let number = prompt("Tell the number?")
number.split("").every(el => el % 2 !== 0)

//4. Given an array of numbers. Write a recursive function to find its minimal positive element. 

function minimalEl(arr) {
   
    arr = arr.filter(el=> el >= 0)
    
    if (arr.length < 2) {
        return arr[0];
    }else{
      
    return Math.min(arr.shift(), minimalEl(arr));
  }
  }
  
  minimalEl([45, -9, 15, 5, -78])