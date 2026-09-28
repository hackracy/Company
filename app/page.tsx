"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ShieldAlert,
  ShieldCheck,
  Shield,
  Terminal,
  Award,
  BookOpen,
  Trophy,
  Mail,
  Send,
  ChevronRight,
  Radio,
  Layers,
  CheckCircle2,
  Bell,
  ExternalLink,
} from "lucide-react";

// --- Validation Schemas ---
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  serviceType: z.string().min(1, { message: "Please select a service area." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ContactFormData = z.infer<typeof contactSchema>;
type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function OffDefOpsPage() {
  // --- Hero Word Morphing Animation ---
  // Step 0: "Operations"
  // Step 1: "Defensive Operations"
  // Step 2: "Offensive Defensive Operations"
  // Step 3: Simultaneous collapse -> "OffDefOps"
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimStep(1), 1000);
    const t2 = setTimeout(() => setAnimStep(2), 2200);
    const t3 = setTimeout(() => setAnimStep(3), 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    reset: resetContact,
    formState: { errors: contactErrors, isSubmitting: isContactSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const {
    register: registerNewsletter,
    handleSubmit: handleNewsletterSubmit,
    reset: resetNewsletter,
    formState: { errors: newsletterErrors, isSubmitting: isNewsletterSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onContactSubmit = async (data: ContactFormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Contact Form Submitted:", data);
    setContactSubmitted(true);
    resetContact();
    setTimeout(() => setContactSubmitted(false), 6000);
  };

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    await new Promise((res) => setTimeout(res, 800));
    console.log("Newsletter Subscribed:", data);
    setNewsletterSubmitted(true);
    resetNewsletter();
    setTimeout(() => setNewsletterSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#0b0e11] text-neutral-100 font-sans selection:bg-[#E63946] selection:text-white">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* --- STICKY NAVBAR --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0e11]/85 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Exact Font & Colors */}
          <a href="#" className="flex items-center text-2xl font-['var(--font-montserrat)',sans-serif] tracking-tight no-underline select-none">
            <span className="text-[#E63946] font-extrabold">O</span>
            <span className="text-[#E63946] font-semibold">ff</span>
            <span className="text-[#00A8E8] font-extrabold">D</span>
            <span className="text-[#00A8E8] font-semibold">ef</span>
            <span className="text-white font-extrabold">O</span>
            <span className="text-white font-semibold">ps</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-neutral-400 uppercase">
            <a href="#who-we-are" className="hover:text-white transition-colors">Who We Are</a>
            <a href="#what-we-do" className="hover:text-white transition-colors">What We Do</a>
            <a href="#blogs-research" className="hover:text-white transition-colors">Blogs & Research</a>
            <a href="#ctfs-labs" className="hover:text-white transition-colors">CTFs & Labs</a>
          </nav>

          <a
            href="#connect-us"
            className="px-5 py-2.5 text-xs font-mono font-bold text-black bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] uppercase tracking-wider"
          >
            Connect Us
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Animated Main Title Matching Image Font */}
          <div className="min-h-[110px] sm:min-h-[150px] flex items-center justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['var(--font-montserrat)',sans-serif] tracking-tight flex items-center justify-center flex-wrap leading-none select-none">
              
              {/* OFFENSIVE */}
              <span
                className={`inline-flex transition-all duration-700 ease-out ${
                  animStep >= 2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12 pointer-events-none"
                }`}
              >
                <span className="text-[#E63946] font-extrabold">O</span>
                <span className="text-[#E63946] font-semibold">ff</span>
                <span
                  className={`text-[#E63946] font-semibold transition-all duration-1000 overflow-hidden inline-block ${
                    animStep === 3 ? "max-w-0 opacity-0" : "max-w-[300px] opacity-100"
                  }`}
                >
                  ensive
                </span>
              </span>

              {/* DEFENSIVE */}
              <span
                className={`inline-flex transition-all duration-700 ease-out ${
                  animStep >= 1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12 pointer-events-none"
                }`}
              >
                <span className="text-[#00A8E8] font-extrabold">D</span>
                <span className="text-[#00A8E8] font-semibold">ef</span>
                <span
                  className={`text-[#00A8E8] font-semibold transition-all duration-1000 overflow-hidden inline-block ${
                    animStep === 3 ? "max-w-0 opacity-0" : "max-w-[300px] opacity-100"
                  }`}
                >
                  ensive
                </span>
              </span>

              {/* OPERATIONS */}
              <span className="inline-flex">
                <span className="text-white font-extrabold">O</span>
                <span className="text-white font-semibold">ps</span>
                <span
                  className={`text-white font-semibold transition-all duration-1000 overflow-hidden inline-block ${
                    animStep === 3 ? "max-w-0 opacity-0" : "max-w-[350px] opacity-100"
                  }`}
                >
                  erations
                </span>
              </span>

            </h1>
          </div>

          {/* EXACT MOTTO STYLING FROM IMAGE */}
          <p className="mt-4 text-xs sm:text-base md:text-lg font-['var(--font-montserrat)',sans-serif] font-bold text-white tracking-[0.25em] uppercase text-center">
            THE COMPLETE CYBERSECURITY SOLUTIONS
          </p>

          <p className="mt-8 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Full-featured cybersecurity architecture bridging red team adversary emulation, defensive blue team posture, and continuous security operations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a
              href="#connect-us"
              className="px-8 py-3.5 rounded-xl bg-[#E63946] text-white font-bold hover:bg-red-600 transition-all shadow-[0_0_25px_rgba(230,57,70,0.3)] uppercase tracking-wider"
            >
              Request Assessment
            </a>
            <a
              href="#ctfs-labs"
              className="px-8 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold hover:bg-neutral-800 transition-all uppercase tracking-wider"
            >
              Explore CTFs & Labs
            </a>
          </div>

        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section id="who-we-are" className="py-24 border-b border-neutral-900 bg-[#0b0e11]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#E63946] uppercase tracking-widest">
            <Terminal className="w-4 h-4" /> // SECTION_01: ABOUT_US
          </div>

          <h2 className="text-3xl sm:text-5xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-16">
            Who We Are
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl relative">
              <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] flex items-center justify-center mb-6 font-mono font-bold">
                M
              </div>
              <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-3">Our Mission</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                To equip enterprise organizations and security teams with unrelenting adversary simulation, automated threat response, and deep defensive hardening to secure modern digital assets.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl relative">
              <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] flex items-center justify-center mb-6 font-mono font-bold">
                V
              </div>
              <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-3">Our Vision</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                To define the standard for end-to-end cybersecurity solutions by uniting offensive vulnerability discovery, blue team mitigation engineering, and practical CTF talent cultivation.
              </p>
            </div>
          </div>

          {/* Our Expertise */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 sm:p-10 rounded-2xl mb-20">
            <h3 className="text-2xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#E63946]" />
              Our Expertise
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans mb-8">
              Our specialists hold extensive real-world experience across Red Teaming, Active Directory forest exploitation, Cloud DevSecOps, OT/SCADA protection, and Incident Response.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs">
              {[
                "Red Teaming",
                "AD Exploitation",
                "Cloud DevSecOps",
                "OT / ICS Defense",
                "DFIR & Forensics",
                "Malware Analysis",
              ].map((skill, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 px-3 py-2.5 rounded-lg text-neutral-300 text-center font-semibold">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* REAL CERTIFICATION BADGES */}
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-neutral-900 pb-4">
              <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00A8E8]" />
                Our Certifications
              </h3>
              <span className="text-xs font-mono text-neutral-500 uppercase">9 Verified Badges</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {[
                { code: "OSCP+", title: "Offensive Security Certified Professional+", org: "OffSec", cat: "OFFENSIVE", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "OSCP", title: "Offensive Security Certified Professional", org: "OffSec", cat: "OFFENSIVE", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "CRTO", title: "Certified Red Team Operator", org: "Zero Point Security", cat: "RED TEAM", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "CRTP", title: "Certified Red Team Professional", org: "Altered Security", cat: "RED TEAM", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "eWPTX", title: "Web Application Penetration Tester eXtreme", org: "INE Security", cat: "OFFENSIVE", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "eCPPT", title: "Certified Professional Penetration Tester", org: "INE Security", cat: "OFFENSIVE", cat2: "OFFENSIVE", col: "border-red-500/40 text-red-400 bg-red-950/20" },
                { code: "CEH", title: "Certified Ethical Hacker", org: "EC-Council", cat: "GENERAL", col: "border-neutral-500/40 text-neutral-300 bg-neutral-900" },
                { code: "Security+", title: "CompTIA Security+ SY0-701", org: "CompTIA", cat: "DEFENSIVE", col: "border-blue-500/40 text-blue-400 bg-blue-950/20" },
                { code: "PNPT", title: "Practical Network Penetration Tester", org: "TCM Security", cat: "OFFENSIVE", col: "border-red-500/40 text-red-400 bg-red-950/20" },
              ].map((cert) => (
                <div
                  key={cert.code}
                  className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">
                        {cert.code}
                      </span>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold ${cert.col}`}>
                        {cert.cat}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
                      {cert.title}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>{cert.org}</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- WHAT WE DO --- */}
      <section id="what-we-do" className="py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#00A8E8] uppercase tracking-widest">
            <Terminal className="w-4 h-4" /> // SECTION_02: SERVICES_MATRIX
          </div>

          <h2 className="text-3xl sm:text-5xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl font-sans mb-16">
            Comprehensive cybersecurity services covering Red Teaming, Blue Team defense, OT/ICS security, and specialized security training.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* RED BOX */}
            <div className="bg-neutral-950 border-2 border-[#E63946] rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(230,57,70,0.15)] relative">
              <div className="absolute top-0 right-0 bg-[#E63946] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">
                Red Team
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] rounded-xl">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">Offensive Security</h3>
                    <p className="text-xs text-[#E63946] font-mono">Adversary Emulation & Penetration</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Red Team Adversary Simulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Active Directory & Hybrid Entra ID Attack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Web Application & API Penetration Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Mobile App Security (iOS / Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Cloud Penetration Testing (AWS / Azure / GCP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>OT / ICS & SCADA Network Penetration Testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Social Engineering & Physical Intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>Custom EDR Evasion & Payload Development</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900">
                <a
                  href="#connect-us"
                  className="w-full block py-3 bg-[#E63946] hover:bg-red-600 text-white font-mono text-center text-xs font-bold rounded-xl transition-colors uppercase tracking-wider"
                >
                  Book Red Team Audit
                </a>
              </div>
            </div>

            {/* BLUE BOX */}
            <div className="bg-neutral-950 border-2 border-[#00A8E8] rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,168,232,0.15)] relative">
              <div className="absolute top-0 right-0 bg-[#00A8E8] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">
                Blue Team
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#00A8E8]/10 border border-[#00A8E8]/30 text-[#00A8E8] rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">Defensive Security</h3>
                    <p className="text-xs text-[#00A8E8] font-mono">Detection & Hardening</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>SIEM & EDR Detection Rule Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>SOC Automation & SOAR Playbooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>Active Directory Hardening & Tiering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>Kubernetes & Container Hardening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>Digital Forensics & Incident Response (DFIR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>Zero Trust & Network Microsegmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>Threat Hunting & Intel Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00A8E8] shrink-0 mt-0.5" />
                    <span>OT/SCADA Network Hardening</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900">
                <a
                  href="#connect-us"
                  className="w-full block py-3 bg-[#00A8E8] hover:bg-sky-500 text-white font-mono text-center text-xs font-bold rounded-xl transition-colors uppercase tracking-wider"
                >
                  Deploy Blue Defense
                </a>
              </div>
            </div>

            {/* WHITE BOX */}
            <div className="bg-neutral-950 border-2 border-white/80 rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.08)] relative">
              <div className="absolute top-0 right-0 bg-white text-black font-mono text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">
                Operations
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 border border-white/30 text-white rounded-xl">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">Security Operations</h3>
                    <p className="text-xs text-neutral-400 font-mono">Training & Compliance</p>
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Corporate Cyber Security Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Red & Blue Team Bootcamps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Custom Enterprise CTF Platform Setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>DevSecOps CI/CD Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Compliance Audits (SOC2, ISO27001)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>vCISO Advisory & Threat Modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Third-Party Vendor Risk Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Tabletop Incident Exercises</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <a
                  href="#connect-us"
                  className="w-full block py-3 bg-white hover:bg-neutral-200 text-black font-mono text-center text-xs font-bold rounded-xl transition-colors uppercase tracking-wider"
                >
                  Consult Operations
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- BLOGS & RESEARCH --- */}
      <section id="blogs-research" className="py-24 border-b border-neutral-900 bg-[#0b0e11]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E63946] uppercase tracking-widest">
                <BookOpen className="w-4 h-4" /> // SECTION_03: RESEARCH_FEED
              </div>
              <h2 className="text-3xl sm:text-5xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">
                Blogs & Researches
              </h2>
            </div>
            <a
              href="#connect-us"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors uppercase"
            >
              <span>Subscribe to Feed</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bypassing EDR Memory Scanners via Custom Sleep Obfuscation",
                date: "Sept 2026",
                category: "RED TEAM RESEARCH",
                desc: "Technical deep-dive on hooking virtual memory routines to evade next-gen EDR solutions.",
                author: "OffDefOps Research",
              },
              {
                title: "Detecting Kerberoasting & AS-REP Roasting in Multi-Forest Active Directory",
                date: "Aug 2026",
                category: "BLUE TEAM HARDENING",
                desc: "Constructing precise SIEM detections and honey-accounts to catch credential abuse.",
                author: "OffDefOps Defense Lead",
              },
              {
                title: "Kubernetes Host Escape via Misconfigured Service Account Tokens",
                date: "Jul 2026",
                category: "CLOUD SECURITY",
                desc: "Analyzing CVE patterns in automated deployments and enforcing strict pod security standards.",
                author: "OffDefOps Cloud Team",
              },
            ].map((post, idx) => (
              <article
                key={idx}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{post.date}</span>
                  </div>

                  <h3 className="text-base font-['var(--font-montserrat)',sans-serif] font-bold text-white group-hover:text-[#E63946] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>{post.author}</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform inline-block">
                    Read Post →
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* --- CTFS & LABS --- */}
      <section id="ctfs-labs" className="py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#00A8E8] uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> // SECTION_04: WARGAMES_&_LABS
          </div>

          <h2 className="text-3xl sm:text-5xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-6">
            CTFs & Labs
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-sans mb-16">
            We regularly set up Capture The Flag events and labs to challenge security researchers and nurture real skills.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* LAST CTF RESULT */}
            <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> COMPLETED
                </span>
                <span className="text-xs font-mono text-neutral-500">Sept 2026</span>
              </div>

              <h3 className="text-2xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-2">CTF_Server_2026</h3>
              <p className="text-xs text-neutral-400 font-sans mb-8">
                Linux kernel exploitation and multi-layer web vulnerability challenge.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold">🥇 1st Place</span>
                    <span className="text-white font-bold">Anandu Suresh</span>
                  </div>
                  <span className="text-xs text-neutral-300">Prize: <strong className="text-white">HackRF One</strong></span>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300 font-bold">🥈 2nd Place</span>
                    <span className="text-white font-bold">Anzil</span>
                  </div>
                  <span className="text-xs text-neutral-300">Prize: <strong className="text-white">Flipper Zero</strong></span>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600 font-bold">🥉 3rd Place</span>
                    <span className="text-white font-bold">Rahul</span>
                  </div>
                  <span className="text-xs text-neutral-300">Prize: <strong className="text-white">NodMCU + ATtiny85</strong></span>
                </div>
              </div>
            </div>

            {/* UPCOMING CTF */}
            <div className="bg-neutral-950 border-2 border-[#00A8E8] p-8 rounded-2xl relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,168,232,0.15)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#00A8E8] bg-blue-950/40 border border-[#00A8E8]/30 px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                    <Radio className="w-3.5 h-3.5" /> UPCOMING CTF
                  </span>
                  <span className="text-xs font-mono text-neutral-400">Q4 2026</span>
                </div>

                <h3 className="text-2xl font-['var(--font-montserrat)',sans-serif] font-bold text-white mb-2">CTF_AD_2026</h3>
                <p className="text-xs text-neutral-400 font-sans mb-6 leading-relaxed">
                  Enterprise Active Directory Multi-Forest Penetration arena. Kerberoasting, ACL abuses, NTLM relaying, and Entra ID persistence.
                </p>

                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl mb-6 font-mono text-xs space-y-2 text-neutral-300">
                  <p>• Full Multi-Domain Active Directory Lab</p>
                  <p>• Live Scoring & Hardware Prizes</p>
                  <p>• Follow for updates and early access</p>
                </div>
              </div>

              {/* CTF Newsletter Form */}
              <div className="bg-neutral-900/80 border border-neutral-800 p-4 rounded-xl">
                <p className="text-xs font-mono text-white mb-2 font-bold flex items-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-[#00A8E8]" /> Subscribe to receive updates
                </p>

                {newsletterSubmitted ? (
                  <p className="text-xs font-mono text-emerald-400">✓ You are subscribed for updates!</p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="flex gap-2">
                    <input
                      {...registerNewsletter("email")}
                      type="email"
                      placeholder="Enter your email..."
                      className="flex-1 bg-black border border-neutral-800 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#00A8E8]"
                    />
                    <button
                      type="submit"
                      disabled={isNewsletterSubmitting}
                      className="px-4 py-2 bg-[#00A8E8] hover:bg-sky-500 text-white font-mono text-xs font-bold rounded-lg transition-colors"
                    >
                      {isNewsletterSubmitting ? "Subscribing..." : "Subscribe"}
                    </button>
                  </form>
                )}
                {newsletterErrors.email && (
                  <p className="text-red-400 text-[10px] font-mono mt-1">{newsletterErrors.email.message}</p>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- CONNECT US --- */}
      <section id="connect-us" className="py-24 bg-[#0b0e11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E63946] uppercase tracking-widest mb-2">
              <Mail className="w-4 h-4" /> // SECTION_05: CONTACT
            </div>
            <h2 className="text-3xl sm:text-5xl font-['var(--font-montserrat)',sans-serif] font-bold text-white">
              Connect Us
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-3">
              Reach out directly to book services, request audits, or join our CTFs.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-8 sm:p-10 rounded-2xl relative shadow-2xl mb-12">
            
            {contactSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 p-8 rounded-xl text-center font-mono text-emerald-400 text-sm space-y-2">
                <p className="font-bold text-base">✓ Message Received</p>
                <p className="text-neutral-400 text-xs font-sans">An OffDefOps team member will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-5 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-neutral-400 mb-2">FULL NAME *</label>
                    <input
                      {...registerContact("name")}
                      placeholder="Your Name"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-[#E63946]"
                    />
                    {contactErrors.name && (
                      <p className="text-red-400 text-[10px] mt-1">{contactErrors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-2">EMAIL ADDRESS *</label>
                    <input
                      {...registerContact("email")}
                      placeholder="name@company.com"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-[#E63946]"
                    />
                    {contactErrors.email && (
                      <p className="text-red-400 text-[10px] mt-1">{contactErrors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-2">PRIMARY INTEREST *</label>
                  <select
                    {...registerContact("serviceType")}
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E63946]"
                  >
                    <option value="">Select Service Area...</option>
                    <option value="Offensive Red Team">Offensive Red Team / Penetration Test</option>
                    <option value="Defensive Blue Team">Defensive Blue Team / Hardening</option>
                    <option value="Security Operations & Training">Security Operations & Training</option>
                    <option value="CTF / Research Collaboration">CTF / Research Collaboration</option>
                  </select>
                  {contactErrors.serviceType && (
                    <p className="text-red-400 text-[10px] mt-1">{contactErrors.serviceType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-neutral-400 mb-2">MESSAGE *</label>
                  <textarea
                    {...registerContact("message")}
                    rows={4}
                    placeholder="Provide details about your query..."
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-[#E63946]"
                  />
                  {contactErrors.message && (
                    <p className="text-red-400 text-[10px] mt-1">{contactErrors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full py-4 bg-[#E63946] hover:bg-red-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(230,57,70,0.2)] disabled:opacity-50"
                >
                  {isContactSubmitting ? "Transmitting..." : <>Send Message <Send className="w-4 h-4" /></>}
                </button>

              </form>
            )}

          </div>

          {/* Social Icons & Email */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-neutral-950 border border-neutral-800 rounded-2xl font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E63946]" />
              <span>Mail: <strong className="text-white">contact@offdefops.com</strong></span>
            </div>

            <div className="flex items-center gap-4 text-neutral-300">
              <a href="#" className="hover:text-[#E63946] transition-colors">X (Twitter)</a>
              <span>•</span>
              <a href="#" className="hover:text-[#00A8E8] transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <span>•</span>
              <a href="#" className="hover:text-[#E63946] transition-colors">Discord</a>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-neutral-900 bg-[#0b0e11] text-center font-mono text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} OffDefOps. The Complete Cybersecurity Solutions.</p>
      </footer>

    </div>
  );
}