import Link from "next/link";
import { BookOpen, Bot, Brain, Cloud, Code2, Database } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Programming Foundations",
    icon: Code2,
    skills: ["Computer logic", "Python", "Variables", "Loops", "Functions", "OOP"],
    project: "Build a simple Python learning game."
  },
  {
    phase: "Phase 2",
    title: "Software Engineering Core",
    icon: Database,
    skills: ["GitHub", "TypeScript", "React", "Next.js", "APIs", "Testing"],
    project: "Build and deploy MentorForge dashboard."
  },
  {
    phase: "Phase 3",
    title: "Data Science + Machine Learning",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Statistics", "Regression", "Classification"],
    project: "Create a learning-progress prediction model."
  },
  {
    phase: "Phase 4",
    title: "Deep Learning + NLP",
    icon: BookOpen,
    skills: ["Neural networks", "PyTorch", "Transformers", "Embeddings", "NLP"],
    project: "Build a mini AI tutor from your own notes."
  },
  {
    phase: "Phase 5",
    title: "Generative AI + Agentic AI",
    icon: Bot,
    skills: ["RAG", "Prompting", "AI agents", "AutoGen", "Tool use", "Guardrails"],
    project: "Build your personal AI mentor agent."
  },
  {
    phase: "Phase 6",
    title: "Cloud + Career Proof",
    icon: Cloud,
    skills: ["Azure AI", "AI-900", "Copilot Studio", "MLOps", "Security", "Portfolio"],
    project: "Deploy a professional AI portfolio app."
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <Link href="/dashboard" className="text-sm text-amber-300">← Dashboard</Link>

        <div>
          <h1 className="text-4xl font-bold">AI + Software Engineering Roadmap</h1>
          <p className="mt-3 text-slate-300">
            Built from the Microsoft AI Engineer brochure structure, plus real software engineering, portfolio, cloud, and AI-agent skills.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {roadmap.map((item) => {
            const Icon = item.icon;
            return (
              <section key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-8 w-8 text-amber-300" />
                  <div>
                    <p className="text-sm text-amber-300">{item.phase}</p>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-amber-400/30 px-3 py-1 text-xs text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-slate-950 p-4">
                  <p className="text-sm text-amber-300">Portfolio evidence</p>
                  <p className="mt-2 text-sm text-slate-300">{item.project}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
