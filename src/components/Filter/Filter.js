import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../redux/selectors";
import {updateFilter} from "../../redux/filterSlice";
import {TextField} from "@mui/material";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onChangeFilter = (value) => {
        dispatch(updateFilter(value))
    }
    return (
        <TextField
            label="Find contacts by name"
            variant="outlined"
            value={filter}
            fullWidth={true}
            onChange={(e) => onChangeFilter(e.target.value)}
        />
    );
};

export default Filter;


