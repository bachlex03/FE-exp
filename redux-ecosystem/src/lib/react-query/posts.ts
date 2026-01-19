import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postService = {
    fetchPosts: async (limit: number = 5): Promise<Post[]> => {
        const res = await fetch(`${BASE_URL}?_limit=${limit}`);
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
    },

    createPost: async (newPost: Omit<Post, 'id'>): Promise<Post> => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        return res.json();
    },

    updatePost: async (post: Post): Promise<Post> => {
        const res = await fetch(`${BASE_URL}/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        return res.json();
    },

    patchPost: async ({ id, title }: { id: number; title: string }): Promise<Post> => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        return res.json();
    },

    deletePost: async (id: number): Promise<void> => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error('Delete failed');
    }
};

// Hooks
export function usePosts(limit: number) {
    return useQuery({
        queryKey: ['posts', limit],
        queryFn: () => postService.fetchPosts(limit),
    });
}

export function useCreatePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postService.createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}

export function useUpdatePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postService.updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}

export function usePatchPost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postService.patchPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}

export function useDeletePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postService.deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}
