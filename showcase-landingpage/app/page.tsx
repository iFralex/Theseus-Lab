"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFigma, FaGithub } from "react-icons/fa";

// Inklusion Project Showcase - Team THESEUS
// Enhanced design with consistent color palette: white, lilla (#F6EEFF), violet (#6C3D9A)

// ------ Team Data ------
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alessio Brambilla",
    role: "Team Lead & Research",
    image: "/imgs/ale b.png"
  },
  {
    id: 2,
    name: "Davide Celia",
    role: "UX Designer",
    image: "/imgs/davide.png"
  },
  {
    id: 3,
    name: "Dennis Ferrari",
    role: "Developer",
    image: "/imgs/dennis.png"
  },
  {
    id: 4,
    name: "Denise Luzzi",
    role: "Accessibility Specialist",
    image: "/imgs/denise.png"
  },
  {
    id: 5,
    name: "Alessio Antonucci",
    role: "Product Manager",
    image: "/imgs/ale a.png"
  },
  {
    id: 6,
    name: "Emanuele Parinetti",
    role: "System Architect",
    image: "/imgs/ema.png"
  }
];

// ------ Process Steps ------
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Individuazione dei Bisogni",
    summary: "Fase iniziale di ricerca per comprendere le necessità degli utenti ipovedenti nel contesto universitario.",
    details: [
      "Selezione di utenti target (studenti ipovedenti), estremi ed esperti di dominio.",
      "Conduzione di interviste strutturate divise in domande generali, inerenti al tema e di opinione.",
      "Analisi dei risultati preliminari riguardanti la mobilità nel campus e l'accessibilità digitale."
    ],
    icon: "🔍",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    slidePreview: "/imgs/c1.png",
    slideDownload: "/files/c1.pdf",
  },
  {
    step: 2,
    title: "Raffinamento e Focus",
    summary: "Cambio di prospettiva basato sulle testimonianze degli utenti, passando dalla mobilità all'accessibilità didattica.",
    details: [
      "Individuazione della criticità legata all'accesso ai testi scolastici e formule matematiche.",
      "Sessioni di brainstorming per definire la Value Proposition: 'L’inclusione è il nostro formato'.",
      "Riconsiderazione dei bisogni finali: intercompatibilità software e uniformità dei testi digitali."
    ],
    icon: "💡",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    slidePreview: "/imgs/c2.png",
    slideDownload: "/files/c2.pdf",
  },
  {
    step: 3,
    title: "Task, Storyboard e Primi Prototipi",
    summary: "Analisi dei compiti degli utenti e visualizzazione degli scenari d'uso tramite storyboard.",
    details: [
      "Definizione dei task (semplice, moderato, complesso) con analisi HTA.",
      "Creazione di storyboard per illustrare la ricerca documenti e la lettura assistita.",
      "Confronto tra soluzioni Mobile e Desktop, con scelta finale della versione Desktop per solidità tecnica."
    ],
    icon: "📝",
    color: "from-purple-800 to-indigo-600",
    bgColor: "bg-purple-50",
    slidePreview: "/imgs/c3.png",
    slideDownload: "/files/c3.pdf",
  },
  {
    step: 4,
    title: "Sviluppo e Raffinamento del Prototipo",
    summary: "Progettazione di un'interfaccia interattiva ad alta fedeltà focalizzata sull'assistente vocale.",
    details: [
      "Design di una Home Page intuitiva con pulsanti larghi e contrasto elevato.",
      "Implementazione di shortcut da tastiera per ogni funzione principale (Esplora, Converti, Analisi).",
      "Integrazione di un assistente vocale interattivo per la gestione assistita dei file .ink."
    ],
    icon: "💻",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    slidePreview: "/imgs/c4.png",
    slideDownload: "/files/c4.pdf",
  },
  {
    step: 5,
    title: "Valutazione Euristica di StudiaMi",
    summary: "Test del prototipo del progetto mid-fidelity del team StudiaMi per identificare criticità di usabilità basate sulle euristiche di Nielsen.",
    details: [
      "Individuazione di violazioni riguardanti la consistenza (H4) e il controllo utente (H3).",
      "Analisi dei problemi specifici come il feedback mancante nell'iscrizione ai gruppi studio.",
      "Stesura di raccomandazioni per migliorare la prevenzione degli errori e la visibilità dello stato."
    ],
    icon: "✅",
    color: "from-rose-500 to-red-600",
    bgColor: "bg-rose-50",
    slidePreview: "/imgs/c5.png",
    slideDownload: "/files/c5.pdf",
  },
  {
    step: 6,
    title: "Usability Testing e Iterazione High-Fidelity",
    summary: "Validazione del prototipo high-fidelity tramite test di usabilità con studenti ipovedenti e analisi qualitativa dei feedback.",
    details: [
      "Test di usabilità online con 3 studenti ipovedenti, con protocollo think-aloud e questionario finale.",
      "Valutazione di esplorazione file, analisi formule e conversione in .ink tramite task guidati.",
      "Individuazione di criticità su icone, contrasto e dimensione dei font, con proposte di miglioramento."
    ],

    icon: "🧪",
    color: "from-slate-600 to-gray-800",
    bgColor: "bg-slate-50",
    slidePreview: "/imgs/c6.png",
    slideDownload: "/files/c6.pdf",
  }

];

// ------ Hero Section ------
export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-white via-[#F6EEFF] to-[#E8D5FF]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="px-6 py-2 bg-gradient-to-r from-purple-800 to-violet-600 text-white rounded-full text-sm font-bold shadow-lg">
                  Team THESEUS
                </div>
              </motion.div>

              <h1 className="text-6xl sm:text-7xl font-black leading-tight mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-violet-600 to-purple-700">
                  Inklusion
                </span>
              </h1>

              <p className="text-3xl font-bold text-gray-800 mb-6">
                L'inclusione è il nostro formato
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
                Un hub centrale che rende la scrittura e la lettura accessibili a tutti,
                senza barriere. Trasforma, unifica e gestisce tutto il materiale didattico
                in un unico spazio, con particolare attenzione al linguaggio matematico.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.figma.com/design/xZXA8SyWoVP4Lmv6xkZMnz/Inklusion---prototipi?node-id=0-1&p=f&t=YUp0cqwYZc2GqC9d-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vai al progetto Figma"
                  className="w-16 h-16 flex items-center justify-center 
                    rounded-full 
                    bg-gradient-to-r from-purple-900 to-violet-600 
                    text-white text-3xl 
                    shadow-2xl hover:shadow-purple-800/50 
                    transition-all"
                  role="button"
                >
                  <FaFigma />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/iFralex/Theseus-Lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vai al repository GitHub"
                  className="w-16 h-16 flex items-center justify-center 
                    rounded-full 
                    bg-gradient-to-r from-purple-900 to-violet-600 
                    text-white text-3xl 
                    shadow-2xl hover:shadow-purple-800/50 
                    transition-all"
                  role="button"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#steps"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-900 to-violet-600 text-white font-bold text-lg shadow-2xl hover:shadow-purple-800/50 transition-all"
                  role="button"
                >
                  Scopri il Processo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#team"
                  className="px-8 py-4 rounded-2xl bg-white border-2 border-purple-300 text-purple-700 font-bold text-lg shadow-lg hover:border-purple-400 hover:bg-purple-50 transition-all"
                  role="button"
                >
                  Il Team
                </motion.a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-200">
                  <div className="space-y-6">
                    {/* Image with centered button */}
                    <div className="relative rounded-2xl border border-4 overflow-hidden">
                      <img
                        src="/Theseus-Lab/imgs/app-home.png"
                        alt="App Home"
                        className="w-full h-auto"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3 pt-4">
                      {['Gestisci Risorse', 'Converti File', 'Analizza Contenuti', 'Assistente Vocale'].map((text, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-800 to-violet-600" />
                          <span className="text-gray-700 font-medium">{text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {false && <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open("https://www.figma.com/design/xZXA8SyWoVP4Lmv6xkZMnz/Inklusion---prototipi?node-id=0-1&p=f&t=YUp0cqwYZc2GqC9d-0", "_blank")}
                        className="px-6 py-3 bg-gradient-to-r from-purple-800 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                      >
                        Vedi Figma
                      </motion.button>
                    </div>}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-900 rounded-2xl rotate-12 shadow-xl flex items-center justify-center text-4xl" aria-hidden>
                    💜
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-800 rounded-full shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ------ Mission & Goals Section ------
export function MissionGoals() {
  const goals = [
    {
      title: "Compatibilità Universale",
      desc: "Convertire e standardizzare tutti i formati di file per renderli leggibili dai software di screen-reading.",
      icon: "🔄",
      color: "from-purple-800 to-violet-600"
    },
    {
      title: "Linguaggio Matematico",
      desc: "Supporto completo per formule e simboli matematici, spesso incompatibili con i lettori standard.",
      icon: "∑",
      color: "from-violet-500 to-purple-900"
    },
    {
      title: "Gestione Centralizzata",
      desc: "Hub unico per raggruppare, organizzare e gestire tutto il materiale didattico in modo gerarchico.",
      icon: "📚",
      color: "from-purple-900 to-violet-500"
    },
    {
      title: "Assistenza Vocale",
      desc: "Interfaccia vocale completa per ogni funzione, accessibile con comandi naturali e shortcut personalizzabili.",
      icon: "🎤",
      color: "from-violet-600 to-purple-800"
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6EEFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-violet-600 rounded-3xl blur-xl opacity-50" />
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-800 to-violet-600 shadow-2xl flex items-center justify-center">
                <span className="text-5xl" aria-hidden>🎯</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-6">
            Il Nostro Obiettivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Studiare è un diritto di tutti e aiutare chi è in difficoltà è il nostro scopo
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 via-violet-500 to-purple-900 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-2 border-purple-100">
              <div className="flex items-start gap-6">
                <div className="flex-none w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-800 to-violet-600 shadow-lg flex items-center justify-center text-3xl" aria-hidden>
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-4">
                    La Nostra Soluzione
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Creare un <span className="font-bold text-purple-900">sistema digitale</span> che fornisca agli utenti ipovedenti
                    degli strumenti per <span className="font-bold text-violet-600">raggruppare, trasformare e gestire</span> tutto
                    il materiale didattico di studio, garantendo la <span className="font-bold text-purple-900">compatibilità</span> e
                    un'<span className="font-bold text-violet-600">uniformità di formato</span>, con particolare attenzione al linguaggio matematico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${goal.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity`} />

              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 group-hover:border-transparent transition-all">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} shadow-lg mb-6`}
                  aria-hidden
                >
                  <span className="text-3xl font-bold text-white">{goal.icon}</span>
                </motion.div>

                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {goal.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------ Team Section ------
export function Team() {
  return (
    <section id="team" className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6EEFF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-6">
            Team THESEUS
          </h2>
          <p className="text-xl text-gray-700">
            Le persone che hanno reso possibile questo progetto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.id}
              tabIndex={0}
              aria-label={member.name}
              role="group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <span className="sr-only">{member.name}</span>
                <div className="relative" aria-hidden>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-violet-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity" />

                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100">
                    <div className="relative h-64 bg-gradient-to-br from-purple-200 to-violet-200 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={"/Theseus-Lab" + member.image}
                        alt={member.name}
                        className="w-full h-full object-cover  transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      {true
                        ? <div className="bg-purple-900 max-w-16 h-1 rounded-full mx-auto mt-2" />
                        : <p className="text-purple-900 font-semibold">
                          {member.role}
                        </p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------ Process Steps Section ------
export function ProcessSteps() {
  return (
    <section id="steps" className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-[#F6EEFF] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-purple-800 to-violet-600 text-white rounded-full text-lg font-bold shadow-xl"
          >
            Il Nostro Processo
          </motion.div>

          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-6">
            Dal Concept alla Realizzazione
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sei fasi fondamentali per creare una soluzione accessibile e inclusiva
          </p>
        </motion.div>

        <div className="space-y-24">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative group" // 👈 IL GRUPPO ORA È SU TUTTO LO STEP
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* ---------------------- CONTENT ---------------------- */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-2xl mb-6 transform rotate-6`}
                    aria-hidden
                  >
                    <span className="text-4xl">{step.icon}</span>
                  </motion.div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex-none w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {step.summary}
                  </p>

                  <div className="space-y-4" role="list">
                    {step.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className={`flex-none w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} shadow-md flex items-center justify-center group-hover:scale-110 transition-transform`} aria-hidden>
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed flex-1 group-hover:text-gray-800 transition-colors" role="listitem">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ---------------------- SLIDE PREVIEW ---------------------- */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200"
                  >
                    {/* Glow background */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-3xl opacity-20 blur-2xl`} />

                    <div className={`relative rounded-3xl overflow-hidden ${step.bgColor}`}>
                      <div className="relative w-full h-full">

                        {/* Preview image */}
                        <img
                          src={"/Theseus-Lab" + step.slidePreview}
                          alt={`Slide ${step.step}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // 👈 TRIGGER SULLA GROUP DI TUTTO LO STEP
                          aria-hidden
                        />

                        {/* Gradient hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />

                        {/* Download button (animated) */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <motion.a
                            href={"/Theseus-Lab" + step.slideDownload}
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-3 px-6 rounded-xl bg-white border-2 border-purple-200 text-purple-900 font-semibold hover:border-purple-400 hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                            role="button"
                            aria-label={"Scarica la presentazione dello step: " + step.title}
                          >
                            <span aria-hidden>⬇️</span>
                            <span>Download</span>
                          </motion.a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* ---------------------- CONNECTOR LINE ---------------------- */}
              {index < PROCESS_STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="hidden lg:block absolute left-1/2 -bottom-12 transform -translate-x-1/2"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-1 h-8 bg-gradient-to-b ${step.color} rounded-full`} />
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color}`}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

// ------ Features Section ------
const features = [
  {
    icon: "📁",
    title: "Gestione Risorse",
    description: "Esplora risorse in modo rapido con suddivisione per cartelle, crea gerarchie personalizzate e mantieni tutto organizzato.",
    shortcut: "E",
    color: "from-purple-800 to-violet-600"
  },
  {
    icon: "🔄",
    title: "Conversione File",
    description: "Converti qualsiasi file in formato accessibile, compatibile con screen reader e ottimizzato per la lettura.",
    shortcut: "C",
    color: "from-violet-500 to-purple-900"
  },
  {
    icon: "🔍",
    title: "Analisi Contenuti",
    description: "Analizza i tuoi file, fai domande sul contenuto e ricevi assistenza per comprendere testi complessi.",
    shortcut: "A",
    color: "from-purple-900 to-violet-500"
  },
  {
    icon: "🎤",
    title: "Assistente Vocale",
    description: "Sempre disponibile per ogni funzione, attivabile con la spacebar o comandi personalizzabili.",
    shortcut: "Space",
    color: "from-violet-600 to-purple-800"
  },
  {
    icon: "🔎",
    title: "Ricerca Avanzata",
    description: "Cerca i tuoi file per nome, filtri o categorie. Include cronologia ricerche e accesso rapido ai preferiti.",
    shortcut: "S",
    color: "from-purple-800 to-violet-600"
  },
  {
    icon: "⭐",
    title: "File Preferiti",
    description: "Accesso immediato ai documenti più utilizzati con sistema di stelle e cronologia intelligente.",
    shortcut: "F",
    color: "from-violet-500 to-purple-900"
  }
];
export function Features() {
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // step in pixels (puoi regolarlo)
    const STEP = Math.round(container.clientWidth * 0.6); // scrolla ~60% della view per step
    const DELAY = 3000; // ms fra gli step

    function startAutoScroll() {
      if (autoScrollRef.current) return;
      autoScrollRef.current = setInterval(() => {
        // se siamo quasi alla fine, torna all'inizio (loop)
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: STEP, behavior: "smooth" });
        }
      }, DELAY);
    }

    function stopAutoScroll() {
      if (!autoScrollRef.current) return;
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }

    // avvia
    startAutoScroll();

    // pausa su interazione touch/drag/hover
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll, { passive: true });
    container.addEventListener("touchend", startAutoScroll, { passive: true });

    // cleanup
    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6EEFF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-6">
            Funzionalità Principali
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un'interfaccia semplice e intuitiva con bottoni grandi e funzioni complete,
            tutte accessibili tramite shortcut e assistente vocale
          </p>
        </motion.div>

        {/* container orizzontale con snap */}
        <div
          id="features-scroll"
          ref={containerRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 py-8 -my-8 scrollbar-hide items-stretch"
        >
          {features.map((feature, i) => (
            // wrapper esterno: snap-start, larghezza responsiva e non si restringe
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[420px] lg:w-[360px] flex"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity`} />

              {/* la card interna è flex-col e flex-1 per mantenere altezza uguale */}
              <div className="relative flex-1 flex flex-col bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 group-hover:border-transparent transition-all">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg mb-6`}
                  aria-hidden
                >
                  <span className="text-4xl">{feature.icon}</span>
                </motion.div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${feature.color} text-white text-sm font-bold shadow-md`}>
                    {feature.shortcut}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed flex-1">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className={`h-1 mt-6 rounded-full bg-gradient-to-r ${feature.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------ Strengths & Weaknesses Section ------
export function Analysis() {
  const strengths = [
    "Assistente vocale alla base del sistema di interazione",
    "Hub centrale che abilita altri software di supporto",
    "Modalità di gestione file analoga a software già noti",
    "Supporto completo per screen reader su desktop",
    "Gestione file diretta e stabile"
  ];

  const weaknesses = [
    "Standardizzazione dei formati complessa da realizzare",
    "Necessità di un assistente vocale fluente e avanzato",
    "Centralizzazione eccessiva potrebbe mettere a rischio i dati"
  ];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-[#F6EEFF] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-6">
            Analisi della Soluzione
          </h2>
          <p className="text-xl text-gray-700">
            Valutazione obiettiva dei punti di forza e delle sfide da affrontare
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-20 blur-xl" />

              <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border-2 border-green-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex items-center justify-center" aria-hidden>
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Punti di Forza
                  </h3>
                </div>

                <div className="space-y-4" role="list">
                  {strengths.map((strength, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-4 group"
                      role="listitem"
                    >
                      <div className="flex-none w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-md flex items-center justify-center mt-1 group-hover:scale-110 transition-transform" aria-hidden>
                        <span className="text-white text-sm font-bold">+</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {strength}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl opacity-20 blur-xl" />

              <div className="relative h-full bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg flex items-center justify-center" aria-hidden>
                    <span className="text-3xl">⚠</span>
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Punti di Debolezza
                  </h3>
                </div>

                <div className="space-y-4" role="list">
                  {weaknesses.map((weakness, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-4 group"
                      role="listitem"
                    >
                      <div className="flex-none w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-md flex items-center justify-center mt-1 group-hover:scale-110 transition-transform" aria-hidden>
                        <span className="text-white text-sm font-bold">!</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {weakness}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Choice Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-violet-600 rounded-3xl opacity-30 blur-xl" />

            {false && <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-purple-100">
              <div className="flex items-start gap-6">
                <div className="flex-none w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-800 to-violet-600 shadow-lg flex items-center justify-center">
                  <span className="text-3xl">💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-violet-600 mb-4">
                    Perché Desktop?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il team ha scelto l'<span className="font-bold text-purple-900">app desktop</span> perché il progetto
                    nasceva per supportare lo studio dei non vedenti, e il desktop è l'ambiente più adatto. Gli
                    <span className="font-bold text-violet-600"> screen reader sono più completi</span>, la gestione dei
                    file è diretta e stabile, e l'interazione con documenti e strumenti di studio risulta molto più fluida
                    rispetto al mobile.
                  </p>
                </div>
              </div>
            </div>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ------ Footer ------
export function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-purple-900 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Inklusion</h3>
            <p className="text-purple-200">
              L'inclusione è il nostro formato. Rendere lo studio accessibile a tutti.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Team THESEUS</h4>
            <p className="text-purple-200 text-sm">
              Alessio Brambilla, Davide Celia, Dennis Ferrari, Denise Luzzi, Alessio Antonucci, Emanuele Parinetti
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Progetto</h4>
            <p className="text-purple-200 text-sm">
              FHCI - Fondamenti di Human-Computer Interaction<br />
            </p>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-purple-300 text-sm">
            © {new Date().getFullYear()} Team THESEUS - Tutti i diritti riservati
          </p>
          <p className="text-purple-300 text-sm">
            "Studiare è un diritto di tutti e aiutare chi è in difficoltà è il nostro scopo"
          </p>
        </div>
      </div>
    </footer>
  );
}

// ------ Main Component ------
export default function InklusionShowcase() {
  return (
    <main className="min-h-screen font-sans bg-white overflow-x-hidden">
      <Hero />
      <MissionGoals />
      <Features />
      <Team />
      <ProcessSteps />
      <Analysis />
      <Footer />
    </main>
  );
}