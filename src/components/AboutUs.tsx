import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <a
              href="#"
              className="flex items-center text-[#B68D40] hover:text-[#D6AD60] transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </a>
            <h1 className="text-4xl font-bold text-[#122620] mb-2">About Us</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                DaxiDo Technologies Services Private Limited is revolutionizing transportation with our premium ride-hailing platform. Founded by Naiyaz Faiyaz Ahmed, we are committed to providing safe, reliable, and affordable rides while empowering drivers and connecting communities.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become India's leading ride-hailing platform by 2030, serving millions of riders and drivers across 1000+ cities with cutting-edge technology, exceptional service, and unwavering commitment to safety and sustainability.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Our Values</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Safety First:</strong> Every ride is monitored with real-time tracking and emergency response.<br/>
                <strong>Innovation:</strong> We leverage AWS serverless architecture and IoT technology for seamless experiences.<br/>
                <strong>Community:</strong> We build connections between riders, drivers, and local communities.<br/>
                <strong>Trust:</strong> Transparent pricing, reliable service, and honest communication in everything we do.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Technology Leadership</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform operates on AWS serverless architecture including Lambda functions, DynamoDB, API Gateway, Cognito authentication, IoT Core for real-time tracking, S3 for file storage, and SNS for notifications. We support multiple applications: User App, Driver Onboarding App, Driver App, Admin Web Dashboard, and Admin Mobile App.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Founder</h2>
              <p className="text-gray-700 leading-relaxed">
                Naiyaz Faiyaz Ahmed founded DaxiDo with a vision to transform urban mobility in India. With extensive experience in technology and transportation, he leads our mission to create a safer, more efficient, and more accessible transportation ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              For more information, contact us at{' '}
              <a href="mailto:support@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                support@daxido.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
