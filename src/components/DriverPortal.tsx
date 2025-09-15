import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const DriverPortal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Driver Portal</h1>
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
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Join as a Driver</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>1. Download the DaxiDo Driver Onboarding App</p>
                <p>2. Complete your profile with personal and vehicle information</p>
                <p>3. Upload required documents (Aadhaar, PAN, Driving License, RC, Insurance)</p>
                <p>4. Wait for verification and approval from our team</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Driver Requirements</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• Valid driving license with at least 2 years of experience</p>
                <p>• Clean driving record with no major violations</p>
                <p>• Vehicle in good condition with valid registration and insurance</p>
                <p>• Smartphone with GPS capability and internet connection</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Earnings and Payouts</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• Earn competitive rates with transparent pricing</p>
                <p>• Get instant payouts to your bank account or UPI</p>
                <p>• Track your earnings in real-time through the driver app</p>
                <p>• Access detailed earnings reports and tax documents</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Driver Support</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• 24/7 driver support for technical and operational issues</p>
                <p>• Dedicated driver helpline for urgent matters</p>
                <p>• Regular training sessions on safety and customer service</p>
                <p>• Driver community forum for tips and best practices</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Safety and Insurance</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• Comprehensive insurance coverage for drivers and passengers</p>
                <p>• Emergency assistance and incident reporting system</p>
                <p>• Regular vehicle inspections and safety checks</p>
                <p>• Background verification and ongoing monitoring for driver safety</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Get Started Today</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ready to start driving with DaxiDo? Download our driver app and begin your journey to flexible, rewarding work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:drivers@daxido.com?subject=Driver Application" 
                  className="inline-flex items-center px-6 py-3 bg-[#B68D40] text-white font-semibold rounded-lg hover:bg-[#D6AD60] transition-colors"
                >
                  Apply to Drive
                </a>
                <a 
                  href="mailto:drivers@daxido.com?subject=Driver Support" 
                  className="inline-flex items-center px-6 py-3 border border-[#B68D40] text-[#B68D40] font-semibold rounded-lg hover:bg-[#B68D40] hover:text-white transition-colors"
                >
                  Driver Support
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about driving with DaxiDo? Contact us at{' '}
              <a href="mailto:drivers@daxido.com" className="text-[#B68D40] hover:text-[#D6AD60] transition-colors">
                drivers@daxido.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverPortal;
