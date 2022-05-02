// 1.	Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

function delFirstEl(arr){
  let result= []
  for(let  i = 1; i< arr.length; i++){
      arr[i-1] = arr[i]
      result.push(arr[i])
  }

  return result 
}

// 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flattenArray (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]))
      } else {
        result.push(arr[i])
      }
    }
    return result
  }

  // 3. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

  function rotateArr(arr, n) { 
    if (n<=0) {
        return arr
    } 
    else{  
        arr.push(arr.shift())
        return rotateArr(arr, n-1)
    }
 }

 rotateArr(["a","b","c","d","e","f","g","h"], 3)

 // 4. Output the books sorted by the percent in descending order which readStatus is true.

 let books = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

books.filter(el=>el.readStatus===true).sort((a,b) => b.percent-a.percent)

// 5. Implement “map” method for plain objects (same as Array map method.)

function mapForObject(cB){
  let result = {}
   for(let key in this){
     if(this.hasOwnProperty(key) && key != "map"){
       result[key] = cB(this[key],key,this)
    }
  }
  return result
}

 let myObject = { 'a': 2, 'b': 4, 'c': 9 }
myObject.map = mapForObject
newObject = myObject.map(function (value) {
  return value * 2
})
