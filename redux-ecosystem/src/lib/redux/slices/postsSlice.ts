import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostsState {
    items: Post[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PostsState = {
    items: [],
    loading: 'idle',
    error: null,
};

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET: Fetch all
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch(`${BASE_URL}?_limit=5`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return (await response.json()) as Post[];
});

// GET: Fetch by ID
export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (id: number) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Post not found');
    return (await response.json()) as Post;
});

// POST: Create
export const createPost = createAsyncThunk('posts/createPost', async (newPost: Omit<Post, 'id'>) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    if (!response.ok) throw new Error('Failed to create post');
    return (await response.json()) as Post;
});

// PUT: Update (Replace)
export const updatePost = createAsyncThunk('posts/updatePost', async (post: Post) => {
    const response = await fetch(`${BASE_URL}/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    if (!response.ok) throw new Error('Failed to update post');
    return (await response.json()) as Post;
});

// PATCH: Partial Update
export const patchPost = createAsyncThunk('posts/patchPost', async ({ id, title }: { id: number; title: string }) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ title }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    if (!response.ok) throw new Error('Failed to patch post');
    return (await response.json()) as Post;
});

// DELETE
export const deletePost = createAsyncThunk('posts/deletePost', async (id: number) => {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete post');
    return id; // Return the ID so we can remove it from state
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.items = [];
            state.loading = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // fetchPosts
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // fetchPostById
            .addCase(fetchPostById.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                const index = state.items.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
                else state.items.unshift(action.payload);
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // createPost
            .addCase(createPost.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.items.unshift(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // updatePost
            .addCase(updatePost.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                const index = state.items.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // patchPost
            .addCase(patchPost.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(patchPost.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                const index = state.items.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(patchPost.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // deletePost
            .addCase(deletePost.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.items = state.items.filter((p) => p.id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
