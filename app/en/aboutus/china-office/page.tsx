export default function ChinaOffice() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            China Office
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your gateway to opportunities in Japan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">About Our China Office</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our China office specializes in identifying and preparing talented 
                professionals for opportunities in Japan. We provide comprehensive 
                support services, from initial consultation to successful placement 
                and beyond.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With deep understanding of both Chinese and Japanese business cultures, 
                we serve as a bridge between talented professionals and Japanese 
                companies seeking to expand their global workforce.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Talent Recruitment</h3>
                  <p className="text-gray-700">
                    We identify and screen talented professionals who are well-suited 
                    for opportunities in Japan, ensuring a perfect match for both 
                    candidates and employers.
                  </p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Cultural Training</h3>
                  <p className="text-gray-700">
                    Our comprehensive cultural training program prepares candidates 
                    for successful integration into Japanese workplace culture.
                  </p>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Language Support</h3>
                  <p className="text-gray-700">
                    We provide Japanese language training and support to help 
                    candidates develop the language skills needed for success in Japan.
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
                    <p className="text-gray-700">
                      Room 1001, Tower A, Beijing International Center<br />
                      Chaoyang District, Beijing, 100022, China
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone:</h3>
                    <p className="text-gray-700">+86 10 8888 8888</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <p className="text-gray-700">china.office@adlva.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours:</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
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
          <h2 className="text-3xl font-bold mb-4">Start Your Journey to Japan</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our China office to explore opportunities in Japan
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