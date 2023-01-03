import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import PrismCode from "../../components/PrismCode";

const addUpTo = `function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}`;

const addUpTo2 = `function addUpTo(n) {
  return n * (n + 1) / 2;
  }`;

const addUpToTimer = `function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  let t1 = performance.now();
  addUpTo(1000000000);
  let t2 = performance.now();
  console.log(\`Time Elapsed: \${(t2 - t1) / 1000} seconds.\`);`;

const countUpAndDown = `function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\Going down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }`;

const printAllPairs = `function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }`;

const spaceComplex = `function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
      `;

const Notes = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {/* <Grid item xs={10}>
        <Typography variant='h3'>Notes</Typography>
      </Grid> */}
      <Grid item xs={10}>
        <Typography variant='h4'>Introduction to Big O / importance</Typography>
        <Typography variant='body1'>
          It's important to have a precise vocabulary to talk about how our code
          performs, can be many different ways to solve the same thing, we're
          striving for clean, efficient code.
        </Typography>

        <Typography variant='body1'>
          -10 different implementations of 'take a string and reverse it':{" "}
          <a
            target='__blank'
            href='https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript'
          >
            Stack Overflow
          </a>{" "}
        </Typography>
        <Typography varian='body1'>
          Below example, left is naive approach to sum all numbers up to n, the
          right solution wiill not require a loop, it's simply a mathematical
          formula.
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrismCode code={addUpTo} language='javascript' />
        <PrismCode code={addUpTo2} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Can use performance.now to track the time elapsed, built in timer
          function (not always the best option, different machines will record
          different times, speed measurements aren't always precise enough)
        </Typography>
        <PrismCode code={addUpToTimer} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          It's better to count the operations. There is one multiplication, one
          division = 3n, which can be simplified to just n as it grows roughly
          proportionally with n
        </Typography>
        <Typography variant='body1' marginTop>
          General trends
          <ul>
            <li>-f(n) could be linear - f(n) = n</li>
            <li>
              -f(n) could be more or less linear - f(n) = log n (we will see
              this with certain searching algorithms, sorting, and recursion
              algorithms)
            </li>
            <li>-f(n) could be constant - f(n) = 1</li>
            <li>-f(n) could be almost quadratic - f(n) = n log n</li>
            <li>-f(n) could be quadratic - f(n) = n^2</li>

            <li>-f(n) could be something entirely different</li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Example of f(n) - loops goes up, then goes back down
        </Typography>
        <PrismCode code={countUpAndDown} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Example of f(n^2) - nested loops
        </Typography>
        <PrismCode code={printAllPairs} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Big O Shorthands
          <ul>
            <li>Aritmetic operations are constant</li>
            <li>Variable assignment is constant</li>
            <li>
              Accessing elements in an array (by index) or object (by key) is
              constant
            </li>
            <li>
              In a loop, the complexity is the length of the loop times the
              complexity of whatever happens inside of the loop
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Space complexity
          <ul>
            <li>
              Most primitives (booleans, numbers, undefined, null) are constant
              space
            </li>
            <li>Strings require O(n) space (where n is the string length)</li>
            <li>
              Reference types are generally O(n), where n is the length (for
              arrays) or the number of keys (for objects)
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Example - there are only two variables here that are taking up space,
          the total and i, 0(1) space
        </Typography>
        <PrismCode code={spaceComplex} language='javascript' />
        <hr></hr>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h4'>Arrays and Objects</Typography>
        <Typography variant='body1'>
          -Big O of Objects - Insertion = O(1), Removal O(1), Searching O(N),
          Access O(1)
        </Typography>
        <Typography variant='body1'>
          -Built in method 'keys' will give you the keys to the key value pairs,
          Object.keys() will yeild all keys, same with values, and entries,
          hasOwnProperty('key') will yield true if it exists
        </Typography>
        <Typography variant='body1'>
          -Arrays are ordered, Big O of Arrays - Insertion it depends, Removal
          it depends, Searching O(N), Access O(1) - depends on where in the
          array you are inserting/removing
        </Typography>
        <Typography variant='body1' marginTop>
          Big O of Array operations
          <ul>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
              target='__blank'
            >
              <li>push O(1)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop'
              target='__blank'
            >
              <li>pop O(1)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'
              target='__blank'
            >
              <li>shift O(N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift'
              target='__blank'
            >
              <li>unshift O(N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'
              target='__blank'
            >
              <li>concat O(N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'
              target='__blank'
            >
              <li>slice O(N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
              target='__blank'
            >
              <li>splice O(N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'
              target='__blank'
            >
              <li>sort O(N * log N)</li>
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'
              target='__blank'
            >
              <li>forEach/map/filter/reduce/etc. O(N)</li>
            </a>
          </ul>
        </Typography><hr></hr>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h4'>Problem Solving Approach</Typography>
      </Grid>
    </Grid>
  );
};

export default Notes;
