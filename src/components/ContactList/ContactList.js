import React from 'react';
import styles from './ContactList.module.css';
import {useSelector} from "react-redux";
import {getFilter} from "../../redux/selectors";
import {useDeleteContactMutation, useFetchAllQuery} from "../../redux/api";

const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
};

const ContactList = () => {
    const res = useFetchAllQuery();
    const contacts = res.data || [];
    const [deleteContact, {isLoading: isDeleting, data}] = useDeleteContactMutation();
    const deletingId = data?.id;
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
        <>
            <ul className={styles.list}>
                {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}: {contact.number}
                        <button type="button"
                                disabled={isDeleting}
                                onClick={() => deleteContact(contact.id)}>
                            {deletingId === contact.id ? 'Deleting...' : 'Delete'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactList;
