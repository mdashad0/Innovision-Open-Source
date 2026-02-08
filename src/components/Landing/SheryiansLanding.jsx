"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  Sparkles,
  Palette,
  Upload,
  Youtube,
  BookOpen,
  Code2,
  ArrowRight,
  Check,
} from "lucide-react";

/* ------------------ MOTION VARIANTS ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/* ------------------ DATA ------------------ */

const features = [
  { icon: Sparkles, title: "AI Course Generator", desc: "Generate courses instantly with AI" },
  { icon: Palette, title: "Course Studio", desc: "Design beautiful custom courses" },
  { icon: Upload, title: "Content Ingestion", desc: "Import PDFs & textbooks" },
  { icon: Youtube, title: "YouTube Courses", desc: "Learn directly from videos" },
  { icon: BookOpen, title: "Browse Courses", desc: "Explore curated content" },
  { icon: Code2, title: "Code Editor", desc: "Practice coding live" },
];

const stats = [
  { value: "1000+", label: "Courses Created" },
  { value: "50K+", label: "Active Learners" },
  { value: "100+", label: "Languages" },
  { value: "98%", label: "Satisfaction" },
];

const pricing = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["3 custom courses", "1 YouTube course", "Basic gamification"],
  },
  {
    name: "Premium",
    price: "₹100",
    period: "per month",
    popular: true,
    features: ["Unlimited courses", "Analytics dashboard", "Priority support"],
  },
  {
    name: "Education",
    price: "₹50",
    period: "per month",
    features: ["All premium features", "Student discount", "Classroom tools"],
  },
];

/* ------------------ COMPONENT ------------------ */

export default function SheryiansLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ---------------- HERO ---------------- */}
      <section className="min-h-screen flex items-center justify-center px-4 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="text-sm text-slate-400 mb-6">
            50,000+ Active Learners Worldwide
          </p>

          <motion.h1
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-6"
          >
            <span className="block">Learn Any Topic</span>
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              with AI-Generated Courses
            </span>
          </motion.h1>

          <p className="text-slate-400 max-w-3xl mx-auto mb-10">
            Personalized, chapter-wise courses created in seconds — tailored exactly to how you learn.
          </p>

          <Link href="/login">
            <Button className="
              h-12 px-8 rounded-full
              bg-gradient-to-r from-blue-500 to-indigo-500
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]
              hover:scale-[1.05] transition
            ">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="py-20 px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="text-4xl font-light">{s.value}</div>
              <div className="text-sm text-slate-400 uppercase">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl text-center mb-4"
          >
            Everything You Need to <span className="text-blue-500">Learn</span>
          </motion.h2>

          <p className="text-center text-slate-400 mb-16">
            Powerful tools designed for modern learners
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="
                  relative p-8 rounded-2xl bg-slate-950
                  border border-white/10 overflow-hidden
                "
                variants={cardHover}
              >
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10
                " />

                <f.icon className="h-8 w-8 mb-4 text-blue-500" />
                <h3 className="text-xl mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- PRICING ---------------- */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl text-center mb-12"
          >
            Simple <span className="text-blue-500">Pricing</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`relative p-8 rounded-2xl border transition-all
                  ${
                    plan.popular
                      ? "border-blue-500/60 bg-gradient-to-b from-blue-500/10 to-purple-500/5 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                      : "border-white/10 bg-slate-950"
                  }
                `}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-2 text-slate-400 text-sm">
                      <Check className="h-4 w-4 text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button className="w-full rounded-full bg-blue-500 hover:bg-blue-600">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-white/10 py-12 text-center text-slate-500">
        © 2025 InnoVision. All rights reserved.
      </footer>
    </div>
  );
}
