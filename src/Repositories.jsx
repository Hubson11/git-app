import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { RepositoryItem } from './RepositoryItem';

const useStyles = makeStyles({
    repositoriesWrapper: {
        margin: '40px 0 20px',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export const Repositories = ({ reposData }) => {
    const classes = useStyles();
    return(
        <Grid>
            <Typography className={classes.repositoriesWrapper}>
                Popular repositories
            </Typography>
            <Grid>
                {reposData.map(item => <RepositoryItem key={item.id} item={item} />)}
            </Grid>
        </Grid>
    )
}