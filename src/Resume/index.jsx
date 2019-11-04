import React, { useState, useEffect } from 'react';
import {
    Typography,
    Card,
    makeStyles,
    CircularProgress,
    Grid,
} from '@material-ui/core';
import { Languages } from '../Languages';
import { Repositories } from '../Repositories';
import axios from 'axios';
import { NameComponent } from './NameComponent';

const useStyles = makeStyles(theme => ({
    resumeWrapper: {
        margin: '20px auto',
        backgroundColor: theme.palette.white,
        borderRadius: '8px',
        padding: '20px 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 15px',
          },
    },
    contentWrapper: {
        margin: '30px 0',
    },
    spinnerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export const Resume = ({ value, generatorName }) => {
    const [userData, setUserData] = useState(null)
    const [reposData, setReposData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const classes = useStyles()

    const fetchData = async () => {
        try {
            await axios.all([
                axios.get(`https://api.github.com/users/${value}`),
                axios.get(`https://api.github.com/users/${value}/repos`)
            ])
            .then(axios.spread((respUserData, respReposData) => {
                setUserData(respUserData.data)
                setReposData(respReposData.data)
                setLoading(false)
                setError(false)
            }))
        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [generatorName])

    if(loading) return (
        <Card className={classes.resumeWrapper}>
            <Grid container className={classes.spinnerWrapper}>
                <CircularProgress />
            </Grid>
        </Card>
    )

    if(error) return(
        <Card className={classes.resumeWrapper}>
            <Grid container className={classes.spinnerWrapper}>
                <Typography>
                    Wrong username
                </Typography>
            </Grid>
        </Card>
    )

    const languages = reposData.reduce((obj, v) => {
        obj[v.language] = (obj[v.language] || 0) + 1;
        return obj;
      }, {})

    const languagesCount = reposData.map(item => item.language).length

    return(
        <Card className={classes.resumeWrapper}>
            <NameComponent name={userData.login} />
            <Typography className={classes.contentWrapper} component="a" href={userData.html_url}>
                {userData.html_url}
            </Typography>
            <Typography className={classes.contentWrapper}>
                On GitHub since {userData.created_at.slice(0,4)}, {userData.login} is a developer based in {userData.location || 'location unset'}, 
                with {userData.public_repos} public repositories and {userData.followers} followers
            </Typography>
            <Languages languages={languages} count={languagesCount} />
            <Repositories reposData={reposData} />
        </Card>
    )
}