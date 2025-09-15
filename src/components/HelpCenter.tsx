import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#F4EBD0] pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold text-[#122620] mb-2">Help Center</h1>
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
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Getting Started</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to DaxiDo! Download our app from the App Store or Google Play Store. Sign up with your phone number and complete OTP verification. Add your payment method and emergency contacts for a safe ride experience.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Booking a Ride</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>1. Open the DaxiDo app and enter your destination</p>
                <p>2. Choose your preferred vehicle type (Bike, Auto, Car, or Luxury Car)</p>
                <p>3. Review the fare estimate and confirm your booking</p>
                <p>4. Track your driver in real-time and get notified when they arrive</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Payment Methods</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• We accept UPI, credit/debit cards, digital wallets, and cash payments</p>
                <p>• Add multiple payment methods in your app settings</p>
                <p>• View your transaction history and receipts in the app</p>
                <p>• Contact support for any payment-related issues</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Safety Features</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p>• All rides are monitored with real-time GPS tracking</p>
                <p>• Use the SOS button for emergency situations</p>
                <p>• Share your trip details with trusted contacts</p>
                <p>• Rate your driver and report any safety concerns immediately</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#122620] mb-4">Common Issues</h2>
              <div className="text-gray-700 leading-relaxed space-y-2">
                <p><strong>Driver not arriving:</strong> Check your location accuracy and contact the driver directly</p>
                <p><strong>Payment failed:</strong> Verify your payment method and try again</p>
                <p><strong>App not working:</strong> Update to the latest version or restart the app</p>
                <p><strong>Need a refund:</strong> Contact support within 48 hours of your ride</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Need more help? Contact us at{' '}
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

export default HelpCenter;
