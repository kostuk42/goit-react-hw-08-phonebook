import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useAddContactMutation, useFetchAllQuery} from "../../redux/api";
import Button from "@mui/material/Button";
import {createTheme} from '@mui/material/styles';
import {toast} from "react-toastify";
import {ThemeProvider} from "@emotion/react";
import Container from "@mui/material/Container";
import {Box, Modal, TextField} from "@mui/material";
import css from './ContactForm.module.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const defaultTheme = createTheme();

const ContactForm = () => {
    const {data} = useFetchAllQuery();
    const [addContact, {isLoading: isAdding}] = useAddContactMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openAddContactModal = () => {
        setIsModalOpen(true);
    };

    const closeAddContactModal = () => {
        setIsModalOpen(false);
    };
    const contacts = data || [];
    const handleSubmit = (event) => {
        event.preventDefault();
        const f = new FormData(event.currentTarget);
        const name = f.get('name');
        const number = f.get('number');
        if (!name || !number) {
            toast.error('Name and number required!', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
            closeAddContactModal()
            addContact({name, number}).then(() => {
                toast.success('Contact has been successfully added!', {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
        }
    };

    return (
        <>
            <Button type="button"
                    variant="contained"
                    className={css.button}
                    endIcon={<ContactPhoneIcon/>}
                    onClick={openAddContactModal}>
                {isAdding ? 'Adding...' : 'Add Contact'}
            </Button>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <Modal open={isModalOpen} onClose={closeAddContactModal}>
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            minWidth: 300,
                            maxWidth: 400,
                        }}
                             component="form" noValidate onSubmit={handleSubmit}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus

                            />
                            <TextField
                                margin={"normal"}
                                required
                                fullWidth
                                id="number"
                                label="Number"
                                name="number"
                                type="tel"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                disabled={isAdding}
                            >
                                {isAdding ? 'Adding...' : 'Add Contact'}
                            </Button>
                        </Box>
                    </Modal>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default ContactForm;


