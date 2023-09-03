import React from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from '@mui/styles'
import css from './ContactItem.module.css';

const useStyles = makeStyles((theme) => ({
    customListItemText: {
        color: '#1665C0',
        '& .MuiListItemText-secondary': {
            color: 'orange',
            fontWeight: '700'
        },
        fontWeight: '700',
    },
}));

const ContactItem = ({ name, phoneNumber, onDelete }) => {
    const classes = useStyles();
    return (
        <ListItem>
            <ListItemText primary={name}
                          className={classes.customListItemText}
                          secondary={phoneNumber} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default ContactItem;
