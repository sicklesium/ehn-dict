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
            <Typography variant="h3">Eihwo ilyi an Ései aishé Éinhyun!</Typography>
            <Typography variant="h5">Welcome to the Éinhyun Dictionary!</Typography>
            <Typography variant="subtitle2">Also includes detailed documentation of the language.</Typography>
        </Box>
    )
}

export default WelcomeCard;