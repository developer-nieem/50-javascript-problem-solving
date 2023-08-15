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


// ========= 5. check leap Year 
/* 
const isLeapYear =  (year) => {
    
    if (year % 400 == 0 || (year / 4 == 0 && year / 100 != 0 )) {
        console.log('is Leap year');
    } else{
        console.log(  'not leap year');
    }
   
}

isLeapYear(2001) */


// ========== 6  how to find how many VOWEL from a sentence ;

/* const vowels =  ['a', 'e' , 'i', 'o', 'u' , 'A' , 'E' , 'I' , 'O' , 'U' ];

const findVowels = (sentence) => {

        let count =  0;
    const letters =  Array.from(sentence);

    for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
       
        if (vowels.includes(element)) {
            count ++
        }
    }
    
return count

}

console.log(findVowels('I hate You eeeeeeeeee')); */


//  =========  7. how to find duplicate number from array

/* const numbers = [2,5,2,5,69,89,87,8,4,56,7, 8,6];

const findDuplicateNumbers =  (num) => {
    
    const duplicatesNum =  num.filter((item , index , array) => {
        return array.indexOf(item) !== index
    } );
     console.log(duplicatesNum);
}

findDuplicateNumbers(numbers) */

// =========  8. find how many time use "innovative"? and find first "Innovative" how many length used

const sentence = ' technologies are shaping our world in innovative ways, revolutionizing industries and sparking innovative solutions to complex problems. Companies are investing in innovative research to create innovative products that cater to an innovative consumer base. The future is undeniably innovative, driven by an unyielding pursuit of innovation.'

const matches =  sentence.match(/innovative/gi)   //"i" means case insensitive  and "g" means globally checking 

// console.log(matches?.length);

const position = sentence.search(/innovatives/i);

console.log(position >= 0 ? position : 'not found');