import { Component } from "react";
import styles from './ContactForm.module.css'
import propTypes from 'prop-types';
export default class ContactForm extends Component {
	 state = {
		number: '',
		name: ''
    }
    
	handleChange = ({target}) => {
	
        const { name, value } = target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
					number: '',
					name: ''
				});
    }
	render() {
        const { name, number } = this.state
    
        return (
					<form onSubmit={this.handleSubmit}>
						<label>
							Enter your name
							<input
								type="text"
								name="name"
								value={name}
								onChange={this.handleChange}
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
								required
							/>
						</label>
						<br />
						<label>
							Enter your tel
							<input
								type="tel"
								name="number"
								onChange={this.handleChange}
								value={number}
								pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
								title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
								required
							/>
							<button type="submit" className={styles.cord}>
								Add contact
							</button>
						</label>
					</form>
				);
            
    }
}
ContactForm.propTypes = {
	onSubmit: propTypes.func.isRequired,
	value: propTypes.string
};