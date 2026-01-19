import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer, { fetchPosts } from './postsSlice';

// 1. Setup MSW
const server = setupServer(
    http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json([{ id: 1, title: 'Thunk Post', body: '...' }]);
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('postsSlice (Thunk)', () => {
    it('should fetch posts and update state', async () => {
        const store = configureStore({
            reducer: { posts: postsReducer }
        });

        // Dispatch the thunk
        await store.dispatch(fetchPosts());

        const state = store.getState().posts;
        expect(state.loading).toBe('succeeded');
        expect(state.items).toHaveLength(1);
        expect(state.items[0].title).toBe('Thunk Post');
    });

    it('should handle errors', async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/posts', () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        const store = configureStore({
            reducer: { posts: postsReducer }
        });

        await store.dispatch(fetchPosts());

        const state = store.getState().posts;
        expect(state.loading).toBe('failed');
        expect(state.error).toBe('Failed to fetch posts');
    });
});
