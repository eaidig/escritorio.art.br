import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar.js';
import { Section } from './components/Section.js';
import { Icon } from './components/Icons.js';
import { SERVICES, PROJECTS, PRODUCTS, TESTIMONIALS, LOGO_URL, ARTIST_IMAGE_URL } from './constants.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('Todos');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'Todos') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  const categories = useMemo(() => ['Todos', ...Array.from(new Set(PROJECTS.map(p => p.category)))], []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-900/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-500/30 text-brand-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 shimmer">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Gestão Cultural de Elite
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tighter">
              A Arte de <br />
              <span className="text-gradient italic">Realizar.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Transformamos sonhos criativos em estruturas sólidas. Especialistas em leis de incentivo, captação e produção executiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#contact" className="group relative px-10 py-5 bg-brand-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  Quero iniciar um projeto <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#portfolio" className="px-10 py-5 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all backdrop-blur-md">
                Conheça nosso impacto
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <Icon name="ChevronDown" size={32} />
          </div>
        </section>

        {/* SERVICES */}
        <Section id="services" className="bg-brand-950/50">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Nossa Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Como profissionalizamos seu talento</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="group p-8 glass rounded-[2rem] hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start">
                <div className="w-16 h-16 bg-brand-900/50 text-brand-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-lg">
                  <Icon name={s.iconName} size={30} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ABOUT / ARTIST */}
        <Section id="about" className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-brand-500/10 blur-[100px] rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5] shadow-2xl">
                <img src={ARTIST_IMAGE_URL} alt="Dhai Maús" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
                
                {/* Instagram Floating Link */}
                <a 
                  href="https://instagram.com/dhaimaus" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-10 right-10 z-20 bg-brand-600 hover:bg-brand-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center border border-white/20"
                >
                  <Icon name="Instagram" size={24} />
                </a>

                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-2">Diretora Criativa</p>
                  <h4 className="text-4xl font-serif font-bold text-white">Dhai Maús</h4>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                Visão que <br /> <span className="text-gradient">Transforma.</span>
              </h2>
              <p className="text-xl text-slate-300 font-light italic">"Gestão não é sobre burocracia, é sobre criar as condições para que o extraordinário aconteça."</p>
              <div className="space-y-6 text-slate-400">
                <p>Desde 2018, o Escritório de Arte & Cultura atua como o braço estratégico de artistas e coletivos que buscam escala e profissionalismo. Sob a liderança de Dhai Maús, unimos a sensibilidade artística ao rigor técnico da gestão pública e privada.</p>
                <p>Especialistas em projetos inclusivos, garantimos que a cultura chegue a todos através de consultorias profundas em acessibilidade.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* PORTFOLIO */}
        <Section id="portfolio" className="bg-slate-900/40">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Portfólio</h2>
              <p className="text-slate-400 text-lg">Uma seleção de projetos que definem nossa trajetória de excelência e impacto cultural.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeTab === cat ? 'bg-brand-600 border-brand-500 text-white shadow-lg' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div key={p.id} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/5">
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-400 text-[10px] font-black tracking-[0.3em] uppercase block mb-2">{p.year} • {p.category}</span>
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PRODUCTS */}
        <Section id="products">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Produtos & Obras</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Publicações e obras exclusivas que expandem os horizontes da arte e do bem-estar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {PRODUCTS.map(prod => (
              <div key={prod.id} className="group flex flex-col">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] mb-8 border border-white/10 shadow-2xl">
                  <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    {prod.type}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-brand-400 transition-colors min-h-[4rem]">{prod.title}</h4>
                <a href={prod.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-600 hover:border-brand-500 transition-all font-bold text-sm tracking-widest uppercase">
                  Adquirir Obra <Icon name="ExternalLink" size={16} />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="relative">
          <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl border-white/10">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 bg-brand-600 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Vamos tirar sua ideia do papel?</h3>
                  <p className="text-brand-100 text-lg leading-relaxed mb-12">Entre em contato para uma consultoria inicial. Nossa equipe está pronta para viabilizar seu próximo projeto de impacto.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Icon name="Mail" /></div>
                    <span className="font-medium">contato@escritorio.art.br</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><Icon name="Briefcase" /></div>
                    <span className="font-medium">Atendimento em todo o Brasil</span>
                  </div>
                </div>
              </div>
              
              <div className="p-12 md:p-16 bg-slate-900">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle2" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Mensagem Enviada!</h4>
                    <p className="text-slate-400">Em breve nossa equipe entrará em contato com você.</p>
                    <button onClick={() => setFormStatus('idle')} className="text-brand-400 font-bold hover:underline">Enviar outra mensagem</button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Seu Nome</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Ex: Rodrigo Fontoura" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">E-mail</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="nome@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mensagem</label>
                      <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Conte-nos um pouco sobre sua ideia..."></textarea>
                    </div>
                    <button disabled={formStatus === 'sending'} type="submit" className="w-full py-5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-600/20 disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                      {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'} <Icon name="ArrowRight" size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-brand-950 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5 flex flex-col gap-8">
              <img src={LOGO_URL} alt="Logo" className="h-16 w-auto object-contain self-start opacity-90" />
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Escritório de Arte & Cultura: Excelência em gestão, compromisso com a arte e foco total na democratização do acesso cultural.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Linkedin', 'Facebook'].map(s => (
                  <a key={s} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                    <Icon name={s as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Empresa</h5>
              <ul className="space-y-4">
                {['hero', 'about', 'services', 'portfolio', 'products'].map(l => (
                  <li key={l}><a href={`#${l}`} className="text-slate-500 hover:text-brand-400 transition-colors font-medium capitalize">{l === 'hero' ? 'Início' : l}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Informações Legais</h5>
              <p className="text-slate-500 text-sm mb-6">Atuamos em conformidade com as principais leis de incentivo à cultura do Brasil (Lei Rouanet, Paulo Gustavo, Aldir Blanc).</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-slate-600 text-xs tracking-widest uppercase font-bold">
            <p>&copy; {new Date().getFullYear()} Escritório de Arte & Cultura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}