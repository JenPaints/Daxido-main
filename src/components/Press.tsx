import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Press = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Press</h1>
              <a
                href="#"
                className="flex items-center text-[#B68D40] hover:text-[#D6AD60] transition-colors"
              >
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Media Kit</h2>
              <p className="text-gray-700 leading-relaxed">
                Download our media kit including company logos, founder photos, product screenshots, and brand guidelines. For high-resolution images and additional materials, contact our press team at{' '}
                <a href="mailto:press@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                  press@daxido.com
                </a>
                .
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Press Releases</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>• DaxiDo Launches Premium Ride-Hailing Platform with AWS Serverless Architecture</p>
                <p>• Founder Naiyaz Faiyaz Ahmed Announces Expansion to 500+ Cities</p>
                <p>• DaxiDo Introduces Real-Time Safety Features and SOS Emergency System</p>
                <p>• Company Achieves 99.9% Uptime with Cost-Effective Serverless Infrastructure</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">In the News</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>TechCrunch:</strong> "DaxiDo's Serverless Architecture Redefines Ride-Hailing Efficiency"</p>
                <p><strong>Economic Times:</strong> "How DaxiDo Plans to Compete with Established Players"</p>
                <p><strong>YourStory:</strong> "Startup Spotlight: DaxiDo's Innovative Approach to Transportation"</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Contact Press Team</h2>
              <p className="text-gray-700 leading-relaxed">
                For media inquiries, interviews, or press materials, contact our press team at{' '}
                <a href="mailto:press@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                  press@daxido.com
                </a>
                . We're available for interviews about our technology, business model, expansion plans, and founder's vision for the future of transportation.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Media inquiries? Contact us at{' '}
              <a href="mailto:press@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                press@daxido.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
