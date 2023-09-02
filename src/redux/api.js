import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://connections-api.herokuapp.com',
            prepareHeaders: (headers, {getState}) => {
                console.log('getState()');
                console.log(getState());
                const token = getState().auth ? getState().auth.token : null
                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }
                return headers;
            }
        }
    ),
    tagTypes: ['Contacts', 'User'],
    endpoints: (builder) => ({
        fetchAll: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts'],
            keepUnusedDataFor: 2,
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),

        editContact: builder.mutation({
            query: ({ id, name, number }) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
                body: { name, number },
            }),
            invalidatesTags: ['Contacts'],
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: 'users/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User'],
        }),
        register: builder.mutation({
            query: (user) => ({
                url: 'users/signup',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'users/logout',
                method: 'POST'
            }),
            invalidatesTags: ['User'],
        }),
        getUser: builder.query({
            query: () => '/current',
            providesTags: ['User']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useFetchAllQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useEditContactMutation,
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useGetUserQuery,
} = api;
