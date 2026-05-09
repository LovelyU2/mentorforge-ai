import Link from "next/link";
import { Bot, BriefcaseBusiness, ExternalLink, Github, HeartPulse } from "lucide-react";

const projects = [
  {
    title: "MentorForge AI",
    type: "Learning + AI Agent",
    description: "Personal AI coach for AI and Software Engineering training."
  },
  {
    title: "FlowPocket",
    type: "Business AI Admin",
    description: "AI admin assistant for solo service businesses."
  },
  {
    title: "ExceptionalU",
    type: "AI Coaching Platform",
    description: "Premium session-based coaching and avatar-led support platform."
  },
  {
    title: "Healthcare AI Workflow Helper",
    type: "Healthcare + AI",
    description: "AI-supported workflow assistant inspired by real nursing and emergency care experience."
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <Link href="/dashboard" className="text-sm text-amber-300">← Dashboard</Link>

        <div>
          <h1 className="text-4xl font-bold">Portfolio Projects</h1>
          <p className="mt-3 text-slate-300">
            These projects become proof that you are learning by building real products, not just collecting certificates.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <section key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              {index === 0 && <Bot className="mb-4 h-8 w-8 text-amber-300" />}
              {index === 1 && <BriefcaseBusiness className="mb-4 h-8 w-8 text-amber-300" />}
              {index === 2 && <ExternalLink className="mb-4 h-8 w-8 text-amber-300" />}
              {index === 3 && <HeartPulse className="mb-4 h-8 w-8 text-amber-300" />}

              <p className="text-sm text-amber-300">{project.type}</p>
              <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>

              <div className="mt-5 rounded-2xl bg-slate-950 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Github className="h-4 w-4 text-amber-300" />
                  <p className="text-sm font-semibold">Evidence required</p>
                </div>
                <p className="text-sm text-slate-300">
                  GitHub repo, deployed demo, screenshots, README, and a short case study.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
