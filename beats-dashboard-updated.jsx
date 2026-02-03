import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BeatsWirelessSpeakerDashboard = () => {
  const [activeSection, setActiveSection] = useState('recommendation');

  // Survey demographics data from JSON
  const demographicsData = {
    age: [
      { label: "18-24", value: 2430, percentage: 68.4 },
      { label: "25-34", value: 644, percentage: 18.1 },
      { label: "Under 18", value: 149, percentage: 4.2 },
      { label: "35-44", value: 146, percentage: 4.1 },
      { label: "45-54", value: 123, percentage: 3.5 },
      { label: "55-64", value: 51, percentage: 1.4 },
      { label: "65+", value: 9, percentage: 0.3 }
    ],
    gender: [
      { label: "Female", value: 1830, percentage: 51.5 },
      { label: "Male", value: 1625, percentage: 45.7 },
      { label: "Non-binary / Third gender", value: 47, percentage: 1.3 },
      { label: "Prefer not to say", value: 50, percentage: 1.4 }
    ],
    income: [
      { label: "Prefer not to say", value: 1071, percentage: 30.2 },
      { label: "Less than $25,000", value: 816, percentage: 23.0 },
      { label: "$25,000-$50,000", value: 504, percentage: 14.2 },
      { label: "$50,000-$75,000", value: 364, percentage: 10.2 },
      { label: "$75,000-$100,000", value: 290, percentage: 8.2 },
      { label: "More than $100,000", value: 507, percentage: 14.3 }
    ]
  };

  // REAL SURVEY DATA (n=3,552)
  const importantFeaturesData = [
    { feature: "Sound Quality", score: 59.4, respondents: 3552 },
    { feature: "Durability", score: 59.1, respondents: 3552 },
    { feature: "Design/Looks", score: 58.6, respondents: 3552 },
    { feature: "Connectivity", score: 57.8, respondents: 3552 },
    { feature: "Battery Life", score: 57.7, respondents: 3552 },
    { feature: "Price", score: 57.1, respondents: 3552 }
  ];

  const purchaseFactorsData = [
    { factor: "Price", importance: 78.3, respondents: 3552 },
    { factor: "Brand Reputation", importance: 73.4, respondents: 3552 },
    { factor: "Online Reviews", importance: 68.3, respondents: 3552 },
    { factor: "Specific Features", importance: 68.3, respondents: 3552 },
    { factor: "Expert Reviews", importance: 67.4, respondents: 3552 },
    { factor: "Friend Recommendations", importance: 57.8, respondents: 3552 },
    { factor: "Advertising", importance: 48.5, respondents: 3552 }
  ];

  const pricePointData = [
    { range: "$50-$100", preference: 34.7, respondents: 1234 },
    { range: "Less than $50", preference: 31.6, respondents: 1122 },
    { range: "$100-$200", preference: 23.5, respondents: 834 },
    { range: "$200-$300", preference: 6.9, respondents: 244 },
    { range: "More than $300", preference: 3.3, respondents: 118 }
  ];

  const channelPreferencesData = [
    { channel: "Amazon/Large Online", preference: 45.9, respondents: 1628 },
    { channel: "Electronics Store", preference: 20.6, respondents: 733 },
    { channel: "Department Store", preference: 18.0, respondents: 638 },
    { channel: "Brand Website", preference: 13.5, respondents: 478 }
  ];

  const brandRecognitionData = [
    { brand: "JBL", ownership: 62.6, respondents: 2223 },
    { brand: "Bose", ownership: 32.3, respondents: 1146 },
    { brand: "Sony", ownership: 24.6, respondents: 874 },
    { brand: "Samsung", ownership: 14.8, respondents: 525 },
    { brand: "Marshall", ownership: 5.9, respondents: 209 },
    { brand: "Beats", ownership: 1.5, respondents: 53 }
  ];

  const COLORS = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55'];

  const sections = [
    { id: 'recommendation', label: 'Recommendation', icon: '🎯' },
    { id: 'demographics', label: 'Survey Details', icon: '📊' },
    { id: 'features', label: 'Important Features', icon: '⭐' },
    { id: 'factors', label: 'Purchase Factors', icon: '💡' },
    { id: 'pricing', label: 'Price Points', icon: '💰' },
    { id: 'channels', label: 'Purchase Channels', icon: '🛒' },
    { id: 'brands', label: 'Brand Recognition', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Beats by Dr. Dre</h1>
              <p className="text-red-500 text-sm mt-1 font-semibold">High-Fidelity Wireless Speaker Market Analysis</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Survey Respondents</p>
              <p className="text-4xl font-bold text-red-500">3,552</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-red-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Recommendation Section */}
        {activeSection === 'recommendation' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Recommendation</h2>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⚠️ Proceed with Caution</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The market presents significant challenges. JBL dominates with 62.6% market share vs. Beats' 1.5%. Customers are highly price-sensitive (66% spend under $100) and view all features as equally important. Success requires aggressive pricing and strong differentiation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-yellow-400">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">⚠️ Major Challenge: Low Brand Presence</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>JBL dominates:</strong> 62.6% of respondents own/use JBL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Beats barely registers:</strong> Only 1.5% brand ownership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Established competitors:</strong> Bose (32%), Sony (25%)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-yellow-400">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">⚠️ Market Reality: Price > Everything</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Price is #1 factor:</strong> 78.3/100 importance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>66% spend under $100:</strong> Mass market, not premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Features all equal:</strong> No clear differentiation angle</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Required Price Point</h4>
                <p className="text-3xl font-bold text-red-500">$79-$99</p>
                <p className="text-sm text-gray-600 mt-2">66% of market under $100 - premium positioning won't work</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Primary Channel</h4>
                <p className="text-3xl font-bold text-red-500">Amazon</p>
                <p className="text-sm text-gray-600 mt-2">45.9% shop large online stores (Amazon)</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Target Age</h4>
                <p className="text-3xl font-bold text-red-500">18-34</p>
                <p className="text-sm text-gray-600 mt-2">86.5% of market under age 35</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">🎯 Strategic Reality Check</h4>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1. Accept the price constraint:</strong> Market demands sub-$100 pricing. Premium positioning ($150+) will fail.</li>
                <li><strong>2. Challenge JBL's dominance:</strong> Requires massive marketing spend and aggressive feature parity at lower price</li>
                <li><strong>3. Leverage Beats brand in headphones:</strong> Cross-sell to existing headphone customers - they already trust the brand</li>
                <li><strong>4. Features won't differentiate:</strong> All rated equally (57-59/100). Compete on price, design, and brand</li>
                <li><strong>5. Amazon is critical:</strong> 46% shop there - must win on Amazon SEO and reviews</li>
              </ol>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">💡 Alternative Recommendation</h4>
              <p className="text-gray-700 mb-3">
                <strong>Consider NOT entering this market.</strong> The wireless speaker market is commoditized, price-driven, and dominated by JBL. Beats has minimal brand presence here (1.5% vs JBL's 62.6%).
              </p>
              <p className="text-gray-700">
                <strong>Better opportunity:</strong> Extend Beats' headphone dominance into premium portable audio categories where brand cachet commands pricing power. The wireless speaker market demands prices and margins incompatible with Beats' premium positioning.
              </p>
            </div>
          </div>
        )}

        {/* Demographics Section */}
        {activeSection === 'demographics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Survey Demographics</h2>
              <p className="text-gray-600 mb-6">Total Respondents: <span className="font-bold text-red-500">3,552</span> wireless speaker owners</p>
              
              {/* Age Distribution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Age Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={demographicsData.age}
                      dataKey="value"
                      nameKey="label"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ label, percentage }) => `${label}: ${percentage}%`}
                    >
                      {demographicsData.age.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-gray-700 mt-4 bg-gray-50 p-4 rounded-lg">
                  <strong>Key Insight:</strong> The survey heavily skews toward younger demographics, with 86.5% of respondents under age 35. This indicates strong wireless speaker adoption among millennials and Gen Z, making them the primary target market for any new product launch.
                </p>
              </div>

              {/* Gender Distribution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gender Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={demographicsData.gender}
                      dataKey="value"
                      nameKey="label"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ label, percentage }) => `${label}: ${percentage}%`}
                    >
                      {demographicsData.gender.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-gray-700 mt-4 bg-gray-50 p-4 rounded-lg">
                  <strong>Key Insight:</strong> Gender distribution is nearly balanced (51.5% female, 45.7% male), suggesting wireless speakers have universal appeal. Marketing should avoid gender-specific messaging and focus on lifestyle and use-case benefits that resonate across demographics.
                </p>
              </div>

              {/* Income Distribution */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Household Income Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demographicsData.income}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF3B30" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-gray-700 mt-4 bg-gray-50 p-4 rounded-lg">
                  <strong>Key Insight:</strong> Income distribution shows diversity across brackets, with 30.2% preferring not to disclose. Of those who disclosed, lower-to-middle income brackets dominate (23% under $25k, 14.2% in $25-50k range), while 14.3% earn over $100k. This suggests price sensitivity is critical, with optimal positioning in the $100-$200 range to capture the broadest market.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Important Features Section */}
        {activeSection === 'features' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Most Important Features</h2>
            <p className="text-gray-600 mb-6">Respondents rated the importance of various wireless speaker features (Scale: 0-100)</p>
            
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={importantFeaturesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" angle={-45} textAnchor="end" height={120} interval={0} />
                <YAxis domain={[0, 100]} label={{ value: 'Importance Score (0-100)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="score" fill="#FF3B30">
                  {importantFeaturesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Analysis & Recommendations</h3>
              <p className="text-gray-700 mb-4">
                <strong>CRITICAL INSIGHT: Features are NOT differentiators.</strong> All six features scored nearly identically (57-59 out of 100), with average rankings clustered between 3.4-3.6 on a 1-6 scale. This is a "table stakes" market - customers expect ALL features, not just one or two.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Sound Quality</strong> (59.4/100) leads marginally, but the 2.3-point spread from top to bottom is statistically insignificant. Customers ranked features in this order on average: 1) Sound Quality, 2) Durability, 3) Design, 4) Connectivity, 5) Battery Life, 6) Price.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>What this means:</strong> You cannot win by excelling in just one area. A speaker with amazing sound but poor battery life will fail. The product must be competent across ALL dimensions to compete.
              </p>
              <p className="text-gray-700">
                <strong>Strategic implication:</strong> Feature innovation won't create differentiation. Compete on brand, price, and design aesthetic instead. The market has commoditized technical performance expectations.
              </p>
            </div>
          </div>
        )}

        {/* Purchase Factors Section */}
        {activeSection === 'factors' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Purchasing Decision Factors</h2>
            <p className="text-gray-600 mb-6">What influences customers when choosing a wireless speaker? (Importance score: 0-100)</p>
            
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={purchaseFactorsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="factor" angle={-45} textAnchor="end" height={100} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="importance" fill="#007AFF" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Strategic Implications</h3>
              <p className="text-gray-700 mb-4">
                <strong>Price dominates ALL other factors</strong> (78.3/100). This contradicts the conventional wisdom that "sound quality is king." In reality, customers want good-enough sound at the right price. Price sensitivity is the #1 market driver.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Brand Reputation</strong> (73.4/100) is second - BUT Beats only has 1.5% market share in speakers vs JBL's 62.6%. Beats' headphone reputation doesn't transfer to speakers. Building brand credibility here requires massive investment.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Online Reviews</strong> (68.3/100) and <strong>Specific Features</strong> (68.3/100) tie for third. Launch strategy MUST include review generation (influencer seeding, early adopter programs) and clear feature communication on Amazon.
              </p>
              <p className="text-gray-700">
                <strong>Advertising barely matters</strong> (48.5/100) - lowest rated factor. Don't waste budget on traditional advertising. Instead, invest in: (1) competitive pricing, (2) Amazon SEO and reviews, (3) features that match or beat JBL at lower price points.
              </p>
            </div>
          </div>
        )}

        {/* Price Points Section */}
        {activeSection === 'pricing' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Price Point Preferences</h2>
            <p className="text-gray-600 mb-6">What price range are customers willing to pay for a high-quality wireless speaker?</p>
            
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={pricePointData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis label={{ value: 'Preference %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="preference" fill="#34C759" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Pricing Strategy Recommendation</h3>
              <p className="text-gray-700 mb-4">
                <strong>The market is mass-market, not premium.</strong> 66.3% of customers spend under $100 ($50-$100: 34.7%, Under $50: 31.6%). Only 10.2% spend over $200. This is a commoditized, price-driven category.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Beats' traditional premium positioning won't work here.</strong> In headphones, Beats commands $200-$350 price points. In speakers, the market simply won't pay premium prices - JBL dominates at $50-$100 price points.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Required pricing: $79-$99.</strong> To capture the largest segment (34.7% at $50-$100) while maintaining margin above the Under $50 tier. At $150+, you'd only access 33.7% of the market and face fierce competition from established brands.
              </p>
              <p className="text-gray-700">
                <strong>The brutal truth:</strong> This market's economics are incompatible with Beats' brand positioning. $79-$99 pricing dilutes brand equity built in headphones. Premium pricing ($149+) limits you to a small market where you have no brand credibility (1.5% vs JBL's 62.6%).
              </p>
            </div>
          </div>
        )}

        {/* Purchase Channels Section */}
        {activeSection === 'channels' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Preferred Purchase Channels</h2>
            <p className="text-gray-600 mb-6">Where do customers prefer to buy wireless speakers?</p>
            
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={channelPreferencesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" angle={-45} textAnchor="end" height={120} interval={0} />
                <YAxis domain={[0, 50]} label={{ value: 'Preference %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="preference" fill="#FF9500" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Distribution Strategy</h3>
              <p className="text-gray-700 mb-4">
                <strong>Amazon dominates at 45.9%</strong> (1,628 respondents). However, physical retail is NOT dead - 38.6% prefer brick-and-mortar (20.6% electronics stores + 18% department stores). The brand website is a distant fourth at 13.5%.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Amazon is make-or-break.</strong> With nearly half the market shopping there, Amazon must be a launch partner. Invest heavily in: Amazon SEO, A+ content, early review generation, and Prime Day/Black Friday promotions. JBL dominates Amazon speaker rankings - you're fighting an uphill battle.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Physical retail matters more than expected.</strong> 38.6% still shop in stores (Best Buy, Target, Walmart). This is actually good news for Beats - in-store placement in Apple sections could leverage existing retail relationships and brand halo effect.
              </p>
              <p className="text-gray-700">
                <strong>Beats.com is NOT a volume driver</strong> (only 13.5%). Don't expect direct-to-consumer to carry the launch. Use Beats.com for exclusive colors/bundles, but prioritize Amazon and Best Buy for volume.
              </p>
            </div>
          </div>
        )}

        {/* Brand Recognition Section */}
        {activeSection === 'brands' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Ownership & Market Reality</h2>
            <p className="text-gray-600 mb-6">Which brands do respondents currently own or have used? (% of 3,552 respondents)</p>
            
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={brandRecognitionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="brand" />
                <YAxis domain={[0, 70]} label={{ value: 'Ownership %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="ownership" fill="#5856D6" name="% Who Own/Used This Brand">
                  {brandRecognitionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.brand === 'Beats' ? '#FF3B30' : '#5856D6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🚨 CRITICAL FINDING: Beats Has No Market Presence</h3>
              <p className="text-gray-700 mb-4">
                <strong>JBL absolutely dominates:</strong> 62.6% of respondents own or have used JBL speakers (2,223 people). This is 41x higher than Beats' 1.5% (53 people). JBL is the category default.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Bose is #2 at 32.3%</strong> (1,146 people) - still 21x higher than Beats. Sony is #3 at 24.6% (874 people) - 16x higher than Beats. Even Samsung at 14.8% has 10x the penetration.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Beats' 1.5% means the brand doesn't exist in this category.</strong> Only 53 out of 3,552 respondents have experience with Beats speakers. You're not fighting for market share - you're fighting for market entry against an entrenched incumbent.
              </p>
              <p className="text-gray-700">
                <strong>Why this matters:</strong> Brand reputation scores 73.4/100 in purchase decisions, but Beats has no reputation in speakers. JBL owns this space completely. The brand equity Beats has in headphones does NOT transfer to speakers.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Competitive Positioning Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>vs. JBL (62.6%):</strong> The category king. Known for durable, affordable, good-sounding speakers ($50-$100). Ubiquitous on Amazon, Best Buy, Target. Beats cannot out-JBL JBL on price or distribution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>vs. Bose (32.3%):</strong> Premium positioning, known for sound quality, higher prices ($150-$300). Direct competitor to Beats' intended positioning - but Bose has 21x the market presence.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>vs. Sony (24.6%):</strong> Mid-tier pricing, good features, reliable brand. Established player with strong retail presence. 16x larger than Beats.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>
                  <span><strong>Beats (1.5%):</strong> No credibility, no market share, no distribution advantage. Brand strength in headphones doesn't transfer. Would be entering as unknown challenger in a commoditized market.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-300 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">⚠️ What Would It Take to Win?</h3>
              <p className="text-gray-700 mb-3">
                To go from 1.5% to 10% market share would require:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li><strong>1.</strong> $50M+ marketing spend to build awareness against JBL's dominance</li>
                <li><strong>2.</strong> Price matching JBL ($79-$99) - incompatible with Beats' premium brand</li>
                <li><strong>3.</strong> 3-5 years of sustained investment before profitability</li>
                <li><strong>4.</strong> Massive Amazon review generation and SEO to compete with JBL's 100K+ reviews</li>
                <li><strong>5.</strong> Retail placement fights in Best Buy/Target where JBL owns the shelf space</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>Return on investment is highly questionable.</strong> The speaker market is commoditized, low-margin, and controlled by JBL. Beats' strengths (brand cachet, premium design, music culture) don't command pricing power here.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Beats by Dr. Dre | Market Research Analysis | Survey conducted February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeatsWirelessSpeakerDashboard;