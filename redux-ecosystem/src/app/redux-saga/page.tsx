'use client';

import { useAppDispatch, useAppSelector } from '~/lib/redux/hooks';
import { fetchUserRequest, clearUser } from '~/lib/redux/slices/userSlice';
import Link from 'next/link';
import { User as UserIcon, ArrowLeft, Loader2, Search, Mail, Fingerprint, Globe, RefreshCcw } from 'lucide-react';

export default function ReduxSagaPage() {
    const { data: user, loading, error } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleFetchUser = (id: number) => {
        dispatch(fetchUserRequest(id));
    };

    const handleFetchRandom = () => {
        const randomId = Math.floor(Math.random() * 10) + 1;
        handleFetchUser(randomId);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex items-center justify-between mb-12">
                <div className="flex flex-col gap-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-rose-500 transition-colors w-fit"
                    >
                        <ArrowLeft size={16} /> Back to dashboard
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Redux Saga
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Complex side-effect management using Generator Functions.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleFetchRandom}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-rose-500/20"
                    >
                        {loading ? <Loader2 className="animate-spin" size={18} /> : <Search size={18} />}
                        Fetch Random User
                    </button>
                </div>
            </header>

            {/* saga Status Visualization */}
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20 flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${loading ? 'bg-amber-100 text-amber-600 animate-pulse' : 'bg-rose-100 text-rose-600'}`}>
                        <UserIcon size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Worker</p>
                        <p className="font-mono text-sm font-bold">{loading ? 'Working...' : 'Watching for Actions'}</p>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-black/20">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Middleware Console</span>
                        <button onClick={() => dispatch(clearUser())} className="text-[10px] text-gray-400 hover:text-rose-500 font-bold uppercase transition-colors">Clear</button>
                    </div>
                    <div className="font-mono text-[11px] space-y-1">
                        <div className="text-blue-500">→ [TAKE_LATEST] watching: user/fetchUserRequest</div>
                        {loading && <div className="text-amber-500">→ [CALL] fetch(jsonplaceholder/users/...)</div>}
                        {user && <div className="text-emerald-500">→ [PUT] user/fetchUserSuccess</div>}
                        {error && <div className="text-red-500">→ [PUT] user/fetchUserFailure</div>}
                    </div>
                </div>
            </section>

            {/* User Result */}
            <main className="min-h-[300px]">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full border-4 border-rose-100 dark:border-rose-900/30"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-rose-600 border-t-transparent animate-spin"></div>
                        </div>
                        <p className="text-gray-500 animate-pulse">Saga is processing effects...</p>
                    </div>
                ) : user ? (
                    <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 text-rose-500/10 -rotate-12 transform group-hover:scale-110 transition-transform">
                            <Fingerprint size={120} />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-rose-500/30">
                                {user.name.charAt(0)}
                            </div>

                            <div className="flex-1 space-y-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{user.name}</h2>
                                    <p className="text-rose-500 font-medium">@{user.username}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 italic">
                                        <Mail size={18} className="text-rose-400" />
                                        <span className="text-sm">{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 italic">
                                        <Globe size={18} className="text-rose-400" />
                                        <span className="text-sm">website.me</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 dark:bg-black/10 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                            <Search size={20} />
                        </div>
                        <p className="text-gray-400">No user data fetched through Saga yet.</p>
                    </div>
                )}
            </main>

            {/* Saga Concept Card */}
            <footer className="mt-20 p-8 rounded-3xl bg-gray-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 p-12 text-white/5 opacity-50 rotate-12">
                    <RefreshCcw size={200} />
                </div>

                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-rose-500 rounded-full"></div>
                    The Saga Lifecycle
                </h2>

                <div className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                        <span className="font-mono text-rose-500 font-bold">01.</span>
                        <div>
                            <p className="font-bold">Watching (Take Latest)</p>
                            <p className="text-sm text-gray-400">The <code>watcher</code> saga sits in the background. If you spam the button, <code>takeLatest</code> cancels the previous fetch and only cares about the last one.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span className="font-mono text-rose-500 font-bold">02.</span>
                        <div>
                            <p className="font-bold">Call (Worker)</p>
                            <p className="text-sm text-gray-400">The <code>worker</code> saga is triggered. It uses the <code>call</code> effect to run the async fetch. Generators allow it to &apos;yield&apos; (pause) until the promise resolves.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span className="font-mono text-rose-500 font-bold">03.</span>
                        <div>
                            <p className="font-bold">Put (Dispatch)</p>
                            <p className="text-sm text-gray-400">Once data is ready, the saga uses <code>put</code> to dispatch a success action (like a normal Redux dispatch) to update the state.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
