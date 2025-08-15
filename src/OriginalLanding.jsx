import React from 'react'

function OriginalLanding() {
  const trendingContent = [
    {
      id: 1,
      title: "Man of the Year",
      category: "Photo Posts",
      views: "1.2M",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: 2,
      title: "Jet2 Holiday",
      category: "Lifestyle",
      views: "30.1M",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: 3,
      title: "Lowercase Omega",
      category: "Gaming",
      views: "16.0M",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: 4,
      title: "Seasons Change",
      category: "POV",
      views: "788K",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo-1.png" alt="JumpWag Logo" className="w-8 h-8" />
              <span className="text-white text-xl font-bold">JumpWag</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Trends</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
            </nav>
            
            <button className="btn-secondary">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          {/* Background gradient lines */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
            {/* <div className="w-full h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">The Easiest Way to Join</span>
            <br />
            <span className="gradient-text">Viral Tiktok Trends</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover trending TikToks and instantly get remix ideas tailored to your niche.
          </p>
          
          <button className="btn-primary text-lg px-8 py-4">
            Jump the Wag
          </button>
        </div>
      </section>

      {/* Trending Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-between mb-8">
            {trendingContent.map((item) => (
              <div
                key={item.id}
                className="relative bg-gray-900 rounded-[24px] overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors w-[350px] h-[580px] opacity-100 rotate-0"
              >
                {/* Video box */}
                <div className="relative w-[318px] h-[480px] rounded-[16px] overflow-hidden mt-[16.5px] ml-[16px]">
                  <video 
                    src={item.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 line-clamp-1">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-white text-sm">{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn-outline">
              See All Trends
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            We Give You the Missing Piece - Personalized Context.
          </h2>
        </div>
      </section>
    </div>
  )
}

export default OriginalLanding


