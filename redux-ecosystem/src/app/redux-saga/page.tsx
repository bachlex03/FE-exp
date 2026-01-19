'use client';

import { useAppDispatch, useAppSelector } from '~/lib/redux/hooks';
import { fetchUserRequest, clearUser } from '~/lib/redux/slices/userSlice';
import {
    fetchPostsRequest,
    fetchPostByIdRequest,
    createPostRequest,
    updatePostRequest,
    patchPostRequest,
    deletePostRequest,
    clearPostsSaga,
    Post
} from '~/lib/redux/slices/postsSagaSlice';
import Link from 'next/link';
import {
    User as UserIcon,
    ArrowLeft,
    Loader2,
    Search,
    PlusCircle,
    Edit,
    Zap,
    X,
    Trash2,
    Database,
    Binary
} from 'lucide-react';
import { useState } from 'react';

export default function ReduxSagaPage() {
    // User State (Existing)
    const { data: user, loading: userLoading } = useAppSelector((state) => state.user);
    // Posts Saga State (New)
    const { items: posts, loading: postsLoading } = useAppSelector((state) => state.postsSaga);

    const dispatch = useAppDispatch();
    const [lastSagaAction, setLastSagaAction] = useState<string | null>(null);

    // Handlers
    const handleFetchUser = (id: number) => {
        setLastSagaAction('USER_FETCH');
        dispatch(fetchUserRequest(id));
    };

    const handleFetchPosts = () => {
        setLastSagaAction('POSTS_FETCH_ALL');
        dispatch(fetchPostsRequest());
    };

    const handleCreatePost = () => {
        setLastSagaAction('POST_CREATE');
        dispatch(createPostRequest({
            title: 'Saga Post ' + Math.floor(Math.random() * 1000),
            body: 'Created via Redux Saga Generator Worker.',
            userId: 1
        }));
    };

    const handleUpdatePost = (post: Post) => {
        setLastSagaAction(`POST_PUT_${post.id}`);
        dispatch(updatePostRequest({
            ...post,
            title: '[SAGA PUT] ' + post.title,
            body: 'Updated via Saga call effect.'
        }));
    };

    const handlePatchPost = (id: number) => {
        setLastSagaAction(`POST_PATCH_${id}`);
        dispatch(patchPostRequest({
            id,
            title: '[SAGA PATCH] ' + Math.floor(Math.random() * 100)
        }));
    };

    const handleDeletePost = (id: number) => {
        setLastSagaAction(`POST_DELETE_${id}`);
        dispatch(deletePostRequest(id));
    };

    return (
        <div className="max-w-5xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-rose-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 italic">
                        Redux Saga <span className="text-rose-600">CRUD</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Side-effect management using Generator Functions & Effects.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={handleFetchPosts}
                        disabled={postsLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-rose-500/20"
                    >
                        {postsLoading && lastSagaAction === 'POSTS_FETCH_ALL' ? <Loader2 className="animate-spin" size={18} /> : <Database size={18} />}
                        Fetch 5
                    </button>
                    <button
                        onClick={() => {
                            const id = Math.floor(Math.random() * 100) + 1;
                            setLastSagaAction(`POST_FETCH_${id}`);
                            dispatch(fetchPostByIdRequest(id));
                        }}
                        disabled={postsLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg"
                    >
                        Fetch 1 Random
                    </button>
                    <button
                        onClick={handleCreatePost}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                    >
                        <PlusCircle size={18} /> Create (Saga)
                    </button>
                    <button
                        onClick={() => {
                            dispatch(clearPostsSaga());
                            dispatch(clearUser());
                            setLastSagaAction(null);
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all rounded-lg"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </header>

            {/* Saga Monitoring Dashboard */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Effect Monitor</span>
                        <Binary size={16} className="text-rose-500" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 italic">Latest Yield:</span>
                            <span className="font-mono font-bold text-rose-500">{lastSagaAction || 'IDLE'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 italic">Thread Status:</span>
                            <span className={`font-bold ${postsLoading || userLoading ? 'text-amber-500 animate-pulse' : 'text-emerald-500'}`}>
                                {postsLoading || userLoading ? 'PROCESSING' : 'WATCHING'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 md:col-span-2">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Middle-ware Log (Generator Flow)</span>
                    </div>
                    <div className="font-mono text-[10px] space-y-1 h-12 overflow-hidden">
                        {lastSagaAction && (
                            <>
                                <div className="text-blue-500">→ [TAKE_LATEST] caught action: {lastSagaAction}</div>
                                <div className="text-amber-500">→ [CALL] external API via yield call(...)</div>
                                {(posts.length > 0 || user) && <div className="text-emerald-500">→ [PUT] updating state via yield put(...)</div>}
                            </>
                        )}
                        {!lastSagaAction && <div className="text-gray-400">Waiting for dispatched actions...</div>}
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Posts Column */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                        <Database className="text-rose-500" size={20} />
                        Saga Managed Posts
                    </h2>

                    {postsLoading && lastSagaAction?.startsWith('POSTS') ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <Loader2 className="animate-spin text-rose-500 mb-4" size={40} />
                            <p className="text-gray-500 font-mono text-sm">Generator is yielding effects...</p>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {posts.map((post) => (
                                <article key={post.id} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] bg-rose-100 text-rose-600 px-2 py-0.5 rounded-md font-bold uppercase">SAGA_ID: {post.id}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{post.title}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">{post.body}</p>
                                        </div>
                                        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => handleUpdatePost(post)} className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100" title="Full Update (PUT)">
                                                <Edit size={14} />
                                            </button>
                                            <button onClick={() => handlePatchPost(post.id)} className="p-2 bg-blue-50 text-blue-600 rounded-lg shadow-sm hover:bg-blue-100" title="Partial Update (PATCH)">
                                                <Zap size={14} />
                                            </button>
                                            <button onClick={() => handleDeletePost(post.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Delete">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 dark:bg-black/10 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 text-gray-400 italic text-sm">
                            No posts loaded via Saga.
                        </div>
                    )}
                </div>

                {/* Sidebar: User Fetch + Theory */}
                <div className="space-y-8">
                    <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <UserIcon size={18} className="text-rose-500" />
                            User Probe
                        </h3>
                        {user ? (
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                                <button
                                    onClick={() => handleFetchUser(Math.floor(Math.random() * 10) + 1)}
                                    className="w-full py-2 text-xs font-bold text-rose-500 border border-rose-100 rounded-lg hover:bg-rose-50 transition-colors"
                                >
                                    Fetch Another
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => handleFetchUser(1)}
                                disabled={userLoading}
                                className="w-full py-6 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 hover:text-rose-500 hover:border-rose-200 transition-all flex flex-col items-center gap-2"
                            >
                                {userLoading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                                <span className="text-xs font-bold uppercase tracking-widest">Load Random User</span>
                            </button>
                        )}
                    </div>

                    <div className="p-6 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Binary size={80} />
                        </div>
                        <h3 className="font-bold text-rose-500 mb-4 text-sm uppercase tracking-widest">Saga Logic</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-500 shrink-0">1</div>
                                <p className="text-xs text-gray-400 italic">Dispatched actions are &quot;caught&quot; by a watcher thread.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-500 shrink-0">2</div>
                                <p className="text-xs text-gray-400 italic">Workers use `yield call` to perform non-blocking async work.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-500 shrink-0">3</div>
                                <p className="text-xs text-gray-400 italic">State updates happen via `yield put` (same as dispatch).</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
