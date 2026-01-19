import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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

// The thunk for fetching all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return (await response.json()) as Post[];
});

// The thunk for fetching a single post by ID (to demonstrate parameters)
export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async (id: number) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error('Post not found');
        }
        return (await response.json()) as Post;
    }
);

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
            // Handle bulk fetch
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'Something went wrong';
            })
            // Handle single fetch (updates list or adds to it)
            .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
                state.loading = 'succeeded';
                const index = state.items.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                } else {
                    state.items.unshift(action.payload);
                }
            });
    },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
