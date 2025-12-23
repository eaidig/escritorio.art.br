import React, { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { SERVICES, PROJECTS, PRODUCTS, LOGO_URL, ARTIST_IMAGE_URL, NAV_LINKS } from './constants.js';

// --- Internal Components for Simplicity ---

const Icon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const IconComponent = (Lucide as any)[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
};

// Fixed Section component: made children optional to satisfy strict JSX prop checking in some environments
const Section = ({ id, children, className = "" }: { id: string, children?: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
        </a>
        
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-slate-300 hover:text-brand-400 transition-colors uppercase tracking-widest">
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          <Icon name={isMenuOpen ? 'X' : 'Menu'} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-white">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- Main Application ---

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-brand-500/30">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-900/20 to-transparent"></div>
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="relative z-10 text-center px-6">
            <div className="inline-block px-4 py-1 rounded-full glass mb-8 text-brand-400 text-[10px] font-black tracking-[0.3em] uppercase">
              Escritório de Arte & Cultura
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              A Arte de <br />
              <span className="text-gradient italic">Realizar.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Transformamos sonhos criativos em estruturas sólidas. Consultoria técnica, leis de incentivo e produção de alto impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-brand-600/20">
                Iniciar Projeto
              </a>
              <a href="#services" className="px-10 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-full transition-all">
                Conhecer Serviços
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Section id="services" className="bg-slate-900/30">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Nossa Expertise</h2>
            <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <div key={s.id} className="p-8 glass rounded-[2rem] hover:border-brand-500/50 transition-all group">
                <div className="w-14 h-14 bg-brand-900/50 text-brand-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon name={s.iconName} size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-600/20 blur-2xl rounded-full"></div>
              <img src={ARTIST_IMAGE_URL} alt="Dhai Maús" className="relative rounded-[2.5rem] w-full aspect-[4/5] object-cover shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Dhai Maús</h2>
              <p className="text-2xl text-brand-300 italic">"Gestão Cultural com Alma Artística."</p>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>O Escritório de Arte & Cultura nasceu da necessidade de unir o rigor técnico da gestão pública à sensibilidade da criação artística.</p>
                <p>Sob a direção de Dhai Maús, especialista em leis de incentivo e acessibilidade, oferecemos soluções completas para que o artista foque no que realmente importa: sua obra.</p>
              </div>
              <a href="https://instagram.com/dhaimaus" target="_blank" className="inline-flex items-center gap-3 text-brand-400 font-bold hover:text-white transition-colors">
                <Icon name="Instagram" /> Seguir no Instagram
              </a>
            </div>
          </div>
        </Section>

        {/* PRODUCTS */}
        <Section id="products" className="bg-slate-900/40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Livraria</h2>
            <p className="text-slate-400">Obras selecionadas do nosso catálogo de produção.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {PRODUCTS.map(prod => (
              <div key={prod.id} className="group glass p-8 rounded-[3rem] text-center flex flex-col">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-8 shadow-2xl">
                  <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
                <span className="text-brand-400 font-black text-[10px] uppercase tracking-widest mb-2">{prod.type}</span>
                <h4 className="text-2xl font-bold text-white mb-8 min-h-[4rem]">{prod.title}</h4>
                <a 
                  href={prod.link} 
                  target="_blank" 
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  {prod.link.includes('wa.me') ? 'Comprar no WhatsApp' : 'Comprar agora'} <Icon name="ExternalLink" size={18} />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Contate-nos</h2>
              <p className="text-slate-400">Pronto para dar o próximo passo na sua carreira cultural?</p>
            </div>

            {formStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 p-10 rounded-3xl text-center">
                <Icon name="CheckCircle2" className="text-green-500 mx-auto mb-4" size={48} />
                <h4 className="text-white font-bold text-2xl">Mensagem Enviada!</h4>
                <p className="text-slate-400 mt-2">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 max-w-lg mx-auto">
                <input required type="text" placeholder="Seu Nome Completo" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-brand-500 outline-none transition-all" />
                <input required type="email" placeholder="Seu melhor e-mail" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-brand-500 outline-none transition-all" />
                <textarea required rows={4} placeholder="Conte-nos sobre seu projeto..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-brand-500 outline-none transition-all"></textarea>
                <button disabled={formStatus === 'sending'} type="submit" className="w-full py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-600/20 transition-all disabled:opacity-50">
                  {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </Section>
      </main>

      <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 text-center">
        <img src={LOGO_URL} alt="Logo" className="h-16 mx-auto mb-8 opacity-80" />
        <div className="flex justify-center gap-8 mb-12">
          <a href="https://instagram.com/dhaimaus" className="text-slate-500 hover:text-white transition-all"><Icon name="Instagram" /></a>
          <a href="mailto:contato@escritorio.art.br" className="text-slate-500 hover:text-white transition-all"><Icon name="Mail" /></a>
        </div>
        <p className="text-slate-600 text-xs font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Escritório de Arte & Cultura. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
