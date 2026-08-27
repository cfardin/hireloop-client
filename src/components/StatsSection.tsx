"use client";

import {
  Briefcase,
  Factory,
  Magnifier,
  Star,
} from "@gravity-ui/icons";

import Hero from "./Hero";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-8 w-8" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-8 w-8" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-8 w-8" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-8 w-8" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black  text-white">

      {/* ==============================
          HERO
      =============================== */}

      <div className="mt-40 mb-80 relative z-20">
        <Hero />
      </div>


      {/* ==============================
          GLOBE BACKGROUND
      =============================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[280px]
          bottom-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />


      {/* Purple glow behind the globe */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[390px]
          z-0
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/20
          blur-[130px]
        "
      />


      {/* ==============================
          CONTENT
      =============================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2
            className="
              text-4xl
              font-medium
              leading-relaxed
              text-white/90
            "
          >
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>

        </div>


        {/* ==============================
            STATS CARDS
        =============================== */}

        <div
          className="
            mt-10
            grid
            gap-5

            md:grid-cols-2

            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-black/75
                p-15
                backdrop-blur-xl
                transition
                duration-300

                hover:border-violet-500/30
              "
            >

              {/* Card Glow */}

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  h-32
                  w-32
                  rounded-full
                  bg-white/10
                  blur-3xl
                  transition
                  duration-300

                  group-hover:bg-violet-500/20
                "
              />


              {/* Icon */}

              <div className="relative z-10 text-white/90">
                {stat.icon}
              </div>


              {/* Number */}

              <h3
                className="
                  relative
                  z-10
                  mt-8
                  text-4xl
                  font-semibold
                  tracking-tight
                "
              >
                {stat.value}
              </h3>


              {/* Label */}

              <p
                className="
                  relative
                  z-10
                  mt-1
                  text-xs
                  text-gray-300
                "
              >
                {stat.label}
              </p>

            </div>
          ))}
        </div>

      </div>


      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-32
          w-full
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

    </section>
  );
}