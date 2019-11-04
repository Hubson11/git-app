import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import { FormGenerator } from './FormGenerator';
import { Title } from './Title';
import { Resume } from './Resume';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.silver,
    maxWidth: '1170px',
    margin: '0 auto',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
    },
  },
}));

export const App = () => {
  const [value, setValue] = useState('')
  const [generatorName, setGeneratorName] = useState('')
  const classes = useStyles()

  return (
    <Grid className={classes.main}>
      <Title text="My Github Resume" />
      <FormGenerator 
        value={value}
        setValue={setValue}
        setActiveGenerator={setGeneratorName}
      />
      {generatorName.length > 0 &&
        <Resume value={value} generatorName={generatorName} />
      }
    </Grid>
  );
}

export default App;
