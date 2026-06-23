import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import drPortrait from "@/assets/dr-anderson-portrait.jpg";
import beforeImg from "@/assets/before-hair.jpg";
import afterImg from "@/assets/after-hair.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Anderson Lima — Transplante Capilar de Excelência" },
      {
        name: "description",
        content:
          "Tricologia e transplante capilar com Dr. Anderson Lima. Resultados naturais, técnica avançada e acompanhamento humanizado em Alagoas.",
      },
      { property: "og:title", content: "Dr. Anderson Lima — Restauração Capilar" },
      {
        property: "og:description",
        content:
          "Transplante capilar de alta precisão. Agende sua avaliação pelo WhatsApp.",
      },
      { property: "og:image", content: drPortrait },
    ],
  }),
  component: Home,
});

const WHATSAPP_URL = "https://wa.me/5582999199858";
const INSTAGRAM_URL = "https://www.instagram.com/drandersonlima/";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servico", label: "Transplante" },
  { href: "#evolucoes", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Service />
        <BeforeAfter />
        <Gallery />
        <Videos />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <LogoMark />
          <span>
            Dr. Anderson <span className="text-brand">Lima</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 md:flex">
          {navItems.map((it) => (
            <a key={it.href} href={it.href} className="transition hover:text-brand">
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
          >
            Agendar avaliação
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="container-x flex flex-col gap-1 py-3">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground/85 hover:bg-muted"
              >
                {it.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 26 L16 4 L26 26 Z" fill="oklch(0.28 0.04 165)" />
      <path d="M16 4 L26 26 L20 26 Z" fill="var(--color-brand)" />
    </svg>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative grain-bg overflow-hidden">
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28 lg:py-32">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Tricologia & Transplante Capilar
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Restauração capilar de <span className="text-gradient-brand">excelência</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75">
            Técnica avançada, resultados naturais e cuidado humanizado. Dr. Anderson Lima
            devolve não só os fios — devolve confiança.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              Agendar avaliação
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition group-hover:translate-x-0.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#evolucoes"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              Ver resultados
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "+10", v: "anos de experiência" },
              { k: "+1.500", v: "procedimentos" },
              { k: "98%", v: "satisfação" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-brand">{s.k}</dt>
                <dd className="mt-1 text-xs text-foreground/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-brand/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated">
            <img
              src={drPortrait}
              alt="Dr. Anderson Lima, médico especialista em tricologia e transplante capilar"
              width={1024}
              height={1536}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-display text-lg font-semibold text-white">Dr. Anderson Lima</p>
              <p className="text-xs uppercase tracking-widest text-white/70">
                CRM • Tricologista
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Técnica FUE", "Resultados Naturais", "Acompanhamento", "Anestesia local", "Sem cortes"];
  return (
    <div className="border-y border-border/60 bg-surface/40">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs uppercase tracking-[0.2em] text-foreground/55">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="sobre" className="container-x py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionEyebrow>Quem é</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Um sertanejo inovador que <span className="text-gradient-brand">transforma vidas</span>.
          </h2>
        </div>
        <div className="space-y-5 text-foreground/75">
          <p>
            Dr. Anderson Lima é um homem que tem Deus como base fundamental de tudo; um
            sonhador que materializou seu projeto pessoal em uma oportunidade de transformar
            vidas.
          </p>
          <p>
            Um sertanejo inovador, apaixonado por suas raízes, pelo seu trabalho e pela
            família. Especializado em tricologia e transplante capilar, alia técnica de
            ponta a um olhar humano e personalizado para cada paciente.
          </p>
          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:opacity-80"
            >
              Conversar com o Dr. Anderson
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Service ---------- */
function Service() {
  const features = [
    {
      title: "Técnica FUE",
      desc: "Extração folicular minimamente invasiva, sem cortes e com recuperação rápida.",
    },
    {
      title: "Resultado natural",
      desc: "Implante fio a fio respeitando ângulo, direção e densidade do seu cabelo.",
    },
    {
      title: "Planejamento individual",
      desc: "Cada paciente recebe um projeto capilar personalizado para seu rosto e idade.",
    },
    {
      title: "Acompanhamento contínuo",
      desc: "Suporte durante todo o pós-operatório e evolução por até 12 meses.",
    },
  ];
  return (
    <section id="servico" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="container-x grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={clinicImg}
              alt="Interior da clínica do Dr. Anderson Lima"
              width={1600}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <SectionEyebrow>Procedimento</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Transplante capilar <span className="text-gradient-brand">de alta precisão</span>.
          </h2>
          <p className="mt-5 max-w-xl text-foreground/70">
            Um procedimento moderno, seguro e ambulatorial. Da avaliação ao resultado final,
            cada etapa é conduzida com rigor técnico e cuidado individualizado.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-border bg-surface-elevated/50 p-5 transition hover:border-brand/40"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/65">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After ---------- */
function BeforeAfter() {
  return (
    <section id="evolucoes" className="container-x py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow center>Antes & Depois</SectionEyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Arraste e veja a <span className="text-gradient-brand">transformação</span>.
        </h2>
        <p className="mt-5 text-foreground/70">
          Resultados reais de pacientes do Dr. Anderson Lima. Mova o controle para comparar
          antes e depois do procedimento.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl">
        <BeforeAfterSlider beforeSrc={beforeImg} afterSrc={afterImg} />
        <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-foreground/50">
          Imagem ilustrativa — substitua pelos casos reais
        </p>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const items = [
    { src: drPortrait, label: "Atendimento" },
    { src: clinicImg, label: "Estrutura" },
    { src: afterImg, label: "Resultado" },
    { src: beforeImg, label: "Pré-operatório" },
    { src: clinicImg, label: "Sala cirúrgica" },
    { src: drPortrait, label: "Consulta" },
  ];
  return (
    <section className="bg-surface/30 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionEyebrow>Galeria</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Estrutura, atendimento e <span className="text-gradient-brand">resultados</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60">
            Um espaço pensado para o seu conforto, com equipamentos de última geração.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1 / 1" : "1 / 1" }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Videos ---------- */
function Videos() {
  const videos = [
    { id: "5v1b-Dtbdro", title: "Conheça o Dr. Anderson Lima" },
    { id: "5v1b-Dtbdro", title: "Como funciona o transplante" },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow center>Vídeos</SectionEyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Conheça mais sobre o <span className="text-gradient-brand">nosso trabalho</span>.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {videos.map((v, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-display font-semibold">{v.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    {
      name: "Carlos M.",
      role: "Paciente • 2024",
      text: "O Dr. Anderson devolveu minha autoestima. O resultado superou tudo que eu imaginava — natural e o cuidado da equipe foi impecável.",
    },
    {
      name: "Rafael S.",
      role: "Paciente • 2023",
      text: "Profissionalismo do início ao fim. Cada detalhe foi explicado com calma e o pós-operatório foi tranquilo, sem dor.",
    },
    {
      name: "Lucas P.",
      role: "Paciente • 2024",
      text: "Pesquisei muito antes de decidir. Hoje, 10 meses depois, recomendo de olhos fechados. Trabalho de altíssima qualidade.",
    },
  ];
  return (
    <section id="depoimentos" className="bg-surface/30 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>Depoimentos</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Quem viveu essa <span className="text-gradient-brand">transformação</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-surface-elevated/50 p-7"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-brand/70">
                <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                "{t.text}"
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-foreground/50">
                  {t.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "O transplante capilar dói?",
      a: "O procedimento é realizado com anestesia local e é muito bem tolerado. A maioria dos pacientes relata desconforto mínimo, apenas no momento da anestesia.",
    },
    {
      q: "Quanto tempo dura o procedimento?",
      a: "Em média entre 6 e 8 horas, dependendo da quantidade de folículos a serem transplantados. O paciente vai para casa no mesmo dia.",
    },
    {
      q: "Quando começo a ver os resultados?",
      a: "Os primeiros fios definitivos começam a nascer entre 3 e 4 meses. O resultado consolidado é observado entre 9 e 12 meses após o procedimento.",
    },
    {
      q: "Quanto tempo é a recuperação?",
      a: "A recuperação social é rápida: em geral, em 7 a 10 dias o paciente já pode retornar à rotina normal, com cuidados específicos orientados pela equipe.",
    },
    {
      q: "O resultado é permanente?",
      a: "Sim. Os fios transplantados são geneticamente resistentes à queda, mantendo-se permanentes ao longo da vida.",
    },
    {
      q: "Como é feita a avaliação?",
      a: "A avaliação é presencial ou por vídeo. Nela analisamos seu padrão de queda, área doadora e definimos o melhor plano para o seu caso.",
    },
  ];
  return (
    <section id="faq" className="container-x py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <SectionEyebrow>Dúvidas</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Principais perguntas dos <span className="text-gradient-brand">pacientes</span>.
          </h2>
          <p className="mt-5 max-w-md text-foreground/65">
            Não encontrou sua dúvida? Fale diretamente com a equipe pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/20"
          >
            Falar no WhatsApp
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition ${
            open ? "rotate-45 border-brand bg-brand/15 text-brand" : "text-foreground/60"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pr-12 text-sm leading-relaxed text-foreground/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionEyebrow>Onde estamos</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Venha nos <span className="text-gradient-brand">visitar</span>.
          </h2>
          <dl className="mt-10 space-y-6 text-sm">
            <Info label="Endereço" value="Maceió — Alagoas, Brasil" />
            <Info label="WhatsApp" value="+55 (82) 99919-9858" href={WHATSAPP_URL} />
            <Info label="Instagram" value="@drandersonlima" href={INSTAGRAM_URL} />
            <Info label="Horário" value="Segunda a sexta, 08h às 18h" />
          </dl>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
          >
            Agendar avaliação
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Localização da clínica"
            src="https://www.google.com/maps?q=Macei%C3%B3,%20Alagoas&output=embed"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="border-l-2 border-brand/40 pl-4">
      <dt className="text-xs uppercase tracking-[0.2em] text-foreground/55">{label}</dt>
      <dd className="mt-1 font-display text-lg font-semibold">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="hover:text-brand">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-display font-semibold">
          <LogoMark />
          Dr. Anderson Lima
        </div>
        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Dr. Anderson Lima. Todos os direitos reservados.
        </p>
        <div className="flex gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-border p-2 transition hover:border-brand hover:text-brand"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-border p-2 transition hover:border-brand hover:text-brand"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl shadow-brand/30 transition hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.78 9.78 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}

/* ---------- helpers ---------- */
function SectionEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand ${
        center ? "mx-auto" : ""
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}
