import React from 'react';
import {useSelector} from "react-redux";
import {getFilter} from "../../redux/selectors";
import {useDeleteContactMutation, useFetchAllQuery} from "../../redux/api";
import {List} from '@mui/material';
import ContactItem from "../ContactItem/ContactItem";
import {toast, ToastContainer} from "react-toastify";


const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
};

const ContactList = () => {
    const res = useFetchAllQuery();
    const contacts = res.data || [];
    const [deleteContact] = useDeleteContactMutation();
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(filter, contacts);
    const deleteHandler = (id) => {
        deleteContact(id);
        toast.success('Contact deleted', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div style={{maxHeight: '50vh', overflowY: 'auto'}}>
            <List>
                {filteredContacts.map((contact) => (
                    <ContactItem
                        key={contact.id}
                        name={contact.name}
                        phoneNumber={contact.number}
                        onDelete={() => deleteHandler(contact.id)}
                    />
                ))}
            </List>
            <ToastContainer />
        </div>

    );
};

export default ContactList;

