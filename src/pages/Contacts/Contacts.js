import React from 'react';
import styles from "../../components/App/App.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import {ToastContainer} from "react-toastify";

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h2>Contacts:</h2>
            <ContactForm />
            <Filter/>
            <ContactList/>
            <ToastContainer/>
        </div>
    );
};

export default Contacts;

