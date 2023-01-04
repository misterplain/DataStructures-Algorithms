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

const stringValues = `//Write a function which takes in a string and returns counts of each character in the string
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone number is 182763" //cases, spaces, numbers, upper and lowercase
charCount("") //invalid input, what to do?`;

const stringValues2 = `function charCount(str) {
    //make object to return at end
    //loop over string, for each character
         //if the char is a number/letter AND is a key in object, add one to count
         //if the char is a number/letter AND not in object, add it and set value to 1
         //if character is something else (space, period, etc.) don't do anything
    //return object at end
}`;

const stringValues3 = `function charCount(str) {
  //make object to return at end
  var result = {};
  //loop over string, for each character
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter AND not in object, add it and set value to 1
    else {
      result[char] = 1;
    }
  }
       //if character is something else (space, period, etc.) don't do anything
  //return object at end
  return result;
}`;
const stringValues4 = `function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}`;

const stringValues5 = `function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) {
      obj[char] = ++obj[char] || 1; //if it's truthy, you'll add one to it
    }
  }
  return obj;
}

//use character codes, more efficient than regex
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && //numeric (0-9)
      !(code > 64 && code < 91) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) { //lower alpha (a-z)
    return false;
  }
  return true;
}`;

//charCodeAt()


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
        </Typography>
        <hr></hr>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h4'>Problem Solving Approach</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          1. Understand the problem
          <ul>
            <li>Can I restate the problem in my own words?</li>
            <li>What are the inputs that go into the problem?</li>
            <li>What are the outputs that should come from the solution?</li>
            <li>
              Can the outputs be determined from the inputs? In other words, do
              I have enough information to solve the problem? (You may not be
              able to answer this question until you set about solving the
              problem. That's okay; it's still worth considering the question at
              this early stage.)
            </li>
            <li>
              How should I label the important pieces of data that are a part of
              the problem?
            </li>
          </ul>
          Example - Write a function which takes two numbers and returns their
          sum
          <ul>
            <li>restate - "implement addition</li>
            <li>inputs - integers, floats, string for large numbers?</li>
            <li>outputs - integer, float, string?</li>
            <li>
              Can the outputs be determined from the inputs? Yes, but what is
              returned when we don't have the inputs?
            </li>
            <li>labels - "add"</li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          2. Concrete examples - start with simple examples and move to more
          complex, unit tests user stories
        </Typography>
        <PrismCode code={stringValues} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          3. Break it down - explicity write out the steps you need to take
        </Typography>
        <PrismCode code={stringValues2} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>4. Solve or simplify</Typography>
        <PrismCode code={stringValues3} language='javascript' />
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          5. Look back and refactor
          <ul>
            <li>Can you check the result?</li>
            <li>Can you derive the result differently?</li>
            <li>Can you understand it at a glance?</li>
            <li>Can you use the result or method for some other problem?</li>
            <li>Can you improve the performance of your solution?</li>
            <li>Can you think of other ways to refactor?</li>
            <li>How have other people solved this problem?</li>
          </ul>
        </Typography>
        <PrismCode code={stringValues4} language='javascript' />
        <Typography variant="body1">Otherwise, refactored again</Typography>
        <PrismCode code={stringValues5} language='javascript' />
      </Grid>
    </Grid>
  );
};

export default Notes;
