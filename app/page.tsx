import Link from "next/link";
import TodosList from "./todos/TodosList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <h1>I am the homepage</h1>

      <div className="mt-5">
        <Link href="/todos">
          <button className="border-black rounded-xl shadow-md p-5 bg-slate-500 text-white">
            Go to To Do List
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <Link href="/search">
          <button className="border-black rounded-xl shadow-md p-5 bg-slate-500 text-white">
            Go to To Search Bar
          </button>
        </Link>
      </div>

      <Suspense fallback={<p>Loading the Todos...</p>}>
        <h1>Loading Todos</h1>
        <div>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the shopping trolley...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </main>
  );
}
