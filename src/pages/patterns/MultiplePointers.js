import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import PrismCode from "../../components/PrismCode";

const sumZeroNaive = `function sumZero(arr){
  for(let i = 0;i<arr.length;i++){
    for(let j = i+1; j<arr.length;j++){
      if(arr[i] + arr[j] === 0 ){
        return [arr[i], arr[j]]
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) //-3 and 3
console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 5])) //-2, 2`;

const sumZeroRefactored = `function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
      //result is positive, move right pointer down
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 5]))`

const countUniqueValues = `function countUniqueValues(arr) {
  //i starts at 0, j starts at 1
  //if i and j are not equal, increment i and set i to j, replaces value within array
  //i will be at j position, i will continue to increment until it finds a new value
  //i + 1 will be the number of unique values
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8]));
`

const MultiplePointers = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Typography variant='h4'>Multiple Pointers</Typography>
        <Typography variant='h5'>
        Creating pointers or values that correspond to an index or position and move towards the beginning, end , or middle based on a certain condition. Very efficient for solving problems with minimal space complexity 
        </Typography><hr></hr>
        <Typography variant='body1' marginBottom>
          Write a function called sumZero which accepts a sorted array of
          integers. he function should find the first pair where the sum is 0.
          return an array that includes both the values that sum to szero or an
          undefined if a pair does not exist
        </Typography>
        <Typography variant='body1' marginBottom>
          Naive approach - nested loops
        </Typography>
        <PrismCode code={sumZeroNaive} language='javascript' />
        <Typography variant='body1' marginBottom>
          Multiple pointers approach - start at end of each side, if the result
          is negative, move inwards etc
        </Typography>
        <PrismCode code={sumZeroRefactored} language='javascript' /><hr></hr>
        <Typography variant='body1' marginBottom>
          Write a function called countUniqueValues, which accepts a sorted array,
          and counts the unique values in the array. There can be negative
          numbers in the array, but it will always be sorted
        </Typography>
        <PrismCode code={countUniqueValues} language='javascript' />

      </Grid>
    </Grid>
  );
};

export default MultiplePointers;
