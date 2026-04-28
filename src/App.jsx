import React, { useEffect, useState } from "react";
import { main } from "./js/main.js";
import { testimonials } from "./data/testimoni.js";

function App() {
  const [videoState, setVideoState] = useState({ src: null, rect: null, isExpanding: false });
  const [expandedDesc, setExpandedDesc] = useState({});

  const toggleDesc = (e, id) => {
    e.stopPropagation();
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const handleVideoClick = (e, src) => {
    // Cari elemen thumbnail di dalam card yang diklik
    const thumbnail = e.currentTarget.querySelector('.project-thumbnail') || e.currentTarget;
    const rect = thumbnail.getBoundingClientRect();
    setVideoState({ src, rect, isExpanding: false });

    // Memberikan jeda sebelum transisi agar posisi awal di-render terlebih dahulu
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVideoState(prev => ({ ...prev, isExpanding: true }));
      });
    });
  };
  const closeVideo = () => {
    setVideoState(prev => ({ ...prev, isExpanding: false }));
    // Menunggu transisi selesai sebelum menghapus elemen
    setTimeout(() => {
      setVideoState({ src: null, rect: null, isExpanding: false });
    }, 500); // 500ms mengikuti duration-500 Tailwind
  };


  useEffect(() => {
    const cleanup = main();
    return cleanup;
  }, []);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-lg shadow-black/5">
        <div className="flex justify-between items-center px-8 py-6 max-w-full mx-auto ">
          <div className="text-2xl font-black tracking-tighter text-neutral-900 font-epilogue">
            AlvinFerdinand
          </div>

          <div className="hidden md:flex gap-10">
            <a
              className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-orange-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 transition-all duration-300"
              href="#home"
            >
              Home
            </a>
            <a
              className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              href="#works"
            >
              Works
            </a>
            <a
              className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <button id="mobile-menu-btn" className="md:hidden text-neutral-900">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex-col border-t border-black/5"
        >
          <a
            className="p-4 border-b border-black/5 font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-900"
            href="#home"
          >
            Home
          </a>
          <a
            className="p-4 border-b border-black/5 font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-900"
            href="#works"
          >
            Works
          </a>
          <a
            className="p-4 border-b border-black/5 font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-900"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="p-4 border-b border-black/5 font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-900"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="p-4 border-b border-black/5 font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-neutral-900"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center pt-20 px-8 mt-3 lg:pl-32 mb-10 bg-white overflow-hidden"
          id="home"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[auto_1fr] gap-12 items-center w-full">
            {/* Left: Profile Photo */}
            <div className="flex justify-center fade-up order-2 lg:order-1">
              <div className="relative">
                <div className="relative -z-30 w-72 h-80 md:w-[22rem] md:h-[22rem] rounded-[2rem] overflow-hidden flex items-center justify-center border-4 border-amber-600">
                  {/* Placeholder icon — ganti src di bawah ini dengan foto klien */}
                  <img
                    src="/img/WhatsApp Image 2026-04-13 at 17.17.40 (1).png"
                    alt="Alvin Ferdinand"
                    className="w-full h-full object-cover scale-150 -translate-y-12"
                    id="hero-profile-photo"
                  />
                  {/* Ikon placeholder yang tampil saat belum ada foto
                  <span className="material-symbols-outlined text-neutral-300" style={{ fontSize: '100px', fontVariationSettings: "'FILL' 1" }}>person</span> */}
                </div>
                {/* Decorative accent dot */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary-container rounded-full -z-10"></div>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-orange-200 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right: Introduction */}
            <div className="reveal order-1 lg:order-2">
              <p className="text-primary-container text-sm font-semibold uppercase tracking-[0.2em] mb-4 font-label">
                Hello, I'm
              </p>
              <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tighter mb-3 uppercase text-neutral-900">
                Alvin <br />
                Ferdinand
              </h1>
              <div className="space-y-4 mb-5">
                <p className="text-primary-container text-lg sm:text-xl font-medium tracking-wide font-headline">
                  Motion Graphic Designer
                </p>
                <p className="text-neutral-500 text-base md:text-xl font-light leading-relaxed max-w-2xl">
                  i'm specializing in SaaS explainer videos and UI-driven motion
                  design. I craft clean, modern visuals that simplify complex
                  ideas through refined animation, minimal aesthetics, and
                  purposeful storytelling—helping digital products communicate
                  clearly, effectively, and with a premium feel. Focused on
                  clarity, precision, and impact, I design motion that not only
                  looks good, but works.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="group inline-flex items-center gap-4 bg-primary-container text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all cinematic-glow"
                  href="#works"
                >
                  View My Works
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="group inline-flex items-center gap-4 bg-white text-neutral-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm border border-neutral-200 hover:border-primary-container hover:text-primary-container transition-all"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section className="py-32 px-8 bg-[#FAFAF9]" id="works">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20 reveal">
              <div>
                <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-neutral-900">
                  My Projects
                </h2>
                <p className="text-neutral-400 mt-4 font-label text-sm uppercase tracking-widest">
                  my Projects 2025-2026
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-primary-container hover:border-primary-container hover:text-white text-neutral-600 transition-all">
                    <span className="material-symbols-outlined">west</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-primary-container hover:border-primary-container hover:text-white text-neutral-600 transition-all">
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 stagger">
              {/* Project Card 1 — 3D Motion */}
              <div
                className="group cursor-pointer"
                onClick={(e) => handleVideoClick(e, "/Project/alvinProject-1.mp4")}
              >
                <div
                  className="project-thumbnail aspect-[16/9] rounded-DEFAULT overflow-hidden mb-6 relative flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #FE7743 100%)",
                  }}
                >
                  {/* Decorative bg elements */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  ></div>
                  <div
                    className="absolute top-8 right-8 w-24 h-24 rounded-full blur-2xl"
                    style={{ background: "#FE774340" }}
                  ></div>
                  <div
                    className="absolute bottom-16 left-6 w-16 h-16 rounded-full blur-xl"
                    style={{ background: "#EFEEEA20" }}
                  ></div>

                  {/* Icon cluster */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                    <div
                      className="w-24 h-24 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg shadow-black/20 transition-colors duration-500"
                      style={{
                        background: "rgba(254,119,67,0.15)",
                        borderColor: "rgba(254,119,67,0.2)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "48px",
                          fontVariationSettings: "'FILL' 1",
                          color: "#FE7743",
                        }}
                      >
                        3d_rotation
                      </span>
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-label"
                      style={{ color: "#EFEEEA80" }}
                    >
                      3D Motion
                    </span>
                  </div>

                  {/* Video (akan ditampilkan saat ada src) */}
                  <video
                    src="/Project/alvinProject-1.mp4"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    muted
                    loop
                    autoPlay
                    playsInline
                  ></video>

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
                      3D MOTION
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase mb-1 text-neutral-900">
                  Project 1
                </h3>
                <div
                  className="text-neutral-400 font-label text-xs tracking-widest leading-relaxed mt-2"
                  onClick={(e) => toggleDesc(e, 1)}
                >
                  <p className={`transition-all duration-300 ${expandedDesc[1] ? '' : 'line-clamp-2'}`}>
                    Ledgr is a simple and powerful transaction tracker that helps you monitor your finances and grow your money with clarity and control.
                  </p>
                  <span className="text-orange-500 font-bold hover:text-orange-600 transition-colors cursor-pointer mt-1 inline-block uppercase text-[10px]">
                    {expandedDesc[1] ? "Show Less" : "Read More"}
                  </span>
                </div>
              </div>

              {/* Project Card 2 — VFX */}
              <div className="group cursor-pointer md:translate-y-12">
                <div
                  className="project-thumbnail aspect-[16/9] rounded-DEFAULT overflow-hidden mb-6 relative flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #000000 0%, #111111 50%, #EFEEEA 100%)",
                  }}
                >
                  {/* Decorative bg elements */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  ></div>
                  <div
                    className="absolute top-12 left-8 w-20 h-20 rounded-full blur-2xl"
                    style={{ background: "#FE774330" }}
                  ></div>
                  <div
                    className="absolute bottom-12 right-8 w-28 h-28 rounded-full blur-2xl"
                    style={{ background: "#EFEEEA25" }}
                  ></div>

                  {/* Icon cluster */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                    <div
                      className="w-24 h-24 rounded-2xl backdrop-blur-sm border flex items-center justify-center shadow-lg shadow-black/20 transition-colors duration-500"
                      style={{
                        background: "rgba(239,238,234,0.1)",
                        borderColor: "rgba(239,238,234,0.15)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "48px",
                          fontVariationSettings: "'FILL' 1",
                          color: "#FE7743",
                        }}
                      >
                        auto_awesome
                      </span>
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-label"
                      style={{ color: "#EFEEEA60" }}
                    >
                      Visual FX
                    </span>
                  </div>

                  {/* Video */}
                  <video
                    data-src=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 hidden"
                    muted
                    loop
                    playsInline
                  ></video>

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
                      VFX
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase mb-1 text-neutral-900">
                  Project 2
                </h3>
                <div
                  className="text-neutral-400 font-label text-xs tracking-widest leading-relaxed mt-2"
                  onClick={(e) => toggleDesc(e, 2)}
                >
                  <p className={`transition-all duration-300 ${expandedDesc[2] ? '' : 'line-clamp-2'}`}>
                    Ini adalah Project 2. Fokus utama dari proyek ini adalah Visual Effects (VFX) dan compositing. Kami menggabungkan rekaman dunia nyata dengan elemen CGI untuk menciptakan pemandangan yang terlihat sangat realistis dan menyatu dengan sempurna. Detail pencahayaan dan tekstur sangat diperhatikan.
                  </p>
                  <span className="text-orange-500 font-bold hover:text-orange-600 transition-colors cursor-pointer mt-1 inline-block uppercase text-[10px]">
                    {expandedDesc[2] ? "Show Less" : "Read More"}
                  </span>
                </div>
              </div>

              {/* Project Card 3 — 2D Animation */}
              <div className="group cursor-pointer">
                <div
                  className="project-thumbnail aspect-[16/9] rounded-DEFAULT overflow-hidden mb-6 relative flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #FE7743 0%, #c45a30 40%, #000000 100%)",
                  }}
                >
                  {/* Decorative bg elements */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  ></div>
                  <div
                    className="absolute top-10 right-10 w-20 h-20 rounded-full blur-2xl"
                    style={{ background: "#EFEEEA30" }}
                  ></div>
                  <div
                    className="absolute bottom-20 left-10 w-24 h-24 rounded-full blur-2xl"
                    style={{ background: "#00000040" }}
                  ></div>

                  {/* Icon cluster */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group-hover:scale-110 transition-transform duration-500">
                    <div
                      className="w-24 h-24 rounded-2xl backdrop-blur-sm border flex items-center justify-center shadow-lg shadow-black/20 transition-colors duration-500"
                      style={{
                        background: "rgba(0,0,0,0.3)",
                        borderColor: "rgba(239,238,234,0.2)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: "48px",
                          fontVariationSettings: "'FILL' 1",
                          color: "#EFEEEA",
                        }}
                      >
                        animation
                      </span>
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] font-label"
                      style={{ color: "#EFEEEA80" }}
                    >
                      2D Anim
                    </span>
                  </div>

                  {/* Video */}
                  <video
                    data-src=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 hidden"
                    muted
                    loop
                    playsInline
                  ></video>

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-white border border-white/10">
                      2D ANIMATION
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase mb-1 text-neutral-900">
                  Project 3
                </h3>
                <div
                  className="text-neutral-400 font-label text-xs tracking-widest leading-relaxed mt-2"
                  onClick={(e) => toggleDesc(e, 3)}
                >
                  <p className={`transition-all duration-300 ${expandedDesc[3] ? '' : 'line-clamp-2'}`}>
                    Ini adalah Project 3. Sebuah karya 2D Animation yang menceritakan narasi brand melalui animasi vektor yang fluid dan ekspresif. Kami menggunakan teknik keyframing yang teliti untuk memastikan setiap gerakan karakter dan objek terasa hidup, organik, dan penuh dengan kepribadian.
                  </p>
                  <span className="text-orange-500 font-bold hover:text-orange-600 transition-colors cursor-pointer mt-1 inline-block uppercase text-[10px]">
                    {expandedDesc[3] ? "Show Less" : "Read More"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-32 px-8 bg-[#F5F5F3]" id="skills">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 reveal">
              <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-neutral-900">
                What I Do Best
              </h2>
              <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
                Specializing in high-end motion design, from 2D vector
                animations to complex 3D visual effects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 stagger">
              {/* Expertise Card 1 */}
              <div className="bg-white p-10 rounded-lg border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary-container text-3xl">
                    animation
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold uppercase mb-4 tracking-tight text-neutral-900">
                  2D Animation
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Fluid vector animations and kinetic typography designed to
                  tell compelling stories with precision.
                </p>
              </div>

              {/* Expertise Card 2 */}
              <div className="bg-white p-10 rounded-lg border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary-container text-3xl">
                    3d_rotation
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold uppercase mb-4 tracking-tight text-neutral-900">
                  3D Rendering
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  High-fidelity 3D modeling and photorealistic rendering using
                  Octane and Redshift engines.
                </p>
              </div>

              {/* Expertise Card 3 */}
              <div className="bg-white p-10 rounded-lg border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary-container text-3xl">
                    brand_awareness
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold uppercase mb-4 tracking-tight text-neutral-900">
                  Motion Branding
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Translating brand identities into dynamic motion languages
                  that resonate across all digital platforms.
                </p>
              </div>

              {/* Expertise Card 4 */}
              <div className="bg-white p-10 rounded-lg border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary-container text-3xl">
                    dashboard_customize
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold uppercase mb-4 tracking-tight text-neutral-900">
                  UI Animation
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Enhancing user experiences with purposeful micro-interactions
                  and high-end interface transitions.
                </p>
              </div>
            </div>

            <div className="marquee-container py-12 border-y border-black/10">
              <div className="marquee-content gap-12 items-center">
                <span className="text-4xl md:text-6xl font-headline font-black text-black/10 whitespace-nowrap">
                  AFTER EFFECTS
                </span>
                <span className="w-4 h-4 bg-primary-container rounded-full"></span>
                <span className="text-4xl md:text-6xl font-headline font-black text-black/10 whitespace-nowrap">
                  ILLUSTRATOR
                </span>
                <span className="w-4 h-4 bg-primary-container rounded-full"></span>
                {/* Repeat for infinite look */}
                <span className="text-4xl md:text-6xl font-headline font-black text-black/10 whitespace-nowrap">
                  AFTER EFFECTS
                </span>
                <span className="w-4 h-4 bg-primary-container rounded-full"></span>
                <span className="text-4xl md:text-6xl font-headline font-black text-black/10 whitespace-nowrap">
                  ILLUSTRATOR
                </span>
                <span className="w-4 h-4 bg-primary-container rounded-full"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 bg-white" id="testimonials">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-neutral-900 mb-4">
                What People Say
              </h2>
            </div>

            <div className="space-y-8 stagger">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#FAFAF9] p-12 rounded-lg shadow-sm border border-black/5 hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-primary-container"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl font-headline font-bold text-neutral-900 leading-tight mb-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-neutral-900 font-bold uppercase text-xs tracking-widest">
                        {testimonial.name}
                      </p>
                      <p className="text-neutral-400 text-[10px] uppercase tracking-widest">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-8 bg-neutral-900" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="reveal">
                <h2 className="font-headline text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-white">
                  Let's animate <br />
                  your ideas.
                </h2>
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <p className="text-neutral-400 text-xs uppercase tracking-[0.2em] mb-2">
                      Email Me
                    </p>
                    <a
                      className="text-sm md:text-3xl font-headline font-bold text-white hover:text-primary-container transition-colors break-all"
                      href="mailto:alvinferdinand723@gmail.com"
                    >
                      alvinferdinand723@gmail.com
                    </a>
                  </div>
                  <div className="pt-8">
                    <div className="flex gap-6">
                      <a
                        className="text-neutral-400 hover:text-primary-container transition-colors font-label uppercase text-sm tracking-widest"
                        href="https://www.linkedin.com/in/alvin-ferdinand-17a15b340?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      >
                        LinkedIn
                      </a>
                      <a
                        className="text-neutral-400 hover:text-primary-container transition-colors font-label uppercase text-sm tracking-widest"
                        href="https://www.instagram.com/alvinfrd_?igsh=emp1aXBwbHp5Mm10&utm_source=qr"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-up">
                <form id="contact-form" className="space-y-12">
                  <div className="relative">
                    <input
                      className="w-full bg-transparent border-0 border-b border-neutral-700 py-4 px-0 text-white focus:ring-0 focus:border-primary-container placeholder:text-neutral-600 transition-all font-label text-sm tracking-widest"
                      id="name"
                      placeholder="YOUR NAME"
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <input
                      className="w-full bg-transparent border-0 border-b border-neutral-700 py-4 px-0 text-white focus:ring-0 focus:border-primary-container placeholder:text-neutral-600 transition-all font-label text-sm tracking-widest"
                      id="email"
                      placeholder="EMAIL ADDRESS"
                      type="email"
                    />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-transparent border-0 border-b border-neutral-700 py-4 px-0 text-neutral-600 focus:ring-0 focus:border-primary-container transition-all font-label text-sm tracking-widest"
                      id="service"
                      defaultValue=""
                    >
                      <option disabled value="">
                        SELECT SERVICE
                      </option>
                      <option>3D MOTION DESIGN</option>
                      <option>VFX / COMPOSITING</option>
                      <option>BRAND ANIMATION</option>
                    </select>
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-neutral-700 py-4 px-0 text-white focus:ring-0 focus:border-primary-container placeholder:text-neutral-600 transition-all font-label text-sm tracking-widest"
                      id="message"
                      placeholder="TELL ME ABOUT YOUR PROJECT"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-primary-container text-white py-6 rounded-full font-bold uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 w-full py-12 px-8 border-t border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div className="text-lg font-bold text-white font-epilogue">
            AlvinFerdinand
          </div>
          <div className="flex gap-8">
            <a
              className="font-['Epilogue'] text-xs tracking-widest uppercase text-neutral-400 hover:text-orange-500 transition-colors duration-500"
              href="https://www.linkedin.com/in/alvin-ferdinand-17a15b340?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            >
              LinkedIn
            </a>
            <a
              className="font-['Epilogue'] text-xs tracking-widest uppercase text-neutral-400 hover:text-orange-500 transition-colors duration-500"
              href="https://www.instagram.com/alvinfrd_?igsh=emp1aXBwbHp5Mm10&utm_source=qr"
            >
              Instagram
            </a>
          </div>
          <div className="font-['Epilogue'] text-xs tracking-widest uppercase text-neutral-400">
            © 2026 Alvin Ferdinand
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoState.src && (
        <div
          className={`fixed inset-0 z-[100] transition-opacity duration-500 cursor-pointer ${videoState.isExpanding ? "bg-black/90 backdrop-blur-md opacity-100" : "bg-transparent opacity-0"
            }`}
          onClick={closeVideo}
        >
          <video
            src={videoState.src}
            className="absolute object-cover rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[101]"
            style={
              videoState.isExpanding
                ? {
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90vw",
                  height: "85vh",
                  objectFit: "contain",
                }
                : {
                  top: videoState.rect?.top || 0,
                  left: videoState.rect?.left || 0,
                  width: videoState.rect?.width || 0,
                  height: videoState.rect?.height || 0,
                  transform: "translate(0, 0)",
                  objectFit: "cover",
                  borderRadius: "inherit"
                }
            }
            autoPlay
            controls={videoState.isExpanding}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`absolute top-6 right-10 text-white hover:text-orange-500 transition-all duration-500 z-[102] ${videoState.isExpanding ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            onClick={closeVideo}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
