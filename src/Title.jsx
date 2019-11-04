import React from 'react';
import { 
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        fontSize: 28,
        textAlign: 'center',
        padding: '20px 20px 40px',
    }
  });

export const Title = ({ text }) => {
    const classes = useStyles()
    return(
        <Typography className={classes.title}>
            {text}
        </Typography>
    )
}