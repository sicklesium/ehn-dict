import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
    buttons: {
        paddingLeft: 24,
        color: '#080F0F',
    },
    icons: {
        color: '#000',
    }
}))

function MainListItems() {
    const classes = useStyles();

    return (
        <div>
            <ListItem button
                color="primary"
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}>
                <ListItemIcon>
                    <HomeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/about';
                }}>
                <ListItemIcon>
                    <InfoIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/phonology';
                }}>
                <ListItemIcon>
                    <RecordVoiceOverIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Phonology" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/orthography';
                }}>
                <ListItemIcon>
                    <CreateIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Orthography" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/grammar';
                }}>
                <ListItemIcon>
                    <SpellcheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Grammar" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/dictionary';
                }}>
                <ListItemIcon>
                    <MenuBookIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Dictionary" />
            </ListItem>
            <ListItem button
                className={classes.buttons}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/translations';
                }}>
                <ListItemIcon>
                    <TranslateIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Translations" />
            </ListItem>
        </div>
    )
};

export default MainListItems; 