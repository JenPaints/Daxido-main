import { useState, useEffect } from 'react';
import RideSimulation from './components/RideSimulation';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Press from './components/Press';
import Blog from './components/Blog';
import HelpCenter from './components/HelpCenter';
import DriverPortal from './components/DriverPortal';
import Contact from './components/Contact';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Star, 
  Smartphone, 
  CreditCard, 
  Users, 
  ArrowRight,
  Menu,
  X,
  Play,
  CheckCircle,
  Car,
  Zap,
  Globe,
  FileText,
  Lock,
  Scale
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    // Handle URL hash routing
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the #
      if (hash) {
        const pageMap: { [key: string]: string } = {
          'privacy-policy': 'privacy',
          'terms-of-service': 'terms',
          'refund-cancellation-policy': 'refund',
          'cookie-policy': 'cookies',
          'community-guidelines': 'community',
          'safety-standards': 'safety',
          'accessibility': 'accessibility',
          'about-us': 'about',
          'careers': 'careers',
          'press': 'press',
          'blog': 'blog',
          'help-center': 'help',
          'driver-portal': 'driver-portal',
          'contact': 'contact'
        };
        
        if (pageMap[hash]) {
          setCurrentPage(pageMap[hash]);
          // Auto scroll to top when navigating to a new page
          window.scrollTo(0, 0);
        }
      } else {
        setCurrentPage('home');
        // Auto scroll to top when going to home page
        window.scrollTo(0, 0);
      }
    };

    // Check initial hash
    handleHashChange();
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Pickup",
      description: "Average pickup time under 3 minutes in major cities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Background-checked drivers and real-time safety features"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Easy Payment",
      description: "Seamless cashless payments with multiple options"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Top Rated",
      description: "4.9/5 average rating from millions of satisfied riders"
    }
  ];


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Daxido has transformed my daily commute. Reliable, fast, and always professional drivers.",
      rating: 5,
      avatar: "/IMG_7431.jpg"
    },
    {
      name: "Michael Chen",
      role: "Student",
      content: "As a student, I love the affordable rates and the safety features. Perfect for late-night rides.",
      rating: 5,
      avatar: "/IMG_7431 copy.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Healthcare Worker",
      content: "The app is incredibly intuitive and the drivers are always courteous. Highly recommended!",
      rating: 5,
      avatar: "/IMG_7431.jpg"
    }
  ];

  const legalPages = [
    { id: 'privacy', title: 'Privacy Policy', icon: <Lock className="w-5 h-5" /> },
    { id: 'terms', title: 'Terms of Service', icon: <FileText className="w-5 h-5" /> },
    { id: 'refund', title: 'Refund & Cancellation Policy', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookie Policy', icon: <Globe className="w-5 h-5" /> },
    { id: 'community', title: 'Community Guidelines', icon: <Users className="w-5 h-5" /> },
    { id: 'safety', title: 'Safety Standards', icon: <Shield className="w-5 h-5" /> },
    { id: 'accessibility', title: 'Accessibility', icon: <Scale className="w-5 h-5" /> }
  ];


  const renderLegalPage = (pageId: string) => {
    const legalContent = {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Information We Collect",
            content: "DaxiDo Technologies Services Private Limited collects information through our comprehensive ride-hailing platform including: (1) Personal Information: Name, phone number, email, date of birth, gender, address, emergency contacts, (2) Identity Documents: Aadhaar, PAN, Driving License, Vehicle Registration Certificate, Insurance documents (for drivers), (3) Location Data: Real-time GPS coordinates, trip routes, pickup/drop locations, (4) Payment Information: UPI details, card information, wallet balances, transaction history, (5) Usage Data: App interactions, ride history, ratings, preferences, (6) Device Information: Device type, operating system, unique device identifiers, (7) Communication Data: Support tickets, chat messages, call recordings, (8) Safety Data: SOS alerts, incident reports, emergency contacts, (9) Technical Data: IP addresses, browser type, app version, crash reports, (10) Analytics Data: Usage patterns, performance metrics, user behavior."
          },
          {
            section: "How We Use Your Information",
            content: "We use collected information to: (1) Provide Services: Match riders with drivers, process payments, enable real-time tracking, (2) Ensure Safety: Monitor rides, respond to emergencies, verify driver credentials, (3) Improve Platform: Analyze usage patterns, optimize algorithms, enhance user experience, (4) Process Payments: Handle transactions, manage driver payouts, process refunds, (5) Communication: Send notifications, updates, promotional offers, support messages, (6) Compliance: Meet legal requirements, government regulations, ONDC compliance, (7) Analytics: Generate reports, business intelligence, performance metrics, (8) Security: Prevent fraud, verify identities, protect platform integrity, (9) Customer Support: Resolve issues, provide assistance, handle complaints, (10) Marketing: Send relevant offers, referral programs, loyalty rewards."
          },
          {
            section: "Data Storage and Security",
            content: "Your data is stored securely using AWS cloud infrastructure: (1) DynamoDB: Encrypted NoSQL database with automatic scaling, (2) S3: Encrypted file storage for documents and images, (3) Cognito: Secure authentication and user management, (4) Lambda: Serverless processing with automatic scaling, (5) IoT Core: Real-time data transmission via MQTT protocol, (6) Encryption: All data encrypted at rest and in transit using AES-256, (7) Access Control: Role-based access with multi-factor authentication, (8) Monitoring: 24/7 security monitoring and threat detection, (9) Backup: Automated backups with disaster recovery, (10) Compliance: SOC 2, GDPR, and Indian data protection standards."
          },
          {
            section: "Data Retention and TTL Policies",
            content: "We implement Time To Live (TTL) policies for automatic data cleanup: (1) Active Users/Drivers: 7 years retention for active accounts, (2) Completed Rides: 1 year retention for ride history and data, (3) Notifications: 30 days retention for push notifications and alerts, (4) Support Tickets: 2 years retention for customer support records, (5) Payment Records: 7 years retention as required by law, (6) Emergency Data: 1 year retention for SOS alerts and incident reports, (7) Analytics Data: 2 years retention for business intelligence, (8) Inactive Accounts: 30 days retention after account deactivation, (9) Legal Requirements: Extended retention for compliance and legal obligations, (10) User Request: Immediate deletion upon verified user request (subject to legal requirements)."
          },
          {
            section: "Information Sharing and Third Parties",
            content: "We may share information with: (1) Service Providers: AWS, payment gateways, SMS providers, map services, (2) Drivers: Limited information for ride matching and completion, (3) Emergency Services: Location and contact information during SOS alerts, (4) Government Authorities: As required by law, regulations, or legal processes, (5) Business Partners: For integrated services, promotions, or partnerships, (6) Legal Compliance: For investigations, court orders, or regulatory requirements, (7) Safety Partners: For incident reporting and safety improvements, (8) Analytics Providers: Aggregated, anonymized data for insights, (9) Insurance Providers: For claims processing and risk assessment, (10) Family Members: Emergency contacts during safety incidents (with consent)."
          },
          {
            section: "Your Rights and Choices",
            content: "You have the following rights: (1) Access: Request copies of your personal data, (2) Correction: Update or correct inaccurate information, (3) Deletion: Request deletion of your data (subject to legal requirements), (4) Portability: Export your data in a structured format, (5) Restriction: Limit how we process your data, (6) Objection: Object to certain data processing activities, (7) Withdrawal: Withdraw consent for optional data processing, (8) Notification: Receive notifications about data breaches, (9) Complaint: File complaints with data protection authorities, (10) Contact: Reach us at privacy@daxido.com for any privacy concerns."
          },
          {
            section: "Children's Privacy",
            content: "Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information. Parents or guardians who believe their child has provided personal information should contact us immediately."
          },
          {
            section: "International Data Transfers",
            content: "Your data may be transferred to and processed in countries other than India, including the United States where our AWS infrastructure is located. We ensure appropriate safeguards are in place for international transfers, including: (1) Standard Contractual Clauses, (2) Adequacy Decisions, (3) Binding Corporate Rules, (4) Certification Schemes, (5) Codes of Conduct, (6) Technical and Organizational Measures, (7) Regular Security Assessments, (8) Compliance Monitoring, (9) Data Protection Impact Assessments, (10) Cross-border Data Transfer Agreements."
          },
          {
            section: "Updates to Privacy Policy",
            content: "We may update this privacy policy to reflect changes in our practices, technology, legal requirements, or business operations. Material changes will be communicated through: (1) App notifications, (2) Email notifications, (3) Website announcements, (4) In-app banners, (5) Push notifications, (6) SMS alerts, (7) Social media posts, (8) Customer support messages, (9) Driver communications, (10) Admin dashboard notifications. Continued use of our services after changes constitutes acceptance of the updated policy."
          }
        ]
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Acceptance of Terms",
            content: "By accessing and using DaxiDo's premium ride-hailing platform, including our mobile applications (User App, Driver App, Driver Onboarding App, Admin Mobile App), web dashboard, and all related services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
          },
          {
            section: "Service Description",
            content: "DaxiDo Technologies Services Private Limited provides a comprehensive technology platform that connects riders with independent drivers through multiple applications and services. Our platform includes: (1) User App for ride booking and management, (2) Driver Onboarding App for document verification, (3) Driver App for ride acceptance and navigation, (4) Admin Web Dashboard for platform management, (5) Admin Mobile App for on-the-go management, (6) Real-time tracking via AWS IoT Core, (7) SOS emergency system, (8) Multi-vehicle support (Bike, Auto, Car, Luxury Car), (9) Payment integration (UPI, Cards, Wallet, Cash), and (10) Role-based access control. We are a technology service provider and do not provide transportation services directly."
          },
          {
            section: "Platform Components and Features",
            content: "Our platform operates on AWS serverless architecture including Lambda functions, DynamoDB, API Gateway, Cognito authentication, IoT Core for real-time tracking, S3 for file storage, and SNS for notifications. Features include real-time location tracking, emergency SOS alerts, comprehensive driver verification, instant payouts, fare estimation with surge pricing, ride history and ratings, and 24/7 customer support."
          },
          {
            section: "User Registration and Authentication",
            content: "To use our services, you must register an account using your mobile phone number and complete OTP verification. You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We use AWS Cognito for secure authentication and JWT tokens for API access."
          },
          {
            section: "Driver Onboarding and Verification",
            content: "Drivers must complete our comprehensive onboarding process through the Driver Onboarding App, including submission of required documents (Aadhaar, PAN, Driving License, Vehicle Registration Certificate, Insurance). All drivers undergo background checks, driving record verification, and vehicle inspections. Driver status progresses through Pending → Approved → Active phases. We reserve the right to reject applications that do not meet our safety and quality standards."
          },
          {
            section: "Ride Booking and Management",
            content: "Users can book rides through our User App by selecting vehicle type, destination, and preferred payment method. Our platform uses real-time algorithms to match riders with nearby drivers. Fare estimation includes base fare, distance, time, and surge pricing during peak hours. Users can cancel rides before driver arrival, with cancellation fees applicable after driver arrival as displayed in the app."
          },
          {
            section: "Real-Time Tracking and Safety",
            content: "Our platform provides real-time location tracking through AWS IoT Core MQTT protocol. All rides are monitored in real-time with GPS tracking, emergency assistance capabilities, trip sharing with trusted contacts, and 24/7 safety support. The SOS emergency system provides instant alerts to emergency contacts and admin response teams."
          },
          {
            section: "Payment Terms and Methods",
            content: "We accept multiple payment methods including UPI, credit/debit cards, digital wallets, and cash. Payment processing is handled through secure payment gateways. You authorize us to charge your selected payment method for the total ride amount including applicable taxes, fees, and surge pricing. Driver payouts are processed through our instant payout system with transparent earnings tracking."
          },
          {
            section: "Data Collection and Privacy",
            content: "We collect and process personal data including location data, payment information, ride history, and communication records. Data is stored securely using AWS DynamoDB with encryption at rest and in transit. We implement TTL (Time To Live) policies for automatic data cleanup: 7 years for active users/drivers, 1 year for completed rides, 30 days for notifications. Your data is used to provide services, ensure safety, process payments, and improve our platform."
          },
          {
            section: "Prohibited Activities",
            content: "Users and drivers are prohibited from: (1) Using the platform for illegal activities, (2) Providing false information or documents, (3) Harassment or inappropriate behavior, (4) Manipulating ratings or creating fake accounts, (5) Violating traffic laws or safety regulations, (6) Using unauthorized payment methods, (7) Attempting to hack or compromise our systems, (8) Sharing account credentials, (9) Operating under the influence of alcohol or drugs, (10) Refusing service based on discrimination."
          },
          {
            section: "Platform Availability and Performance",
            content: "We strive for 99.9% uptime but do not guarantee uninterrupted service. Our serverless architecture automatically scales based on demand. We may perform maintenance, updates, or improvements that temporarily affect service availability. We are not liable for service interruptions due to third-party services, internet connectivity, or force majeure events."
          },
          {
            section: "Intellectual Property Rights",
            content: "All content, software, algorithms, trademarks, and intellectual property on our platform are owned by DaxiDo Technologies Services Private Limited. Users and drivers are granted limited, non-exclusive, non-transferable licenses to use our applications for personal use only. You may not copy, modify, distribute, or reverse engineer our software or algorithms."
          },
          {
            section: "Limitation of Liability",
            content: "DaxiDo's liability is limited to the maximum extent permitted by law. We are not liable for: (1) Indirect, incidental, special, or consequential damages, (2) Loss of profits, data, or business opportunities, (3) Damages arising from third-party actions, (4) Force majeure events, (5) Technical failures beyond our control. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim."
          },
          {
            section: "Dispute Resolution and Governing Law",
            content: "Any disputes arising from these terms or use of our services shall be resolved through binding arbitration in accordance with Indian Arbitration and Conciliation Act, 2015. These terms are governed by Indian law. For any legal proceedings, jurisdiction shall be with the courts in Bangalore, Karnataka, India."
          },
          {
            section: "Termination and Account Suspension",
            content: "We reserve the right to suspend or terminate accounts that violate these terms, engage in prohibited activities, or pose safety risks. Users may terminate their accounts at any time by contacting customer support. Upon termination, access to services will be revoked, but certain data may be retained as required by law or for legitimate business purposes."
          },
          {
            section: "Updates to Terms",
            content: "We may update these terms from time to time to reflect changes in our services, legal requirements, or business practices. Material changes will be communicated through our applications or email. Continued use of our services after changes constitutes acceptance of the updated terms. We recommend reviewing these terms periodically."
          }
        ]
      },
      cookies: {
        title: "Cookie Policy",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "What Are Cookies",
            content: "Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site."
          },
          {
            section: "Types of Cookies We Use",
            content: "We use essential cookies for basic functionality, analytics cookies to understand how you interact with our site, and preference cookies to remember your settings and choices."
          },
          {
            section: "Managing Cookies",
            content: "You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website."
          }
        ]
      },
      community: {
        title: "Community Guidelines",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Respectful Behavior",
            content: "All users must treat drivers, riders, and support staff with respect and courtesy. Discrimination, harassment, or abusive behavior will not be tolerated."
          },
          {
            section: "Safety First",
            content: "Follow all safety guidelines, wear seatbelts, and report any safety concerns immediately. Do not engage in activities that could endanger yourself or others."
          },
          {
            section: "Platform Integrity",
            content: "Do not attempt to manipulate ratings, create fake accounts, or engage in fraudulent activities. Maintain the integrity of our platform for all users."
          }
        ]
      },
      safety: {
        title: "Safety Standards",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Driver Screening",
            content: "All drivers undergo comprehensive background checks, including criminal history, driving record verification, and vehicle inspections before joining our platform."
          },
          {
            section: "Real-time Safety Features",
            content: "Our app includes GPS tracking, emergency assistance, trip sharing with trusted contacts, and 24/7 safety support for all rides."
          },
          {
            section: "Incident Response",
            content: "We have dedicated safety teams that respond to incidents immediately. All safety reports are investigated thoroughly and appropriate action is taken."
          }
        ]
      },
      refund: {
        title: "Refund & Cancellation Policy",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Cancellation Policy",
            content: "DaxiDo Technologies Services Private Limited provides flexible cancellation options: (1) Free Cancellation: Cancel within 2 minutes of booking without any charges, (2) Pre-Arrival Cancellation: Cancel before driver arrives at pickup location - cancellation fee applies as displayed in app, (3) Post-Arrival Cancellation: Cancel after driver arrives - full cancellation fee applies, (4) Driver Cancellation: If driver cancels after accepting ride - no charges to rider, (5) System Cancellation: Technical issues causing cancellation - no charges, (6) Emergency Cancellation: SOS-related cancellations - no charges, (7) Weather Cancellation: Severe weather conditions - no charges, (8) Safety Cancellation: Safety concerns - no charges, (9) Vehicle Type Change: Change vehicle type before driver assignment - no charges, (10) Route Modification: Modify route before ride starts - additional charges may apply."
          },
          {
            section: "Refund Eligibility and Circumstances",
            content: "Refunds are processed for: (1) Technical Issues: App crashes, payment failures, booking errors, (2) Driver Issues: Driver cancellation, no-show, inappropriate behavior, (3) Vehicle Issues: Vehicle breakdown, cleanliness problems, safety concerns, (4) Service Issues: Significant delays, wrong route, missed pickup, (5) Payment Issues: Double charging, incorrect fare calculation, payment gateway errors, (6) Safety Issues: Unsafe driving, harassment, emergency situations, (7) Quality Issues: Poor vehicle condition, driver misconduct, service quality, (8) System Errors: Platform bugs, server issues, connectivity problems, (9) Force Majeure: Natural disasters, government restrictions, emergencies, (10) Customer Service: Resolution of legitimate complaints and disputes."
          },
          {
            section: "Refund Process and Timeline",
            content: "Refund process includes: (1) Request Submission: Contact support within 48 hours via app, email, or phone, (2) Documentation: Provide ride ID, payment proof, reason for refund, (3) Investigation: Our team reviews request within 24 hours, (4) Verification: Cross-check with driver, payment records, and system logs, (5) Decision: Refund approval or rejection within 48 hours, (6) Processing: Approved refunds processed within 5-7 business days, (7) Notification: Email/SMS confirmation of refund processing, (8) Credit: Refund credited to original payment method, (9) Tracking: Refund status available in app and email, (10) Escalation: Unresolved cases escalated to senior management within 72 hours."
          },
          {
            section: "Payment Method Specific Refunds",
            content: "Refund processing varies by payment method: (1) UPI: Refund processed within 24-48 hours to original UPI ID, (2) Credit/Debit Cards: Refund processed within 5-7 business days, (3) Digital Wallets: Refund processed within 24-72 hours, (4) Cash Payments: Refund credited to DaxiDo wallet or bank account, (5) Corporate Accounts: Refund processed through corporate billing, (6) Subscription Plans: Pro-rated refunds for unused services, (7) Gift Cards: Refund processed as gift card credit, (8) Promotional Credits: Refund processed as promotional credit, (9) Driver Earnings: Refund adjustments in driver payout, (10) International Cards: Refund processed within 7-10 business days."
          },
          {
            section: "Non-Refundable Charges and Exceptions",
            content: "Non-refundable charges include: (1) Cancellation Fees: Post-arrival cancellation charges, (2) Cleaning Fees: Vehicle damage or excessive mess charges, (3) Lost Item Fees: Items left in vehicle retrieval charges, (4) Tolls and Parking: Government tolls and parking fees paid by driver, (5) Tips: Voluntary tips given to drivers, (6) Surge Pricing: Dynamic pricing during peak hours, (7) Waiting Charges: Excessive waiting time charges, (8) Distance Charges: Actual distance traveled charges, (9) Time Charges: Actual ride duration charges, (10) Service Fees: Platform service and processing fees."
          },
          {
            section: "Driver Payout and Refund Adjustments",
            content: "Driver-related refunds: (1) Driver Cancellation: No payout deduction for legitimate cancellations, (2) Rider Cancellation: Driver receives cancellation fee as per policy, (3) Refund Processing: Driver earnings adjusted for approved refunds, (4) Dispute Resolution: Driver-side disputes handled separately, (5) Earnings Protection: Drivers protected from fraudulent refund claims, (6) Payout Timing: Refund adjustments reflected in next payout cycle, (7) Transparency: Clear communication of refund impact on earnings, (8) Support: Dedicated driver support for refund-related queries, (9) Documentation: Detailed records of all refund transactions, (10) Appeals: Driver appeal process for disputed refunds."
          },
          {
            section: "Dispute Resolution and Escalation",
            content: "Dispute resolution process: (1) Initial Review: Customer support team reviews within 24 hours, (2) Evidence Collection: Gather ride data, payment records, communication logs, (3) Investigation: Detailed investigation within 48 hours, (4) Decision: Clear decision with reasoning within 72 hours, (5) Appeal Process: Escalation to senior management within 24 hours, (6) External Mediation: Third-party mediation for complex disputes, (7) Legal Recourse: Right to legal action as per Indian law, (8) Consumer Forums: Access to consumer protection forums, (9) Arbitration: Binding arbitration for commercial disputes, (10) Documentation: Complete record of dispute resolution process."
          },
          {
            section: "Special Circumstances and Exceptions",
            content: "Special refund considerations: (1) Medical Emergencies: Full refund for medical emergency cancellations, (2) Family Emergencies: Compassionate refunds for family emergencies, (3) System Outages: Full refunds during platform outages, (4) Natural Disasters: Full refunds during natural disasters, (5) Government Restrictions: Full refunds during government-imposed restrictions, (6) Security Incidents: Full refunds for security-related incidents, (7) Fraud Protection: Refunds for fraudulent transactions, (8) Quality Assurance: Refunds for service quality issues, (9) Accessibility: Refunds for accessibility-related issues, (10) Customer Satisfaction: Discretionary refunds for customer satisfaction."
          },
          {
            section: "Policy Updates and Communication",
            content: "Policy communication: (1) App Notifications: In-app notifications for policy updates, (2) Email Updates: Email notifications to registered users, (3) Website Updates: Policy updates on official website, (4) Driver Communication: Separate communication to driver partners, (5) Admin Dashboard: Updates visible in admin dashboard, (6) Social Media: Announcements on social media platforms, (7) Press Releases: Public announcements for major changes, (8) Customer Support: Training for customer support team, (9) Documentation: Updated documentation and FAQs, (10) Legal Compliance: Compliance with regulatory requirements."
          }
        ]
      },
      accessibility: {
        title: "Accessibility Statement",
        lastUpdated: "September 15, 2025",
        content: [
          {
            section: "Our Commitment",
            content: "Daxido is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards."
          },
          {
            section: "Accessibility Features",
            content: "Our platform includes screen reader compatibility, keyboard navigation support, high contrast options, and voice-guided navigation for visually impaired users."
          },
          {
            section: "Feedback",
            content: "We welcome feedback on the accessibility of our services. Please contact us at accessibility@daxido.com with any suggestions or concerns."
          }
        ]
      }
    };

    const page = legalContent[pageId as keyof typeof legalContent];
    if (!page) return null;

    return (
      <div className="min-h-screen bg-[#F4EBD0] pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-[#122620] mb-2">{page.title}</h1>
                  <p className="text-gray-600">Last updated: {page.lastUpdated}</p>
                </div>
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
              {page.content.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold text-[#122620] mb-4">{section.section}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions about this {page.title.toLowerCase()}, please contact us at{' '}
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


  if (currentPage !== 'home') {
    if (['privacy', 'terms', 'refund', 'cookies', 'community', 'safety', 'accessibility'].includes(currentPage)) {
    return renderLegalPage(currentPage);
    } else if (currentPage === 'about') {
      return <AboutUs />;
    } else if (currentPage === 'careers') {
      return <Careers />;
    } else if (currentPage === 'press') {
      return <Press />;
    } else if (currentPage === 'blog') {
      return <Blog />;
    } else if (currentPage === 'help') {
      return <HelpCenter />;
    } else if (currentPage === 'driver-portal') {
      return <DriverPortal />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  }

  return (
    <div className="min-h-screen bg-[#F4EBD0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#122620]/95 backdrop-blur-md z-50 border-b border-[#B68D40]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/IMG_7430-removebg-preview.png" 
                alt="Daxido Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-[#B68D40] transition-colors">Features</a>
              <a href="#safety" className="text-white hover:text-[#B68D40] transition-colors">Safety</a>
              <a href="#pricing" className="text-white hover:text-[#B68D40] transition-colors">Pricing</a>
              <a href="#about" className="text-white hover:text-[#B68D40] transition-colors">About</a>
              <button className="bg-[#B68D40] text-white px-6 py-2 rounded-full hover:bg-[#D6AD60] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#B68D40] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#122620] border-t border-[#B68D40]/20">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-white hover:text-[#B68D40] transition-colors">Features</a>
              <a href="#safety" className="block py-2 text-white hover:text-[#B68D40] transition-colors">Safety</a>
              <a href="#pricing" className="block py-2 text-white hover:text-[#B68D40] transition-colors">Pricing</a>
              <a href="#about" className="block py-2 text-white hover:text-[#B68D40] transition-colors">About</a>
              <button className="w-full mt-2 bg-[#B68D40] text-white px-6 py-2 rounded-full hover:bg-[#D6AD60] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-[#F4EBD0] via-white to-[#B68D40]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-[#B68D40]/10 text-[#122620] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-[#B68D40]" />
                <span className="hidden sm:inline">Now available in 500+ cities worldwide</span>
                <span className="sm:hidden">Available in 500+ cities</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#122620] leading-tight mb-4 sm:mb-6">
                Your ride is just a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B68D40] to-[#D6AD60]"> tap away</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Experience the future of transportation with Daxido. Safe, reliable, and affordable rides 
                whenever you need them, wherever you're going.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button className="bg-[#B68D40] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D6AD60] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  <div className="flex items-center justify-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download App
                  </div>
                </button>
                <button className="border-2 border-[#B68D40] text-[#122620] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#B68D40] hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </div>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#B68D40]" />
                  No signup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#B68D40]" />
                  24/7 support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#B68D40]" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <RideSimulation />
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#122620] mb-4 sm:mb-6">
              Why choose Daxido?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We've reimagined every aspect of ride-hailing to deliver an unparalleled experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 sm:p-8 rounded-2xl bg-[#F4EBD0]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#B68D40]/10"
              >
                <div className="text-[#B68D40] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#122620] mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-[#F4EBD0] to-[#B68D40]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#122620] mb-4 sm:mb-6">
              How it works
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">
              Getting a ride has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#B68D40] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122620] mb-3 sm:mb-4">1. Set your destination</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-4">
                Enter where you want to go and we'll find the best route for you
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#D6AD60] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Car className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122620] mb-3 sm:mb-4">2. Get matched</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-4">
                Our smart algorithm connects you with the nearest available driver
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#122620] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-[#B68D40]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#122620] mb-3 sm:mb-4">3. Enjoy your ride</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-4">
                Sit back, relax, and enjoy a comfortable ride to your destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#122620] mb-4 sm:mb-6">
              What our riders say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join millions of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#F4EBD0]/30 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#B68D40]/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#B68D40] fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover border-2 border-[#B68D40]/20"
                  />
                  <div>
                    <div className="font-medium text-[#122620] text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-[#122620] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                Your safety is our priority
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Every ride with Daxido comes with comprehensive safety features and 24/7 support
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#B68D40] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Background Checks</h3>
                    <p className="text-sm sm:text-base text-gray-300">All drivers undergo comprehensive background screening</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#D6AD60] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Real-time Tracking</h3>
                    <p className="text-sm sm:text-base text-gray-300">Share your trip details with friends and family</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#B68D40] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">24/7 Support</h3>
                    <p className="text-sm sm:text-base text-gray-300">Round-the-clock customer support and emergency assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img 
                src="/IMG_7431.jpg" 
                alt="Safe and secure rides" 
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-auto object-cover"
              />
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white text-[#122620] p-3 sm:p-4 rounded-xl shadow-lg border border-[#B68D40]/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#B68D40] rounded-full"></div>
                  <span className="font-medium text-sm sm:text-base">Trip Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B68D40] to-[#D6AD60]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to ride with Daxido?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            Join millions of riders who trust Daxido for their daily transportation needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="bg-white text-[#B68D40] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for iOS
              </div>
            </button>
            <button className="bg-white text-[#B68D40] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Download for Android
              </div>
            </button>
          </div>

          <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6">
            Available on iOS 12+ and Android 8+
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#122620] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/IMG_7430-removebg-preview.png" 
                  alt="Daxido Logo" 
                  className="h-6 sm:h-8 w-auto"
                />
                <span className="text-xl sm:text-2xl font-bold">Daxido</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Revolutionizing transportation with safe, reliable, and affordable rides. 
                Your journey matters to us.
              </p>
              <div className="mb-4 sm:mb-6">
                <p className="text-sm text-gray-400 mb-1">Founded by</p>
                <p className="text-base font-semibold text-[#B68D40]">Naiyaz Faiyaz Ahmed</p>
              </div>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#B68D40]/20 rounded-full flex items-center justify-center hover:bg-[#B68D40] transition-colors cursor-pointer">
                  <Globe className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#B68D40]/20 rounded-full flex items-center justify-center hover:bg-[#B68D40] transition-colors cursor-pointer">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#B68D40]/20 rounded-full flex items-center justify-center hover:bg-[#B68D40] transition-colors cursor-pointer">
                  <Star className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[#B68D40]">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><a href="#about-us" className="hover:text-[#B68D40] transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-[#B68D40] transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-[#B68D40] transition-colors">Press</a></li>
                <li><a href="#blog" className="hover:text-[#B68D40] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[#B68D40]">Support</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li><a href="#help-center" className="hover:text-[#B68D40] transition-colors">Help Center</a></li>
                <li><a href="#driver-portal" className="hover:text-[#B68D40] transition-colors">Driver Portal</a></li>
                <li><a href="#contact" className="hover:text-[#B68D40] transition-colors">Contact</a></li>
                <li><a href="mailto:support@daxido.com" className="hover:text-[#B68D40] transition-colors">support@daxido.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Daxido Technologies Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6">
                {legalPages.map((page) => {
                  const urlMap: { [key: string]: string } = {
                    'privacy': 'privacy-policy',
                    'terms': 'terms-of-service',
                    'refund': 'refund-cancellation-policy',
                    'cookies': 'cookie-policy',
                    'community': 'community-guidelines',
                    'safety': 'safety-standards',
                    'accessibility': 'accessibility'
                  };
                  
                  return (
                    <a
                    key={page.id}
                      href={`#${urlMap[page.id]}`}
                    className="text-gray-400 hover:text-[#B68D40] text-xs sm:text-sm transition-colors flex items-center"
                  >
                    {page.icon}
                    <span className="ml-1">{page.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;