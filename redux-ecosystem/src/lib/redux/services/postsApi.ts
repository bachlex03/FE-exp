import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        // GET all posts
        getPosts: builder.query<Post[], number | void>({
            query: (limit = 5) => `posts?_limit=${limit}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), { type: 'Post', id: 'LIST' }]
                    : [{ type: 'Post', id: 'LIST' }],
        }),

        // GET single post
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),

        // POST (Create)
        createPost: builder.mutation<Post, Omit<Post, 'id'>>({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        }),

        // PUT (Update Full)
        updatePost: builder.mutation<Post, Post>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: (_result, _error, arg) => [{ type: 'Post', id: arg.id }],
        }),

        // PATCH (Update Partial)
        patchPost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
            query: ({ id, ...patch }) => ({
                url: `posts/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: (_result, _error, arg) => [{ type: 'Post', id: arg.id }],
        }),

        // DELETE
        deletePost: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_result, _error, id) => [
                { type: 'Post', id },
                { type: 'Post', id: 'LIST' }
            ],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    usePatchPostMutation,
    useDeletePostMutation,
} = postsApi;
