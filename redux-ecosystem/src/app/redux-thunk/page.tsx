'use client';

import { useAppDispatch, useAppSelector } from '~/lib/redux/hooks';
import {
    fetchPosts,
    fetchPostById,
    createPost,
    updatePost,
    patchPost,
    deletePost,
    clearPosts,
    Post
} from '~/lib/redux/slices/postsSlice';
import Link from 'next/link';
import { RefreshCcw, Trash2, ArrowLeft, Loader2, Info, PlusCircle, Edit, Zap, X } from 'lucide-react';
import { useState } from 'react';

export default function ReduxThunkPage() {
    const { items, loading, error } = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();
    const [lastAction, setLastAction] = useState<string | null>(null);

    const handleFetchPosts = () => {
        setLastAction('GET (All)');
        dispatch(fetchPosts());
    };

    const handleFetchRandom = () => {
        const randomId = Math.floor(Math.random() * 100) + 1;
        setLastAction(`GET (ID: ${randomId})`);
        dispatch(fetchPostById(randomId));
    };

    const handleCreatePost = () => {
        setLastAction('POST (Create)');
        dispatch(createPost({
            title: 'New Post ' + Math.floor(Math.random() * 1000),
            body: 'This post was created via Redux Thunk.',
            userId: 1
        }));
    };

    const handleUpdatePost = (post: Post) => {
        setLastAction(`PUT (Update ID: ${post.id})`);
        dispatch(updatePost({
            ...post,
            title: '[REPLACED] ' + post.title,
            body: 'Updated via PUT (Full Replace)'
        }));
    };

    const handlePatchPost = (id: number) => {
        setLastAction(`PATCH (Update ID: ${id})`);
        dispatch(patchPost({
            id,
            title: '[PATCHED] ' + Math.floor(Math.random() * 100)
        }));
    };

    const handleDeletePost = (id: number) => {
        setLastAction(`DELETE (ID: ${id})`);
        dispatch(deletePost(id));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Redux Thunk CRUD
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Full REST cycle (GET, POST, PUT, PATCH, DELETE) visualization.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={handleFetchPosts}
                        disabled={loading === 'pending'}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                    >
                        {loading === 'pending' && lastAction?.includes('GET') ? <Loader2 className="animate-spin" size={18} /> : <RefreshCcw size={18} />}
                        Fetch 5
                    </button>

                    <button
                        onClick={handleCreatePost}
                        disabled={loading === 'pending'}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                    >
                        {loading === 'pending' && lastAction?.includes('POST') ? <Loader2 className="animate-spin" size={18} /> : <PlusCircle size={18} />}
                        Create (POST)
                    </button>

                    <button
                        onClick={() => {
                            setLastAction(null);
                            dispatch(clearPosts());
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all rounded-lg border border-transparent hover:border-red-100"
                        title="Clear list"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </header>

            {/* Control Panel / Visualization */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Loading Status</span>
                    <div className="mt-1 flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${loading === 'pending' ? 'bg-amber-400 animate-pulse' :
                                loading === 'succeeded' ? 'bg-emerald-500' :
                                    loading === 'failed' ? 'bg-red-500' : 'bg-gray-300'
                            }`} />
                        <span className="font-mono text-xs capitalize">{loading}</span>
                    </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Thunk</span>
                    <div className="mt-1">
                        <span className="font-bold text-indigo-500 text-sm font-mono truncate block">{lastAction || 'None'}</span>
                    </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Store Size</span>
                    <div className="mt-1">
                        <span className="text-xl font-bold font-mono">{items.length} <span className="text-xs text-gray-400 font-normal">items</span></span>
                    </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 flex flex-col justify-center">
                    <button
                        onClick={handleFetchRandom}
                        className="text-xs text-indigo-500 hover:underline font-bold text-left uppercase"
                    >
                        Fetch 1 Random
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
                        <p className="text-gray-400">List is empty. Try fetching or creating a post.</p>
                    </div>
                )}

                {items.map((post: Post) => (
                    <article
                        key={post.id}
                        className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group relative"
                    >
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="flex-1">
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter mb-2">
                                    ID: {post.id}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {post.body}
                                </p>
                            </div>

                            <div className="flex flex-wrap sm:flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleUpdatePost(post)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
                                >
                                    <Edit size={12} /> Replace (PUT)
                                </button>
                                <button
                                    onClick={() => handlePatchPost(post.id)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
                                >
                                    <Zap size={12} /> Title (PATCH)
                                </button>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
                                >
                                    <X size={12} /> Delete
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            {/* Difference Explanation */}
            <footer className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl bg-gray-900 text-white">
                    <h2 className="text-xl font-bold mb-4 text-emerald-400">POST vs PUT vs PATCH</h2>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <strong className="text-white block">POST (Create)</strong>
                            Used to create a new resource. The server generates the ID.
                        </li>
                        <li>
                            <strong className="text-white block">PUT (Full Update)</strong>
                            Sends the <em className="text-amber-400">entire</em> new object to replace the old one.
                        </li>
                        <li>
                            <strong className="text-white block">PATCH (Partial Update)</strong>
                            Sends <em className="text-amber-400">only the pieces</em> that changed (e.g., just the title).
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-3xl bg-indigo-600 text-white">
                    <h2 className="text-xl font-bold mb-4">Why use Thunks?</h2>
                    <p className="text-sm text-indigo-100 mb-4 font-medium">
                        Thunks allow us to keep the UI simple. Instead of handling multiple states per component,
                        the Thunk manages the complex logic of:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Requesting', 'Waiting', 'Data Parsing', 'State Injection', 'Error Catching'].map(badge => (
                            <span key={badge} className="px-2 py-1 rounded-md bg-white/10 text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
