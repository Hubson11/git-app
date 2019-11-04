import React from 'react';
import {
    Grid,
    InputLabel,
    Input,
    FormHelperText,
    Typography,
    Button,
    makeStyles,
    Card,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        backgroundColor: theme.palette.white,
        borderRadius: '8px',
        padding: '20px',
    },
    gridContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonWrapper: {
        padding: '0 10px',
    },
    button: {
        width: '100%',
        backgroundColor: 'red',
        padding: '4px 8px',
        textAlign: 'center',
        textTransform: 'none',
        color: theme.palette.white,
        borderRadius: '16px',
        letterSpacing: '0.1em',
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0',
        },
    },
    label: {
        fontSize: 18,
        color: theme.palette.black,
    },
    error: {
        fontSize: 14,
        color: theme.palette.red,
    }
  }));

export const FormGenerator = ({ value, setValue, setActiveGenerator }) => {
    const handleClick = () => {
        if(value.length){
            setActiveGenerator(value)
        }
    }
    const classes = useStyles();
    return(
        <Card className={classes.formWrapper}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} sm={8}>
                    <InputLabel>
                        <Typography className={classes.label}>
                            Github username
                        </Typography>
                    </InputLabel>
                    <Input
                        fullWidth
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        name="name"
                        type="text"
                        placeholder="John Doe"
                    />
                    {!value.length && 
                        <FormHelperText component="div">
                            <Typography className={classes.error}>
                                Username is required!
                            </Typography>
                        </FormHelperText>
                    }
                </Grid>
                <Grid item xs={12} sm={4} className={classes.buttonWrapper}>
                    <Button className={classes.button} onClick={handleClick}>
                        Generiener
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}