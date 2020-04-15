import React, { useState, useEffect } from 'react';

import { Typography, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        textAlign: 'center',
    },
}));

const WelcomeCard = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h4">Hello</Typography>
        </Box>
    )
}

export default WelcomeCard;