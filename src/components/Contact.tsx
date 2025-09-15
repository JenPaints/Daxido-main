import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Contact Us</h1>
              <a
                href="#"
                className="flex items-center text-[#B68D40] hover:text-[#D6AD60] transition-colors"
              >
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#B68D40]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#122620] mb-2">General Support</h3>
                  <p className="text-gray-700 mb-2">support@daxido.com</p>
                  <p className="text-gray-600 text-sm">24/7 support available for general inquiries, ride issues, or account problems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#B68D40]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#122620] mb-2">Phone Support</h3>
                  <p className="text-gray-700 mb-2">+91-9876543210</p>
                  <p className="text-gray-600 text-sm">Available 24/7 for urgent matters and immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#B68D40]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#122620] mb-2">Headquarters</h3>
                  <p className="text-gray-700 mb-2">Bangalore, Karnataka, India</p>
                  <p className="text-gray-600 text-sm">DaxiDo Technologies Services Private Limited</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#B68D40]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#122620] mb-2">Business Hours</h3>
                  <p className="text-gray-700 mb-2">24/7 Support</p>
                  <p className="text-gray-600 text-sm">Our support team is available around the clock</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#122620] mb-4">Specialized Contacts</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-800">Business Partnerships</p>
                    <a href="mailto:partnerships@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                      partnerships@daxido.com
                    </a>
                    <p className="text-gray-600 text-sm">Corporate accounts, fleet partnerships, and business collaborations</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-800">Press and Media</p>
                    <a href="mailto:press@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                      press@daxido.com
                    </a>
                    <p className="text-gray-600 text-sm">Media inquiries, interviews, and press materials</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-800">Careers</p>
                    <a href="mailto:careers@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                      careers@daxido.com
                    </a>
                    <p className="text-gray-600 text-sm">Job opportunities and career inquiries</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-800">Driver Support</p>
                    <a href="mailto:drivers@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                      drivers@daxido.com
                    </a>
                    <p className="text-gray-600 text-sm">Driver onboarding, support, and earnings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Founder</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded by <strong>Naiyaz Faiyaz Ahmed</strong>, DaxiDo Technologies Services Private Limited is revolutionizing transportation with our premium ride-hailing platform. Our headquarters is located in Bangalore, Karnataka, serving customers across India with cutting-edge technology and exceptional service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Response Time</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• <strong>General Support:</strong> Within 2 hours during business hours</p>
                <p>• <strong>Urgent Issues:</strong> Immediate response via phone</p>
                <p>• <strong>Business Inquiries:</strong> Within 24 hours</p>
                <p>• <strong>Press Requests:</strong> Within 4 hours</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+919876543210" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                +91-9876543210
              </a>
              {' '}or email{' '}
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

export default Contact;
