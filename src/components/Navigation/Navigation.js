import css from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/selectors";

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.link} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};
