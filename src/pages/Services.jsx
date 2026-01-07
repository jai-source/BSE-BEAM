function Services() {
  const services = [
    {
      title: "Consulting Services",
      description: "Strategic guidance and expert advice to help your business thrive",
      icon: "💡"
    },
    {
      title: "Financial Solutions",
      description: "Comprehensive financial planning and management services",
      icon: "💰"
    },
    {
      title: "Compliance Management",
      description: "Ensuring your business meets all regulatory requirements",
      icon: "📋"
    },
    {
      title: "Technology Integration",
      description: "Modern tech solutions to streamline your operations",
      icon: "🔧"
    },
    {
      title: "Market Analysis",
      description: "In-depth insights to make informed business decisions",
      icon: "📊"
    },
    {
      title: "Risk Management",
      description: "Identifying and mitigating business risks effectively",
      icon: "🛡️"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        We offer a comprehensive range of services designed to meet your business needs
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
