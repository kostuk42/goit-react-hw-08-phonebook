import css from './Navigation.module.css';
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/selectors";
import {StyledLink} from "../AuthNav/AuthNav";

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (
        <nav>
            <StyledLink className={css.link} to="/">
                Home
            </StyledLink>
            {isLoggedIn && (
                <StyledLink className={css.link} to="/contacts">
                    Contacts
                </StyledLink>
            )}
        </nav>
    );
};
