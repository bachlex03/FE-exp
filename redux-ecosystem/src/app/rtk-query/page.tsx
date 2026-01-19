'use client';

import {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    usePatchPostMutation,
    useDeletePostMutation,
    Post
} from '~/lib/redux/services/postsApi';
import Link from 'next/link';
import {
    ArrowLeft,
    Loader2,
    RefreshCcw,
    PlusCircle,
    Edit,
    Zap,
    Trash2,
    Database,
    ZapOff,
    Settings,
    Clock,
    CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

export default function RTKQueryPage() {
    const [limit, setLimit] = useState(5);
    const { data: posts, isLoading, isFetching, error, refetch } = useGetPostsQuery(limit);

    const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
    const [updatePost] = useUpdatePostMutation();
    const [patchPost] = usePatchPostMutation();
    const [deletePost] = useDeletePostMutation();

    const handleCreatePost = async () => {
        try {
            await createPost({
                title: 'RTK Query Post ' + Math.floor(Math.random() * 1000),
                body: 'This was created using automated RTK Query mutations.',
                userId: 1,
            }).unwrap();
        } catch (err) {
            console.error('Failed to create post:', err);
        }
    };

    const handleUpdatePost = async (post: Post) => {
        try {
            await updatePost({
                ...post,
                title: '[RTK PUT] ' + post.title,
                body: 'Updated via mutation.'
            }).unwrap();
        } catch (err) {
            console.error('Failed to update post:', err);
        }
    };

    const handlePatchPost = async (id: number) => {
        try {
            await patchPost({
                id,
                title: '[RTK PATCH] ' + Math.floor(Math.random() * 100)
            }).unwrap();
        } catch (err) {
            console.error('Failed to patch post:', err);
        }
    };

    const handleDeletePost = async (id: number) => {
        try {
            await deletePost(id).unwrap();
        } catch (err) {
            console.error('Failed to delete post:', err);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        RTK <span className="text-cyan-500">Query</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Automated data fetching, caching, and state synchronization.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => refetch()}
                        disabled={isFetching}
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
                    >
                        {isFetching ? <Loader2 className="animate-spin" size={18} /> : <RefreshCcw size={18} />}
                        Refetch
                    </button>
                    <button
                        onClick={handleCreatePost}
                        disabled={isCreating}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg"
                    >
                        {isCreating ? <Loader2 className="animate-spin" size={18} /> : <PlusCircle size={18} />}
                        Mutation (POST)
                    </button>
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm font-bold px-4 focus:ring-2 focus:ring-cyan-500 transition-all outline-none"
                    >
                        <option value={5}>Show 5</option>
                        <option value={10}>Show 10</option>
                        <option value={20}>Show 20</option>
                    </select>
                </div>
            </header>

            {/* RTK Query Features Grid */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 group">
                    <div className="flex items-center gap-2 mb-1">
                        <Clock size={14} className="text-cyan-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cache Status</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 rounded-full ${isFetching ? 'bg-amber-400 animate-pulse' : 'bg-emerald-500'}`} />
                        <span className="text-xs font-bold font-mono uppercase">{isFetching ? 'Revalidating' : 'Fresh'}</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Settings size={14} className="text-cyan-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Auto-Tagging</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span className="text-xs font-bold font-mono uppercase">Enabled</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-black/20 md:col-span-2">
                    <div className="flex items-center gap-2 mb-1">
                        <Database size={14} className="text-cyan-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">RTK Query Intelligence</span>
                    </div>
                    <p className="text-[10px] text-gray-500 italic leading-tight mt-1">
                        Mutations automatically invalidate &quot;Post&quot; tags, causing the list above to re-fetch and sync state instantly without manual code.
                    </p>
                </div>
            </section>

            {/* Error State */}
            {error && (
                <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-100 text-red-600 flex items-center gap-3">
                    <ZapOff size={20} />
                    <p className="text-sm font-medium">Failed to sync with API. Check connectivity.</p>
                </div>
            )}

            {/* Posts List */}
            <main className="space-y-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-cyan-500 mb-4" size={48} />
                        <p className="text-gray-400 font-medium">Downloading and Caching...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {posts?.map((post) => (
                            <article
                                key={post.id}
                                className={`p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm transition-all group relative ${isFetching ? 'opacity-50' : ''}`}
                            >
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-tighter">
                                                ID: {post.id}
                                            </span>
                                            {post.id > 100 && (
                                                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                                                    Local Mutation
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold group-hover:text-cyan-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mt-1 text-gray-500 text-sm italic">
                                            {post.body}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap sm:flex-col gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleUpdatePost(post)}
                                            className="p-2 text-cyan-500 hover:bg-cyan-50 rounded-lg transition-colors border border-transparent hover:border-cyan-100"
                                            title="Update (PUT)"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handlePatchPost(post.id)}
                                            className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg transition-colors border border-transparent hover:border-amber-100"
                                            title="Patch (Title)"
                                        >
                                            <Zap size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDeletePost(post.id)}
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

            {/* RTK Query Explanation */}
            <footer className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-cyan-600 text-white shadow-xl shadow-cyan-500/20">
                    <h2 className="text-2xl font-bold mb-4">RTK Query vs Others</h2>
                    <ul className="space-y-4 text-cyan-50 mb-6">
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">1.</span>
                            <span><strong className="text-white">Zero Boilerplate</strong>: No manual reducers, actions, or thunks needed.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">2.</span>
                            <span><strong className="text-white">Auto Caching</strong>: Data is cached globally and shared between components.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-white shrink-0">3.</span>
                            <span><strong className="text-white">Smart Invalidation</strong>: Mutations can tell the query to refetch data automatically.</span>
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        {['Fast', 'Automated', 'Built-in'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-gray-900 border border-gray-800 text-white">
                    <h2 className="text-2xl font-bold mb-4 text-emerald-400">Declarative Fetching</h2>
                    <p className="text-sm text-gray-400 leading-relaxed italic">
                        Notice how we don&apos;t dispatch actions here. We just call a hook, and RTK Query handles everything else:
                        the loading state, the actual fetch, the serialization, and even the local cache cleanup.
                    </p>
                    <div className="mt-6 flex flex-col gap-2">
                        <code className="text-[10px] p-3 bg-black/50 rounded-lg text-cyan-400">
                            const &#123; data &#125; = useGetPostsQuery();
                        </code>
                        <code className="text-[10px] p-3 bg-black/50 rounded-lg text-emerald-400">
                            const [mutate] = useUpdateMutation();
                        </code>
                    </div>
                </div>
            </footer>
        </div>
    );
}
