'use client';

import {
    usePosts,
    useCreatePost,
    useUpdatePost,
    usePatchPost,
    useDeletePost
} from '~/lib/react-query/posts';
import Link from 'next/link';
import {
    ArrowLeft,
    Loader2,
    RefreshCcw,
    PlusCircle,
    Edit,
    Zap,
    Trash2,
    Cloud,
    Layers,
    Activity,
    ZapOff
} from 'lucide-react';
import { useState } from 'react';

export default function ReactQueryPage() {
    const [limit, setLimit] = useState(5);

    // React Query Hooks
    const { data: posts, isLoading, isFetching, error, refetch } = usePosts(limit);
    const createMutation = useCreatePost();
    const updateMutation = useUpdatePost();
    const patchMutation = usePatchPost();
    const deleteMutation = useDeletePost();

    const handleCreate = () => {
        createMutation.mutate({
            title: 'React Query Post ' + Math.floor(Math.random() * 1000),
            body: 'Powered by TanStack Query.',
            userId: 1
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 italic">
                        React <span className="text-orange-500">Query</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        TanStack Query for powerful async state orchestration.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => refetch()}
                        disabled={isFetching}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                        {isFetching ? <Loader2 className="animate-spin" size={18} /> : <RefreshCcw size={18} />}
                        Refetch (Manual)
                    </button>
                    <button
                        onClick={handleCreate}
                        disabled={createMutation.isPending}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                    >
                        {createMutation.isPending ? <Loader2 className="animate-spin" size={18} /> : <PlusCircle size={18} />}
                        Post Mutation
                    </button>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm font-bold px-4 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
                    >
                        <option value={5}>Limit 5</option>
                        <option value={10}>Limit 10</option>
                        <option value={20}>Limit 20</option>
                    </select>
                </div>
            </header>

            {/* React Query Monitoring Dashboard */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 group">
                    <div className="flex items-center gap-2 mb-1">
                        <Cloud size={14} className="text-orange-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Query Status</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${isFetching ? 'bg-amber-400 animate-pulse' : 'bg-emerald-500'}`} />
                        <span className="text-xs font-bold font-mono uppercase">{isFetching ? 'Fetching' : 'Stale-While-Revalidate'}</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Activity size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mutation Count</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold font-mono uppercase">{createMutation.status}</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 md:col-span-2">
                    <div className="flex items-center gap-2 mb-1">
                        <Layers size={14} className="text-blue-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sync Intelligence</span>
                    </div>
                    <p className="text-[10px] text-gray-500 italic leading-tight mt-1">
                        Unlike Redux, React Query is NOT a global state manager for UI state. It is a <span className="font-bold text-orange-500 uppercase tracking-tighter">Server State</span> manager that handles caching, deduping, and revalidation.
                    </p>
                </div>
            </section>

            {/* Error State */}
            {error && (
                <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 flex items-center gap-3">
                    <ZapOff size={20} />
                    <p className="text-sm font-medium italic">React Query found a problem: {error.message}</p>
                </div>
            )}

            {/* Posts List */}
            <main className="space-y-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-black/5 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                        <Loader2 className="animate-spin text-orange-500 mb-4" size={48} />
                        <p className="text-gray-400 font-medium">Hydrating from JSONPlaceholder...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {posts?.map((post) => (
                            <article
                                key={post.id}
                                className={`p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm transition-all group relative ${isFetching ? 'opacity-70' : ''}`}
                            >
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 rounded bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-[10px] font-bold tracking-tighter">
                                                QUERY_KEY: [&apos;posts&apos;, {limit}]
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mt-1 text-gray-500 text-sm italic">
                                            {post.body}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap sm:flex-col gap-2">
                                        <button
                                            onClick={() => updateMutation.mutate({ ...post, title: '[RQ PUT] ' + post.title })}
                                            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                                            title="Update (PUT)"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => patchMutation.mutate({ id: post.id, title: '[RQ PATCH] ' + Math.floor(Math.random() * 100) })}
                                            className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg transition-colors border border-transparent hover:border-amber-100"
                                            title="Patch (Title)"
                                        >
                                            <Zap size={18} />
                                        </button>
                                        <button
                                            onClick={() => deleteMutation.mutate(post.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            {/* React Query Explanation */}
            <footer className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-orange-600 text-white shadow-xl shadow-orange-500/20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                        <Cloud size={120} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Why use this?</h2>
                    <ul className="space-y-4 text-orange-50 relative z-10">
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">A.</span>
                            <span><strong className="text-white font-mono">Auto-Refetch</strong>: Syncs data when you refocus the tab or reconnect.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">B.</span>
                            <span><strong className="text-white font-mono">Deduplication</strong>: Multiple components requesting the same data result in only 1 fetch.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">C.</span>
                            <span><strong className="text-white font-mono">Pagination & Inifinite Scroll</strong>: Built-in support for advanced fetching patterns.</span>
                        </li>
                    </ul>
                </div>

                <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 text-white shadow-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500 uppercase tracking-widest text-sm">Philosophical Shift</h2>
                    <p className="text-sm text-gray-400 leading-relaxed italic">
                        React Query encourages you to think of your cache as a &quot;Server State&quot;. You don&apos;t &quot;store&quot; data; you &quot;subscribe&quot; to it. When data changes on the server (via mutations), you simply tell the query to &quot;sink&quot; back into reality.
                    </p>
                    <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>Query Key Based</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                        </div>
                        <span>Auto Invalidation</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
