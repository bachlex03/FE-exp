'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore, Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, AppStore } from '../lib/redux/store';

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore>(undefined);
    const persistorRef = useRef<Persistor>(undefined);

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        const store = makeStore();
        storeRef.current = store;
        persistorRef.current = persistStore(store);
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current!}>
                {children}
            </PersistGate>
        </Provider>
    );
}
