export default function USOffice() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            US Office
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Our global headquarters in the United States
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">About Our US Office</h2>
              <p className="text-lg text-gray-700 mb-4">
                Located in the heart of innovation, our US office serves as the global 
                headquarters for ADLVA. From here, we coordinate our international 
                operations and develop strategic partnerships with companies worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of experienced professionals works tirelessly to identify 
                opportunities and create connections that benefit both talent seekers 
                and companies looking to expand their global presence.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Strategic Consulting</h3>
                  <p className="text-gray-700">
                    We provide strategic guidance to companies looking to expand their 
                    presence in Japan or access global talent pools.
                  </p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Global Partnerships</h3>
                  <p className="text-gray-700">
                    We foster relationships with international organizations to create 
                    opportunities for cross-cultural exchange and business growth.
                  </p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Market Research</h3>
                  <p className="text-gray-700">
                    Our team conducts comprehensive market research to identify trends 
                    and opportunities in the global talent market.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Address:</h3>
                    <p className="text-gray-700">123 Innovation Drive, Suite 100<br />Silicon Valley, CA 94025</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone:</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <p className="text-gray-700">us.office@adlva.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours:</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our US office to explore opportunities
          </p>
          <a
            href="/en/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
} 