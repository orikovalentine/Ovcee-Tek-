import { motion } from 'motion/react';
import { 
  Book, 
  MapPin, 
  Search, 
  Compass, 
  Globe, 
  Navigation, 
  BookOpen, 
  Star, 
  ChevronRight, 
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Library,
  Mail,
  Zap,
  Quote
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// --- Navigation ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Explore', href: '#explore' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary-navy shadow-xl py-4' : 'bg-transparent py-6'} border-b border-accent-gold/20`}>
      <div className="container mx-auto px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent-gold flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 transition-transform">
            <Book className="w-6 h-6 text-primary-navy" />
          </div>
          <span className="text-2xl font-display font-bold text-accent-gold tracking-tight">OVCEE TEK</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-text-offwhite/80 hover:text-accent-gold font-sans text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-gold !py-2 !px-6 text-sm">
            Find a Bookstore
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-offwhite"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5 pt-px">
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-primary-navy border-t border-accent-gold/20 overflow-hidden"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-display text-text-offwhite hover:text-accent-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-gold mt-4">Find a Bookstore</button>
        </div>
      </motion.div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const stats = [
    { label: 'Countries', value: 120, suffix: '+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Bookstores', value: 8400, suffix: '+', icon: <Library className="w-5 h-5" /> },
    { label: 'Reader Reviews', value: 200, suffix: 'K+', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-texture">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none cartographic-grid"></div>
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-lines"></div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-3 py-1 border border-accent-gold/40 text-accent-gold text-[10px] uppercase tracking-[0.3em] rounded-sm mb-6">
              Every Bookstore. Every City. Every Story.
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-huge mb-8 text-text-offwhite italic"
            >
              Discover the <span className="text-accent-gold block">Global Home</span> of the Written Word.
            </motion.h2>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-offwhite/70 max-w-lg mb-10 leading-relaxed font-serif"
          >
            From Tokyo's narrow alleys to Paris' historic boulevards—we curate the world's most breathtaking literary destinations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-20"
          >
            <button className="btn-primary-bold">
              EXPLORE BOOKSTORES <span>→</span>
            </button>
            <button className="btn-secondary-bold">
              HOW IT WORKS
            </button>
          </motion.div>
          </div>

          {/* Featured Card Stack (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-span-12 lg:col-span-12 xl:col-span-5 flex flex-col gap-8 items-center lg:items-start"
          >
            <div className="rotated-card-wrapper rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
              <div className="rotated-card-inner">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent-gold/20 to-primary-navy bg-cover bg-center mb-6 border border-ink-dark/10 overflow-hidden rounded-sm relative group">
                  <div className="absolute inset-0 bg-ink-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-accent-gold text-primary-navy px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">View Store</button>
                  </div>
                  <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800" alt="Bookstore" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-end border-t border-accent-gold/10 pt-4">
                  <div>
                    <h3 className="text-2xl font-display font-medium italic text-text-offwhite">El Ateneo Grand Splendid</h3>
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent-gold/60 mt-1">Buenos Aires, AR</p>
                  </div>
                  <div className="text-accent-gold text-3xl font-display font-bold italic opacity-30">#01</div>
                </div>
              </div>
            </div>

            {/* Quick Search Overlay */}
            <div className="bg-primary-navy/80 backdrop-blur-md border border-accent-gold/30 p-6 rounded-sm w-full max-w-sm -mt-20 lg:-mt-12 relative z-20 shadow-2xl ml-0 lg:ml-12">
               <p className="text-[10px] uppercase tracking-[0.3em] text-accent-gold mb-4 font-bold">Quick Destination Search</p>
               <div className="flex items-center gap-3 border-b border-accent-gold/30 pb-2 group focus-within:border-accent-gold transition-colors">
                  <MapPin className="w-4 h-4 text-accent-gold/50" />
                  <input type="text" placeholder="Enter city or shop name..." className="bg-transparent py-1 flex-grow outline-none text-sm placeholder:text-text-offwhite/20 text-text-offwhite font-sans" />
                  <Search className="w-4 h-4 text-accent-gold cursor-pointer hover:scale-110 transition-transform" />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-accent-gold/20 pt-12 gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-12 lg:gap-20">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-display text-accent-gold mb-2 italic">
                  <CountUp end={stat.value} />{stat.suffix}
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-text-offwhite/40 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end max-w-xs text-center md:text-right">
            <p className="text-xs italic text-text-offwhite/40 mb-3 leading-relaxed">
              "The definitive atlas for the wandering bibliophile, capturing the soul of every shelf."
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold italic">— Literary Gazette</p>
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" className="fill-accent-gold">
          <path d="M100 0 L100 100 L0 100 Q 50 50 100 0 Z" />
        </svg>
      </div>
    </section>
  );
};

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime || 20); // Fallback to 20ms
    
    return () => clearInterval(timer);
  }, [end]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
};

// --- Search Bar ---
const SearchBar = () => {
  return (
    <section id="explore" className="relative z-20 -mt-16 px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-secondary-cream p-10 md:p-14 rounded-sm shadow-2xl bg-texture border border-accent-gold/20">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-medium italic text-ink-dark mb-4 tracking-tight">Search the Global Stacks</h2>
            <div className="w-20 h-0.5 bg-accent-gold/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink-dark/40 px-1">Location</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-gold group-focus-within:scale-110 transition-transform" />
                <input 
                  type="text" 
                  placeholder="e.g. Paris, Tokyo..." 
                  className="w-full bg-white border border-ink-dark/10 rounded-sm py-4 pl-12 pr-4 text-ink-dark focus:outline-none focus:border-accent-gold transition-all font-sans text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink-dark/40 px-1">Type of Store</label>
              <div className="relative group">
                <Library className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-gold group-focus-within:scale-110 transition-transform" />
                <select className="w-full bg-white border border-ink-dark/10 rounded-sm py-4 pl-12 pr-4 text-ink-dark focus:outline-none focus:border-accent-gold transition-all font-sans text-sm appearance-none shadow-sm cursor-pointer">
                  <option>All Specialist Stores</option>
                  <option>Rare & Antiquarian</option>
                  <option>Independent Indie</option>
                  <option>Children's Literature</option>
                  <option>Late Night & 24h</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">▼</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink-dark/40 px-1">Main Language</label>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-gold group-focus-within:scale-110 transition-transform" />
                <select className="w-full bg-white border border-ink-dark/10 rounded-sm py-4 pl-12 pr-4 text-ink-dark focus:outline-none focus:border-accent-gold transition-all font-sans text-sm appearance-none shadow-sm cursor-pointer">
                  <option>Any Language</option>
                  <option>English</option>
                  <option>French</option>
                  <option>Japanese</option>
                  <option>Spanish</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">▼</div>
              </div>
            </div>

            <div className="flex items-end">
              <button className="bg-accent-gold text-primary-navy w-full flex items-center justify-center gap-3 py-4 rounded-sm font-sans font-bold uppercase tracking-widest text-xs hover:bg-ink-dark hover:text-white transition-all shadow-lg active:scale-95 group">
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> Start Search
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-ink-dark/5">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink-dark/30">Trending Destinations:</span>
            {['Paris', 'Tokyo', 'London', 'New York', 'Porto', 'Buenos Aires'].map(tag => (
              <button key={tag} className="text-sm font-display italic text-ink-dark/70 hover:text-accent-gold transition-colors flex items-center gap-1 group">
                {tag} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Destinations ---
const Destinations = () => {
  const cities = [
    { name: 'Paris', flag: '🇫🇷', count: 124, color: 'from-blue-900/60 to-red-900/60', desc: 'The city of infinite bouquinistes and literary cafes.' },
    { name: 'Tokyo', flag: '🗾', count: 89, color: 'from-red-900/60 to-white/20', desc: 'Hidden gems in Jimbocho, the world\'s largest book town.' },
    { name: 'London', flag: '🇬🇧', count: 212, color: 'from-indigo-900/60 to-red-800/60', desc: 'Home to majestic chains and cozy Dickensian basements.' },
    { name: 'New York', flag: '🇺🇸', count: 156, color: 'from-blue-800/60 to-gray-700/60', desc: 'The literary heart of America, where every corner has a story.' },
    { name: 'Buenos Aires', flag: '🇦🇷', count: 78, color: 'from-cyan-700/60 to-white/40', desc: 'Stunning converted theaters and late-night reading culture.' },
    { name: 'Amsterdam', flag: '🇳🇱', count: 64, color: 'from-orange-800/60 to-blue-800/60', desc: 'Floating bookshops and multi-lingual antiquarian troves.' },
  ];

  return (
    <section id="destinations" className="py-32 bg-primary-navy relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-grid"></div>
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-label text-accent-gold mb-4 block">World Atlas</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium italic text-text-offwhite tracking-tight leading-[0.9]">Iconic Cities for <br /> <span className="text-accent-gold">Bibliophiles</span></h2>
          </div>
          <button className="btn-secondary-bold !py-3 !px-6 text-[10px]">View All Countries</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cities.map((city, idx) => (
            <motion.div 
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#F5ECD7] p-1 shadow-xl transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                <div className="bg-primary-navy p-6 overflow-hidden relative">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${city.color} rounded-sm overflow-hidden mb-6 relative`}>
                    <div className="absolute inset-0 bg-ink-dark/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-display font-medium italic text-text-offwhite">{city.name} {city.flag}</h3>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent-gold border border-accent-gold/20 px-2 py-1 rounded-sm">
                      {city.count} STORES
                    </div>
                  </div>
                  <p className="text-text-offwhite/50 text-sm italic font-serif leading-relaxed mb-6 opacity-80 line-clamp-2">
                    {city.desc}
                  </p>
                  <button className="flex items-center gap-2 text-accent-gold text-[10px] uppercase font-bold tracking-[0.2em] group-hover:gap-4 transition-all">
                    Explore Atlas <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- How It Works ---
const HowItWorks = () => {
  const steps = [
    { number: '01', title: 'Search', desc: 'Enter a city, country, or neighborhood you\'re visiting.', icon: <Search className="w-6 h-6" /> },
    { number: '02', title: 'Discover', desc: 'Browse curated bookstores with photos, hours, and insider tips.', icon: <Compass className="w-6 h-6" /> },
    { number: '03', title: 'Navigate', desc: 'Get precise directions and contact info in one click.', icon: <Navigation className="w-6 h-6" /> },
    { number: '04', title: 'Explore', desc: 'Visit, shop, and share your experience with the community.', icon: <BookOpen className="w-6 h-6" /> },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-secondary-cream bg-texture relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/10"></div>
      <div className="container mx-auto px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-label text-accent-gold mb-4 block">The Methodology</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium italic text-ink-dark leading-[0.95]">Your Literary Journey <br /> <span className="text-accent-gold">Simplified.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="text-[120px] font-display font-extrabold text-accent-gold/10 absolute -top-24 -left-4 select-none pointer-events-none">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-white shadow-xl rounded-sm flex items-center justify-center text-accent-gold mb-8 relative z-10 border border-accent-gold/20 rotate-3 glow-hover">
                {step.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-ink-dark mb-4 italic">{step.title}</h3>
              <p className="text-ink-dark/60 text-sm leading-relaxed font-serif italic">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Bookstores Carousel ---
const BookstoreCarousel = () => {
  const stores = [
    { name: 'El Ateneo Grand Splendid', location: 'Buenos Aires, Argentina', type: 'Converted Theater', rating: 5.0, color: 'from-amber-900 to-red-950' },
    { name: 'Shakespeare and Company', location: 'Paris, France', type: 'Cultural Landmark', rating: 4.9, color: 'from-green-900 to-emerald-950' },
    { name: 'Livraria Lello', location: 'Porto, Portugal', type: 'Neo-Gothic Palace', rating: 5.0, color: 'from-red-900 to-rose-950' },
    { name: 'Strand Bookstore', location: 'New York, USA', type: 'Iconic Indie', rating: 4.8, color: 'from-blue-900 to-indigo-950' },
    { name: 'Kinokuniya', location: 'Tokyo, Japan', type: 'Modern Multi-Floor', rating: 4.7, color: 'from-gray-800 to-slate-950' },
  ];

  return (
    <section className="py-32 bg-ink-dark text-text-offwhite overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-lines"></div>
      
      <div className="container mx-auto px-12 mb-20 flex flex-col md:flex-row items-end justify-between gap-10 relative z-10">
        <div className="max-w-2xl">
          <span className="text-label text-accent-gold mb-4 block">The Essentials</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium italic mb-6 leading-[0.95]">Bookstores Worth <br /> <span className="text-accent-gold">Traveling For.</span></h2>
          <p className="text-text-offwhite/40 font-serif italic text-lg">Hand-picked legends that defined the literary map of the century.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 border border-white/10 p-4 rounded-sm hover:bg-accent-gold hover:text-primary-navy transition-all"><ArrowRight className="w-6 h-6 rotate-180" /></button>
          <button className="bg-white/5 border border-white/10 p-4 rounded-sm hover:bg-accent-gold hover:text-primary-navy transition-all"><ArrowRight className="w-6 h-6" /></button>
        </div>
      </div>

      <div className="flex gap-12 overflow-x-auto pb-16 px-12 no-scrollbar snap-x relative z-10">
        {stores.map((store) => (
          <div key={store.name} className="min-w-[340px] md:min-w-[480px] snap-center rotated-card-wrapper">
            <div className="bg-primary-navy border border-white/5 h-[560px] flex flex-col relative group">
              <div className={`h-2/3 bg-gradient-to-br ${store.color} p-10 flex flex-col justify-end bg-texture relative overflow-hidden`}>
                <div className="bg-accent-gold/20 backdrop-blur-md border border-accent-gold/30 px-3 py-1 rounded-sm text-[10px] font-sans font-bold uppercase tracking-[0.2em] w-fit mb-6 text-accent-gold">
                  {store.type}
                </div>
                <h3 className="text-4xl font-display font-medium italic leading-tight text-text-offwhite tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {store.name}
                </h3>
                <div className="absolute top-10 right-10 text-white/5 text-9xl font-display font-bold select-none italic tracking-tighter">BKS</div>
              </div>
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-text-offwhite/40">
                    <MapPin className="w-4 h-4 text-accent-gold" />
                    <span className="text-[10px] font-sans uppercase font-bold tracking-widest">{store.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-gold">
                    <Star className="w-4 h-4 fill-accent-gold" />
                    <span className="text-lg font-display italic font-bold">{store.rating}</span>
                  </div>
                </div>
                <p className="text-text-offwhite/30 text-sm mb-8 leading-relaxed italic font-serif opacity-80">
                  "A sacred space for the wandering mind, preserving the timeless magic of the ink."
                </p>
                <button className="btn-secondary-bold !py-3 !px-8 text-[10px] w-fit">View Dossier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Map Teaser ---
const MapTeaser = () => {
  return (
    <section className="py-32 bg-primary-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-lines"></div>
      <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-label text-accent-gold mb-4 block">The Network</span>
          <h2 className="text-5xl md:text-7xl font-display font-medium italic text-text-offwhite leading-[0.9] mb-10">
            Bookstores Are Everywhere — <br />
            <span className="text-accent-gold block mt-2">So Are You.</span>
          </h2>
          <p className="text-text-offwhite/60 text-lg mb-12 leading-relaxed max-w-lg font-serif italic">
            Our interactive database spans seven continents, documenting the enduring legacy of print in a digital age.
          </p>
          <button className="btn-primary-bold flex items-center gap-3">
            EXPLORE THE FULL MAP <Globe className="w-4 h-4" />
          </button>
        </motion.div>
        
        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white shadow-2xl p-4 rotate-1 group hover:rotate-0 transition-transform duration-700">
           <div className="w-full h-full bg-ink-dark border border-ink-dark/10 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none cartographic-grid"></div>
              <svg viewBox="0 0 800 800" className="w-[120%] h-[120%] text-accent-gold/20 -translate-x-10 translate-y-10">
                <path d="M150,150 Q200,100 250,150 T350,150 Q450,200 550,150 T750,150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                <motion.circle animate={{ r: [6, 14, 6], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} cx="200" cy="200" r="10" className="fill-highlight-rose" />
                <motion.circle animate={{ r: [6, 14, 6], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} cx="500" cy="400" r="10" className="fill-accent-gold" />
                <motion.circle animate={{ r: [6, 14, 6], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} cx="350" cy="650" r="10" className="fill-accent-gold" />
              </svg>
              <div className="absolute top-8 right-8 text-[10px] font-sans font-bold uppercase tracking-widest text-accent-gold bg-primary-navy px-3 py-1">Live Global Feed</div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
const Community = () => {
  const testimonials = [
    { name: 'Elena V.', city: 'Berlin', quote: 'Ovcee Tek turned my trip to Porto into a literary treasure hunt through the ages.', initials: 'EV', bg: 'bg-highlight-rose' },
    { name: 'Marcus L.', city: 'New York', quote: 'The attention to detail for rare and antiquarian shops is genuinely world-class.', initials: 'ML', bg: 'bg-primary-navy' },
    { name: 'Sarah K.', city: 'Sydney', quote: 'Simple, beautiful, and deeply practical. It brings the soul of the shop to my screen.', initials: 'SK', bg: 'bg-accent-gold' },
  ];

  return (
    <section id="community" className="py-32 bg-secondary-cream bg-texture">
      <div className="container mx-auto px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-label text-accent-gold mb-4 block">The Community</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium italic text-ink-dark leading-[0.95]">From Our Global <br /> <span className="text-accent-gold">Reader Collective.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }} 
              className="bg-white p-10 shadow-xl border border-ink-dark/5 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-8 text-accent-gold opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <p className="text-ink-dark/80 italic text-xl leading-relaxed mb-12 font-serif relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-14 h-14 rounded-full ${t.bg} flex items-center justify-center text-white font-sans font-bold shadow-lg border-4 border-white`}>{t.initials}</div>
                <div>
                  <div className="font-display font-bold text-ink-dark text-lg italic">{t.name}</div>
                  <div className="text-[10px] font-sans text-ink-dark/40 uppercase tracking-[0.2em] font-bold">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Blog ---
const BlogPreview = () => {
  const posts = [
    { title: '48 Hours in Porto: A Bookshop Pilgrimage', category: 'City Guide', color: 'from-blue-900 to-indigo-800' },
    { title: 'The 10 Most Beautiful Bookstores You Must Visit', category: 'The List', color: 'from-accent-gold to-orange-900' },
    { title: 'Tokyo\'s Tiny Bookshops: A Global Phenomenon', category: 'Dispatch', color: 'from-highlight-rose to-rose-900' },
  ];
  return (
    <section className="py-32 bg-primary-navy relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-grid"></div>
      <div className="container mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-xl">
             <span className="text-label text-accent-gold mb-4 block">The Gazette</span>
             <h2 className="text-5xl md:text-7xl font-display font-medium italic text-text-offwhite leading-[0.95]">Stories From <br /> <span className="text-accent-gold">The Stacks.</span></h2>
          </div>
          <button className="btn-secondary-bold flex items-center gap-3">READ THE ARCHIVE <ArrowRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {posts.map((post, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group cursor-pointer">
              <div className="bg-[#F5ECD7] p-1 shadow-2xl mb-8 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]">
                <div className={`h-80 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-ink-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6 flex flex-col items-start gap-2">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-sm text-[10px] font-sans font-bold text-white uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-display font-medium italic text-text-offwhite mb-4 group-hover:text-accent-gold transition-colors leading-tight">{post.title}</h3>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent-gold opacity-60 flex items-center gap-2 group-hover:gap-4 transition-all">READ ARTICLE <ArrowRight className="w-3 h-3" /></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Owners ---
const ForOwners = () => {
  return (
    <section className="py-32 bg-secondary-cream bg-texture border-t border-accent-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-lines"></div>
      <div className="container mx-auto px-12 relative z-10">
        <div className="bg-[#1a1a2e] p-1 shadow-2xl relative">
          <div className="bg-primary-navy p-12 md:p-24 bg-texture border border-accent-gold/10 overflow-hidden flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left relative z-10">
              <span className="text-label text-accent-gold mb-6 block">Store Registry</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium italic text-text-offwhite mb-10 leading-[0.95]">
                Own a Bookstore? <br />
                <span className="text-accent-gold">List It With Us.</span>
              </h2>
              <div className="space-y-6 mb-12">
                 <div className="flex items-center gap-4 text-text-offwhite/60 font-serif italic text-lg">
                    <div className="w-6 h-px bg-accent-gold"></div> Reach readers from around the globe
                 </div>
                 <div className="flex items-center gap-4 text-text-offwhite/60 font-serif italic text-lg">
                    <div className="w-6 h-px bg-accent-gold"></div> Secure a premier place in our atlas
                 </div>
                 <div className="flex items-center gap-4 text-text-offwhite/60 font-serif italic text-lg">
                    <div className="w-6 h-px bg-accent-gold"></div> Connect with a vetted local community
                 </div>
              </div>
              <button className="btn-primary-bold">REGISTER YOUR STORE</button>
            </div>
            <div className="flex-1 relative aspect-square lg:aspect-auto h-full w-full bg-white/5 border border-white/10 flex items-center justify-center group">
               <Library className="w-32 h-32 text-accent-gold opacity-5 group-hover:opacity-20 transition-all duration-1000 rotate-12 group-hover:rotate-0" />
               <div className="absolute inset-4 border border-accent-gold/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Newsletter ---
const Newsletter = () => {
  return (
    <section className="py-24 bg-accent-gold text-ink-dark bg-texture relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none cartographic-lines"></div>
      <div className="container mx-auto px-12 text-center relative z-10">
        <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.5em] mb-4 block text-primary-navy/40">Dispatch Subscription</span>
        <h2 className="text-5xl md:text-7xl font-display font-medium italic mb-10 tracking-tight leading-[0.9]">Never Miss a <br /> <span className="text-white">Literary Destination.</span></h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <input type="email" placeholder="Email Address..." className="flex-grow bg-white border border-primary-navy/10 rounded-sm px-10 py-5 focus:outline-none focus:ring-2 focus:ring-primary-navy text-primary-navy font-sans font-medium text-lg shadow-2xl" />
          <button className="bg-primary-navy text-white px-12 py-5 rounded-sm font-sans font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-2xl active:scale-95">Enroll Now</button>
        </div>
        <p className="mt-8 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary-navy/30 italic">No marketing clutter. Only curated stories. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer id="footer" className="bg-primary-navy pt-32 pb-16 text-text-offwhite relative overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none cartographic-grid"></div>
      <div className="container mx-auto px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-12 h-12 bg-accent-gold flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 transition-all">
                <Book className="w-7 h-7 text-primary-navy" />
              </div>
              <span className="text-3xl font-display font-bold text-accent-gold tracking-tight">OVCEE TEK</span>
            </div>
            <p className="text-lg font-serif italic text-text-offwhite/40 leading-relaxed mb-10 max-w-md">
              The world's definitive guide to the temples of literature, documenting every shelf, across every city, through every story.
            </p>
            <div className="flex gap-6">
              <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors cursor-pointer"><Instagram className="w-4 h-4" /></div>
              <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors cursor-pointer"><Twitter className="w-4 h-4" /></div>
              <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors cursor-pointer"><Facebook className="w-4 h-4" /></div>
            </div>
          </div>
          <div className="lg:col-span-2 text-left">
            <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-accent-gold mb-10">Directory</h4>
            <ul className="space-y-6 text-sm font-sans font-medium text-text-offwhite/60">
              <li className="hover:text-accent-gold cursor-pointer transition-colors">Top Cities</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">All Countries</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">Specialist Stores</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">New Entries</li>
            </ul>
          </div>
          <div className="lg:col-span-2 text-left">
            <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-accent-gold mb-10">Company</h4>
            <ul className="space-y-6 text-sm font-sans font-medium text-text-offwhite/60">
              <li className="hover:text-accent-gold cursor-pointer transition-colors">Our Ethos</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">The Gazette</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">Press Inquiries</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>
          <div className="lg:col-span-3 text-left">
             <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-accent-gold mb-10">Correspond</h4>
             <ul className="space-y-6 text-sm font-sans font-medium text-text-offwhite/60">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-accent-gold" /> info@ovceetek.com</li>
              <li className="flex items-center gap-3 italic font-serif">Avenue des Livres, 75000 Paris</li>
              <li className="pt-6">
                 <button className="btn-secondary-bold !py-3 w-full text-[10px]">CONTACT BUREAU</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-text-offwhite/20">
           <div>© 2025 Ovcee Tek Global Registry. All rights reserved.</div>
           <div className="flex gap-10">
              <span className="hover:text-accent-gold cursor-pointer transition-colors">Privacy Codex</span>
              <span className="hover:text-accent-gold cursor-pointer transition-colors">Terms of Use</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-primary-navy">
      <Navbar />
      <Hero />
      <SearchBar />
      <Destinations />
      <HowItWorks />
      <BookstoreCarousel />
      <MapTeaser />
      <Community />
      <BlogPreview />
      <ForOwners />
      <Newsletter />
      <Footer />
    </div>
  );
}
