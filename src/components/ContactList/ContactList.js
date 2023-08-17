import React, {useEffect} from 'react';
import styles from './ContactList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, getError, getFilter, getIsLoading} from "../../redux/selectors";
import {deleteContact, fetchContacts} from "../../redux/operations";

const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
};

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
        <>
            {isLoading && !error && <b>Request in progress...</b>}
            {!isLoading && <ul className={styles.list}>
                {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}: {contact.phone}
                        <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>}
        </>

    );
};

export default ContactList;
