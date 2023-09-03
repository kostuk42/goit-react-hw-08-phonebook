import {Navigation} from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {AuthNav} from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import {getIsLoggedIn} from "../../redux/selectors";
import {useSelector} from "react-redux";

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <header className={css.header}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};
