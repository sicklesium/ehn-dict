import React, { useState, useEffect } from 'react';

import { Typography, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        textAlign: 'center',
        paddingRight: 60,
        paddingLeft: 60,
    },
}));

const WelcomeCard = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h6">Ai Getenqoil aishé Owul...</Typography>
            <Typography variant="subtitle2" gutterBottom>A Collection of Words...</Typography>
            <Typography variant="body1" gutterBottom>You've found yourself on the dictionary page. Welcome!</Typography>
            <Typography variant="body2">The below table lists every current word in both <b>Éinhyun</b> and <b>English</b> that has been created. It also lists the <b>Part of Speech</b>,<br /> and upon clicking a row, you will find the <b>IPA Pronunciation</b> and an <b>example sentence</b>.</Typography>
            <Typography variant="body2" gutterBottom>There are currently over 4500 words, so the database may take awhile to wake up.</Typography>
            <Typography variant="body1" gutterBottom>How do I use this table?</Typography>
            <Typography variant="body2" gutterBottom>This table is very simple to use.</Typography>
            <Typography variant="body2" gutterBottom>First, you can search for an English word in the right-most column labeled <b>English Word</b>. You can do the same for the left-most column labeled <b>Éinhyun Wul</b>. You can also filter out parts of speech using the middle column by typing in "n." for noun, "prep." for prepositions, "adj." for adjectives, and so on. <br />These fields will search for every word that contains what you input.</Typography>
            <Typography variant="body2" gutterBottom><em>For example...</em> Let's say I wanted to search for the word "ball" in English. As I type the "b", many words come up, including words that don't start with "b". As I continue typing, the returned list gets shorter, until I finally have my word "ball" easily in view. </Typography>
            <Typography variant="body2">You can also change how the table is sorted by clicking on the arrow when you hover next to a column name. </Typography>
        </Box>
    )
}

export default WelcomeCard;