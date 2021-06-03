import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Teacher from './Teacher'
import Student from './Student'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditPopup from './EditPopup';


const useStyles = makeStyles(() => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: "repeat(4, 12fr)",
  },
  paper: {
    height: 200,
    width: 300,
  },
}));

export default function Directory( {type, isAdmin} ) {
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

  function removeFromDirectory(person) {
    const url = new URL('http://localhost:8000/admin/' + type + '-directory/remove');
    url.searchParams.append('first', person.first)
    url.searchParams.append('last', person.last)

    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then(populate());
  };

  if (population.length === 0) {
    return(
      <div>{populate()}</div>
    );
  } 
  if (!isAdmin) {
    if (type === 'teacher') {
      return(
        <div>
          <Grid container justify="center" spacing={2} className={classes.grid}>
            {population.map((person) => (
              <Grid item>
                <Paper className={classes.paper}>
                  <Teacher teacher={person}/>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    } 
    else {
      return(
        <div>
          <Grid container justify="center" spacing={2} className={classes.grid}>
            {population.map((person) => (
              <Grid item>
                <Paper className={classes.paper}>
                  <Student student={person}/>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
  else {
    if (type === 'teacher') {
      return(
        <div>
          <Grid container justify="center" spacing={2} className={classes.grid}>
            {population.map((person) => (
              <Grid item>
                <Paper align='right' className={classes.paper}>
                  <Teacher teacher={person}/>
                    <IconButton onClick={() => removeFromDirectory(person)}>
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <EditPopup type={type}/>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    } 
    else {
      return(
        <div>
          <Grid container justify="center" spacing={2} className={classes.grid}>
            {population.map((person) => (
              <Grid item>
                <Paper align='right' className={classes.paper}>
                  <Student student={person}/>
                    <IconButton onClick={() => removeFromDirectory(person)}>
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <EditPopup type={type}/>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
};