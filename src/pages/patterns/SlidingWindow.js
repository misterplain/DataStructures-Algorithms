import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import PrismCode from "../../components/PrismCode";

const maxSubarraySumNaive = `
// maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
// maxSubarraySum([2, 3], 3) // null

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    //replace variable temp with higher value
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

`;

const maxSubarraySumSlidingWindow = `function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    //subtract first value and add next value
    //compare to maxSum
    //replace maxSum with higher value
    //repeat until end of array
    //arr[i-num] is the first value in the window
    //arr[i] is the next value in the array
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
`;

const SlidingWindow = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10}>
        <Typography variant='h4'>Sliding Window</Typography>
        <Typography variant='h5'>
          This pattern involves creating a window which can either be an array
          or number from one position to another. Depending on a certain
          condition, the window either increases or closes (and a new window is
          created). Very useful for keeping track of a subset of data in an
          array/string etc.
        </Typography>
        <hr></hr>
        <Typography variant='body1' marginBottom>
          Example - Write a function called maxSubarraySum which accepts an
          array of integers and a number called n. The function should calculate
          the maximum sum of n consecutive elements in the array.
        </Typography>
        <PrismCode code={maxSubarraySumNaive} language='javascript' />
        <Typography variant='body1' marginBottom>
          Sliding Window Approach
        </Typography>
        <PrismCode
          code={maxSubarraySumSlidingWindow}
          language='javascript'/>
      </Grid>
    </Grid>
  );
};

export default SlidingWindow;
