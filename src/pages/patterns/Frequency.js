import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import PrismCode from "../../components/PrismCode";

const naive = `// same([1,2,3], [4, 1, 9]) will return true as  the values in array two are the squares of values in array one
// same([1,2,3], [1, 9]) will return false as 2 squared is not included in array two
// same([1,2,1], [4,4,1]) will return false because 4 is not represented twice from array 1

//naive solution using nested loops O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    //identify the index of the square of the value in array 1 in array 2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    //remove the value from array 2 so that it is not counted twice
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));`;

const refactored = `function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //loop through each array to create an object per array with the key being the value and the value being the frequency
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);
  //loop through the first object and check if the key squared is in the second object and if the frequency is the same
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log('false, do not contain the same keys')
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log('false, do not contain the same frequencies')
      return false;
    }
  }

  return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4,4]));`;

const anagramNaive = `function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      console.log("false, do not contain the same keys");
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      console.log("false, do not contain the same frequencies");
      return false;
    }
  }
  console.log(frequencyCounter1, frequencyCounter2);
  return true;
}

console.log(anagram("patrickk", "kcriktap"));`;

const anagramRefactored = `function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  //now that we have the lookup object, we loop over second string and subtract the frequency of the letter from the lookup object, if the letter is not in the lookup object, return false
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup + "console log second lookup");
  return true;
}
console.log(validAnagram("anagram", "anagram"));`;

const Frequency = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Typography variant='h4'>Frequency Counter</Typography>
        <Typography variant='h5' marginBottom>
          This pattern uses objects or sets to collect values/frequencies of
          values. This can often avoid the need for nested loops or O(n^2)
          operations with arrays/strings.
        </Typography>
        <hr></hr>
        <Typography variant='body1' marginBottom>
          Write a function called same, which accepts two arrays, the function
          should return true if every value in the array has it's corresponding
          value squared in the second array. The frequency of values must not be
          the same
        </Typography>
        <Typography variant='body1'>
          Naive approach using nested loops - indexOf is adding another loop
          within the function, n^2
        </Typography>
        <PrismCode code={naive} language='javascript' />
        <Typography variant='body1'>
          Refactored solution that only requires one loop per array rather than
          n loops or nested loops
        </Typography>
        <PrismCode code={refactored} language='javascript' />
        <hr></hr>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h5'>Anagram Challenge</Typography>
        <Typography variant='body1' marginBottom>
          Given two strings, write a function to determine if the second string
          is an anagram of the first. An anagram is a word, phrase, or name
          formed by rearranging the letters of another, such as cinema, formed
          from iceman. Original approach below
        </Typography>
        <PrismCode code={anagramNaive} language='javascript' />
        <Typography variant='body1' marginBottom>
          Refactored solution 
        </Typography>
        <PrismCode code={anagramRefactored} language='javascript' />
      </Grid>
    </Grid>
  );
};

export default Frequency;
