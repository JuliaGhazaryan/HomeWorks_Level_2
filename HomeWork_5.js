
// 2.   Write a JavaScript function to get all possible subsets of given length of the given array.

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

// 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.

function f(text) {

    console.log(text)

    }

    function delay(f, ms) {
    
      return function() {
        setTimeout(() => f.apply(this, arguments), ms)
      }
    
    }
    let d = delay(f, 5000)
    
    d("done!")

    // 4. Implement Debounce decorator

    function debounce(f, ms) {
      let counting = false;
    
      return function() {
        if (counting) {
          return 
        }
        
        f.apply(this, arguments);
        counting = true;
        
        setTimeout(() => counting = false, ms);
      }
    }

    let k = debounce(alert, 2000)
   
    k(1) // works
    k(2) // doesn't work
  
    setTimeout( () => k("a"), 500) // doesn't work, less than 2000 ms has passed
    setTimeout( () => k("b"), 2500) // works, 2000 ms has passed since the last one
   