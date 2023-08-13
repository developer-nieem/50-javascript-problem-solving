// Find the largest number in an array.

/* const findLargestNum = (arr) => {
        let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        
        // if find small just use less than
        if (arr[i] > max) {
            max = arr[i]
        }
        
    }
    console.log(max);
}

findLargestNum([ 500,6,48,9656,56,]) */


//============== 2.  How to show 1 -6 numbers on ludu

/* const luduKhala = (min, max) => {
    const result =  Math.floor(Math.random() * (max - min + 1 ) + min );
    return result
}

console.log(luduKhala(1 , 6));  */

// ========== 3. How to sort students name Alphabetically on class students

/* const classStudentsSort =  (students) => {
    return students.sort();
}

const students =  ['Kamal', 'jamal', 'Amal'];
console.log(classStudentsSort(students)); */

// ======= 4. How to sort students roll base SL

/* const rollSort = roll => {
   const result =  roll.sort( function(a , b){
        return a - b
    })

    return result;
}
const rolls = [5,4,5,1,2,6]
console.log(rollSort(rolls)); */