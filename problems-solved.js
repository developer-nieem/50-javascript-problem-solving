// Find the largest number in an array.

const findLargestNum = (arr) => {
        let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        
        // if find small just use less than
        if (arr[i] > max) {
            max = arr[i]
        }
        
    }
    console.log(max);
}

findLargestNum([ 500,6,48,9656,56,])