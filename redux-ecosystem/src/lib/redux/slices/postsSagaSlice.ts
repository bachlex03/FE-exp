import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostsSagaState {
    items: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsSagaState = {
    items: [],
    loading: false,
    error: null,
};

const postsSagaSlice = createSlice({
    name: 'postsSaga',
    initialState,
    reducers: {
        // GET ALL
        fetchPostsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.items = action.payload;
        },

        // GET ONE
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fetchPostByIdRequest: (state, action: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostByIdSuccess: (state, action: PayloadAction<Post>) => {
            state.loading = false;
            const index = state.items.findIndex(p => p.id === action.payload.id);
            if (index !== -1) state.items[index] = action.payload;
            else state.items.unshift(action.payload);
        },

        // POST (Create)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createPostRequest: (state, action: PayloadAction<Omit<Post, 'id'>>) => {
            state.loading = true;
            state.error = null;
        },
        createPostSuccess: (state, action: PayloadAction<Post>) => {
            state.loading = false;
            state.items.unshift(action.payload);
        },

        // PUT (Update Full)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        updatePostRequest: (state, action: PayloadAction<Post>) => {
            state.loading = true;
            state.error = null;
        },
        updatePostSuccess: (state, action: PayloadAction<Post>) => {
            state.loading = false;
            const index = state.items.findIndex(p => p.id === action.payload.id);
            if (index !== -1) state.items[index] = action.payload;
        },

        // PATCH (Update Partial)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        patchPostRequest: (state, action: PayloadAction<{ id: number; title: string }>) => {
            state.loading = true;
            state.error = null;
        },
        patchPostSuccess: (state, action: PayloadAction<Post>) => {
            state.loading = false;
            const index = state.items.findIndex(p => p.id === action.payload.id);
            if (index !== -1) state.items[index] = action.payload;
        },

        // DELETE
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deletePostRequest: (state, action: PayloadAction<number>) => {
            state.loading = true;
            state.error = null;
        },
        deletePostSuccess: (state, action: PayloadAction<number>) => {
            state.loading = false;
            state.items = state.items.filter(p => p.id !== action.payload);
        },

        // SHARED ERROR
        postsSagaFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearPostsSaga: (state) => {
            state.items = [];
            state.error = null;
            state.loading = false;
        }
    }
});

export const {
    fetchPostsRequest, fetchPostsSuccess,
    fetchPostByIdRequest, fetchPostByIdSuccess,
    createPostRequest, createPostSuccess,
    updatePostRequest, updatePostSuccess,
    patchPostRequest, patchPostSuccess,
    deletePostRequest, deletePostSuccess,
    postsSagaFailure,
    clearPostsSaga
} = postsSagaSlice.actions;

export default postsSagaSlice.reducer;
