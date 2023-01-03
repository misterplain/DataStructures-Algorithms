import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const Patterns = () => {
  let link = "xxx";

  const patternList = [
    {
      link: 'frequency-counter',
      name: 'Frequency Counter',
      description: 'This pattern uses objects or sets to collect values/frequencies of values'
    },
    {
      link: 'multiple-pointers',
      name: 'Multiple Pointers',
      description: 'Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition'
    },
    {
      link: 'sliding-window',
      name: 'Sliding Window',
      description: 'This pattern involves creating a window which can either be an array or number from one position to another'
    },
    {
      link: 'divide-and-conquer',
      name: 'Divide and Conquer',
      description: 'This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data'
    },
  ]
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>

      {patternList.map((pattern) => (
         <Grid item xs={5} sx={{ border: "" }}>
        {/* <Link to={`/patterns/${link}`}> */}
        {/* <Link to='/' style={{textDecoration: 'none'}}> */}
        <Link to={`/patterns/${pattern.link}`} style={{textDecoration: 'none'}}>
          <Card
            sx={{
              width: "100%",
              height: 250,
              backgroundColor: "grey.600",
              "&:hover": {
                backgroundColor: "grey.700",
                opacity: [0.9, 0.8, 0.7],
              },
              textAlign: "center",
            }}
          >
            <CardContent sx={{padding: '10px'}}>
              {" "}
              <Typography
                variant='h5'
                sx={{
                  paddingTop: "10px",
                  color: "white",
                  borderBottom: "1px solid white",
                }}
              >
                {pattern.name}
              </Typography>
              <Typography variant='body1' sx={{ color: "white" }}>
                {pattern.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      ))}
     
     
    </Grid>
  );
};

export default Patterns;
