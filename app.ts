function firstNonRepeatedCharacter(s: string): string {
    const charCount: { [key: string]: number } = {};

    // Hint 2: Count the frequency of each character in the string
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Hint 3: Iterate through the string again and find the first character with a count of 1
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Hint 4: If no character with a count of 1 is found, return an empty string
    return "";
}

// Example Usage:
const s = "swiss";
console.log(firstNonRepeatedCharacter(s)); 
// Expected output: "w"


function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let i = 0;
  let j = 0;
  let mergeArray: number[] = []; 
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements of arr1, if any
  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements of arr2, if any
  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }

  return mergeArray;  
}
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));




