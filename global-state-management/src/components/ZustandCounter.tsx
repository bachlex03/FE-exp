'use client';
import { useCounterStore } from '~/lib/zustand/useCounterStore';

export const ZustandCounter = () => {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Zustand Counter</h2>
            <div className="text-5xl font-mono font-bold text-purple-600 dark:text-purple-400">
                {count}
            </div>
            <div className="flex gap-4">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold shadow-md active:scale-95"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold shadow-md active:scale-95"
                >
                    Reset
                </button>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold shadow-md active:scale-95"
                >
                    Increment
                </button>
            </div>
        </div>
    );
};
