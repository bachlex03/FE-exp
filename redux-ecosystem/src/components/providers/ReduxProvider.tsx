'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '~/lib/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, Persistor } from 'redux-persist';

export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore | null>(null);
    const persistorRef = useRef<Persistor | null>(null);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        const store = makeStore();
        storeRef.current = store;
        persistorRef.current = persistStore(store);
    }

    return (
        <Provider store={storeRef.current!}>
            <PersistGate loading={null} persistor={persistorRef.current!}>
                {children}
            </PersistGate>
        </Provider>
    );
}
