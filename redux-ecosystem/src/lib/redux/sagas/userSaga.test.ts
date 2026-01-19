/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { call, put, delay } from 'redux-saga/effects';
import { fetchUserWorker } from './userSaga';
import { fetchUserSuccess, fetchUserFailure } from '../slices/userSlice';

describe('userSaga Worker', () => {
    const mockAction = {
        type: 'user/fetchUserRequest',
        payload: 1,
    };

    it('should follow the correct success flow', () => {
        const generator = fetchUserWorker(mockAction);

        // 1. Should yield a delay
        expect(generator.next().value).toEqual(delay(1000));

        // 2. Should yield a call to fetch
        expect(generator.next().value).toEqual(
            call(fetch, `https://jsonplaceholder.typicode.com/users/${mockAction.payload}`)
        );

        // 3. Mock the fetch response
        const mockResponse = {
            ok: true,
            json: () => Promise.resolve({ id: 1, name: 'Test User' }),
        };

        // We yield the mock response back into the generator
        // The next step in the saga is yielding response.json()
        expect(generator.next(mockResponse as any).value).toEqual(mockResponse.json());

        // 4. Mock the data result
        const mockData = { id: 1, name: 'Test User' };

        // 5. Should yield a put action with success
        // We cast to any here because TS tries to intersect 'Response' and 'User' 
        // for all next() calls in this generator.
        expect(generator.next(mockData as any).value).toEqual(
            put(fetchUserSuccess(mockData as any))
        );

        // 6. Should be finished
        expect(generator.next().done).toBe(true);
    });

    it('should handle errors correctly', () => {
        const generator = fetchUserWorker(mockAction);

        // Skip to the fetch call
        generator.next(); // delay
        generator.next(); // fetch call

        // Mock a failed response
        const mockFailedResponse = {
            ok: false,
        };

        // This will trigger the "throw new Error" in the saga
        // and jump to the catch block
        const result = generator.next(mockFailedResponse as any).value;

        expect(result).toEqual(
            put(fetchUserFailure('User not found'))
        );

        expect(generator.next().done).toBe(true);
    });
});
