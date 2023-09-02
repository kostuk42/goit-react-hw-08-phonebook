import React, {useRef} from 'react';
import styles from './ContactForm.module.css';
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {useAddContactMutation, useFetchAllQuery} from "../../redux/api";
import {toast} from "react-toastify";

const ContactForm = () => {
    const {data} = useFetchAllQuery();
    const [addContact, {isLoading: isAdding}] = useAddContactMutation();
    const contacts = data || [];
    // const contacts = useSelector(getContacts);
    // const isLoading = useSelector(getIsLoading);
    // const dispatch = useDispatch();
    const formRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
           addContact({name, number}).then(() => {
               formRef.current.reset();
           });
        }
    };

    return (
            <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label>
                    Number:
                    <input
                        type="tel"
                        name="number"
                        required
                    />
                </label>
                <button type="submit" disabled={isAdding}>{isAdding ? 'Loading...' : 'Add contact'}</button>
            </form>
    );
};

export default ContactForm;
