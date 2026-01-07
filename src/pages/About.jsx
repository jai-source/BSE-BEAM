function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          BSE BEAM has been at the forefront of providing exceptional business solutions
          for over a decade. Our commitment to excellence and innovation has made us a
          trusted partner for businesses across various industries.
        </p>
        <p className="text-gray-700">
          We believe in building lasting relationships with our clients by understanding
          their unique needs and delivering customized solutions that drive growth and success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading provider of innovative business solutions that empower
            organizations to achieve their full potential and create sustainable value.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="text-gray-700 space-y-2">
            <li>✓ Integrity and transparency</li>
            <li>✓ Client-focused approach</li>
            <li>✓ Innovation and excellence</li>
            <li>✓ Collaborative partnerships</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
