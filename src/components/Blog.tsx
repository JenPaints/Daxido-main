import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Blog</h1>
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
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Latest Posts</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>• The Future of Urban Mobility: How DaxiDo is Revolutionizing Transportation</p>
                <p>• Building Scalable Ride-Hailing with AWS Serverless Architecture</p>
                <p>• Safety First: Our Real-Time Monitoring and Emergency Response System</p>
                <p>• Driver Success Stories: Empowering Communities Through Transportation</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Technology Insights</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>• Why We Chose Serverless Architecture for Our Ride-Hailing Platform</p>
                <p>• Real-Time Tracking: The Technology Behind Safe Rides</p>
                <p>• IoT Integration: Connecting Drivers, Riders, and Cities</p>
                <p>• Data Security: Protecting User Privacy in the Digital Age</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Industry Trends</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>• The Rise of Sustainable Transportation in Indian Cities</p>
                <p>• How Technology is Transforming the Gig Economy</p>
                <p>• Urban Planning and Ride-Hailing: Creating Smarter Cities</p>
                <p>• The Future of Autonomous Vehicles in India</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Subscribe</h2>
              <p className="text-gray-700 leading-relaxed">
                Stay updated with our latest posts by subscribing to our newsletter. Get insights on technology, transportation trends, and company updates delivered to your inbox.
              </p>
              <div className="mt-4">
                <a 
                  href="mailto:blog@daxido.com?subject=Newsletter Subscription" 
                  className="inline-flex items-center px-6 py-3 bg-[#B68D40] text-white font-semibold rounded-lg hover:bg-[#D6AD60] transition-colors"
                >
                  Subscribe to Newsletter
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Want to contribute or have blog ideas? Contact us at{' '}
              <a href="mailto:blog@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                blog@daxido.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
