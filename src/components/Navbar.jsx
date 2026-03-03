import logo from "../Assets/logoo.png";
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#EA580C]/95 backdrop-blur-xl shadow-2xl shadow-[#C2410C]/30 py-3' 
          : 'bg-gradient-to-b from-[#1C1917]/30 to-transparent py-6'
      }`}
    >
      <div className="px-6 md:px-12 flex items-center justify-between text-theme-text-primary">
        {/* LOGO */}
        <Link to="/" className="group relative z-10">
          <img
            src={logo}
            alt="BSE BEAM Logo"
            className={`transition-all duration-500 ${
              scrolled ? 'h-12' : 'h-16'
            } w-auto hover:scale-105 transform`}
          />
        </Link>

        {/* NAV LINKS - Desktop */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {[
            { to: '/about', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/investors', label: 'Investors' },
            { to: '/circulars', label: 'Circulars' },
            { to: '/contact', label: 'Contact Us' }
          ].map((item) => (
            <li key={item.to} className="group relative">
              <Link 
                to={item.to}
                className="text-hill-green-dark/80 hover:text-hill-green-dark transition-all duration-300 font-medium tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-hill-green-mid to-sky-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-[#F97316] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-[#C2410C]/30 transition-all duration-300 hover:scale-105 transform">
            Become a Member
          </button>
          
          <button className="hidden md:block relative overflow-hidden bg-gradient-to-r from-[#F97316] to-[#EAB308] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-[#F97316]/50 transition-all duration-300 hover:scale-105 transform group">
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              E-Auction Live
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#EAB308] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F97316]/10 backdrop-blur-md hover:bg-[#F97316]/20 transition-all duration-300 border border-[#F97316]/20"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
          <div className="px-6 pt-4 pb-6 bg-[#C2410C]/95 backdrop-blur-xl border-t border-[#F97316]/10 mt-4">
          <ul className="flex flex-col gap-4">
            {[
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/investors', label: 'Investors' },
              { to: '/circulars', label: 'Circulars' },
              { to: '/contact', label: 'Contact Us' }
            ].map((item) => (
              <li key={item.to}>
                <Link 
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-white transition-all duration-300 font-medium text-lg hover:translate-x-2 transform"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full bg-hill-green text-cloud-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300">
              Become a Member
            </button>
            <button className="w-full bg-gradient-to-r from-sky-blue to-hill-green text-cloud-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                E-Auction Live
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

