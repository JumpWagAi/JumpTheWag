import React, { useState } from 'react'
import { FaTiktok, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.target)
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      setIsSubmitted(true)
      setEmail('')
      setShowModal(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-void overflow-x-hidden relative">
      {/* Modal CTA for Social Media */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="bg-card rounded-2xl shadow-lg m-4 p-8 max-w-sm w-full text-center relative border-gradient">
            <button
              className="absolute top-3 right-3 text-neutral-light/60 hover:text-white text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold gradient-text mb-2">Sweet! </h2>
            <h2 className="text-2xl font-bold mb-2">You're on the waitlist.</h2>
            <p className="text-white mb-4">While you wait, follow us on social media to stay updated.</p>
            <div className="flex justify-center space-x-6 mb-2">
              <a href="https://www.tiktok.com/@jumpwag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pop-pink text-3xl">
                <FaTiktok />
              </a>
              <a href="https://x.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pop-blue text-3xl">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/company/jumpwag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pop-blue text-3xl">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gradient-purple text-3xl">
                <FaInstagram />
              </a>
            </div>
            <span className="text-xs text-neutral-light/50">@jumpthewag</span>
          </div>
        </div>
      )}

      {/* Background vector overlays - desktop (right side only) */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ top: '150px', left: 'calc(50% + 50px)', width: '636px', height: '601px', transform: 'rotate(-121.72deg)' }}>
        <img src="/Vector.svg" alt="" className="w-full h-full" style={{ opacity: 1 }} />
      </div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ top: '182px', left: 'calc(50% + 77px)', width: '636px', height: '601px', transform: 'rotate(-121.72deg)' }}>
        <img src="/Vector.svg" alt="" className="w-full h-full" style={{ opacity: 1 }} />
      </div>

      {/* Mobile vector overlays - spilling in from edges */}
      {/* Right side - top */}
      <div className="lg:hidden absolute pointer-events-none" style={{ top: '60px', right: '-20px', width: '90px', height: '84px', transform: 'rotate(-121.72deg)' }}>
        <img src="/Vector.svg" alt="" className="w-full h-full" style={{ opacity: 1 }} />
      </div>
      {/* Right side - bottom */}
      <div className="lg:hidden absolute pointer-events-none" style={{ bottom: '100px', right: '-30px', width: '96px', height: '90px', transform: 'rotate(-121.72deg)' }}>
        <img src="/Vector.svg" alt="" className="w-full h-full" style={{ opacity: 1 }} />
      </div>
      {/* Left side - midsection */}
      <div className="lg:hidden absolute pointer-events-none" style={{ top: '40%', left: '-30px', width: '90px', height: '84px', transform: 'rotate(58.28deg)' }}>
        <img src="/Vector.svg" alt="" className="w-full h-full" style={{ opacity: 1 }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 lg:py-0">
        {/* Left Content */}
        <div className="flex-1 max-w-xl lg:max-w-2xl text-center lg:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-10 lg:mb-16">
            <img src="/Jumpwag_logo_full.png" alt="JumpWag Logo" className="h-8" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
            <span className="text-white">The Easiest Way to </span>
            <br />
            Join <span className="gradient-text">Tiktok Trends</span>
          </h1>

          {/* Subheading */}
          <p className="text-neutral-light/70 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Discover TikTok trends before they go stale and get AI-generated ideas tailored to your niche and brand.
          </p>

          {/* Email Form */}
          <div className="mb-4">
            {!isSubmitted ? (
              <form name="waitlist" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="waitlist" />
                {/* Mobile: stacked layout */}
                <div className="flex flex-col gap-3 sm:hidden max-w-md mx-auto">
                  <div className="border-gradient rounded-full overflow-hidden">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-6 py-4 bg-transparent text-white placeholder-neutral-light/50 focus:outline-none "
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn-primary w-[182px] mx-auto rounded-full px-8 py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Joining...' : 'Join the Wagon'}
                  </button>
                </div>
                {/* Desktop: button inside input */}
                <div className="hidden sm:flex border-gradient rounded-full p-2 items-center max-w-lg lg:mx-0 mx-auto">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="flex-1 px-5 py-2 bg-transparent text-white placeholder-neutral-light/50 focus:outline-none"
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn-primary rounded-full px-6 py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isLoading ? 'Joining...' : 'Join the Wagon'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="border-gradient rounded-full px-6 py-4 max-w-md mx-auto lg:mx-0">
                <p className="text-pop-pink font-semibold text-center">🎉 You're on the list! We'll notify you when we launch.</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-neutral-light/50 text-sm mb-8 max-w-lg mx-auto lg:mx-0">
            Be the first to know when we launch.<br className="lg:hidden" /> Don't worry, we won't spam you.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <a href="https://www.tiktok.com/@jumpwag" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity text-xl">
              <FaTiktok />
            </a>
            <a href="https://x.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity text-xl">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/jumpwag" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity text-xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jumpthewag" target="_blank" rel="noopener noreferrer" className="text-accent hover:opacity-70 transition-opacity text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Content - Product Preview (Desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center items-start relative mt-12 lg:mt-0 pt-8">
          <div className="relative w-[600px] h-[700px]">
            {/* Background decorative circle */}
            
            
            
            {/* Trend Card - top left area */}
            <div className="absolute top-16 left-0 preview-card rounded-2xl p-6 w-72 z-10">
              <h3 className="text-white font-bold text-xl mb-3 text-center">Nicki Minaj Pose</h3>
              <p className="text-neutral-light/60 text-sm text-center mb-4 leading-relaxed">
                This trend references Nicki Minaj's iconic pose in her 2013 video of her song "High School" where she balanced crouched on the floor in stilettos with one leg over the other.
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-violet-500 text-xs">POV</span>
                <span className="text-emerald-500 text-xs">Lipsync</span>
                <button className="flex items-center gap-1 text-neutral-light/50 text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save Trend
                </button>
              </div>
              <button className="w-full btn-primary text-void py-2.5 rounded-full font-semibold text-sm">
                Generate Remix Ideas
              </button>
              <p className="text-neutral-light/40 text-xs text-center mt-2">This action costs 1 credit</p>
            </div>

            {/* Remix Ideas Card - right side */}
            <div className="absolute top-32 right-0 translate-x-24 preview-card rounded-2xl p-6 w-96 z-20">
              <div className="text-center mb-4">
                <h4 className="font-bold text-2xl"><span className="text-white">Your </span><span className="gradient-text">Remix Ideas</span></h4>
                <p className="text-pop-pink text-sm">For: Nicki Minaj Pose Challenge</p>
              </div>
              <div className="border rounded-xl border-white/10 px-2 py-2 relative flex items-center">
                {/* Left chevron */}
                <button className="absolute -left-5 top-1/2 -translate-y-1/2 text-neutral-light/40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 px-4">
                  <p className="text-neutral-light/50 text-sm text-center mb-1">#1</p>
                  <h5 className="text-white font-semibold text-center mb-2 text-lg">Clean and Slay</h5>
                  <p className="text-neutral-light/60 text-sm leading-relaxed">
                    Start the video attempting the Nicki pose in a messy room with you "struggling" to balance because of all the clutter. Then cut to the same pose executed flawlessly in a spotless, organized space you've cleaned.
                  </p>
                  <p className="text-neutral-light/50 text-sm mt-3 leading-relaxed">
                    The message being that a clean environment literally gives you more balance and confidence.
                  </p>
                </div>

                {/* Right chevron */}
                <button className="absolute -right-5 top-1/2 -translate-y-1/2 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center gap-1 mt-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-pop-pink"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1 text-neutral-light/60 text-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save Idea
                </button>
                <button className="flex items-center gap-1 bg-pop-blue text-void text-sm border border-pop-pink/30 px-3 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Idea
                </button>
              </div>
            </div>

            {/* Trends Feed Card - bottom left, aligned with email input */}
            <div className="absolute bottom-5 left-0 -translate-x-12 preview-card rounded-2xl p-5 w-72 z-10">
              <div className="text-center mb-4">
                <h4 className="text-white font-bold text-lg">Top <span className="gradient-text">Tiktok Trends</span></h4>
                <h4 className="text-white font-bold text-lg">Today</h4>
                <p className="text-neutral-light/50 text-md mt-1">A real-time feed of what's blowing up on TikTok</p>
              </div>
              <div className="border-gradient rounded-full p-2.5 flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-neutral-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-neutral-light/50 text-xs">Enter keyword</span>
              </div>
              <div className="flex gap-1 overflow-x-auto">
                <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">All</span>
                <span className="text-neutral-light/50 text-xs px-2 py-1 flex items-center gap-1 whitespace-nowrap">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  My Trends
                </span>
                <span className="text-neutral-light/50 text-xs px-2 py-1 whitespace-nowrap">POV</span>
                <span className="text-neutral-light/50 text-xs px-2 py-1 whitespace-nowrap">Dance</span>
                <span className="text-neutral-light/50 text-xs px-2 py-1 whitespace-nowrap">Lipsync</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
