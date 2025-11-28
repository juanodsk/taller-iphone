import React from "react";
import Ricardo from "./img/1.png"

const TallerReparaIphoneLanding = () => {
  const handleWhatsAppClick = () => {
    // Cambia el número y el mensaje por los de tu cliente
    const phone = "573000000000"; // Ejemplo: 57 + número
    const text = encodeURIComponent(
      "Hola, quiero más información sobre el Taller Intensivo Online: Repara iPhone Desde Cero."
    );
    window.open(`https://wa.link/p29kfw`, "_blank");
  };

  const handleCheckoutClick = () => {
    // Reemplazar con la URL real del checkout
    window.open("https://wa.link/p29kfw", "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Fondo con degradado sutil */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#febd5833,_transparent_55%),radial-gradient(circle_at_bottom,_#0f172a,_#020617)]" />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-0 lg:pb-24 lg:pt-16">
        {/* Banner de urgencia */}
        <section className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-100 shadow-md shadow-amber-500/10">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#febd58] text-xs font-black text-slate-950">
                !
              </span>
              <p className="font-medium">
                Oferta Preventa Black Friday:{" "}
                <span className="font-semibold text-[#febd58]">
                  Solo $147 USD
                </span>{" "}
                (Precio normal: $297 USD). Válido hasta el 2 de diciembre o
                hasta agotar cupos.
              </p>
            </div>
            <div className="flex gap-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
              <span className="rounded-full border border-slate-600 px-3 py-1">
                Cupos limitados
              </span>
              <span className="rounded-full border border-slate-600 px-3 py-1">
                100% online en vivo
              </span>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
          {/* Texto principal */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#febd58]" />
              Taller Intensivo Online · 9 al 12 de diciembre
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Aprende a{" "}
              <span className="text-[#febd58]">reparar iPhone desde cero</span>{" "}
              en solo 4 días,
              <span className="block text-slate-300">
                sin miedo a dañar piezas ni perder dinero.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Domina recambios de pantallas, baterías, cámaras y la estructura
              interna del iPhone con un método práctico y probado en el
              laboratorio profesional{" "}
              <span className="font-semibold">GOTFIX®</span>.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-slate-200 sm:grid-cols-3 sm:max-w-xl">
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Sin experiencia previa
              </li>
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Acceso desde cualquier lugar
              </li>
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Oferta limitada Black Friday
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={handleCheckoutClick}
                className="w-full rounded-full bg-[#febd58] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-xl shadow-[#febd58]/40 transition hover:shadow-[#febd58]/60 sm:w-auto"
              >
                Quiero inscribirme
              </button>
             
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Acceso a grabaciones por tiempo limitado + clases pregrabadas
              incluidas.
            </p>
          </div>

          {/* Tarjeta lateral con precio y fechas */}
          <aside className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_0_60px_-30px_rgba(0,0,0,1)] sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Oferta Preventa Black Friday
            </p>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#febd58]">
                $147
              </span>
              <span className="text-xs font-semibold text-slate-400">USD</span>
            </div>
            <p className="text-xs text-slate-400">
              Precio normal:{" "}
              <span className="line-through text-slate-500">$297 USD</span> ·
              Ahorras <span className="font-semibold text-[#febd58]">$150</span>
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Fechas
                </p>
                <p className="mt-1 font-semibold">9 al 12 de diciembre</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Duración
                </p>
                <p className="mt-1 font-semibold">
                  3-4 horas por día
                  <span className="block text-[11px] text-slate-400">
                    +1 hora extra si es necesario
                  </span>
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Modalidad
                </p>
                <p className="mt-1 font-semibold">
                  100% online en vivo
                  <span className="block text-[11px] text-slate-400">
                    Zoom o plataforma privada
                  </span>
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Cupos
                </p>
                <p className="mt-1 font-semibold text-[#febd58]">Limitados</p>
                <p className="text-[11px] text-slate-400">
                  Oferta válida hasta el 2 de diciembre
                </p>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="mt-5 w-full rounded-2xl bg-[#febd58] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-[#febd58]/40 transition hover:shadow-[#febd58]/60"
            >
              Asegurar mi cupo ahora
            </button>

            <p className="mt-2 text-[11px] text-slate-500">
              Oferta válida hasta el 2 de diciembre o hasta agotar cupos.
            </p>
          </aside>
        </section>

        {/* ¿Para quién es? */}
        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-md font-semibold uppercase tracking-[0.2em] text-slate-400">
              ¿Para quién es este taller?
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              Si te ves en alguna de estas situaciones, este taller es para ti:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Personas sin experiencia que desean aprender desde cero a
                reparar iPhone.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Técnicos Android que quieren escalar a dispositivos Apple y
                ofrecer servicios más rentables.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Técnicos iPhone que aún no dominan bien la arquitectura y
                circuitos clave.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Quienes tienen miedo de dañar piezas al hacer recambios.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-[#febd58]">
                  ✓
                </span>
                Quienes quieren ganar más ofreciendo los servicios más rentables
                del iPhone.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-md font-semibold uppercase tracking-[0.2em] text-slate-400">
              ¿Para quién NO es?
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Queremos que este taller sea extremadamente útil, por eso:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-slate-400">
                  ✕
                </span>
                No es para quienes buscan un curso genérico sin práctica real.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-slate-400">
                  ✕
                </span>
                No es para quienes no están dispuestos a invertir en las
                herramientas mínimas de trabajo.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 flex-none rounded-full bg-slate-800 text-center text-[11px] leading-5 text-slate-400">
                  ✕
                </span>
                No es para quienes esperan resultados mágicos sin practicar.
              </li>
            </ul>
          </div>
        </section>

        {/* ¿Qué vas a aprender? */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="md:text-2xl font-semibold uppercase tracking-[0.2em] text-slate-400">
                ¿Qué vas a aprender?
              </h2>
              <p className="mt-2 max-w-xl text-md text-slate-200">
                En 4 días intensivos vas a construir una base sólida para
                reparar iPhone con seguridad, confianza y criterio técnico.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Recambios de periféricos",
                desc: "Pantallas, baterías, cámaras, flexores y tapas. Paso a paso, sin riesgos.",
              },
              {
                title: "Arquitectura del iPhone",
                desc: "Cómo está compuesto y cómo funciona cada parte interna del iPhone.",
              },
              {
                title: "Electrónica básica aplicada",
                desc: "Conceptos esenciales: voltaje, corriente y resistencia aplicados a la reparación.",
              },
              {
                title: "Uso correcto del multímetro",
                desc: "Cómo medir correctamente y tomar decisiones técnicas seguras.",
              },
              {
                title: "Componentes de la placa lógica",
                desc: "Capacitores, resistencias, bobinas, diodos… aprenderás a reconocerlos visualmente.",
              },
              {
                title: "Circuitos clave del iPhone",
                desc: "PMIC, CPU, NAND, ICs de carga: cómo reconocerlos y su función en la placa.",
              },
              {
                title: "Herramientas esenciales para tu taller",
                desc: "Lista completa y recomendaciones para empezar de forma profesional.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-[#febd58]/70 hover:bg-slate-900/80"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-[#febd58]/70 group-hover:w-16 group-hover:bg-[#febd58] transition-all" />
              </div>
            ))}
          </div>
        </section>

        {/* Bonos Black Friday */}
        <section className="mb-16 rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/90">
                Bonos Black Friday
              </p>
              <h2 className="mt-2 text-lg font-semibold text-amber-50">
                Lleva más por el mismo precio
              </h2>
              <p className="mt-1 text-sm text-amber-100/90">
                Solo en esta preventa tendrás acceso a estos bonos exclusivos:
              </p>
            </div>
            <button
              onClick={handleCheckoutClick}
              className="w-full rounded-full border border-amber-400/80 bg-amber-300/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-md shadow-amber-500/30 transition hover:bg-amber-200 sm:w-auto"
            >
              Aprovechar preventa
            </button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-400/30 bg-slate-950/40 p-4 text-sm text-amber-50">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                Bono #1
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Masterclass exclusiva:
              </h3>
              <p className="mt-1">
                Diagnóstico de fallas comunes en iPhone para que dejes de
                adivinar y empieces a diagnosticar con método.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-slate-950/40 p-4 text-sm text-amber-50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                Bono #2
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Plantilla descargable:
              </h3>
              <p className="mt-1">
                Lista de herramientas esenciales para empezar tu taller sin
                gastar de más.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-slate-950/40 p-4 text-sm text-amber-50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                Bono #3
              </p>
              <h3 className="mt-2 text-sm font-semibold">Grupo privado:</h3>
              <p className="mt-1">
                Soporte con la comunidad para resolver dudas y seguir
                aprendiendo incluso después del taller.
              </p>
            </div>
          </div>
        </section>

        {/* Instructor */}
       {/* Instructor */}
      <section className="mb-16 px-15">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Texto (izquierda en pantallas grandes) */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              ¿Quién dicta el taller?
            </h2>

            <p className="mt-3 text-lg font-semibold text-slate-50">
              Ricardo Hernández Reyes
            </p>

            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Técnico experto en dispositivos Apple, con más de 5 años de
              experiencia en reparación especializada. Ha capacitado a decenas
              de técnicos y ha sido entrenado por instructores de talla
              internacional.
            </p>

            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Todo lo que enseña está probado en su laboratorio profesional{" "}
              <span className="font-semibold">GOTFIX®</span>. No verás teoría
              suelta: verás exactamente lo que aplica en el día a día con
              dispositivos reales.
            </p>
          </div>

          {/* Imagen (derecha en pantallas grandes) */}
          <div className="flex justify-center  items-center sm:justify-center">
            <img
              src={Ricardo}
              alt="Ricardo Hernández Reyes"
              className="justify-start items-center w-75 max-w-xs lg:max-w-sm rounded-2xl object-cover"
            />
          </div>
        </div>

          <div className="relative mt-15">
            <div className="absolute -inset-0.5 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_0%,#febd58_0deg,#0f172a_120deg,#020617_240deg,#febd58_360deg)] opacity-40 blur-xl" />
            <div className="relative rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Lo que puedes esperar
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-4 w-4 flex-none rounded-full bg-slate-800 text-center text-[10px] leading-4 text-[#febd58]">
                    ✓
                  </span>
                  Explicaciones claras y directas, sin relleno innecesario.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-4 w-4 flex-none rounded-full bg-slate-800 text-center text-[10px] leading-4 text-[#febd58]">
                    ✓
                  </span>
                  Casos reales de fallas y cómo abordarlas.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-4 w-4 flex-none rounded-full bg-slate-800 text-center text-[10px] leading-4 text-[#febd58]">
                    ✓
                  </span>
                  Enfoque en que salgas con más seguridad, no solo con más
                  información.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-8 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            No dejes pasar esta oportunidad
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-50">
            Precio especial preventa Black Friday:{" "}
            <span className="text-[#febd58]">$147 USD</span>
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            ❌ Precio normal: $297 USD · Oferta válida hasta el domingo o hasta
            agotar cupos.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={handleCheckoutClick}
              className="w-full max-w-xs rounded-full bg-[#febd58] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-xl shadow-[#febd58]/40 transition hover:shadow-[#febd58]/60"
            >
              Quiero inscribirme ahora
            </button>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-900 pt-5 pb-4 text-center text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} GOTFIX® · Taller Intensivo Online:
            Repara iPhone Desde Cero.
          </p>
          <p className="mt-1">
            Este sitio no forma parte de Facebook™ ni de Meta Platforms, Inc. y
            no está avalado por ellas.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default TallerReparaIphoneLanding;
