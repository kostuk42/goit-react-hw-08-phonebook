import React, { Component } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { v4 } from 'uuid';


export default class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};
    onSubmit = ({ name, number }) => {
        const newUserName = name;
		if (
			this.state.contacts.some(
				({ name }) => name.toLowerCase() === newUserName.toLowerCase(),
			)
		) {
			alert(`user with name ${name} is already exists!`);
			return;
		}
		const newContact = {
			id: v4(),
			name,
			number,
		};
		this.setState(prevState => {
			return { contacts: [...prevState.contacts, newContact] };
		});
	};
	onChangeFilter = filter => {
		this.setState({ filter });
	};
	getNamesVisible = () => {
		const { contacts, filter } = this.state;
		if (!filter) {
			return [];
		}
		let n = contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);

		return n;
	};
	onRemoveContact = id => {
		this.setState(prevState => {
			return {
				contacts: prevState.contacts.filter(
					prevContact => prevContact.id !== id,
				),
			};
		});
	};
	render() {
		const { filter } = this.state;
		const visibleNames = this.getNamesVisible();

		return (
			<>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={this.onSubmit} />
				<h2>Contacts</h2>
				<Filter value={filter} onChangeFilter={this.onChangeFilter} />
				<ContactList
					contacts={visibleNames}
					onRemove={this.onRemoveContact}
				></ContactList>
			</>
		);
	}
}

