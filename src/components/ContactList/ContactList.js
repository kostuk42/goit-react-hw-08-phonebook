import styles from "./ContactList.module.css"
import propTypes from 'prop-types';
export default function ContactList(props) {
    const {contacts, onRemove} = props
    
    return <ul>
            {contacts.map(({id, name, number}) => {
                return <li key={id} className={styles.li}>{name} : {number}
                    <button onClick={() => onRemove(id)}>delete</button>
                </li>
            })}
        </ul>;
    
}
ContactList.propTypes = {
    contacts: propTypes.array,
    onRemove: propTypes.func.isRequired
}