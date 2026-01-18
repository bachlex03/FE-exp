import Counter from "~/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Redux Ecosystem
      </h1>
      <main>
        <Counter />
      </main>
    </div>
  );
}
