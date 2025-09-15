import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Careers</h1>
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
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Join Our Team</h2>
              <p className="text-gray-700 leading-relaxed">
                At DaxiDo, we're building the future of transportation. We're looking for passionate individuals who want to make a real impact on how people move around cities. Join us in revolutionizing urban mobility across India.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Open Positions</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Software Engineers:</strong> Full-stack developers with React Native, Next.js, and AWS experience.</p>
                <p><strong>Product Managers:</strong> Drive product strategy and user experience.</p>
                <p><strong>Data Scientists:</strong> Build algorithms for ride matching and pricing optimization.</p>
                <p><strong>Operations Managers:</strong> Manage city operations and driver partnerships.</p>
                <p><strong>Customer Support:</strong> Help riders and drivers succeed on our platform.</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Why Work With Us</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Innovation:</strong> Work with cutting-edge technology and AWS serverless architecture.</p>
                <p><strong>Impact:</strong> Your work directly improves transportation for millions of people.</p>
                <p><strong>Growth:</strong> Opportunities to learn and advance in a fast-growing company.</p>
                <p><strong>Culture:</strong> Collaborative, inclusive, and supportive work environment.</p>
                <p><strong>Benefits:</strong> Competitive salary, health insurance, flexible work arrangements, and professional development opportunities.</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">How to Apply</h2>
              <p className="text-gray-700 leading-relaxed">
                Send your resume and cover letter to{' '}
                <a href="mailto:careers@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                  careers@daxido.com
                </a>
                . Include the position you're interested in and tell us why you want to join DaxiDo. We review applications regularly and will get back to you within 5 business days.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about careers? Contact us at{' '}
              <a href="mailto:careers@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                careers@daxido.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
