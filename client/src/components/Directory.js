import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Teacher from './Teacher'
import Student from './Student'


const useStyles = makeStyles(() => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: "repeat(4, 4fr)",
  },
  paper: {
    height: 140,
    width: 300,
  },
}));

export default function Directory( {type} ) {
  const classes = useStyles();
  const [population, setPopulation] = useState([])
    
  function populate() {
    const url = new URL('http://localhost:8000/student/' + type + '-directory/retrieve')
    fetch(url)
      .then ((resp) => {
        return resp.json();
      }).then ((obj) => {
        setPopulation(obj);
      })
  }
  if (population.length === 0) {
    return(
      <div>{populate()}</div>
    );
  }
  if (type === 'teacher') {
    return(
        <Grid container justify="center" spacing={2} className={classes.grid}>
          {population.map((person) => (
            <Grid item>
              <Paper className={classes.paper}>
                <Teacher teacher={person}/>
              </Paper>
            </Grid>
          ))}
        </Grid>
    );
  } else {
    return(
      <Grid container justify="center" spacing={2} className={classes.grid}>
        {population.map((person) => (
          <Grid item>
            <Paper className={classes.paper}>
              <Student student={person}/>
            </Paper>
          </Grid>
        ))}
      </Grid>
  );
  }

}