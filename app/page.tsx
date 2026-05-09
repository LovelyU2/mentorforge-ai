import Link from "next/link";
import { Brain, Code2, GraduationCap, Rocket, ShieldCheck, Trophy } from "lucide-react";

const features = [
  {
    title: "AI Coach",
    text: "Turns your goal into a daily training plan and keeps you accountable.",
    icon: Brain
  },
  {
    title: "Software Mentor",
    text: "Teaches coding, architecture, debugging, deployment, and real project building.",
    icon: Code2
  },
  {
    title: "Career Trainer",
    text: "Guides you toward certificates, degrees, portfolio proof, and job readiness.",
    icon: GraduationCap
  },
  {
    title: "Truth Protocol",
    text: "Separates facts, assumptions, and recommendations with no fake claims.",
    icon: ShieldCheck
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900 to-black p-8 shadow-2xl">
          <p className="mb-4 inline-block rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950">
            Premium AI Engineering Mentor
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            MentorForge AI
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Your personal AI coach, software engineering mentor, project trainer, and career strategist — built to train you step by step into a professional AI and Software Engineer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300"
            >
              Start Training
            </Link>

            <Link
              href="/roadmap"
              className="rounded-2xl border border-amber-400/40 px-6 py-3 font-semibold text-amber-200 hover:bg-amber-400/10"
            >
              View Roadmap
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <Icon className="mb-4 h-8 w-8 text-amber-300" />
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{feature.text}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center gap-3">
            <Trophy className="h-7 w-7 text-amber-300" />
            <h2 className="text-2xl font-semibold">Mission</h2>
          </div>
          <p className="mt-4 text-slate-300">
            Learn by building: FlowPocket, ExceptionalU, healthcare AI workflows, AI tutor systems, Azure AI projects, and a professional portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}
