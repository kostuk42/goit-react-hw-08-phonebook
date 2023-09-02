import css from './UserMenu.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/selectors";
import {clearUserAndToken} from "../../redux/authSlice";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(clearUserAndToken())}>
                Logout
            </button>
        </div>
    );
};
