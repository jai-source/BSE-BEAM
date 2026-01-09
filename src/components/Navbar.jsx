import logo from "../Assets/logoo.png";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-12 py-6 flex items-center justify-between text-white">
      {/* LOGO */}
      <img
        src={logo}
        alt="BSE BEAM Logo"
        className="h-16 w-auto pt-0"
      />

      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-10 text-sm text-white/80">
        <li className="hover:text-white cursor-pointer transition"><Link to="/about">About</Link></li>
        <li className="hover:text-white cursor-pointer transition"><Link to="/services">Services</Link></li>
        <li className="hover:text-white cursor-pointer transition"><Link to="/investors">Investors</Link></li>
        <li className="hover:text-white cursor-pointer transition"><Link to="/circulars">Circulars</Link></li>
        <li className="hover:text-white cursor-pointer transition"><Link to="/compliance">Compliance</Link></li>
        <li className="hover:text-white cursor-pointer transition"><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* ACTIONS */}
      <div className="flex items-center gap-5">
        <button className="bg-white text-[#071b14] px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition">
          Become a Member
        </button>
        <button className="bg-white text-[#071b14] px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition">
          E-Auction Live
        </button>
      </div>
    </nav>
  )
}

export default Navbar

