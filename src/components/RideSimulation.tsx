import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Car, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  Star,
  Navigation,
  Phone,
  User,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw
} from 'lucide-react';

interface RideStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
}

const RideSimulation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [carPosition, setCarPosition] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const steps: RideStep[] = [
    {
      id: 'booking',
      title: 'Booking Ride',
      description: 'Setting pickup location...',
      icon: <MapPin className="w-5 h-5" />,
      duration: 2000
    },
    {
      id: 'matching',
      title: 'Finding Driver',
      description: 'Matching with nearby driver...',
      icon: <User className="w-5 h-5" />,
      duration: 2500
    },
    {
      id: 'assigned',
      title: 'Driver Assigned',
      description: 'Alex is 2 minutes away',
      icon: <Car className="w-5 h-5" />,
      duration: 3000
    },
    {
      id: 'pickup',
      title: 'Driver Arriving',
      description: 'Your driver has arrived',
      icon: <Navigation className="w-5 h-5" />,
      duration: 2000
    },
    {
      id: 'riding',
      title: 'In Transit',
      description: 'Enjoying your ride...',
      icon: <Clock className="w-5 h-5" />,
      duration: 3000
    },
    {
      id: 'payment',
      title: 'Payment Complete',
      description: 'Thank you for riding with Daxido!',
      icon: <CheckCircle className="w-5 h-5" />,
      duration: 2000
    }
  ];

  const startAutoPlay = () => {
    if (intervalId) clearInterval(intervalId);
    
    const newIntervalId = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setCarPosition(0);
          setShowPayment(false);
          return 0;
        }
        return prev + 1;
      });
    }, steps[currentStep]?.duration || 2000);
    
    setIntervalId(newIntervalId);
  };

  const stopAutoPlay = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, currentStep]);

  useEffect(() => {
    if (currentStep >= 2 && currentStep <= 4) {
      setIsAnimating(true);
      setCarPosition((currentStep - 2) * 33.33);
    } else {
      setIsAnimating(false);
    }

    if (currentStep === 5) {
      setShowPayment(true);
    } else {
      setShowPayment(false);
    }
  }, [currentStep]);

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  };

  const handlePlayPause = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setCarPosition(0);
    setShowPayment(false);
    setIsAutoPlaying(true);
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#B68D40]/20 overflow-hidden">
      {/* Manual Controls */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center space-x-2 order-2 sm:order-1">
          <button
            onClick={handlePlayPause}
            className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-[#B68D40] text-white rounded-full hover:bg-[#D6AD60] transition-all duration-300 transform hover:scale-105 shadow-lg"
            title={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? <Pause className="w-4 sm:w-5 h-4 sm:h-5" /> : <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-0.5" />}
          </button>
          
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-[#122620] text-white rounded-full hover:bg-[#122620]/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
            title="Previous Step"
          >
            <SkipBack className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-[#122620] text-white rounded-full hover:bg-[#122620]/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
            title="Next Step"
          >
            <SkipForward className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>
          
          <button
            onClick={handleRestart}
            className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-[#D6AD60] text-white rounded-full hover:bg-[#B68D40] transition-all duration-300 transform hover:scale-105 shadow-lg"
            title="Restart"
          >
            <RotateCcw className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#122620] font-medium order-1 sm:order-2">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Step Indicators */}
      <div className="mb-4 sm:mb-6 flex justify-center">
        <div className="flex space-x-1 sm:space-x-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepChange(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentStep 
                  ? 'bg-[#B68D40] shadow-lg' 
                  : index < currentStep 
                    ? 'bg-[#D6AD60]' 
                    : 'bg-gray-300 hover:bg-[#B68D40]/30'
              }`}
              title={step.title}
            />
          ))}
        </div>
      </div>

      {/* Phone Frame */}
      <div className="mx-auto max-w-xs sm:max-w-sm">
        <div className="bg-[#122620] rounded-[2.5rem] p-2 shadow-xl">
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-[#122620] text-white text-xs px-4 sm:px-6 py-2 flex justify-between items-center">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-2 bg-white/60 rounded-sm"></div>
                <div className="w-1 h-2 bg-white/60 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="h-80 sm:h-96 bg-gradient-to-br from-[#F4EBD0] to-white relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-[#B68D40]/30 to-[#122620]/20 rounded-lg"></div>
                {/* Map Grid Lines */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute border-[#122620]/10" style={{
                      left: `${i * 12.5}%`,
                      top: 0,
                      bottom: 0,
                      borderLeftWidth: '1px'
                    }}></div>
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute border-[#122620]/10" style={{
                      top: `${i * 16.67}%`,
                      left: 0,
                      right: 0,
                      borderTopWidth: '1px'
                    }}></div>
                  ))}
                </div>
              </div>

              {/* Route Line */}
              {isAnimating && (
                <div className="absolute top-1/2 left-4 right-4 h-1 bg-[#B68D40]/30 rounded-full transform -translate-y-1/2">
                  <div 
                    className="h-full bg-[#B68D40] rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${carPosition}%` }}
                  ></div>
                </div>
              )}

              {/* Pickup Point */}
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#B68D40] rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#122620] font-medium whitespace-nowrap">
                  Pickup
                </div>
              </div>

              {/* Destination Point */}
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#122620] rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#122620] font-medium whitespace-nowrap">
                  Destination
                </div>
              </div>

              {/* Animated Car */}
              {isAnimating && (
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out"
                  style={{ left: `${20 + carPosition * 0.6}%` }}
                >
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#B68D40] rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                    <Car className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </div>
              )}

              {/* Status Card */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-[#B68D40]/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        currentStep === 5 ? 'bg-green-500' : 'bg-[#B68D40]'
                      }`}>
                        {React.cloneElement(steps[currentStep]?.icon as React.ReactElement, {
                          className: "w-4 sm:w-5 h-4 sm:h-5"
                        })}
                      </div>
                      <div>
                        <div className="font-semibold text-[#122620] text-xs sm:text-sm">
                          {steps[currentStep]?.title}
                        </div>
                        <div className="text-gray-600 text-xs hidden sm:block">
                          {steps[currentStep]?.description}
                        </div>
                      </div>
                    </div>
                    
                    {currentStep >= 2 && currentStep < 5 && (
                      <div className="text-right">
                        <div className="text-[#B68D40] font-bold text-sm sm:text-lg">₹850</div>
                        <div className="text-gray-500 text-xs hidden sm:block">Est. fare</div>
                      </div>
                    )}
                  </div>

                  {/* Driver Info (when assigned) */}
                  {currentStep >= 2 && currentStep < 5 && (
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                          alt="Driver"
                          className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover border-2 border-[#B68D40]/20"
                        />
                        <div>
                          <div className="font-medium text-[#122620] text-xs sm:text-sm">Alex M.</div>
                          <div className="flex items-center">
                            <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#B68D40] fill-current" />
                            <span className="text-xs text-gray-600 ml-1">4.9</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="w-6 sm:w-8 h-6 sm:h-8 bg-[#B68D40]/10 rounded-full flex items-center justify-center">
                          <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-[#B68D40]" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Payment Success */}
                  {showPayment && currentStep === 5 && (
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-3 sm:w-4 h-3 sm:h-4 text-[#B68D40]" />
                          <span className="text-xs sm:text-sm text-gray-600">•••• 4242</span>
                        </div>
                        <div className="text-[#B68D40] font-bold text-sm sm:text-base">₹850</div>
                      </div>
                      <div className="mt-2 flex items-center space-x-1">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                        <span className="text-xs text-green-600">Payment successful</span>
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5">
                      <div 
                        className="bg-[#B68D40] h-1 sm:h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-20 h-12 sm:h-20 bg-[#B68D40]/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-10 sm:w-16 h-10 sm:h-16 bg-[#D6AD60]/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Interactive Step Navigation */}
      <div className="mt-4 sm:mt-6 bg-[#F4EBD0]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#B68D40]/10">
        <div className="text-center mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-[#122620] mb-1 sm:mb-2">Explore the Journey</h3>
          <p className="text-xs sm:text-sm text-gray-600">Click on any step or use controls to navigate</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepChange(index)}
              className={`p-2 sm:p-3 rounded-lg sm:rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                index === currentStep
                  ? 'bg-[#B68D40] text-white shadow-lg'
                  : index < currentStep
                    ? 'bg-[#D6AD60]/20 text-[#122620] hover:bg-[#D6AD60]/30'
                    : 'bg-white text-gray-600 hover:bg-[#B68D40]/10 border border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center ${
                  index === currentStep ? 'bg-white/20' : 'bg-[#B68D40]/10'
                }`}>
                  {React.cloneElement(step.icon as React.ReactElement, {
                    className: `w-2.5 sm:w-3 h-2.5 sm:h-3 ${index === currentStep ? 'text-white' : 'text-[#B68D40]'}`
                  })}
                </div>
                <span className="font-medium text-xs sm:text-sm">{step.title}</span>
              </div>
              <p className={`text-xs leading-tight hidden sm:block ${
                index === currentStep ? 'text-white/80' : 'text-gray-500'
              }`}>
                {step.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideSimulation;