import React from 'react';
import {
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { LanguageItem } from './LanguageItem';

const useStyles = makeStyles(theme => ({
    languagesWrapper: {
        margin: '20px 0',
    },
    title: {
        margin: '40px 0 0',
        fontSize: 20,
        fontWeight: 'bold'
    },
    languagesCont: {
        flexDirection: 'row',
        margin: '20px 0',
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
}));

export const Languages = ({ languages, count }) => {
    const classes = useStyles()
    return(
        <Grid className={classes.languagesWrapper}>
            <Typography className={classes.title}> 
                Languages
            </Typography>
            <Grid container className={classes.languagesCont}>
                {Object.keys(languages).map(item => <LanguageItem key={item} lang={item} percentage={(languages[item] / count * 100).toFixed(2)} />)}
            </Grid>
        </Grid>
    )
}