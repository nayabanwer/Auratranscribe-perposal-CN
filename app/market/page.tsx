"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  ExternalLink,
  Play,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  DollarSign,
  BarChart3,
  Award,
  Brain,
  Smartphone,
  Building2,
} from "lucide-react"
import Link from "next/link"

export default function MarketPage() {
  const marketSize = [
    {
      segment: "AI Transcription Market",
      currentSize: "$2.8B",
      projectedSize: "$18.6B",
      year: "2026",
      growth: "35.8% CAGR",
      color: "from-blue-600 to-purple-600",
    },
    {
      segment: "Productivity Software",
      currentSize: "$58.2B",
      projectedSize: "$102.3B",
      year: "2028",
      growth: "12.4% CAGR",
      color: "from-green-600 to-blue-600",
    },
    {
      segment: "Mobile Productivity Apps",
      currentSize: "$12.1B",
      projectedSize: "$28.7B",
      year: "2027",
      growth: "18.9% CAGR",
      color: "from-purple-600 to-pink-600",
    },
    {
      segment: "Educational Technology",
      currentSize: "$89.5B",
      projectedSize: "$377.8B",
      year: "2028",
      growth: "16.3% CAGR",
      color: "from-orange-600 to-red-600",
    },
  ]

  const targetCustomers = [
    {
      segment: "Content Creators",
      size: "50M+ worldwide",
      painPoint: "Manual transcription takes 4-6 hours per hour of content",
      ourSolution: "Automated transcription + task extraction in minutes",
      marketValue: "$8.2B",
      validation: "5 beta users from YouTube/Podcast community",
      icon: Users,
    },
    {
      segment: "Students & Educators",
      size: "1.6B students globally",
      painPoint: "Missing important lecture content, poor note-taking",
      ourSolution: "Real-time lecture transcription + study material extraction",
      marketValue: "$12.4B",
      validation: "University faculty and local coaching center interest",
      icon: Award,
    },
    {
      segment: "Business Professionals",
      size: "3.5B workforce",
      painPoint: "Inefficient meeting documentation and follow-up",
      ourSolution: "Meeting transcription + automatic action item extraction",
      marketValue: "$25.7B",
      validation: "Faculty members using for research meetings",
      icon: Building2,
    },
    {
      segment: "Journalists & Media",
      size: "2.7M professionals",
      painPoint: "Time-consuming interview transcription and analysis",
      ourSolution: "Accurate transcription + content analysis + quotes extraction",
      marketValue: "$3.1B",
      validation: "Interest from local media professionals",
      icon: Mic,
    },
  ]

  const competitorAnalysis = [
    {
      name: "Otter.ai",
      marketShare: "35%",
      pricing: "$16.99/month",
      strengths: ["Market leader", "Good accuracy", "Meeting integration"],
      weaknesses: ["Expensive", "Limited task management", "No mobile focus"],
      ourAdvantage: "50% lower cost + better task extraction + mobile-first",
      funding: "$63M raised",
    },
    {
      name: "Descript",
      marketShare: "15%",
      pricing: "$24/month",
      strengths: ["Audio editing", "Video features", "Collaboration"],
      weaknesses: ["Complex interface", "Expensive", "Learning curve"],
      ourAdvantage: "Simple UX + focus on productivity + student-friendly",
      funding: "$50M raised",
    },
    {
      name: "Rev.ai",
      marketShare: "12%",
      pricing: "$0.02/minute",
      strengths: ["API-first", "Good accuracy", "Developer tools"],
      weaknesses: ["No consumer app", "Technical complexity", "No task management"],
      ourAdvantage: "Complete consumer solution + task management + mobile apps",
      funding: "$4.5M raised",
    },
    {
      name: "Trint",
      marketShare: "8%",
      pricing: "$52/month",
      strengths: ["Journalist focus", "Multi-language", "Collaboration"],
      weaknesses: ["Very expensive", "Limited features", "Slow innovation"],
      ourAdvantage: "Much lower cost + modern tech + broader market focus",
      funding: "$3.7M raised",
    },
  ]

  const marketTrends = [
    {
      trend: "Remote Work Growth",
      impact: "300% increase in virtual meetings",
      opportunity: "Meeting transcription and documentation needs",
      icon: Globe,
    },
    {
      trend: "Content Creator Economy",
      impact: "$104B market size by 2026",
      opportunity: "Automated content processing and analysis",
      icon: Users,
    },
    {
      trend: "AI Adoption in Education",
      impact: "78% of institutions adopting AI tools",
      opportunity: "Lecture transcription and study assistance",
      icon: Brain,
    },
    {
      trend: "Mobile-First Productivity",
      impact: "85% of productivity tasks on mobile",
      opportunity: "Mobile transcription and task management",
      icon: Smartphone,
    },
  ]

  const userValidation = [
    {
      userType: "University Faculty",
      feedback: "Perfect for lecture recording. Would pay $10/month for mobile app.",
      useCase: "Lecture transcription and student material generation",
      frequency: "Daily",
      willingness: "$10-15/month",
    },
    {
      userType: "Content Creator",
      feedback: "Task extraction is brilliant. Need better accuracy for accents.",
      useCase: "Podcast transcription and content planning",
      frequency: "Weekly",
      willingness: "$8-12/month",
    },
    {
      userType: "Coaching Professional",
      feedback: "Great for client sessions. Would love team features.",
      useCase: "Session notes and client follow-up tasks",
      frequency: "Daily",
      willingness: "$15-20/month",
    },
    {
      userType: "Student",
      feedback: "Helps with study notes. Need offline mode for poor internet.",
      useCase: "Lecture notes and assignment tracking",
      frequency: "Daily",
      willingness: "$5-8/month",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AuraTranscribe
                </h1>
                <p className="text-sm text-gray-600">Market Analysis</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                <a
                  href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Prototype
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Market Analysis • $18.6B Opportunity • Validated Demand
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Massive Market Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The AI transcription market is exploding with 35.8% annual growth. We've validated demand with 26+ real
              users and identified clear market gaps that our solution addresses perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explosive Market Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple converging markets creating unprecedented opportunity for AI-powered productivity solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketSize.map((market, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${market.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-center">{market.segment}</h3>
                  <div className="text-center space-y-2">
                    <div className="text-sm text-gray-600">Current: {market.currentSize}</div>
                    <div className="text-2xl font-bold text-green-600">{market.projectedSize}</div>
                    <div className="text-sm text-gray-600">by {market.year}</div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{market.growth}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Validated Target Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real market segments with proven demand, validated through our beta testing with 26+ users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetCustomers.map((customer, index) => {
              const Icon = customer.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{customer.segment}</CardTitle>
                        <CardDescription>{customer.size}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Pain Point</h4>
                        <p className="text-sm text-gray-600">{customer.painPoint}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Our Solution</h4>
                        <p className="text-sm text-gray-600">{customer.ourSolution}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-1">Market Value</h4>
                          <p className="text-lg font-bold">{customer.marketValue}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">✓ Validated</Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-1">Our Validation</h4>
                        <p className="text-xs text-gray-600">{customer.validation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competitive Landscape Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear market gaps and opportunities for disruption with our student-led innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitorAnalysis.map((competitor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{competitor.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Market Share</div>
                      <div className="font-bold text-blue-600">{competitor.marketShare}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-red-100 text-red-800">{competitor.pricing}</Badge>
                    <div className="text-sm text-gray-600">{competitor.funding}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                      <div className="flex flex-wrap gap-1">
                        {competitor.strengths.map((strength, sIndex) => (
                          <Badge key={sIndex} variant="secondary" className="text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Weaknesses</h4>
                      <div className="flex flex-wrap gap-1">
                        {competitor.weaknesses.map((weakness, wIndex) => (
                          <Badge key={wIndex} variant="outline" className="text-xs">
                            {weakness}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Our Advantage</h4>
                      <p className="text-sm text-gray-600">{competitor.ourAdvantage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Market Trends Driving Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple macro trends creating perfect timing for our AI productivity platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketTrends.map((trend, index) => {
              const Icon = trend.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{trend.trend}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{trend.impact}</div>
                    <p className="text-sm text-gray-600">{trend.opportunity}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Validation */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real User Validation & Feedback</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct feedback from our 26+ beta users showing strong demand and willingness to pay
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userValidation.map((user, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-900">{user.userType}</h3>
                    <Badge className="bg-green-100 text-green-800">{user.willingness}</Badge>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">"{user.feedback}"</blockquote>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Use Case:</span>
                      <span className="font-medium">{user.useCase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">{user.frequency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Entry Strategy */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Market Entry Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach to capture market share with $25K investment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Validate & Scale</h3>
                <p className="text-sm text-gray-600">Expand from 26 to 500+ users with mobile apps</p>
                <div className="text-xs text-blue-600 mt-2">Months 1-3</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Market Penetration</h3>
                <p className="text-sm text-gray-600">Target content creators and students with freemium model</p>
                <div className="text-xs text-blue-600 mt-2">Months 4-6</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Enterprise Expansion</h3>
                <p className="text-sm text-gray-600">Launch B2B features for educational institutions</p>
                <div className="text-xs text-blue-600 mt-2">Months 7-9</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Global Scale</h3>
                <p className="text-sm text-gray-600">International expansion and Series A preparation</p>
                <div className="text-xs text-blue-600 mt-2">Months 10-12</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Capture This $18.6B Market?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We've validated the demand, identified the gaps, and built the solution. Now we need $25K to scale and
            capture significant market share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+923191991828">
                <span className="w-5 h-5 mr-2">📞</span>
                Call for Investment Discussion
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/investment">
                <DollarSign className="w-5 h-5 mr-2" />
                View Investment Details
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
