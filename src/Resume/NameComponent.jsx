import React from 'react'
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    contentWrapper: {
        margin: '30px 0',
    },
    loginLabel: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    descriptionLabel: {
        color: theme.palette.silver,
        fontSize: 18,
    },
}));

export const NameComponent = ({ name }) => {
    const classes = useStyles()
    return(
        <Grid className={classes.contentWrapper}>
            <Typography className={classes.loginLabel}>
                {name}
            </Typography>
            <Typography className={classes.descriptionLabel}>
                A passionate Github user
            </Typography>
        </Grid>
    )
}