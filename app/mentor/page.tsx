import Link from "next/link";
import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export default function MentorPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link href="/dashboard" className="text-sm text-amber-300">← Dashboard</Link>

        <section className="rounded-3xl border border-amber-400/20 bg-slate-900 p-8">
          <div className="mb-4 flex items-center gap-3">
            <MessageCircle className="h-8 w-8 text-amber-300" />
            <h1 className="text-4xl font-bold">Ask MentorForge</h1>
          </div>

          <p className="text-slate-300">
            This will become your AI coach chat. For now, it shows the response structure the app must follow.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-950 p-5">
            <p className="mb-2 text-sm text-amber-300">Ask anything like:</p>
            <p className="text-slate-300">
              “Teach me Python loops using a simple game, then quiz me and give me a mini project.”
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <Sparkles className="mb-4 h-7 w-7 text-amber-300" />
            <h2 className="text-xl font-semibold">Mentor Response Pattern</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-300">
              <li>Clarify the goal</li>
              <li>Explain simply</li>
              <li>Show an example</li>
              <li>Give a practice task</li>
              <li>Quiz your understanding</li>
              <li>Connect it to a real project</li>
              <li>Give the next action</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <ShieldCheck className="mb-4 h-7 w-7 text-amber-300" />
            <h2 className="text-xl font-semibold">Truth Protocol</h2>
            <p className="mt-4 text-sm text-slate-300">
              The mentor must separate facts, assumptions, and recommendations. For changing topics such as AI tools, degrees, prices, jobs, and certifications, it must check current sources before advising.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
