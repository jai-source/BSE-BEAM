function Compliance() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Compliance</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to Compliance</h2>
        <p className="text-gray-700 mb-4">
          At BSE BEAM, we maintain the highest standards of regulatory compliance and
          corporate governance. Our comprehensive compliance framework ensures that we
          meet all statutory and regulatory requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Regulatory Framework</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Securities and Exchange Compliance</li>
            <li>✓ Data Protection & Privacy Laws</li>
            <li>✓ Anti-Money Laundering (AML)</li>
            <li>✓ Know Your Customer (KYC)</li>
            <li>✓ Corporate Governance Standards</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-600">Certifications</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ ISO 9001:2015 Certified</li>
            <li>✓ ISO 27001 Information Security</li>
            <li>✓ SOC 2 Type II Compliant</li>
            <li>✓ GDPR Compliant</li>
            <li>✓ Industry Best Practices</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-xl font-semibold mb-4">Compliance Documents</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-2">📄</div>
            <div className="font-semibold">Code of Conduct</div>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-2">📋</div>
            <div className="font-semibold">Compliance Policy</div>
          </button>
          <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-semibold">Privacy Policy</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Compliance
