import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [memberCount, setMemberCount] = useState(345)
  const [waitlistCount, setWaitlistCount] = useState(1247)
  const [earningsAmount, setEarningsAmount] = useState(2850)
  const [bonusCount, setBonusCount] = useState(12)
  const [selectedState, setSelectedState] = useState('ca')
  const [creditScore, setCreditScore] = useState('excellent')
  const [hasDirectDeposit, setHasDirectDeposit] = useState(true)

  // State data for calculator
  const stateData = {
    'ca': { amount: 3200, count: 15 },
    'tx': { amount: 2850, count: 12 },
    'ny': { amount: 3450, count: 16 },
    'fl': { amount: 2650, count: 11 },
    'il': { amount: 2950, count: 13 },
    'pa': { amount: 2400, count: 10 },
    'oh': { amount: 2200, count: 9 },
    'ga': { amount: 2750, count: 11 }
  }

  // Win examples for live feed
  const winExamples = [
    { name: "@TechSaver_LA", amount: "$350", bank: "PNC Bank", time: "now" },
    { name: "@MomOf3_Chicago", amount: "$500", bank: "Capital One", time: "now" },
    { name: "@StudentSaver", amount: "$250", bank: "Discover", time: "now" },
    { name: "@RetiredRich", amount: "$400", bank: "Wells Fargo", time: "now" },
    { name: "@NightShift_RN", amount: "$300", bank: "Chase", time: "now" }
  ]

  // Update calculator based on selections
  useEffect(() => {
    let multiplier = 1
    if (creditScore === 'good') multiplier = 0.9
    if (creditScore === 'fair') multiplier = 0.7
    if (creditScore === 'poor') multiplier = 0.5
    if (!hasDirectDeposit) multiplier *= 0.8
    
    const baseAmount = stateData[selectedState].amount
    const baseCount = stateData[selectedState].count
    const finalAmount = Math.floor(baseAmount * multiplier)
    const finalCount = Math.floor(baseCount * multiplier)
    
    setEarningsAmount(finalAmount)
    setBonusCount(finalCount)
  }, [selectedState, creditScore, hasDirectDeposit])

  // Simulate member count updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setMemberCount(prev => prev + 1)
      }
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setWaitlistCount(prev => prev + 1)
    setMemberCount(prev => prev + 1)
    alert('🎉 Welcome! Check your email for Discord invite and getting started guide.')
  }

  return (
    <>
      <Head>
        <title>BonusTracker - Never Miss Another Bank Bonus</title>
        <meta name="description" content="Join 345+ Smart Savers Earning Bank Bonuses Together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gray-50" style={{fontFamily: 'Inter, sans-serif'}}>
        {/* Header - Mobile Optimized */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
              <div className="flex items-center justify-between sm:justify-start">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">💰 BonusTracker</div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    Community
                  </span>
                </div>
                {/* Mobile member count - compact */}
                <div className="sm:hidden member-counter text-white px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-600 to-emerald-600">
                  👥 {memberCount.toLocaleString()}
                </div>
              </div>
              <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-1 xs:space-y-0 xs:space-x-4 sm:space-x-4">
                {/* Desktop member counter */}
                <div className="hidden sm:block member-counter text-white px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600">
                  👥 <span id="live-members">{memberCount.toLocaleString()}</span> active members
                </div>
                <div className="text-sm text-gray-600">
                  💰 <span className="font-semibold text-green-600">$126K+</span> earned collectively
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section - Mobile Optimized */}
        <section className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <span className="text-sm font-medium">🏆 #1 Bank Bonus Community</span>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                Stop Leaving Money on the Table
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-green-100 max-w-4xl mx-auto px-2">
                You're missing out on thousands in bank bonuses because you can't track all the requirements. 
                Join <strong>{memberCount.toLocaleString()}+ smart savers</strong> earning bonuses together.
              </p>
            </div>

            {/* Community Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:animate-float transition-transform duration-300 hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300">{memberCount.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-green-100">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:animate-float transition-transform duration-300 hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300">$126K+</div>
                <div className="text-xs sm:text-sm text-green-100">Total Earned</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:animate-float transition-transform duration-300 hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300">4.9★</div>
                <div className="text-xs sm:text-sm text-green-100">Community Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:animate-float transition-transform duration-300 hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-pink-300">24/7</div>
                <div className="text-xs sm:text-sm text-green-100">Support & Help</div>
              </div>
            </div>

            {/* Early Access Form - Mobile Optimized */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md mx-auto">
              <div className="text-gray-900 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Get Early Access</h2>
                <p className="text-gray-600">Join 500 founding members</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 text-base sm:text-lg touch-manipulation"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 active:scale-95 transition-all duration-200 text-lg sm:text-xl touch-manipulation min-h-[48px]"
                >
                  Secure My Spot Now →
                </button>
              </form>
              
              <div className="mt-6 text-center space-y-2">
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  🎁 Founding members get 60% off forever
                </div>
                <p className="text-xs text-gray-500">Only 253 spots remaining</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Finally, a System That Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands earning up to $10,000/year from checking account bonuses — automatically tracked, never missed
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Never Miss a Deadline</h3>
                <p className="text-gray-700">Automated reminders for direct deposits, minimum balances, and bonus qualification dates. We track it all so you don't have to.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Meet Every Requirement</h3>
                <p className="text-gray-700">Clear dashboards showing exactly what you need to do and when. No more losing bonuses to fine print.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💳 Manage Multiple Accounts</h3>
                <p className="text-gray-700">Track 5, 10, or even 20+ accounts simultaneously. Our system handles the complexity while you collect the bonuses.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚫 Avoid All Fees</h3>
                <p className="text-gray-700">Smart alerts before monthly fees hit. Know exactly when to close accounts to dodge closing fees.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Pre-Qualified Opportunities</h3>
                <p className="text-gray-700">See only the bonuses you're eligible for based on your history and location. No wasted applications.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🔔 Real-Time Bonus Alerts</h3>
                <p className="text-gray-700">Get notified instantly when new high-value bonuses drop. Be first in line for limited-time offers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Earnings Calculator - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Potential Earnings
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                See exactly how much you could earn from bank bonuses in your state
              </p>
            </div>
            
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select your state:</label>
                    <select 
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 text-base touch-manipulation min-h-[48px] appearance-none bg-white"
                    >
                      <option value="ca">California</option>
                      <option value="tx">Texas</option>
                      <option value="ny">New York</option>
                      <option value="fl">Florida</option>
                      <option value="il">Illinois</option>
                      <option value="pa">Pennsylvania</option>
                      <option value="oh">Ohio</option>
                      <option value="ga">Georgia</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Do you have direct deposit?</label>
                    <div className="space-y-3 sm:space-y-0 sm:flex sm:space-x-6">
                      <label className="flex items-center cursor-pointer touch-manipulation min-h-[44px]">
                        <input 
                          type="radio" 
                          name="dd" 
                          checked={hasDirectDeposit}
                          onChange={() => setHasDirectDeposit(true)}
                          className="mr-3 w-4 h-4" 
                        />
                        <span className="text-sm sm:text-base">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer touch-manipulation min-h-[44px]">
                        <input 
                          type="radio" 
                          name="dd" 
                          checked={!hasDirectDeposit}
                          onChange={() => setHasDirectDeposit(false)}
                          className="mr-3 w-4 h-4"
                        />
                        <span className="text-sm sm:text-base">No (we have workarounds!)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit score range:</label>
                    <select 
                      value={creditScore}
                      onChange={(e) => setCreditScore(e.target.value)}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 text-base touch-manipulation min-h-[48px] appearance-none bg-white"
                    >
                      <option value="excellent">750+ (Excellent)</option>
                      <option value="good">700-749 (Good)</option>
                      <option value="fair">650-699 (Fair)</option>
                      <option value="poor">Below 650</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-center order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 sm:p-8 text-white">
                    <div className="mb-4">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-pulse">${earningsAmount.toLocaleString()}</div>
                      <div className="text-lg sm:text-xl opacity-90">potential earnings</div>
                    </div>
                    <div className="text-base sm:text-lg">
                      From <span className="font-semibold">{bonusCount}</span> eligible bonuses
                    </div>
                    <div className="text-sm opacity-75 mt-2">
                      Based on your profile
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-base sm:text-lg touch-manipulation min-h-[48px]">
                    See My Full Bonus List →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Real Members, Real Results
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                See what our community members have accomplished with our platform and each other's support
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Featured Success Story - Mobile Optimized */}
              <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start mb-6">
                  <div className="w-12 h-12 sm:w-15 sm:h-15 bg-green-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                    M
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-2 sm:space-y-0">
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl font-bold text-gray-900">Maria Rodriguez</div>
                        <div className="text-sm text-gray-600">Teacher from Phoenix, AZ • Member since March 2024</div>
                      </div>
                      <div className="sm:ml-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          💰 Earned $4,850
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>"I was skeptical at first, but this community changed everything."</strong> As a single mom and teacher, 
                    every dollar counts. The members here didn't just give me bonus recommendations – they held my hand through 
                    the entire process.
                  </p>
                  <p className="text-gray-700">
                    "When I was confused about direct deposit requirements, @ChurningChamp87 shared a detailed guide. 
                    When I was worried about credit pulls, @BonusExpert helped me understand the impact. I've now earned 
                    <strong> $4,850 in 8 months</strong> – that's more than my monthly take-home pay!"
                  </p>
                </div>

                <div className="mt-6 flex items-center space-x-4">
                  <div className="text-yellow-500 text-lg">★★★★★</div>
                  <span className="text-sm text-gray-600">"This community is worth its weight in gold!"</span>
                </div>
              </div>

              {/* Quick Wins - Mobile Optimized */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-3 flex-shrink-0">
                      J
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">James Chen</div>
                          <div className="text-xs text-gray-500">Software Engineer, CA</div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">$1,950</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "The community Slack is incredible. I get notifications when new bonuses drop, 
                        and members share data points in real-time. Earned my first $600 in week 1!"
                      </p>
                      <div className="mt-3 text-xs text-gray-500">Member for 4 months</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mr-3 flex-shrink-0">
                      S
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">Sarah Kim</div>
                          <div className="text-xs text-gray-500">Nurse, TX</div>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">$2,340</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "I love the weekly wins thread! Seeing everyone celebrate their bonuses 
                        keeps me motivated. The step-by-step guides made everything so easy."
                      </p>
                      <div className="mt-3 text-xs text-gray-500">Member for 6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">The Opportunity You're Missing</h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">$10,000+</div>
                <div className="text-green-100">Annual earnings potential</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300">400+</div>
                <div className="text-green-100">Active bank bonuses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300">87%</div>
                <div className="text-green-100">Miss bonuses due to tracking</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-300">2 hrs</div>
                <div className="text-green-100">Average time per bonus</div>
              </div>
            </div>

            {/* Final CTA - Mobile Optimized */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xl mx-auto shadow-2xl">
              <div className="text-gray-900 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Join Our Community Today</h3>
                <p className="text-gray-600">Start your journey with hundreds of successful members</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email to join"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 text-base sm:text-lg focus:ring-2 focus:ring-green-500 touch-manipulation"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 active:scale-95 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 text-lg sm:text-xl touch-manipulation min-h-[48px]"
                >
                  Join {memberCount.toLocaleString()}+ Smart Savers →
                </button>
              </form>
              
              <div className="mt-6 space-y-2 text-center">
                <div className="text-sm text-gray-600 leading-relaxed">
                  💳 No setup fees • 👥 Instant community access • 🎯 Personalized matching
                </div>
                <div className="text-xs text-gray-500">
                  🎁 Early bird special: First 500 users get lifetime access at 50% off
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Discord Server</a></li>
                  <li><a href="#" className="hover:text-white">Success Stories</a></li>
                  <li><a href="#" className="hover:text-white">Member Directory</a></li>
                  <li><a href="#" className="hover:text-white">Weekly Wins</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Beginner Guide</a></li>
                  <li><a href="#" className="hover:text-white">State Guides</a></li>
                  <li><a href="#" className="hover:text-white">DD Workarounds</a></li>
                  <li><a href="#" className="hover:text-white">Tax Guide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Bonus Tracker</a></li>
                  <li><a href="#" className="hover:text-white">Personalized Matches</a></li>
                  <li><a href="#" className="hover:text-white">Success Dashboard</a></li>
                  <li><a href="#" className="hover:text-white">Mobile App</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p className="mb-2">© 2025 BonusTracker Community. All rights reserved.</p>
              <p>"Your success is our community's success. Together we earn more." 🤝</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .member-counter {
          background: linear-gradient(45deg, #10B981, #059669, #047857);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}