function Circulars() {
  const circulars = [
    {
      date: "January 8, 2026",
      title: "New Policy Implementation Guidelines",
      category: "Policy"
    },
    {
      date: "December 15, 2025",
      title: "Year-End Compliance Requirements",
      category: "Compliance"
    },
    {
      date: "November 20, 2025",
      title: "Updated Service Terms and Conditions",
      category: "General"
    },
    {
      date: "October 5, 2025",
      title: "Quarterly Business Update",
      category: "Business"
    },
    {
      date: "September 12, 2025",
      title: "Security Enhancement Measures",
      category: "Security"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Circulars & Announcements</h1>
      <p className="text-gray-600 mb-8">
        Stay updated with our latest circulars, notices, and important announcements
      </p>

      <div className="space-y-4">
        {circulars.map((circular, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-gray-500">{circular.date}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {circular.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {circular.title}
                </h3>
                <p className="text-gray-600">Click to view full circular</p>
              </div>
              <div className="text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Circulars
