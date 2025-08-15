import React, { useState } from 'react'
import { FaTiktok, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call - replace with your actual waitlist signup logic
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail('')
      setShowModal(true)
    }, 1000)
  }



  return (
    <div className="min-h-screen bg-black">
      {/* Modal CTA for Social Media */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Follow Us!</h2>
            <p className="text-gray-300 mb-4">Stay updated and join our community on social media:</p>
            <div className="flex justify-center space-x-6 mb-2">
              <a href="https://www.tiktok.com/@jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-3xl">
                <FaTiktok />
              </a>
              <a href="https://twitter.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 text-3xl">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-3xl">
                <FaFacebook />
              </a>
            </div>
            <span className="text-xs text-gray-400">@jumpthewag</span>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <img src="/logo-1.png" alt="JumpWag Logo" className="w-6 h-6 sm:w-10 sm:h-10" />
              <span className="text-white text-lg sm:text-xl font-bold">JumpWag</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
              <a href="#waitlist" className="text-white hover:text-gray-300 transition-colors">Join Waitlist</a>
            </nav>
            
            <button className="btn-secondary text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-2">
              Coming Soon
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          {/* Background gradient lines */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
            {/* <div className="w-full h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div> */}
          </div>
          
          <div className="mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              🚀 Coming Soon
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">The Easiest Way to Join</span>
            <br />
            <span className="gradient-text">Viral Tiktok Trends</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Discover trending TikToks and instantly get remix ideas tailored to your niche. 
            <br className="hidden sm:block" />
            <span className="text-pink-400 font-semibold block sm:inline"> Be the first to know when we launch!</span>
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors text-sm sm:text-base"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>
            ) : (
              <div className="bg-green-900 border border-green-700 rounded-full px-4 sm:px-6 py-3 sm:py-4">
                <p className="text-green-400 font-semibold text-sm sm:text-base">🎉 You're on the list! We'll notify you when we launch.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Free to join</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Early access</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>No spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              What You'll Get
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              JumpWag will revolutionize how you discover and create viral TikTok content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Trend Discovery</h3>
              <p className="text-gray-400 text-sm sm:text-base">Instantly find the hottest TikTok trends before they go viral</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">AI-Powered Ideas</h3>
              <p className="text-gray-400 text-sm sm:text-base">Get personalized remix suggestions tailored to your niche</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Viral Growth</h3>
              <p className="text-gray-400 text-sm sm:text-base">Join trends early and maximize your content's reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <img src="/logo-1.png" alt="JumpWag Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-white font-bold text-sm sm:text-base">JumpWag</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 JumpWag. All rights reserved. | Coming Soon
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
