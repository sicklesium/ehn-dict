import React, { useState, useEffect } from 'react';
import clsx from "clsx";

import { makeStyles, Container, Grid, Paper } from "@material-ui/core"

import DictAbout from "./DictPage/DictAbout.js"
import DictCard from "./DictPage/DictCard.js"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const About = (props) => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <DictAbout />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <DictCard className={classes.paper} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;