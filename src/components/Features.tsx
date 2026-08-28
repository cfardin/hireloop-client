
import { Search, TrendingUp, Building2, Bookmark, MousePointerClick, FileText, Circle, LineChart } from "lucide-react";

const features = [
  { icon: Search, title: "Smart Search", desc: "Find your ideal job with advanced filters." },
  { icon: TrendingUp, title: "Salary Insights", desc: "Get real salary data to negotiate confidently." },
  { icon: Building2, title: "Top Companies", desc: "Apply to vetted companies that are hiring." },
  { icon: Bookmark, title: "Saved Jobs", desc: "Manage apps & favorites on your dashboard." },
  { icon: MousePointerClick, title: "One-Click Apply", desc: "Simplify your job applications for an easier process!" },
  { icon: FileText, title: "Resume Builder", desc: "Create professional resumes with modern templates." },
  { icon: Circle, title: "Skill-Based Matching", desc: "Discover jobs that match your skills and experience." },
  { icon: LineChart, title: "Career Growth Resources", desc: "Boost your career with quick interview tips." },
];

export default function Features() {
  return (
    <section className="px-4 py-20 mt-28 mb-32 bg-[#151516]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-xs tracking-widest text-gray-400">
          <span className="h-1.5 w-1.5 rounded-sm bg-[#6366f1]" />
          FEATURES JOB
          <span className="h-1.5 w-1.5 rounded-sm bg-[#6366f1]" />
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">
          Everything you need
          <br />
          to succeed
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Icon size={18} className="text-gray-300" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}