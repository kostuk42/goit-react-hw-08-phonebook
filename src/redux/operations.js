import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";


axios.defaults.baseURL = 'https://64db6c66593f57e435b0f12d.mockapi.io/api';

const handleError = (e, api) => {
    toast.error(e.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return api.rejectWithValue(e.message);
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            handleError(e, thunkAPI)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, phone, formRef}, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", {name, phone} );
            formRef.current.reset();
            toast.success(`${name} has been successfully added!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return response.data;
        } catch (e) {
            handleError(e, thunkAPI)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            toast.success(`User has been successfully deleted!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return response.data;
        } catch (e) {
            handleError(e, thunkAPI)
        }
    }
);
