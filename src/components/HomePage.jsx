// import React, {useEffect} from 'react';
// import { WiadpayLogo, TransactionIcon, WalletIcon, UserIcon, ShieldIcon } from './icons';
// import { CheckCircle2 } from 'lucide-react';
// import { Link, useNavigate, } from 'react-router-dom';

// export default function HomePage(){
//     const navigate = useNavigate();

//     // Redirect to dashboard if already logged in
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             navigate('/dashboard');
//         }
//     }, [navigate]); // Dependency array includes navigate

//     return (
//       // Updated gradient using grays and a hint of teal
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30 font-sans antialiased">

//         {/* --- Navigation --- */}
//         {/* Kept background blur, adjusted text colors */}
//         <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
//           <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Left side: Logo and Brand Name */}
//               <div className="flex items-center space-x-2">
//                 <WiadpayLogo className="h-8 w-auto" /> {/* Logo color is defined within SVG */}
//                 <span className="text-2xl font-bold text-gray-800">WiadPay</span>
//               </div>

//               {/* Center: Navigation Links */}
//               <div className="hidden md:flex items-center space-x-8">
//                 {/* Using teal for hover state */}
//                 <a href="#features" className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium">Features</a>
//                 <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium">How it Works</a>
//                 <a href="#security" className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium">Security</a>
//               </div>

//               {/* Right side: Action Buttons - Updated to Teal and use Link */}
//               <div className="flex items-center space-x-3">
//               <Link to="/signin">
//                 <button className="px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 transition duration-150 ease-in-out">
//                   Sign In
//                 </button>
//               </Link>
//               <Link to="/signup">
//                 <button className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-150 ease-in-out shadow-sm hover:shadow-md">
//                   Sign Up
//                 </button>
//               </Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* --- Hero Section --- */}
//         {/* New gradient using Teal, improved contrast */}
//         <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white pt-24 pb-32 md:pt-32 md:pb-40">
//            {/* Subtle background pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cpath%20d%3D%22M0%2050%20Q%2025%20100%2050%2050%20T%20100%2050%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.05)%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-50"></div>
//           <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               {/* Text Content */}
//               <div className="text-center md:text-left">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
//                   Smart Money Transfers with <span className="text-teal-100">WiadPay</span>
//                 </h1>
//                 <p className="mt-6 text-lg md:text-xl text-teal-50 max-w-xl mx-auto md:mx-0">
//                   Securely manage your balance and send funds instantly. Welcome to the future of digital payments.
//                 </p>
//                 {/* Buttons updated to Teal */}
//                 <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                  {/* Updated Get Started button to link to signup */}
//                   <Link to="/signup">
//                     <button className="w-full sm:w-auto px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 ease-in-out">
//                       Get Started Free
//                     </button>
//                   </Link>
//                   {/* Learn More could link to #features or another section */}
//                   <a href="#features">
//                     <button className="w-full sm:w-auto px-8 py-3 bg-teal-700/60 text-white font-medium rounded-lg hover:bg-teal-700/80 border border-teal-400/50 transition duration-200 ease-in-out">
//                         Learn More
//                     </button>
//                   </a>
//                 </div>
//               </div>

//               {/* Visual Element / Demo Box - Updated with Teal accents */}
//               <div className="hidden md:block mt-12 md:mt-0">
//                 <div className="relative">
//                   <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto transform transition duration-500 hover:scale-105">
//                     <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
//                       <div className="flex items-center space-x-3">
//                         <div className="bg-teal-100 p-2 rounded-full">
//                           <UserIcon className="h-5 w-5 text-teal-600" />
//                         </div>
//                         <div>
//                           <p className="text-sm font-semibold text-gray-800">My Wallet</p>
//                           <p className="text-xs text-gray-500">Available Balance</p>
//                         </div>
//                       </div>
//                       <span className="text-xl font-bold text-gray-900">$1,250.00</span>
//                     </div>
//                     <div className="space-y-4 mb-6">
//                       {/* Input fields with Teal focus rings */}
//                       <div>
//                           <label htmlFor="recipient-demo" className="text-xs font-medium text-gray-500 block mb-1">Send to (User ID)</label>
//                           <input
//                             id="recipient-demo"
//                             type="text"
//                             className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition text-sm text-gray-700"
//                             placeholder="e.g., user12345"
//                             disabled // Demo input
//                           />
//                       </div>
//                        <div>
//                           <label htmlFor="amount-demo" className="text-xs font-medium text-gray-500 block mb-1">Amount ($)</label>
//                           <input
//                             id="amount-demo"
//                             type="number"
//                             className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition text-sm text-gray-700"
//                             placeholder="0.00"
//                             disabled // Demo input
//                           />
//                       </div>
//                     </div>
//                     <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 opacity-70 cursor-not-allowed">
//                       Send Securely (Demo)
//                     </button>
//                   </div>
//                   {/* Decorative elements updated */}
//                   <div className="absolute -top-5 -left-5 h-16 w-16 bg-teal-200/30 rounded-full filter blur-md"></div>
//                   <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-cyan-300/30 rounded-full filter blur-md"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Fade to next section */}
//           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
//         </div>

//         {/* --- Features Section --- */}
//         {/* Using gray background, Teal accents */}
//         <div id="features" className="py-24 bg-gray-50">
//           <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Core Features</h2>
//               <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//                 Everything you need for simple and secure peer-to-peer payments.
//               </p>
//             </div>
//             {/* Feature cards with Teal accents */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Feature 1: Check Balance */}
//               <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-transparent hover:border-teal-100 transition duration-300 ease-in-out">
//                 <div className="bg-teal-100 p-3 rounded-lg inline-flex items-center justify-center mb-5">
//                   <WalletIcon className="h-7 w-7 text-teal-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Balance Check</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   Always know your available funds. View your current account balance in real-time with a clean and simple interface.
//                 </p>
//               </div>
//               {/* Feature 2: Money Transfers */}
//               <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-transparent hover:border-teal-100 transition duration-300 ease-in-out">
//                 {/* Using a different accent color (e.g., green) for variety if desired, or stick to Teal */}
//                 <div className="bg-green-100 p-3 rounded-lg inline-flex items-center justify-center mb-5">
//                   <TransactionIcon className="h-7 w-7 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">Seamless Transfers</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   Send money to friends, family, or colleagues quickly and securely. All you need is their WiadPay user ID.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- How It Works Section --- */}
//         {/* White background, Teal numbers */}
//         <div id="how-it-works" className="py-24 bg-white">
//           <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Get Started in 3 Easy Steps</h2>
//               <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//                 Using WiadPay is straightforward and takes only a few moments.
//               </p>
//             </div>
//             {/* Steps with Teal numbers */}
//             <div className="grid md:grid-cols-3 gap-10">
//               {/* Step 1 */}
//               <div className="text-center p-6 bg-gray-50/70 rounded-lg border border-gray-100 hover:shadow-md transition">
//                 <div className="bg-teal-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md">1</div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Account</h3>
//                 <p className="text-gray-600 text-sm">Sign up quickly to access all WiadPay features.</p>
//               </div>
//               {/* Step 2 */}
//               <div className="text-center p-6 bg-gray-50/70 rounded-lg border border-gray-100 hover:shadow-md transition">
//                 <div className="bg-teal-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md">2</div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">View Balance</h3>
//                 <p className="text-gray-600 text-sm">Easily check your available funds anytime, anywhere.</p>
//               </div>
//               {/* Step 3 */}
//               <div className="text-center p-6 bg-gray-50/70 rounded-lg border border-gray-100 hover:shadow-md transition">
//                 <div className="bg-teal-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md">3</div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Transfer Funds</h3>
//                 <p className="text-gray-600 text-sm">Send money securely to other users using their ID.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Security Section --- */}
//         {/* Subtle gradient background, Teal accents */}
//         <div id="security" className="py-24 bg-gradient-to-br from-teal-50/30 via-white to-gray-50">
//           <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               {/* Text Content */}
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Your Security, Our Priority</h2>
//                 <p className="mt-4 text-lg text-gray-600 leading-relaxed">
//                   We employ robust security measures to protect your account and transactions, ensuring peace of mind with every transfer.
//                 </p>
//                 {/* List uses green checkmarks for security confirmation */}
//                 <ul className="mt-8 space-y-4">
//                   <li className="flex items-start">
//                     <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span className="ml-3 text-gray-700">Secure data encryption (SSL/TLS)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span className="ml-3 text-gray-700">Strict transaction validation protocols</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span className="ml-3 text-gray-700">Multi-factor authentication options</span>
//                   </li>
//                    <li className="flex items-start">
//                     <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                     <span className="ml-3 text-gray-700">Real-time fraud monitoring</span>
//                   </li>
//                 </ul>
//                 {/* Button uses primary Teal color */}
//                  <a href="#security"> {/* Or link to a dedicated security page */}
//                     <button className="mt-10 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 shadow-md hover:shadow-lg transition duration-200 ease-in-out">
//                         Learn More About Security
//                     </button>
//                  </a>
//               </div>

//               {/* Visual Element - Updated with Teal */}
//               <div className="relative mt-12 md:mt-0">
//                 <div className="bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-2xl p-8 relative z-10 shadow-lg">
//                   <div className="flex justify-center mb-6">
//                     {/* Shield icon uses Teal */}
//                     <ShieldIcon className="h-16 w-16 text-teal-600 drop-shadow-lg" />
//                   </div>
//                   <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-inner border border-white/50">
//                     <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Transaction Protection</h3>
//                     <div className="space-y-3">
//                       {/* Green accents for confirmation */}
//                       <div className="flex items-center p-3 bg-green-50/70 rounded-lg border border-green-100">
//                         <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
//                         <span className="ml-3 text-sm font-medium text-green-800">Balance Safeguards</span>
//                       </div>
//                       <div className="flex items-center p-3 bg-green-50/70 rounded-lg border border-green-100">
//                         <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
//                         <span className="ml-3 text-sm font-medium text-green-800">Secure Authentication</span>
//                       </div>
//                       <div className="flex items-center p-3 bg-green-50/70 rounded-lg border border-green-100">
//                         <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
//                         <span className="ml-3 text-sm font-medium text-green-800">Activity Monitoring</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Decorative elements updated */}
//                 <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 h-16 w-16 bg-teal-200/50 rounded-full filter blur-lg opacity-70"></div>
//                 <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 h-20 w-20 bg-cyan-200/50 rounded-full filter blur-lg opacity-70"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- CTA Section --- */}
//         {/* Updated gradient to Teal/Cyan */}
//         <div className="bg-gradient-to-r from-teal-600 to-cyan-700 py-20">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to Simplify Your Payments?</h2>
//             <p className="mt-4 text-lg text-teal-50 max-w-2xl mx-auto">
//               Join thousands of users enjoying fast, secure, and easy money transfers with WiadPay. Create your account today!
//             </p>
//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//               {/* Primary button links to signup */}
//                <Link to="/signup">
//                     <button className="w-full sm:w-auto px-8 py-3 bg-white text-teal-600 font-semibold text-lg rounded-lg hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 ease-in-out">
//                     Sign Up Now
//                     </button>
//                </Link>
//                {/* Secondary button could link to contact or remain as is */}
//                <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-medium text-lg rounded-lg border-2 border-teal-300/80 hover:bg-white/10 transition duration-200 ease-in-out">
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --- Footer --- */}
//         {/* Dark gray footer, Teal logo accent */}
//         <footer className="bg-gray-800 text-gray-400 py-16">
//           <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
//               {/* Column 1: Brand */}
//               <div className="col-span-2 md:col-span-1">
//                 <div className="flex items-center space-x-2 mb-4">
//                   {/* Logo uses Teal accent */}
//                   <WiadpayLogo className="h-7 w-auto" />
//                   <span className="text-xl font-bold text-white">WiadPay</span>
//                 </div>
//                 <p className="text-sm">
//                   The simplest way to manage and transfer your money securely.
//                 </p>
//               </div>
//               {/* Columns 2-4: Links */}
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Features</h3>
//                 <ul className="space-y-3 text-sm">
//                   <li><a href="#features" className="hover:text-teal-400 transition">Balance Check</a></li>
//                   <li><a href="#features" className="hover:text-teal-400 transition">Money Transfer</a></li>
//                   <li><a href="#security" className="hover:text-teal-400 transition">Security Overview</a></li>
//                 </ul>
//               </div>
//                <div>
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
//                 <ul className="space-y-3 text-sm">
//                   <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
//                   <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
//                   <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Legal</h3>
//                 <ul className="space-y-3 text-sm">
//                   <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
//                   <li><a href="#" className="hover:text-teal-400 transition">Terms of Service</a></li>
//                    <li><a href="#" className="hover:text-teal-400 transition">Cookie Policy</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Bottom Footer */}
//             <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-center">
//               <p>&copy; {new Date().getFullYear()} WiadPay Technologies Inc. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   };



















import React, { useEffect } from 'react';
// Assuming icons are correctly imported from './icons'
import { WiadpayLogo, TransactionIcon, WalletIcon, UserIcon, ShieldIcon } from './icons'; 
import { CheckCircle2, Menu, X, ChevronRight, Zap, DollarSign, Gift } from 'lucide-react'; // Added Zap, DollarSign, Gift
import { Link, useNavigate } from 'react-router-dom';




export default function HomePage() {
  const navigate = useNavigate();
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    // Added a more vibrant gradient and playful font (requires adding 'Poppins' via CDN or local setup)
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50/30 font-[Poppins,sans-serif] antialiased">
      {/* === Navigation === */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              {/* Assuming WiadpayLogo is an SVG or img component */}
              <WiadpayLogo className="h-8 w-auto text-teal-600" /> 
              <span className="text-2xl font-bold text-gray-800 tracking-tight">WiadPay</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium">How it Works</a>
              {/* Removed Security link as backend is simple */}
            </div>

            {/* Desktop Action Buttons - Added slight hover effects */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/signin">
                <button className="px-5 py-2 text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-lg hover:bg-teal-100 hover:border-teal-200 hover:shadow-sm transition duration-150 ease-in-out">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-px">
                  Sign Up Free
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition duration-150 ease-in-out"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-lg absolute top-16 left-0 right-0 z-40">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a 
                href="#features" 
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-150 ease-in-out font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition duration-150 ease-in-out font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </a>
              {/* Removed Security link */}
              <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-3">
                <Link to="/signin" className="w-full">
                  <button 
                    className="w-full py-2.5 text-sm font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </Link>
                <Link to="/signup" className="w-full">
                  <button 
                    className="w-full py-2.5 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up Free
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* === Hero Section === */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-600 to-emerald-600 text-white pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-44">
        {/* Enhanced Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)] opacity-60"></div>
        
        {/* Animated blurred circles */}
        <div className="absolute top-1/4 left-1/4 h-72 w-72 bg-teal-300/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 bg-emerald-300/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                Play with <span className="text-teal-100 italic">Demo Dollars</span> on <span className="text-emerald-200">WiadPay</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-teal-50 max-w-xl mx-auto lg:mx-0">
                Experience seamless (and fun!) peer-to-peer transfers. Manage your pretend balance and send virtual funds instantly. 
                <strong className="block mt-2 text-emerald-100">*(This is a demo platform using non-real currency)*</strong>
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 ease-in-out flex items-center justify-center gap-2">
                    <Gift size={18} /> Get Started Free
                  </button>
                </Link>
                <a href="#features" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 border border-white/30 transition duration-200 ease-in-out backdrop-blur-sm">
                    Explore Features
                  </button>
                </a>
              </div>
            </div>

            {/* Visual Demo Box - Updated Text */}
            <div className="mt-12 lg:mt-0">
              <div className="relative max-w-md mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 transform transition duration-500 hover:scale-[1.03] border border-white/20">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-teal-100 p-2 rounded-full ring-2 ring-teal-200/50">
                        <UserIcon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">My Fun Wallet</p>
                        <p className="text-xs text-gray-500">Demo Dollars Balance</p>
                      </div>
                    </div>
                    {/* Using a fun currency symbol */}
                    <span className="text-xl font-bold text-gray-900">DD 1,250.00</span> 
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="recipient-demo" className="text-xs font-medium text-gray-500 block mb-1.5">Send Demo Dollars to (User ID)</label>
                      <input
                        id="recipient-demo"
                        type="text"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50"
                        placeholder="e.g., friend_id_123"
                        disabled
                      />
                    </div>
                    <div>
                      <label htmlFor="amount-demo" className="text-xs font-medium text-gray-500 block mb-1.5">Amount (DD)</label>
                      <input
                        id="amount-demo"
                        type="number"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-400 transition text-sm text-gray-700 placeholder-gray-400 bg-gray-50/50"
                        placeholder="0.00"
                        disabled
                      />
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 opacity-70 cursor-not-allowed flex items-center justify-center gap-2">
                     <Zap size={16} /> Send Securely (Demo)
                  </button>
                   <p className="text-center text-xs text-gray-400 mt-3">*Transactions are simulated*</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 h-16 w-16 bg-teal-200/40 rounded-full filter blur-lg animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-emerald-300/40 rounded-full filter blur-lg animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Fade to next section with wave shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px]"> {/* Adjusted for better wave display */}
          <svg className="relative block w-full h-[80px] md:h-[120px]" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-gray-50"></path> {/* Changed fill color */}
          </svg>
        </div>
      </div>

      {/* === Features Section === */}
      <div id="features" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">What You Can Do</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the simple and fun features of WiadPay's demo platform.
            </p>
          </div>
          
          {/* Features cards grid - Adjusted icons and text */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> {/* Changed to 3 columns */}
            {/* Feature 1: Check Balance */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-transparent hover:border-teal-100 transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full inline-flex items-center justify-center mb-5 ring-4 ring-teal-50">
                <WalletIcon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Check Demo Balance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                See your current "Demo Dollars" balance instantly. Keep track of your virtual funds!
              </p>
            </div>
            
            {/* Feature 2: Money Transfers */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-transparent hover:border-cyan-100 transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="bg-cyan-100 p-4 rounded-full inline-flex items-center justify-center mb-5 ring-4 ring-cyan-50">
                <TransactionIcon className="h-7 w-7 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Send Demo Dollars</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transfer virtual funds to other users on the platform using their unique ID. Fast and easy!
              </p>
            </div>
            
            {/* Feature 3: Basic Security */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-transparent hover:border-emerald-100 transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="bg-emerald-100 p-4 rounded-full inline-flex items-center justify-center mb-5 ring-4 ring-emerald-50">
                <ShieldIcon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Secure Transactions</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your demo transfers are handled securely within our system using standard web security practices (like HTTPS).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === How It Works Section === */}
      <div id="how-it-works" className="py-20 md:py-24 bg-gradient-to-br from-white to-teal-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">Get Started in 3 Fun Steps</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Using WiadPay's demo is super simple. Here's how:
            </p>
          </div>
          
          {/* Steps with connected path */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line - Enhanced gradient */}
              <div className="hidden lg:block absolute top-[28px] left-0 w-full h-1 bg-gradient-to-r from-teal-100 via-cyan-200 to-emerald-100 rounded-full"></div>
              
              <div className="grid md:grid-cols-3 gap-12 relative z-10"> {/* Added z-10 */}
                {/* Step 1 */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg ring-4 ring-white/50">1</div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border border-gray-100 transition">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Account</h3>
                    <p className="text-gray-600 text-sm">Sign up in seconds to get your demo wallet.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="text-center">
                   <div className="bg-gradient-to-br from-cyan-500 to-emerald-600 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg ring-4 ring-white/50">2</div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border border-gray-100 transition">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Check Balance</h3>
                    <p className="text-gray-600 text-sm">See your starting Demo Dollars in your dashboard.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="text-center">
                   <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg ring-4 ring-white/50">3</div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border border-gray-100 transition">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Transfer Funds</h3>
                    <p className="text-gray-600 text-sm">Send Demo Dollars to friends using their user ID.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/signup">
                <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold text-lg rounded-lg hover:from-teal-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 ease-in-out flex items-center mx-auto space-x-2 group">
                  <span>Start Playing Now</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Removed the detailed Security Section as it overclaimed based on the backend */}

      {/* === CTA Section === */}
      <div className="relative bg-gradient-to-r from-teal-600 via-cyan-700 to-emerald-700 py-16 md:py-20 overflow-hidden">
        {/* Background pattern - More subtle */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20transform%3D%22translate(20%2020)%22%2F%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-sm">Ready to Try WiadPay?</h2>
          <p className="mt-4 text-lg text-teal-50 max-w-2xl mx-auto">
            Sign up for free and start sending Demo Dollars today. Experience the simplicity!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <button className="w-full px-8 py-3 bg-white text-teal-600 font-semibold text-lg rounded-lg hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 ease-in-out flex items-center justify-center gap-2">
                 <Zap size={18} /> Sign Up Free
              </button>
            </Link>
            {/* Removed Contact Sales button as it's less relevant for a simple demo */}
          </div>
        </div>
      </div>

      {/* === Footer === */}
      <footer className="bg-gray-800 text-gray-400">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Column 1: Brand */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                 {/* Assuming WiadpayLogo works here too */}
                <WiadpayLogo className="h-7 w-auto text-teal-400" /> 
                <span className="text-xl font-bold text-white">WiadPay</span>
              </div>
              <p className="text-sm">
                A fun demo platform for simple peer-to-peer transfers using Demo Dollars.
              </p>
              {/* Simplified social links or remove if not applicable */}
              <div className="flex space-x-4 mt-6">
                 {/* Add actual links if you have them */}
                <a href="#" className="text-gray-400 hover:text-teal-400 transition" aria-label="Twitter"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition" aria-label="GitHub"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.201 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg></a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-teal-400 transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-teal-400 transition">How It Works</a></li>
                <li><Link to="/signin" className="text-gray-400 hover:text-teal-400 transition">Sign In</Link></li>
                <li><Link to="/signup" className="text-gray-400 hover:text-teal-400 transition">Sign Up</Link></li>
              </ul>
            </div>
            
            {/* Column 3: Resources (Simplified) */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Contact Support (Demo)</a></li>
                 {/* Removed legal links that might imply real service */}
              </ul>
            </div>
            
            {/* Column 4: Legal Disclaimer */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Disclaimer</h3>
               <p className="text-sm">
                WiadPay is a demonstration project. Transactions and balances use simulated currency ("Demo Dollars") and hold no real-world value. Use for educational purposes only.
               </p>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} WiadPay Demo Project. Not a real financial service.</p>
          </div>
        </div>
      </footer>
      
      {/* Back to top button - Enhanced style */}
      <button 
        aria-label="Back to top"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 z-50 transform hover:-translate-y-1"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /> {/* Changed icon to double arrow */}
        </svg>
      </button>

     
    </div>
  );
}
