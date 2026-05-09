import Link from "next/link";
import { CheckCircle2, GraduationCap, Search, ShieldCheck } from "lucide-react";

const checklist = [
  "Recognized provider or proper accreditation",
  "Real AI and software engineering curriculum",
  "Practical projects and portfolio assessment",
  "Mentor support and career services",
  "Transparent price, funding, and refund terms",
  "GitHub, deployment, cloud, and AI labs included",
  "Good fit for your goal: AI engineer, software engineer, or AI entrepreneur"
];

const providerTypes = [
  {
    title: "University Degree",
    value: "Strong formal recognition, but usually slower and more expensive."
  },
  {
    title: "Professional Certificate",
    value: "Good for focused skills and credibility when combined with projects."
  },
  {
    title: "Bootcamp / AZAV Training",
    value: "Best if funded, project-based, and directly connected to employability."
  },
  {
    title: "Self-Built Portfolio Path",
    value: "Powerful when structured properly with real apps, GitHub, and deployment."
  }
];

export default function ProviderFinderPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        <Link href="/dashboard" className="text-sm text-amber-300">← Dashboard</Link>

        <section className="rounded-3xl border border-amber-400/20 bg-slate-900 p-8">
          <div className="mb-4 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-amber-300" />
            <h1 className="text-4xl font-bold">Degree & Provider Finder</h1>
          </div>

          <p className="text-slate-300">
            This engine will help compare AI and Software Engineering degrees, certificates, bootcamps, and funded training options using evidence, price, recognition, and career value.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {providerTypes.map((type) => (
            <div key={type.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <Search className="mb-4 h-7 w-7 text-amber-300" />
              <h2 className="text-xl font-semibold">{type.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{type.value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-amber-300" />
            <h2 className="text-2xl font-semibold">Evaluation Checklist</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-950 p-4 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
