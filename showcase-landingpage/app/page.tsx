"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

// ProjectShowcase - single-file, modular Next.js React component
// Tailwind-based, palette: white, lilla (#F6EEFF), violet (#6C3D9A)
// Contains: Hero, Overview, Team, ProcessSteps, CTA, Footer
// All components accept props so they're easy to modify or reuse.

// ------ Sample data (editable) ------
const TEAM = [
  {
    id: 1,
    name: "Giulia Rossi",
    role: "Product Lead & Accessibility Specialist",
    bio: "Coordinamento prodotto, ricerca user-centered e validazione dei pattern di accessibilità per utenza con disabilità visive.",
    email: "giulia.rossi@example.com",
    photo: null,
  },
  {
    id: 2,
    name: "Marco Bianchi",
    role: "Full-stack Developer",
    bio: "Implementazione front-end accessibile (React/Next.js) e integrazione back-end per gestione contenuti didattici.",
    email: "marco.bianchi@example.com",
    photo: null,
  },
  {
    id: 3,
    name: "Aisha El-Sayed",
    role: "UX Researcher",
    bio: "Ricerca etnografica e test con utenti ipovedenti e non vedenti, co-progettazione con associazioni.",
    email: "aisha.elsayed@example.com",
    photo: null,
  },
  {
    id: 4,
    name: "Luca Ferri",
    role: "AI & Speech Engineer",
    bio: "Sistemi text-to-speech avanzati, personalizzazione vocale e sintesi ottimizzata per studio e ripasso.",
    email: "luca.ferri@example.com",
    photo: null,
  },
  {
    id: 5,
    name: "Elena Moretti",
    role: "Instructional Designer",
    bio: "Progettazione dei contenuti didattici accessibili: microlearning, strutture a moduli e valutazioni formative.",
    email: "elena.moretti@example.com",
    photo: null,
  },
  {
    id: 6,
    name: "Tomás Alvarez",
    role: "Front-end Animator & Visual Designer",
    bio: "Animazioni leggere e pattern visivi coerenti con paletta bianco / lilla / violetto; ottimizzazione performance.",
    email: "tomas.alvarez@example.com",
    photo: null,
  },
];


const PROCESS_STEPS = [
  {
    step: 1,
    title: "Ricerca e coinvolgimento utenti",
    summary: "Coinvolgere persone con disabilità visive nella fase iniziale, condurre interviste approfondite e test di contesto.",
    details: [
      "Mapping degli stakeholder (famiglie, insegnanti, associazioni)",
      "Sessioni di co-design con utenti ipovedenti e non vedenti",
      "Raccolta di bisogni, barriere e pattern di studio esistenti"
    ],
    icon: "🔍",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    slidePreview: "/imgs/c1.png",
    slideUrl: "#"
  },
  {
    step: 2,
    title: "Progettazione inclusiva e prototipazione",
    summary: "Sviluppare pattern di UI compatibili con screen reader, contrasto ottimale, e un layout semplificato per navigazione vocale.",
    details: [
      "Wireframe semplificati e flussi vocali",
      "Componenti ARIA-first: landmark, roles e live regions",
      "Prototipi testabili (audio-first & keyboard-only)"
    ],
    icon: "✏️",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    slidePreview: "/imgs/c2.png",
    slideUrl: "#"
  },
  {
    step: 3,
    title: "Implementazione tecnica e integrazione TTS",
    summary: "Costruire la piattaforma con Next.js, integrare motori TTS personalizzabili, e API per contenuti didattici accessibili.",
    details: [
      "Architettura: SSR per performance e SEO accessibile",
      "Personalizzazione vocale (velocità, tono, pronuncia)",
      "Supporto offline parziale e sincronizzazione progressi"
    ],
    icon: "⚙️",
    color: "from-purple-600 to-violet-500",
    bgColor: "bg-purple-50",
    slidePreview: "/imgs/c3.png",
    slideUrl: "#"
  },
  {
    step: 4,
    title: "Validazione, lancio e roadmap educativa",
    summary: "Test quantitativi e qualitativi su larga scala, rilascio a gruppi pilota e roadmap per scalare contenuti e integrazioni.",
    details: [
      "Metriche d'impatto: retention, efficacia degli learning-path",
      "Piano di formazione insegnanti e caregiver",
      "Iterazione continua basata su feedback reali"
    ],
    icon: "🚀",
    color: "from-violet-600 to-purple-500",
    bgColor: "bg-violet-50",
    slidePreview: "/imgs/c4.png",
    slideUrl: "#"
  },
];

// ------ Helper small components ------
const Accent = ({ children }) => (
  <span className="font-semibold" style={{ color: "#6C3D9A" }}>
    {children}
  </span>
);

// Avatar placeholder - modular (accepts photo URL or initials)
const Avatar = ({ name, photo, size = 48 }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="flex items-center justify-center rounded-full bg-white shadow-sm"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {photo ? (
        <img src={photo} alt={`${name} avatar`} className="rounded-full" />
      ) : (
        <div className="text-sm font-medium text-violet-700">{initials}</div>
      )}
    </div>
  );
};

// ------ Major sections ------
export function Hero({ title, subtitle, ctaText = "Scopri di più", onCta }) {
  return (
    <header className="relative overflow-hidden">
      <div
        className="py-20 px-6 sm:px-12 lg:px-24"
        style={{ background: "linear-gradient(180deg,#fff,#F6EEFF)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="block text-gray-900">{title}</span>
              <span className="block mt-2 text-lg text-gray-700">{subtitle}</span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-600">
              Una piattaforma pensata per rendere lo studio accessibile, efficiente
              e piacevole per persone con disabilità visive. Interfacce vocali,
              contenuti riprogettati e un flusso di apprendimento modulare.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={onCta}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg bg-violet-600 text-white font-medium hover:scale-105 transform transition"
                style={{ boxShadow: "0 6px 18px rgba(108,61,154,0.18)" }}
              >
                {ctaText}
              </button>

              <a
                className="inline-flex items-center px-4 py-3 rounded-2xl border border-transparent bg-white text-violet-700 font-medium shadow-sm"
                href="#team"
              >
                Il Team
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
            aria-hidden
          >
            {/* Visual sample: a stylized device mockup with simple shapes */}
            <div className="mx-auto w-full max-w-md bg-gradient-to-br from-white to-[#F6EEFF] rounded-3xl p-6 shadow-2xl">
              <div className="h-72 rounded-xl border-2 border-dashed border-violet-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-700">Audio-first</div>
                  <div className="mt-2 text-sm text-gray-500 max-w-xs">
                    Interfaccia semplificata per navigazione vocale, ripasso con
                    audio e note strutturate.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}


const mission = "Sviluppare una piattaforma educativa accessibile che permetta a persone con disabilità visive di studiare in autonomia usando interfacce audio-first, testi strutturati e percorsi adattivi.";

const goals = [
  { 
    title: "Accessibilità reale", 
    desc: "Implementare pattern che funzionino con screen reader e input vocale.",
    icon: "♿",
    color: "from-purple-500 to-violet-600"
  },
  { 
    title: "Apprendimento adattivo", 
    desc: "Percorsi che si adattano allo stile di apprendimento e ritmo dell'utente.",
    icon: "🎯",
    color: "from-violet-500 to-purple-600"
  },
  { 
    title: "Coinvolgimento sociale", 
    desc: "Strumenti per insegnanti e caregiver per supportare il processo educativo.",
    icon: "🤝",
    color: "from-purple-600 to-violet-500"
  },
  { 
    title: "Scalabilità tecnica", 
    desc: "Architettura solida per gestire contenuti e integrazioni TTS custom.",
    icon: "⚡",
    color: "from-violet-600 to-purple-500"
  },
];

export function Overview() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl blur-xl opacity-50" />
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-2xl flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mb-4">
            Descrizione del Progetto
          </h2>
        </motion.div>

        {/* Mission Statement - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
            
            <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-2xl border-2 border-purple-100">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-tr-3xl rounded-bl-full opacity-50" />
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full" />
                  <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">La Nostra Mission</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light"
                >
                  {mission}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
              I Nostri Obiettivi
            </h3>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + i * 0.1,
                type: "spring"
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${goal.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`} />
              
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 group-hover:border-transparent transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${goal.color} shadow-lg mb-4`}
                >
                  <span className="text-3xl">{goal.icon}</span>
                </motion.div>

                {/* Title */}
                <h4 className={`text-xl font-bold mb-3  bg-clip-text bg-gradient-to-r ${goal.color}`}>
                  {goal.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {goal.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${goals[i].color}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Sofia Rossi",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=c084fc"
  },
  {
    id: 2,
    name: "Marco Bianchi",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco&backgroundColor=a855f7"
  },
  {
    id: 3,
    name: "Elena Conti",
    role: "UX Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=c084fc"
  },
  {
    id: 4,
    name: "Luca Ferrari",
    role: "Marketing Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luca&backgroundColor=7c3aed"
  },
  {
    id: 5,
    name: "Giulia Marino",
    role: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia&backgroundColor=a855f7"
  },
  {
    id: 6,
    name: "Alessandro Romano",
    role: "Tech Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alessandro&backgroundColor=c084fc"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mb-4">
            Il Nostro Team
          </h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Le persone straordinarie che rendono possibile la nostra visione
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100 hover:border-violet-300 transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden bg-gradient-to-br from-purple-200 to-violet-200 h-64">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 text-center">
                  <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-purple-600 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.role}
                  </motion.p>

                  <div className="mt-4 flex justify-center space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer hover:bg-violet-200 transition-colors"
                    >
                      <span className="text-purple-600 text-sm">in</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer hover:bg-violet-200 transition-colors"
                    >
                      <span className="text-purple-600 text-sm">@</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function ProcessSteps({ steps = PROCESS_STEPS }) {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="min-h-screen py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full text-sm font-semibold shadow-lg"
          >
            Il Nostro Processo
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 mb-6">
            Processo di Lavoro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quattro step chiave, iterativi e verificabili con utenti reali per creare un'esperienza educativa accessibile e inclusiva
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((s, index) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseEnter={() => setHoveredStep(s.step)}
              onMouseLeave={() => setHoveredStep(null)}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 items-center rounded-3xl shadow-2xl border-4 border-violet-500 overflow-hidden ${s.bgColor} ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Step Number Badge */}
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 1, delay: 0.3 }}
                  className={`absolute -left-4 -top-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} shadow-2xl flex items-center justify-center transform rotate-12 z-10`}
                >
                  <span className="text-3xl">{s.icon}</span>
                </motion.div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} py-32`}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-10`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex-none w-10 h-10 rounded-full bg-gradient-to-br ${s.color} shadow-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{s.step}</span>
                        </div>
                        <div className="flex-1 flex items-center">
                          <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${s.color}`}>
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {s.summary}
                      </p>

                      <div className="space-y-3">
                        {s.details.map((detail, i) => (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className={`flex-none w-2 h-2 rounded-full bg-gradient-to-br ${s.color} mt-2 group-hover:scale-150 transition-transform`} />
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                              {detail}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Slide Preview Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} h-full`}>
                  <div className="relative group h-full">
                    <div className="relative bg-white h-full">

                      {/* Slide Preview */}
                      <div className="relative group w-full h-full overflow-hidden">

                        <img
                          src={s.slidePreview}
                          alt={`Slide ${s.step}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg" />

                        {/* Overlay on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="text-center space-y-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="py-3 px-6 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-semibold hover:border-purple-400 hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                            >
                              <span>⬇️</span>
                              <span>Download</span>
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Chain */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-24 transform -translate-x-1/2 z-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center gap-1"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                          <ellipse cx="12" cy="8" rx="7" ry="6"
                            className="fill-purple-300 stroke-purple-400 stroke-2" />
                          <ellipse cx="12" cy="24" rx="7" ry="6"
                            className="fill-violet-300 stroke-violet-400 stroke-2" />
                          <rect x="10" y="8" width="4" height="16"
                            className="fill-purple-200" />
                        </svg>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            {steps.map((s, i) => (
              <React.Fragment key={s.step}>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-3 h-3 rounded-full transition-all ${hoveredStep === s.step
                    ? `bg-gradient-to-r ${s.color} scale-125`
                    : 'bg-purple-200'
                    }`}
                />
                {i < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-purple-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTA({ ctaText = "Richiedi Demo", onClick }) {
  return (
    <section className="py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#F6EEFF] to-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Vuoi provare la piattaforma?</h3>
          <p className="mt-2 text-gray-600">Richiedi una demo per il tuo istituto o gruppo di supporto.</p>
        </div>
        <div>
          <button
            onClick={onClick}
            className="px-6 py-3 rounded-full bg-violet-700 text-white font-semibold shadow hover:scale-105 transform transition"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Progetto Accessibilità - Tutti i diritti riservati.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-violet-700">Privacy</a>
          <a href="#" className="text-sm text-violet-700">Contatti</a>
        </div>
      </div>
    </footer>
  );
}

// ------ Default export: assembled page component ------
export default function ProjectShowcasePage({
  team = TEAM,
  steps = PROCESS_STEPS,
  mission =
  "Sviluppare una piattaforma educativa accessibile che permetta a persone con disabilità visive di studiare in autonomia usando interfacce audio-first, testi strutturati e percorsi adattivi.",
  goals = [
    { title: "Accessibilità reale", desc: "Implementare pattern che funzionino con screen reader e input vocale." },
    { title: "Apprendimento adattivo", desc: "Percorsi che si adattano allo stile di apprendimento e ritmo dell'utente." },
    { title: "Coinvolgimento sociale", desc: "Strumenti per insegnanti e caregiver per supportare il processo educativo." },
    { title: "Scalabilità tecnica", desc: "Architettura solida per gestire contenuti e integrazioni TTS custom." },
  ],
}) {
  function handleCta() {
    // placeholder - integrate analytics or navigation
    alert("Grazie! Richiedi una demo via contatto.");
  }

  return (
    <main className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-white to-[#FBF8FF]">
      <Hero
        title={"Piattaforma di studio accessibile"}
        subtitle={"Audio-first, semplice, pensata per persone con disabilità visive"}
        onCta={handleCta}
      />

      <Overview mission={mission} goals={goals} />

      <Team members={team} />

      <ProcessSteps steps={steps} />

      {false && <CTA onClick={handleCta} />}

      <Footer />
    </main>
  );
}

// ------------------
// How to use:
// - Drop this file into your Next.js `components/` or `pages/` folder
// - Ensure TailwindCSS is configured and framer-motion is installed
// - All arrays (TEAM, PROCESS_STEPS) are exported at the top for easy modification
// - Each small section is a named export for reuse in other pages
// ------------------
