import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/kostuk42/">
                Oleksiy Kostiuchenko
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright;
