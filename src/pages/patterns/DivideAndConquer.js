import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import PrismCode from "../../components/PrismCode";

const divideNaive = `function search(arr,val){
  for(let i = 0;i<arr.length;i++){
    if(arr[i]===val){
      return i
    }
  }
  return -1
}
console.log(search([1,2,3], 3))`;

const divideRefactored = `function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle - 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return array.indexOf(currentElement);
    }
  }
  return -1;
}
console.log(search([1, 2, 3], 3));`;

const DivideAndConquer = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Typography variant='h4'>Divide and Conquer</Typography>
        <Typography variant='h5'>
          This pattern involves dividing a data set into smaller chunks and then
          repeating a process with a subset of data This pattern can
          tremendously decrease time complexity
        </Typography>
        <hr></hr>
        <Typography variant='body1'>
          Write a function called search that accepts a value and returns the
          index where the value passed tot he function is located, if the value
          is not found, return -1
        </Typography>
        <Typography variant='body1'>Naive approach - nested loops</Typography>
        <PrismCode code={divideNaive} language='javascript' />
        <Typography variant='body1'>Refactored</Typography>
        <PrismCode code={divideRefactored} language='javascript' />
      </Grid>
    </Grid>
  );
};

export default DivideAndConquer;
