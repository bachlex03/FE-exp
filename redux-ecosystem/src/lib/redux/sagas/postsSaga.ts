import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
    fetchPostsRequest, fetchPostsSuccess,
    fetchPostByIdRequest, fetchPostByIdSuccess,
    createPostRequest, createPostSuccess,
    updatePostRequest, updatePostSuccess,
    patchPostRequest, patchPostSuccess,
    deletePostRequest, deletePostSuccess,
    postsSagaFailure,
    Post
} from '../slices/postsSagaSlice';
import { PayloadAction } from '@reduxjs/toolkit';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// WORKERS

function* fetchPostsWorker() {
    try {
        const response: Response = yield call(fetch, `${BASE_URL}?_limit=5`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = yield response.json();
        yield put(fetchPostsSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

function* fetchPostByIdWorker(action: PayloadAction<number>) {
    try {
        const response: Response = yield call(fetch, `${BASE_URL}/${action.payload}`);
        if (!response.ok) throw new Error('Post not found');
        const data: Post = yield response.json();
        yield put(fetchPostByIdSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

function* createPostWorker(action: PayloadAction<Omit<Post, 'id'>>) {
    try {
        const response: Response = yield call(fetch, BASE_URL, {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!response.ok) throw new Error('Failed to create post');
        const data: Post = yield response.json();
        yield put(createPostSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

function* updatePostWorker(action: PayloadAction<Post>) {
    try {
        const response: Response = yield call(fetch, `${BASE_URL}/${action.payload.id}`, {
            method: 'PUT',
            body: JSON.stringify(action.payload),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!response.ok) throw new Error('Failed to update post');
        const data: Post = yield response.json();
        yield put(updatePostSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

function* patchPostWorker(action: PayloadAction<{ id: number; title: string }>) {
    try {
        const response: Response = yield call(fetch, `${BASE_URL}/${action.payload.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title: action.payload.title }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!response.ok) throw new Error('Failed to patch post');
        const data: Post = yield response.json();
        yield put(patchPostSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

function* deletePostWorker(action: PayloadAction<number>) {
    try {
        const response: Response = yield call(fetch, `${BASE_URL}/${action.payload}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete post');
        yield put(deletePostSuccess(action.payload));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        yield put(postsSagaFailure(errorMessage));
    }
}

// WATCHERS

export function* postsSaga() {
    yield all([
        takeLatest(fetchPostsRequest.type, fetchPostsWorker),
        takeLatest(fetchPostByIdRequest.type, fetchPostByIdWorker),
        takeLatest(createPostRequest.type, createPostWorker),
        takeLatest(updatePostRequest.type, updatePostWorker),
        takeLatest(patchPostRequest.type, patchPostWorker),
        takeLatest(deletePostRequest.type, deletePostWorker),
    ]);
}
