import React, { useState } from 'react';
import { Navbar } from './components/Navbar.js';
import { Section } from './components/Section.js';
import { Icon } from './components/Icons.js';
import { SERVICES, PROJECTS, PRODUCTS, TESTIMONIALS, LOGO_URL, ARTIST_IMAGE_URL } from './constants.js';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-900/30 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/30 blur-[150px] rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
              Gestão de Arte <br />
              <span className="text-gradient italic font-serif">Profissional.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Realizamos o planejamento e a produção completa do seu projeto cultural com foco em leis de incentivo e acessibilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#contact" className="px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-brand-600/20">
                Iniciar meu Projeto
              </a>
              <a href="#products" className="px-10 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-full transition-all">
                Ver Obras
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Section id="services" className="bg-slate-900/30">
          <div className="text-center mb-16">
            <h2 className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white">O que fazemos por você</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-8 glass rounded-3xl hover:border-brand-500/50 transition-all group">
                <div className="w-14 h-14 bg-brand-900/50 text-brand-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon name={s.iconName} size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ARTIST / ABOUT */}
        <Section id="about">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-600/20 blur-2xl rounded-full"></div>
              <img src={ARTIST_IMAGE_URL} alt="Artista Dhai Maús" className="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl border border-white/10" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Dhai Maús</h2>
              <p className="text-xl text-brand-300 italic">"Conectando a essência da arte com a viabilidade técnica."</p>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>O Escritório de Arte & Cultura é liderado por Dhai Maús, artista visual e produtora focada em democratizar o acesso à cultura através de projetos impactantes.</p>
                <p>Com vasta experiência em editais e leis de fomento, garantimos que sua obra encontre o suporte necessário para brilhar no cenário nacional e internacional.</p>
              </div>
              <div className="flex gap-4">
                <a href="https://instagram.com/dhaimaus" target="_blank" className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors">
                  <Icon name="Instagram" /> @dhaimaus
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* PRODUCTS (BOOKS) */}
        <Section id="products" className="bg-slate-900/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Livraria & Obras</h2>
            <p className="text-slate-400">Publicações e produções exclusivas do nosso selo.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {PRODUCTS.map(prod => (
              <div key={prod.id} className="group glass rounded-[2.5rem] overflow-hidden flex flex-col items-center p-8 text-center transition-all hover:-translate-y-2">
                <div className="w-full aspect-[3/4] mb-8 overflow-hidden rounded-2xl border border-white/5">
                  <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <span className="text-brand-400 font-bold text-xs uppercase mb-2">{prod.type}</span>
                <h4 className="text-2xl font-bold text-white mb-8 min-h-[4rem]">{prod.title}</h4>
                <a 
                  href={prod.link} 
                  target="_blank" 
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  {prod.link.includes('wa.me') ? 'Quero comprar' : 'Saber mais'} <Icon name="ExternalLink" size={18} />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Vamos conversar?</h2>
            <p className="text-slate-400 mb-12 max-w-md mx-auto">Conte-nos sobre seu projeto cultural ou artístico. Responderemos o mais breve possível.</p>
            
            {formStatus === 'success' ? (
              <div className="p-8 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20">
                <Icon name="CheckCircle2" size={48} className="mx-auto mb-4" />
                <h4 className="font-bold text-xl">Mensagem enviada com sucesso!</h4>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="grid gap-6 max-w-lg mx-auto">
                <input required type="text" placeholder="Seu Nome" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-500" />
                <input required type="email" placeholder="E-mail" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-500" />
                <textarea required rows={4} placeholder="Sobre seu projeto..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-500"></textarea>
                <button disabled={formStatus === 'sending'} type="submit" className="w-full py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl transition-all disabled:opacity-50">
                  {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </Section>
      </main>

      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <img src={LOGO_URL} alt="Logo" className="h-20 mx-auto mb-8 object-contain" />
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">Escritório de Arte & Cultura: Transparência e profissionalismo na gestão cultural.</p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://instagram.com/dhaimaus" className="text-slate-400 hover:text-brand-400 transition-colors"><Icon name="Instagram" /></a>
            <a href="mailto:contato@escritorio.art.br" className="text-slate-400 hover:text-brand-400 transition-colors"><Icon name="Mail" /></a>
          </div>
          <div className="text-xs text-slate-700 font-bold uppercase tracking-widest pt-8 border-t border-white/5">
            &copy; {new Date().getFullYear()} Escritório de Arte & Cultura.
          </div>
        </div>
      </footer>
    </div>
  );
}