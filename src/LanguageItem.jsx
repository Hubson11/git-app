import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    itemWrapper: {
        maxWidth: '150px',
        margin: '10px 10px 10px 0',
    },
    languageWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    percentWrapper: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    progressWrapper: {
        height: '2px',
        width: '100%',
        border: `1px solid ${theme.palette.black}`,
        position: 'relative',
    },
    progress: {
        height: '100%',
        backgroundColor: 'red',
    },
    langLabel: {
        fontSize: 16,
        color: theme.palette.red,
    },
    percLabel: {
        fontSize: 16,
        color: theme.palette.silver,
    }
}));

export const LanguageItem = ({ lang, percentage }) => {
    const classes = useStyles();
    return(
        <Grid container className={classes.itemWrapper}>
            <Grid container item xs={6} className={classes.languageWrapper}>
                <Typography className={classes.langLabel}>
                    {lang}
                </Typography>
            </Grid>
            <Grid container item xs={6} className={classes.percentWrapper}>
                <Typography className={classes.percLabel}>
                    {percentage}%
                </Typography>
            </Grid>
            <Grid className={classes.progressWrapper}>
                <Grid style={{ width: `${percentage}%` }} className={classes.progress} />
            </Grid>
        </Grid>
    )
}