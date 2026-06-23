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
          "Tricologia e transplante capilar com Dr. Anderson Lima. Precisão cirúrgica, olhar artístico e resultados naturais em Maceió, Alagoas.",
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
  { href: "#sobre", label: "A Clínica" },
  { href: "#servico", label: "Procedimentos" },
  { href: "#evolucoes", label: "Resultados" },
  { href: "#depoimentos", label: "Pacientes" },
  { href: "#faq", label: "Dúvidas" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <BeforeAfter />
        <Gallery />
        <Videos />
        <Testimonials />
        <FaqContact />
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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight"
        >
          DR. ANDERSON <span className="italic font-normal text-muted-foreground">LIMA</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="eyebrow transition-colors hover:text-foreground"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-foreground px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition hover:bg-foreground/85"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="rounded-md p-2 lg:hidden"
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
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
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
              className="mt-3 bg-foreground px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-background"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-28 md:pt-32"
    >
      <div className="container-x grid w-full gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative z-10">
          <span className="eyebrow">Restauração Capilar — Maceió/AL</span>
          <h1 className="mt-6 font-display text-[3.4rem] leading-[0.9] tracking-tight md:text-7xl lg:text-[6.5rem]">
            Refinando
            <br />
            <span className="italic font-normal text-muted-foreground">
              identidade.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Transplante capilar especializado, unindo precisão cirúrgica e
            sensibilidade estética para hairlines naturais.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-foreground px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-background transition hover:bg-foreground/85"
            >
              Agendar Avaliação
            </a>
            <a
              href="#evolucoes"
              className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all group-hover:bg-foreground group-hover:text-background">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span>Ver Transformações</span>
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-stone-soft">
          <img
            src={drPortrait}
            alt="Dr. Anderson Lima"
            className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
          />
          <div className="absolute -bottom-8 -left-8 hidden max-w-xs border border-border bg-background p-8 shadow-sm lg:block">
            <p className="eyebrow mb-3">Nossa Filosofia</p>
            <p className="font-display text-xl italic leading-snug">
              "O cabelo emoldura o rosto. Não plantamos fios — desenhamos
              confiança."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="sobre" className="bg-background py-32 md:py-40">
      <div className="container-x mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <h2 className="eyebrow">O Especialista</h2>
            <h3 className="font-display text-5xl leading-[1.05] text-foreground">
              Dr. Anderson Lima
              <br />
              <span className="font-sans text-2xl font-light text-muted-foreground">
                Médico Tricologista
              </span>
            </h3>
            <p className="text-foreground/75 leading-relaxed">
              Um sertanejo inovador, com mais de uma década de dedicação
              exclusiva à técnica FUE (Follicular Unit Extraction). A abordagem
              é boutique: cada folículo é planejado e implantado com olhar
              artístico, priorizando densidade e naturalidade.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Apaixonado por suas raízes e pela família, Dr. Anderson alia
              técnica de ponta a um cuidado humano e personalizado para cada
              paciente.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
              <div>
                <p className="font-display text-4xl">+1.500</p>
                <p className="eyebrow mt-2">Procedimentos</p>
              </div>
              <div>
                <p className="font-display text-4xl">10 anos</p>
                <p className="eyebrow mt-2">De experiência</p>
              </div>
            </div>
          </div>
          <div className="border border-border bg-stone-soft p-4">
            <img
              src={clinicImg}
              alt="Estrutura clínica do Dr. Anderson Lima"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Service ---------- */
function Service() {
  const items = [
    {
      n: "01",
      title: "Transplante FUE",
      desc: "Mínimo tempo de recuperação, sem cicatriz linear. O padrão ouro em densidade capilar natural.",
    },
    {
      n: "02",
      title: "Barba & Sobrancelhas",
      desc: "Design preciso para definir estrutura facial e personalidade, com fios naturais.",
    },
    {
      n: "03",
      title: "Protocolos Médicos",
      desc: "Terapias adjuvantes e tratamento clínico para controle da queda e fortalecimento.",
    },
  ];
  return (
    <section id="servico" className="bg-stone-soft py-32 md:py-40">
      <div className="container-x">
        <div className="mb-20">
          <h2 className="eyebrow mb-6">Especialidades</h2>
          <h3 className="font-display text-4xl md:text-5xl">
            Tratamentos personalizados.
          </h3>
          <div className="mt-6 h-px w-24 bg-border" />
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.n}
              className="group bg-background p-12 transition-colors hover:bg-stone-soft"
            >
              <div className="mb-8 font-display text-5xl text-foreground/20 transition-colors group-hover:text-foreground">
                {it.n}
              </div>
              <h4 className="mb-4 text-base font-bold uppercase tracking-[0.18em]">
                {it.title}
              </h4>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="border-b border-foreground pb-1 text-[10px] font-bold uppercase tracking-[0.25em]"
              >
                Saiba Mais
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After ---------- */
function BeforeAfter() {
  return (
    <section id="evolucoes" className="section-dark py-32 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="eyebrow mb-6 text-muted-foreground">Resultados Reais</h2>
            <h3 className="font-display text-4xl md:text-5xl">
              Transformações mensuráveis.
            </h3>
            <p className="mt-6 text-muted-foreground">
              Compare a evolução de 12 meses dos nossos procedimentos FUE.
              Pacientes reais, luz natural, sem retoque. Arraste o controle.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <BeforeAfterSlider beforeSrc={beforeImg} afterSrc={afterImg} />
          <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Imagem ilustrativa — em breve, casos reais
          </p>
        </div>
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
    <section className="bg-background py-32 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="eyebrow mb-6">Galeria</h2>
            <h3 className="font-display text-4xl md:text-5xl">
              Estrutura e atendimento.
            </h3>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Um espaço pensado para o seu conforto, com equipamentos de última
            geração.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden border border-border bg-stone-soft ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground backdrop-blur">
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
    <section className="bg-stone-soft py-32 md:py-40">
      <div className="container-x">
        <div className="mb-16 max-w-xl">
          <h2 className="eyebrow mb-6">Vídeos</h2>
          <h3 className="font-display text-4xl md:text-5xl">
            Conheça nosso trabalho.
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <div key={i} className="border border-border bg-background">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="px-6 py-5">
                <p className="font-display text-lg">{v.title}</p>
              </div>
            </div>
          ))}
        </div>
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
    <section id="depoimentos" className="bg-background py-32 md:py-40">
      <div className="container-x">
        <div className="mb-16 max-w-xl">
          <h2 className="eyebrow mb-6">Depoimentos</h2>
          <h3 className="font-display text-4xl md:text-5xl">
            Quem viveu essa transformação.
          </h3>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col bg-background p-10"
            >
              <span className="font-display text-5xl leading-none text-foreground/20">"</span>
              <p className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-foreground/85">
                {t.text}
              </p>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="font-display text-base">{t.name}</p>
                <p className="eyebrow mt-1">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ + Contact ---------- */
function FaqContact() {
  const faqs = [
    {
      q: "O transplante capilar dói?",
      a: "O procedimento é realizado com anestesia local e é muito bem tolerado. A maioria dos pacientes relata desconforto mínimo, apenas no momento da anestesia.",
    },
    {
      q: "Quanto tempo dura o procedimento?",
      a: "Em média entre 6 e 8 horas, dependendo da quantidade de folículos. O paciente vai para casa no mesmo dia.",
    },
    {
      q: "Quando começo a ver os resultados?",
      a: "Os primeiros fios definitivos surgem entre 3 e 4 meses. O resultado consolidado é observado entre 9 e 12 meses.",
    },
    {
      q: "Quanto tempo é a recuperação?",
      a: "Em geral, em 7 a 10 dias o paciente já pode retornar à rotina, com cuidados específicos orientados pela equipe.",
    },
    {
      q: "O resultado é permanente?",
      a: "Sim. Os fios transplantados são geneticamente resistentes à queda, mantendo-se permanentes ao longo da vida.",
    },
  ];
  return (
    <section id="faq" className="bg-stone-soft py-32 md:py-40">
      <div className="container-x grid gap-20 lg:grid-cols-2 lg:gap-32">
        <div>
          <h2 className="eyebrow mb-12">F.A.Q.</h2>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>

          <div id="contato" className="mt-16 border border-border bg-background p-10">
            <p className="eyebrow mb-4">Onde Estamos</p>
            <p className="mb-6 font-display text-2xl leading-snug">
              Maceió — Alagoas
              <br />
              Brasil
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              +55 (82) 99919-9858
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow mb-12">Agende sua Consulta</h2>
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(WHATSAPP_URL, "_blank");
            }}
          >
            <div>
              <label className="eyebrow mb-3 block">Nome Completo</label>
              <input
                type="text"
                required
                className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div>
              <label className="eyebrow mb-3 block">Telefone / WhatsApp</label>
              <input
                type="tel"
                required
                className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div>
              <label className="eyebrow mb-3 block">Interesse</label>
              <select className="w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-foreground">
                <option>Transplante Capilar FUE</option>
                <option>Barba & Sobrancelhas</option>
                <option>Protocolos Médicos</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-foreground py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-background transition hover:bg-foreground/85"
            >
              Enviar Solicitação
            </button>
          </form>

          <div className="mt-10 aspect-[4/3] border border-border bg-background">
            <iframe
              title="Localização da clínica"
              src="https://www.google.com/maps?q=Macei%C3%B3,%20Alagoas&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium md:text-base">{q}</span>
        <span
          className={`text-2xl text-muted-foreground transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "pb-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-12 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="section-dark border-t border-border py-16">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">
            DR. ANDERSON <span className="italic font-normal text-muted-foreground">LIMA</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Restauração capilar de excelência. Precisão cirúrgica, olhar
            artístico, resultados naturais.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5 text-muted-foreground">Contato</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
                +55 (82) 99919-9858
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
                @drandersonlima
              </a>
            </li>
            <li>Maceió — Alagoas, Brasil</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5 text-muted-foreground">Atendimento</p>
          <p className="text-sm text-muted-foreground">
            Segunda a sexta
            <br />
            08h às 18h
          </p>
        </div>
      </div>
      <div className="container-x mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Anderson Lima. Todos os direitos reservados.
        </p>
        <p className="eyebrow text-muted-foreground">CRM • Tricologia</p>
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
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition hover:scale-110"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.78 9.78 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm5.4-7.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1c-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  );
}
