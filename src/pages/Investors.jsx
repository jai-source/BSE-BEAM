function Investors() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Investor Relations</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome Investors</h2>
        <p className="text-gray-700 mb-4">
          Thank you for your interest in BSE BEAM. We are committed to maintaining
          transparent communication with our shareholders and the investment community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Financial Highlights</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between">
              <span>Revenue Growth:</span>
              <span className="font-semibold text-green-600">+15.2%</span>
            </li>
            <li className="flex justify-between">
              <span>Market Cap:</span>
              <span className="font-semibold">$2.5B</span>
            </li>
            <li className="flex justify-between">
              <span>P/E Ratio:</span>
              <span className="font-semibold">18.5</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">→ Q4 2025 Earnings Report</li>
            <li className="hover:text-blue-600 cursor-pointer">→ Annual Report 2025</li>
            <li className="hover:text-blue-600 cursor-pointer">→ Investor Presentation</li>
            <li className="hover:text-blue-600 cursor-pointer">→ Corporate Governance</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-4">Contact Investor Relations</h3>
        <p className="text-gray-700 mb-2">Email: investors@bsebeam.com</p>
        <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  )
}

export default Investors
