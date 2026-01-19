import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePosts } from './posts';
import React from 'react';

// 1. Setup MSW
const server = setupServer(
    http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json([{ id: 1, title: 'React Query Post', body: '...' }]);
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// 2. Setup wrapper
const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false },
        },
    });
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

describe('React Query Hooks', () => {
    it('should fetch posts successfully', async () => {
        const { result } = renderHook(() => usePosts(5), { wrapper: createWrapper() });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toHaveLength(1);
        expect(result.current.data?.[0].title).toBe('React Query Post');
    });

    it('should handle errors', async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/posts', () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        const { result } = renderHook(() => usePosts(5), { wrapper: createWrapper() });

        await waitFor(() => expect(result.current.isError).toBe(true));
        expect(result.current.error).toBeDefined();
    });
});
