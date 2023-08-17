import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from "./operations";

const handlePending = state => {
    state.isLoading = true;
};


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        deletingId: null,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending] (state, action) {
            console.log("action pending")
            console.log(action)
            state.deletingId = +action.meta.arg;
        },
        [deleteContact.fulfilled](state, action) {
            state.deletingId = null;
            state.error = null;
            const index = state.items.findIndex(contact => +contact.id === +action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected] (state, action) {
            state.deletingId = null;
            state.error = action.payload;
        },
    }
});

export const contactsReducer = contactSlice.reducer;
