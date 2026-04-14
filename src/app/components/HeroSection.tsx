"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "99.7%", label: "Prediction Accuracy" },
  { value: "0.14s", label: "Inference Latency" },
  { value: "24/7", label: "Global Uptime" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingWrapRef = useRef<HTMLHeadingElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingWrapRef.current ||
      !carRef.current ||
      !glowRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".headline-letter");
      const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
      const trails = gsap.utils.toArray<HTMLElement>(".speed-trail");
      const rings = gsap.utils.toArray<HTMLElement>(".orbit-ring");
      const mm = gsap.matchMedia();

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .from(letters, {
          y: 70,
          opacity: 0,
          rotateX: -90,
          transformOrigin: "50% 100%",
          stagger: 0.032,
          duration: 0.95,
          ease: "power4.out",
        })
        .from(
          statCards,
          {
            y: 28,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.42",
        )
        .from(
          glowRef.current,
          {
            opacity: 0,
            scale: 0.6,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.9",
        )
        .from(
          carRef.current,
          {
            xPercent: 50,
            y: -12,
            opacity: 0,
            duration: 1.4,
            ease: "expo.out",
          },
          "-=1.05",
        );

      mm.add("(min-width: 768px)", () => {
        gsap.to(trails, {
          xPercent: -100,
          repeat: -1,
          duration: 1.6,
          ease: "none",
          stagger: 0.22,
        });

        gsap.to(rings, {
          rotate: 360,
          duration: 16,
          repeat: -1,
          ease: "none",
          stagger: 2,
        });

        gsap.to(carRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.4,
          },
          xPercent: -190,
          yPercent: -18,
          rotation: -7,
          scale: 0.76,
          ease: "none",
        });

        gsap.to(headingWrapRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: -110,
          opacity: 0,
          scale: 1.08,
        });

        gsap.to(glowRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1.45,
          xPercent: -30,
          opacity: 0.45,
          ease: "none",
        });

        gsap.fromTo(
          ".road-grid",
          { backgroundPosition: "0px 0px" },
          {
            backgroundPosition: "-300px 240px",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
            },
          },
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(trails, { autoAlpha: 0 });
        gsap.set(rings, { autoAlpha: 0.3 });

        gsap.to(carRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.9,
          },
          xPercent: -118,
          yPercent: -8,
          rotation: -4,
          scale: 0.9,
          ease: "none",
        });

        gsap.to(headingWrapRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
          y: -65,
          opacity: 0.12,
          scale: 1.03,
        });

        gsap.to(glowRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
          scale: 1.1,
          opacity: 0.6,
          ease: "none",
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineText = "WELCOME ITZFIZZ";

  return (
    <section
      ref={sectionRef}
      className="relative h-[210vh] overflow-x-hidden bg-zinc-950 text-white md:h-[220vh]"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="road-grid absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(circle_at_center,black_30%,transparent_80%)]" />
        <div className="absolute top-16 right-16 h-40 w-40 rounded-full border border-blue-300/20 orbit-ring" />
        <div className="absolute bottom-24 left-16 h-56 w-56 rounded-full border border-cyan-300/20 orbit-ring" />

        <div
          ref={glowRef}
          className="absolute -top-20 left-1/2 size-144 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.32)_0%,rgba(56,189,248,0.06)_40%,transparent_72%)] blur-2xl"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
          <h1
            ref={headingWrapRef}
            className="max-w-6xl text-3xl font-black uppercase leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
          >
            {headlineText.split("").map((char, idx) => (
              <span
                key={`${char}-${idx}`}
                className="headline-letter inline-block pr-[0.12em] tracking-[0.22em] text-transparent bg-[linear-gradient(180deg,#f8fafc_12%,#7dd3fc_58%,#60a5fa_100%)] bg-clip-text sm:tracking-[0.3em] md:pr-[0.15em] md:tracking-[0.35em]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-2xl border border-white/15 bg-white/6 px-4 py-5 text-center shadow-[0_0_40px_rgba(56,189,248,0.09)] backdrop-blur-md md:px-5 md:py-6"
              >
                <p className="text-2xl font-bold text-cyan-300 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.24rem] text-zinc-300 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={carRef}
          className="pointer-events-none absolute right-[-38%] bottom-14 z-20 h-[165px] w-[300px] will-change-transform sm:right-[-28%] sm:bottom-8 sm:h-[250px] sm:w-[500px] md:h-[300px] md:w-[600px]"
        >
          <div className="speed-trail absolute top-[39%] left-[-86%] h-[2px] w-[80%] bg-linear-to-r from-transparent via-cyan-200/80 to-transparent blur-[1px]" />
          <div className="speed-trail absolute top-[51%] left-[-108%] h-[3px] w-[92%] bg-linear-to-r from-transparent via-blue-300/70 to-transparent blur-[2px]" />
          <div className="speed-trail absolute top-[63%] left-[-96%] h-[2px] w-[74%] bg-linear-to-r from-transparent via-indigo-300/70 to-transparent blur-[1px]" />
          <Image
            src="/car-top-view.svg"
            alt="Top view car visual"
            fill
            priority
            sizes="(max-width: 768px) 360px, 560px"
            className="object-contain drop-shadow-[0_35px_40px_rgba(14,116,144,0.5)]"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.28)_0%,rgba(59,130,246,0.16)_26%,rgba(9,9,11,1)_62%)]" />
      </div>
    </section>
  );
}
