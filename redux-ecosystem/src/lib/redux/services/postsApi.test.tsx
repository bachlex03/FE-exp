import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './postsApi';
import React from 'react';

// 1. Setup Mock Service Worker (MSW)
const handlers = [
    http.get('https://jsonplaceholder.typicode.com/posts', ({ request }) => {
        const url = new URL(request.url);
        const limit = url.searchParams.get('_limit');

        return HttpResponse.json([
            { id: 1, title: 'Mock Post 1', body: 'Body 1', userId: 1 },
            { id: 2, title: 'Mock Post 2', body: 'Body 2', userId: 1 },
        ]);
    }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// 2. Helper to wrap hook with Redux Provider
function wrapper({ children }: { children: React.ReactNode }) {
    const store = configureStore({
        reducer: {
            [postsApi.reducerPath]: postsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postsApi.middleware),
    });
    return <Provider store={store}>{children}</Provider>;
}

describe('postsApi RTK Query', () => {
    it('should fetch posts successfully', async () => {
        const { result } = renderHook(() => postsApi.useGetPostsQuery(2), { wrapper });

        // Initially loading
        expect(result.current.isLoading).toBe(true);

        // Wait for the query to finish
        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toHaveLength(2);
        expect(result.current.data?.[0].title).toBe('Mock Post 1');
    });

    it('should handle API errors', async () => {
        // Override handler for this specific test
        server.use(
            http.get('https://jsonplaceholder.typicode.com/posts', () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        const { result } = renderHook(() => postsApi.useGetPostsQuery(), { wrapper });

        await waitFor(() => expect(result.current.isError).toBe(true));
        expect(result.current.error).toBeDefined();
    });
});
