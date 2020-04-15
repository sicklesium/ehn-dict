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
            <Typography variant="body1">
                The Éinhyun language is a property of <b>SHANGRI-LA-PROJECT/Valentine</b>. All rights reserved.
            </Typography>
            <Typography variant="body1">
                There are currently over 4500 words in the lexicon. A better number coming soon!
            </Typography>
            <Typography variant="body1">
                <b>Version 1.0.0.</b> This site was started in April of 2020.
            </Typography>
        </Box>
    )
}

export default WelcomeCard;