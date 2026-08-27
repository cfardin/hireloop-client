// components/Hero.tsx
"use client";
import { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function Hero() {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="flex flex-col items-center px-4 pt-20 pb-10 text-center">
      <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs">
        <Briefcase size={14} className="text-orange-400" />
        <span className="font-semibold">50,000+</span>
        <span className="tracking-widest text-gray-400">NEW JOBS THIS MONTH</span>
      </div>

      <h1 className="max-w-2xl text-4xl font-bold md:text-5xl">
        Find Your Dream Job Today
      </h1>
      <p className="mt-4 max-w-xl text-sm text-gray-400 md:text-base">
        HireLoop connects top talent with world-class companies. Browse thousands of
        curated opportunities and land your next role — faster.
      </p>

      <div className="mt-8 flex w-full max-w-2xl items-center rounded-full border border-white/10 bg-white/5 p-1.5">
        <div className="flex flex-1 items-center gap-2 px-3">
          <Search size={16} className="text-gray-400" />
          <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Job title, skill or company"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>
        <div className="h-6 w-px bg-white/10" />
        <div className="flex flex-1 items-center gap-2 px-3">
          <MapPin size={16} className="text-gray-400" />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location or Remote"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6366f1]">
          <Search size={16} className="text-white" />
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500">
        <span>Trending Position</span>
        {trending.map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-gray-300">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}