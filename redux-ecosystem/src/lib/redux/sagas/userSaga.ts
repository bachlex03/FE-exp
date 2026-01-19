import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, User } from '../slices/userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

// Worker Saga: will be fired on fetchUserRequest actions
export function* fetchUserWorker(action: PayloadAction<number>) {
    try {
        // Adding a small delay to simulate network latency and visualize states
        yield delay(1000);

        const response: Response = yield call(fetch, `https://jsonplaceholder.typicode.com/users/${action.payload}`);

        if (!response.ok) {
            throw new Error('User not found');
        }

        const data: User = yield response.json();
        yield put(fetchUserSuccess(data));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(fetchUserFailure(errorMessage));
    }
}

/*
  Starts fetchUserWorker on each dispatched `fetchUserRequest` action.
  If a new request comes in while one is already running, the previous one is cancelled (takeLatest).
*/
function* userSaga() {
    yield takeLatest(fetchUserRequest.type, fetchUserWorker);
}

export default userSaga;
