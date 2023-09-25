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

/* const sentence = ' technologies are shaping our world in innovative ways, revolutionizing industries and sparking innovative solutions to complex problems. Companies are investing in innovative research to create innovative products that cater to an innovative consumer base. The future is undeniably innovative, driven by an unyielding pursuit of innovation.'

const matches =  sentence.match(/innovative/gi)   //"i" means case insensitive  and "g" means globally checking 

// console.log(matches?.length);

const position = sentence.search(/innovatives/i);

console.log(position >= 0 ? position : 'not found');ddd */


// =============  9. input linierSearch(['a', 'b', 'c', 'b', 'd','c'] , 'c')
// output 2 or not found 

/* const inputValues = (['a', 'b', 'c', 'b', 'd','c'] , 'c');

const linierSearch= (input, value) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (element === value) {
            count ++
        }
        
    }

    return count;
}

console.log(linierSearch(['a', 'b', 'c', 'b', 'd','c'] , 'c')); */


// ==========  10 . How find long string in a array , and show me the index number.

/* const longString = (arr) => {
let longestStr = '';

for (const items of arr) {
    if (longestStr.length < items.length) {
        longestStr = items
    }
    
}

return [longestStr , arr.indexOf(longestStr)]

}

console.log(longString(['nieem a business man' , 'subtle is company', 'keep hardworking']));
 */

// ============== 11  1-100 whats number divisible with 3,5 and 3 or 5  both


/* for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('3 or 5 Divisible' , i);
    }else  if (i % 3 === 0) {
        console.log('only 3 Divisible' , i);
    }
    else if (i % 5 === 0) {
        console.log('only 5 Divisible' , i);
    }else {
        console.log(i);
    }
} */



// Write a javascript program to check two numbers and return true if one of the number is 100 or if sum of two numbers is 100 
// JavaScript প্রোগ্রাম, যেখানে দুটি সংখ্যা পরীক্ষা করা হয় এবং যদি একটি সংখ্যা 100 হয় অথবা দুটি সংখ্যার যোগফল 100 হয় তাহলে true রিটার্ণ করে।

/* const checkNumber = (num1 , num2) => {

    const isResult = num1 == 100 || num2 == 100 || num1 + num2 === 100
    console.log(isResult);
}

checkNumber(100 , 50) */


// write a program to get the extension of a file name
 // JavaScript প্রোগ্রাম, যা ফাইলের নামের এক্সটেনশন নিতে সাহায্য করে।

/* const getExtension = (fileName) => {

    const result = fileName.slice(fileName.lastIndexOf('.'))
    console.log(result);
}

getExtension('api.js')
 */



// Write a javascript code to replace every character in a given string with the character following it in the alphabet 

/* 
function replaceWithNextCharacter(str) {
 

    const result = str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('')
    console.log(result);
  
  
}

replaceWithNextCharacter('abcd')
 */


// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

/* 
const formatDate =  (date = new Date()) => {
    
    const days =  date.getDate() ;
    const months = date.getMonth() + 1;
    const year =  date.getFullYear()

    console.log(`${days} - ${months} - ${year}`);
}

formatDate()

 */

// Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

/* 
const addText =  (text) => {

    const result = text.startsWith('New!') ?  `${text}` : `New! ${text}`;
    console.log(result);
}

addText('Hello World') */


// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.

/* 
const makeNewString =  (str) => {

    const result =  str.length < 3 ? str : str.slice(0, 3) + "--" + str.slice(-3);
    console.log(result);
}

makeNewString("abcd")
makeNewString("abcdefcg")
makeNewString("ab")

 */


// Write a JavaScript program to extract the first half of a string of even length.


/* 
const divideText =  (str) => {
    const result =  str.slice(0 , str.length / 2);

    console.log(result);
}

divideText('hello')
divideText('melo')
divideText('dilooooo')

 */

// Write a JavaScript program to concatenate two strings except their first character.

/* 
const concatenate = (str1 , str2) => {

    const result =  str1.slice(1) + str2.slice(1);
    console.log(result);
}

concatenate('hello' , 'dear')
 */


// Given two values, write a JavaScript program to find out which one is nearest to 100

/* const findNearest100= (num1 , num2) => {
    const result =  (100 - num1) < (100 - num2) ? num1 : num2;
                             
    console.log(result);
}

findNearest100(99 , 1)
findNearest100(51 , 49)
findNearest100(50 , 67) */


// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.

const findCharLength = (str, char) => 
str.split('').filter(ch => ch === char).length;


const contain2To4 =  (str , char) =>  
findCharLength(str, char) >= 2  && findCharLength(str , char) <= 4;


console.log(contain2To4('ooh!' , 'o'));
console.log(contain2To4('ooooooh!' , 'o'));