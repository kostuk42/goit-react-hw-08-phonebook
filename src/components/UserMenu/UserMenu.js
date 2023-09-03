import css from './UserMenu.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/selectors";
import {clearUserAndToken} from "../../redux/authSlice";
import Button from "@mui/material/Button";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <Button type="button" variant="contained" onClick={() => dispatch(clearUserAndToken())}>
                Logout
            </Button>
        </div>
    );
};
