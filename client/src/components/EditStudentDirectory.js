import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Student from './Student'
import EditPopup from './EditPopup';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

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

export default function EditDirectory() {
    const classes = useStyles();
    const [population, setPopulation] = useState([])
        
    useEffect(() => {
        const url = new URL('http://localhost:8000/student/student-directory/retrieve')
        fetch(url)
        .then ((resp) => {
            return resp.json();
        }).then ((obj) => {
            setPopulation(obj);
        })
    }, []);

    function removeFromDirectory(person) {
        const url = new URL('http://localhost:8000/admin/student-directory/remove');
        url.searchParams.append('first', person.first)
        url.searchParams.append('last', person.last)
    
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
    };
    
    return (
        <div>
            <br/>
            <div> Add to student directory:
                <EditPopup type='student'/>
                <div>
                    <Grid container justify="center" spacing={2} className={classes.grid}>
                        {population.map((person) => (
                        <Grid item>
                            <Paper align='right' className={classes.paper}>
                            <Student student={person}/>
                                <IconButton onClick={() => removeFromDirectory(person)}>
                                <DeleteIcon></DeleteIcon>
                                </IconButton>
                                <EditPopup type='student'/>
                            </Paper>
                        </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
};