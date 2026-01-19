import Counter from "~/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Redux Ecosystem
      </h1>
      <main className="w-full max-w-md">
        <Counter />

        <div className="mt-12 grid grid-cols-1 gap-4">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center mb-2">Experiments</h2>
          <Link
            href="/redux-thunk"
            className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-500 transition-colors">Redux Thunk</span>
              <span className="text-xs text-gray-500">Async API Logic & States</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
              →
            </div>
          </Link>

          <Link
            href="/redux-saga"
            className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:border-rose-500 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-rose-500 transition-colors">Redux Saga</span>
              <span className="text-xs text-gray-500">Generator Functions & Effects</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
              →
            </div>
          </Link>

          <Link
            href="/rtk-query"
            className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:border-cyan-500 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-500 transition-colors">RTK Query</span>
              <span className="text-xs text-gray-500">Automated Caching & Fetching</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
              →
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
