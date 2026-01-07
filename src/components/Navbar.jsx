import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            BSE BEAM
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-200 transition">
              Services
            </Link>
            <Link to="/investors" className="hover:text-blue-200 transition">
              Investors
            </Link>
            <Link to="/circulars" className="hover:text-blue-200 transition">
              Circulars
            </Link>
            <Link to="/compliance" className="hover:text-blue-200 transition">
              Compliance
            </Link>
            <Link to="/contact" className="hover:text-blue-200 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
