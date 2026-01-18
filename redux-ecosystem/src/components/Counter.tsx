'use client';
import { useAppDispatch, useAppSelector } from '~/lib/redux/hooks';
import { increment, decrement, incrementByAmount } from '~/lib/redux/slices/counterSlice';

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col items-center gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/20 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Redux Counter</h2>

            <div className="flex items-center gap-6">
                <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-xl transition-colors active:scale-95"
                    onClick={() => dispatch(decrement())}
                    aria-label="Decrement"
                >
                    −
                </button>

                <span className="text-4xl font-mono font-bold min-w-[3ch] text-center tabular-nums">
                    {count}
                </span>

                <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl transition-colors active:scale-95"
                    onClick={() => dispatch(increment())}
                    aria-label="Increment"
                >
                    +
                </button>
            </div>

            <div className="flex gap-2">
                <button
                    className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors active:scale-95"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    +5
                </button>
                <button
                    className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors active:scale-95"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    +10
                </button>
            </div>
        </div>
    );
}
