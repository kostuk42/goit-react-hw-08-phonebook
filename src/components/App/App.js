import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import PropTypes from 'prop-types';
import styles from './App.module.css';

class App extends Component {
	state = {
		contacts: [
			{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
			{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
			{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
			{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
		],
		filter: '',
		name: '',
		number: ''
	}

	addContact = (name, number) => {
		const { contacts } = this.state;
		const newContact = {
			id: uuidv4(),
			name,
			number,
		};

		const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
		if (existingContact) {
			alert(`${name} is already in contacts.`);
		} else {
			this.setState((prevState) => ({
				contacts: [...prevState.contacts, newContact],
			}));
		}
	};

	deleteContact = (id) => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	};

	changeFilter = (filter) => {
		this.setState({ filter });
	};

	getFilteredContacts = () => {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
	};

	render() {
		const { filter } = this.state;
		const filteredContacts = this.getFilteredContacts();

		return (
			<div className={styles.container}>
				<h1>Phonebook</h1>
				<ContactForm onAddContact={this.addContact} />

				<h2>Contacts</h2>
				<Filter value={filter} onChangeFilter={this.changeFilter} />
				<ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
			</div>
		);
	}
}


App.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
	filter: PropTypes.string,
	name: PropTypes.string,
	number: PropTypes.string,
	onAddContact: PropTypes.func,
	onDeleteContact: PropTypes.func,
	onChangeFilter: PropTypes.func,
	getFilteredContacts: PropTypes.func,
};

export default App;
