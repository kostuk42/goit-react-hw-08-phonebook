import {NavLink} from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from "@emotion/styled";

export const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
    return (
        <div className={css.container}>
            <StyledLink className={css.link}
                     to="/register">
                Register
            </StyledLink>
            <StyledLink className={css.link}
                     to="/login">
                Log In
            </StyledLink>
        </div>
    );
};
