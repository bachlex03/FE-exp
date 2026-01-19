'use client';

import { useAppDispatch, useAppSelector } from '~/lib/redux/hooks';
import { fetchPosts, fetchPostById, clearPosts, Post } from '~/lib/redux/slices/postsSlice';
import Link from 'next/link';
import { RefreshCcw, Trash2, ArrowLeft, Loader2, Info } from 'lucide-react';

export default function ReduxThunkPage() {
    const { items, loading, error } = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();

    const handleFetchPosts = () => {
        dispatch(fetchPosts());
    };

    const handleFetchRandom = () => {
        const randomId = Math.floor(Math.random() * 100) + 1;
        dispatch(fetchPostById(randomId));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex items-center justify-between mb-12">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Redux Thunk
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Visualizing asynchronous logic in Redux using JSONPlaceholder API.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleFetchPosts}
                        disabled={loading === 'pending'}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                    >
                        {loading === 'pending' ? <Loader2 className="animate-spin" size={18} /> : <RefreshCcw size={18} />}
                        Fetch Posts
                    </button>
                    <button
                        onClick={() => dispatch(clearPosts())}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all rounded-lg border border-transparent hover:border-red-100"
                        title="Clear list"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </header>

            {/* Logic Visualization Section */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</span>
                    <div className="mt-1 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${loading === 'pending' ? 'bg-amber-400 animate-pulse' :
                                loading === 'succeeded' ? 'bg-emerald-500' :
                                    loading === 'failed' ? 'bg-red-500' : 'bg-gray-300'
                            }`} />
                        <span className="font-mono text-sm capitalize">{loading}</span>
                    </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Store Size</span>
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-2xl font-bold font-mono">{items.length}</span>
                        <span className="text-gray-400 text-sm">posts</span>
                    </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 flex flex-col justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</span>
                    <button
                        onClick={handleFetchRandom}
                        className="text-sm text-indigo-500 hover:underline font-medium text-left"
                    >
                        Fetch 1 random post
                    </button>
                </div>
            </section>

            {/* Error State */}
            {error && (
                <div className="mb-8 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-3">
                    <Info size={20} />
                    <p className="text-sm font-medium">Error: {error}</p>
                </div>
            )}

            {/* Posts List */}
            <main className="space-y-4">
                {loading === 'idle' && items.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 dark:bg-black/10 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
                        <p className="text-gray-400">No posts loaded yet. Click the button above to start.</p>
                    </div>
                )}

                {items.map((post: Post) => (
                    <article
                        key={post.id}
                        className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter mb-2">
                                    Post #{post.id}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            {/* Thunk Logic Explanation Card */}
            <footer className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl shadow-indigo-500/20">
                <h2 className="text-2xl font-bold mb-4">How does this Thunk work?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-indigo-50">
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                        <p className="text-sm opacity-90 font-medium tracking-tight uppercase">Dispatched</p>
                        <p className="text-xs leading-relaxed opacity-75">
                            UI calls <code>dispatch(fetchPosts())</code>. Thunk middleware catches the function.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                        <p className="text-sm opacity-90 font-medium tracking-tight uppercase">Pending state</p>
                        <p className="text-xs leading-relaxed opacity-75">
                            Automatically triggers <code>pending</code>. UI shows loading indicator.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                        <p className="text-sm opacity-90 font-medium tracking-tight uppercase">Result</p>
                        <p className="text-xs leading-relaxed opacity-75">
                            Promise resolves to <code>fulfilled</code> or <code>rejected</code> with payload or error.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
