import Link from "next/link";
import { Brain, CalendarCheck, Code2, Gamepad2, Rocket, Target } from "lucide-react";

const today = [
  "45 minutes Python or TypeScript practice",
  "30 minutes AI concept lesson",
  "20 minutes quiz or game challenge",
  "45 minutes project building"
];

const cards = [
  {
    title: "Current Goal",
    text: "Become a professional AI + Software Engineer and build premium AI products.",
    icon: Target
  },
  {
    title: "Training Mode",
    text: "Coach, teacher, project mentor, and accountability partner.",
    icon: Brain
  },
  {
    title: "Build Path",
    text: "From coding basics to agentic AI, Azure AI, and deployed projects.",
    icon: Code2
  },
  {
    title: "Game Learning",
    text: "Quests, points, boss battles, revision loops, and practical challenges.",
    icon: Gamepad2
  }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <Link href="/" className="text-sm text-amber-300">← Home</Link>
          <h1 className="mt-4 text-4xl font-bold">Your MentorForge Dashboard</h1>
          <p className="mt-3 text-slate-300">
            This is your command center for becoming a serious AI and Software Engineer.
          </p>
        </div>

        <section className="grid gap-5 md:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <Icon className="mb-4 h-8 w-8 text-amber-300" />
                <h2 className="font-semibold">{card.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{card.text}</p>
              </div>
            );
          })}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center gap-3">
            <CalendarCheck className="h-7 w-7 text-amber-300" />
            <h2 className="text-2xl font-semibold">Today’s Smart Plan</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {today.map((task, index) => (
              <div key={task} className="rounded-2xl bg-slate-950 p-5">
                <p className="text-sm text-amber-300">Task {index + 1}</p>
                <p className="mt-2 text-sm">{task}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Link href="/mentor" className="rounded-3xl bg-amber-400 p-6 font-semibold text-slate-950 hover:bg-amber-300">
            Ask MentorForge
          </Link>
          <Link href="/roadmap" className="rounded-3xl border border-amber-400/40 p-6 font-semibold text-amber-200 hover:bg-amber-400/10">
            Open Roadmap
          </Link>
          <Link href="/projects" className="rounded-3xl border border-amber-400/40 p-6 font-semibold text-amber-200 hover:bg-amber-400/10">
            Track Projects
          </Link>
        </section>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center gap-3">
            <Rocket className="h-7 w-7 text-amber-300" />
            <p className="text-slate-300">
              Next upgrade: connect this dashboard to Supabase so your goals, progress, projects, and mentor chats are saved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
