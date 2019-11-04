import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    itemWrapper: {
        padding: '20px 0',
        borderBottom: `1px solid ${theme.palette.black}`,
        margin: '20px 0'
    },
    nameWrapper: {
        justifyContent: 'space-between',
        fontSize: 18,
        color: theme.palette.red,
    },
    dateWrapper: {
        textAlign: 'right',
        color: theme.palette.silver,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
        },
    },
    langWrappper: {
        fontSize: 16,
        color: theme.palette.silver,
    },
    desriptionWrapper: {
        margin: '20px 0',
    },
}));

export const RepositoryItem = ({ item }) => {
    const classes = useStyles()
    return(
        <Grid className={classes.itemWrapper}>
            <Grid container className={classes.nameWrapper}>
                <Grid item xs={12} sm={4}>
                    <Typography>
                        {item.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.dateWrapper}>
                    <Typography>
                        {item.created_at.slice(0,10)} - {item.updated_at.slice(0,10)}        
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.langWrappper}>
                {item.lang} - {item.rights}
            </Typography>
            <Typography className={classes.desriptionWrapper}>
                {item.description}
            </Typography>
            <Typography>
                This repository has {item.stargazers_count} stars and {item.forks} forks. 
                If You would like more information about this repository and 
                my contributed code, please visit <br />
                <Typography component="a" href={item.url}>{item.url}</Typography> on GitHub
            </Typography>
        </Grid>
    )
}