"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mic,
  ExternalLink,
  Play,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Target,
  CheckCircle,
  Award,
  Users,
  Brain,
  Globe,
  Sparkles,
  ChevronRight,
  PieChart,
  BarChart3,
  Shield,
  Rocket,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const investmentHighlights = [
    {
      icon: DollarSign,
      title: "$25,000 Investment Request",
      description: "Strategic funding for 5-8% equity stake",
      value: "$25K",
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-50 to-blue-50",
    },
    {
      icon: Users,
      title: "26+ Beta Users Validated",
      description: "Real users testing our working prototype",
      value: "26+",
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      icon: Target,
      title: "87-90% Transcription Accuracy",
      description: "Proven performance with AWS Transcribe + NLP",
      value: "87-90%",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Award,
      title: "University Backed",
      description: "Academic credibility with 3.68 average GPA team",
      value: "Emerson",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  const fundingAllocation = [
    {
      category: "Cloud Services & APIs",
      percentage: 32,
      amount: "$8,000",
      description: "AWS, GCP, Transcribe, serverless architecture",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      category: "AI/LLM License Costs",
      percentage: 24,
      amount: "$6,000",
      description: "OpenAI API, spaCy Enterprise features",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      category: "Mobile Development",
      percentage: 16,
      amount: "$4,000",
      description: "Flutter development and UI/UX tools",
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      category: "Marketing & Branding",
      percentage: 12,
      amount: "$3,000",
      description: "Website, branding, user acquisition",
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      category: "Testing & User Acquisition",
      percentage: 8,
      amount: "$2,000",
      description: "Beta testing, user feedback, improvements",
      color: "bg-pink-500",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      category: "Legal & Operations",
      percentage: 8,
      amount: "$2,000",
      description: "Entity formation, IP protection",
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
    },
  ]

  const competitiveAdvantages = [
    {
      icon: CheckCircle,
      title: "Proven Prototype with Real Users",
      description: "26+ validated users including university faculty and external professionals",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Brain,
      title: "Advanced AI Integration",
      description: "Working LLM + spaCy integration achieving 87-90% accuracy with clear path to 95%+",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Market Understanding",
      description: "Team with international academic supervision and cross-cultural AI expertise",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: TrendingUp,
      title: "Clear Scaling Roadmap",
      description: "Detailed 12-month plan from prototype to 10,000+ users with proven technology stack",
      color: "from-orange-500 to-amber-600",
    },
  ]

  const marketOpportunity = [
    {
      segment: "Content Creators",
      size: "YouTubers, Podcasters",
      need: "Transcription and content analysis",
      validation: "Multiple beta testers from this segment",
    },
    {
      segment: "Students & Educators",
      size: "Universities, Online Learning",
      need: "Lecture transcription and study aids",
      validation: "Local coaching center expressed interest",
    },
    {
      segment: "Professionals",
      size: "Journalists, Therapists",
      need: "Meeting notes and client documentation",
      validation: "Faculty members using for research",
    },
  ]

  const competitorAnalysis = [
    {
      name: "Otter.ai",
      strength: "Market leader, good accuracy",
      weakness: "Expensive, limited task management",
      ourAdvantage: "Better task extraction, lower cost",
    },
    {
      name: "Descript",
      strength: "Audio editing features",
      weakness: "Complex interface, expensive",
      ourAdvantage: "Simpler UX, focus on productivity",
    },
    {
      name: "Google Speech-to-Text",
      strength: "Good accuracy, Google ecosystem",
      weakness: "No task management, developer-focused",
      ourAdvantage: "Complete productivity solution",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AuraTranscribe
                </h1>
                <p className="text-sm text-gray-600 font-medium">Investment Opportunity</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-green-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">$25K Investment</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">26+ Validated Users</span>
                </div>
              </div>

              <Button variant="outline" asChild className="hover:bg-gray-50 transition-colors bg-transparent">
                <Link href="/">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Home
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
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

      {/* Enhanced Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200 px-6 py-2 text-base font-medium shadow-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Investment Opportunity • Final Year Project • Real User Validation
            </Badge>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              $25,000 Investment
              <span className="block">Opportunity</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              We need exactly $25,000 to transform our working prototype into a global AI platform. Strategic investment
              for 5-8% equity in a proven concept with 26+ validated users.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
              >
                <Link href="/contact">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Contact for Investment
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-gray-50 text-lg px-10 py-4 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="tel:+923191991828">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Nayab for Investment
                </a>
              </Button>
            </div>

            {/* Investment Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-green-600 mb-2">$25,000</div>
                <div className="text-sm text-gray-600">Investment Amount</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">5-8%</div>
                <div className="text-sm text-gray-600">Equity Offered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="text-3xl font-bold text-purple-600 mb-2">26+</div>
                <div className="text-sm text-gray-600">Validated Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Investment Highlights */}
      <section className="py-24 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Investment Highlights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real Investment Highlights</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Proven prototype with validated users, academic excellence, and clear market opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${highlight.color}`}></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="text-3xl font-bold text-gray-900 mb-3">{highlight.value}</div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{highlight.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Scaling Strategy */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Rocket className="w-4 h-4 mr-2" />
              Scaling Strategy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven Scaling Strategy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From university prototype to global platform - we have a clear roadmap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 to-orange-500"></div>

            {[
              {
                phase: "Phase 1: Mobile Launch",
                description: "iOS/Android apps, improved UI, 95% accuracy",
                timeline: "Months 1-3",
                color: "from-green-600 to-blue-600",
                number: "1",
              },
              {
                phase: "Phase 2: Market Expansion",
                description: "Multi-language, enterprise features, partnerships",
                timeline: "Months 4-8",
                color: "from-blue-600 to-purple-600",
                number: "2",
              },
              {
                phase: "Phase 3: Global Scale",
                description: "International markets, advanced AI, team features",
                timeline: "Months 9-12",
                color: "from-purple-600 to-pink-600",
                number: "3",
              },
              {
                phase: "Phase 4: Market Leader",
                description: "10,000+ users, revenue growth, Series A ready",
                timeline: "Year 2+",
                color: "from-orange-600 to-red-600",
                number: "4",
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group relative z-10"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-2xl">{phase.number}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{phase.phase}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">{phase.timeline}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Investment Details */}
      <section className="py-24 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <PieChart className="w-4 h-4 mr-2" />
              Investment Analysis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Detailed Investment Information</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive analysis of our opportunity, market position, and growth strategy
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
              <TabsTrigger
                value="overview"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Use of Funds
              </TabsTrigger>
              <TabsTrigger
                value="market"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Market
              </TabsTrigger>
              <TabsTrigger
                value="competition"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Competition
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Investment Terms</CardTitle>
                        <CardDescription>Real terms based on our current needs and valuation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { label: "Investment Amount", value: "$25,000", color: "text-green-600" },
                      { label: "Equity Offered", value: "5-8%", color: "text-blue-600" },
                      { label: "Valuation", value: "$312K - $500K", color: "text-purple-600" },
                      { label: "Investment Type", value: "Seed/Angel", color: "text-orange-600" },
                    ].map((term, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="font-medium text-gray-700">{term.label}</span>
                        <span className={`text-lg font-bold ${term.color}`}>{term.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Our Competitive Advantages</CardTitle>
                        <CardDescription>Why AuraTranscribe stands out in the market</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {competitiveAdvantages.map((advantage, index) => {
                        const Icon = advantage.icon
                        return (
                          <div key={index} className="flex items-start space-x-4 group">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">{advantage.title}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="funding" className="mt-8">
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Detailed Use of $25,000 Investment</CardTitle>
                      <CardDescription className="text-base">
                        Strategic allocation based on our actual development and scaling needs
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {fundingAllocation.map((allocation, index) => (
                      <div
                        key={index}
                        className="space-y-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${allocation.gradient}`}></div>
                            <span className="font-bold text-lg text-gray-900">{allocation.category}</span>
                          </div>
                          <span className="font-bold text-2xl text-blue-600">{allocation.amount}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <Progress value={allocation.percentage} className="flex-1 h-4 bg-gray-200" />
                          <span className="text-sm font-bold w-12 text-gray-700">{allocation.percentage}%</span>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed pl-7">{allocation.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Target className="w-6 h-6 mr-3 text-blue-600" />
                      Expected Outcomes with Funding
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {[
                          "Scale to 500+ active users within 6 months",
                          "Launch mobile apps (iOS/Android)",
                          "Improve transcription accuracy to 95%+",
                        ].map((outcome, index) => (
                          <div key={index} className="flex items-center text-sm group">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {[
                          "Establish partnerships with educational institutions",
                          "Generate revenue through premium subscriptions",
                          "Prepare for Series A funding round",
                        ].map((outcome, index) => (
                          <div key={index} className="flex items-center text-sm group">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="market" className="mt-8">
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Target Market Analysis</CardTitle>
                      <CardDescription className="text-base">
                        Real market segments validated through our beta testing and research
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {marketOpportunity.map((market, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                              Market Segment
                            </h4>
                            <p className="text-blue-600 font-bold text-lg">{market.segment}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Target Size</h4>
                            <p className="text-gray-600 font-medium">{market.size}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Primary Need</h4>
                            <p className="text-gray-600 font-medium">{market.need}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Our Validation</h4>
                            <p className="text-green-600 text-sm font-medium">{market.validation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="text-4xl font-bold text-blue-600 mb-3">$18.6B</div>
                      <div className="text-sm text-gray-700 font-medium">AI Transcription Market by 2026</div>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                      <div className="text-4xl font-bold text-green-600 mb-3">26+</div>
                      <div className="text-sm text-gray-700 font-medium">Validated Beta Users</div>
                    </div>
                    <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="text-4xl font-bold text-purple-600 mb-3">Growing</div>
                      <div className="text-sm text-gray-700 font-medium">Interest from Local Organizations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competition" className="mt-8">
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Competitive Analysis</CardTitle>
                      <CardDescription className="text-base">
                        How we differentiate from existing solutions in the market
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {competitorAnalysis.map((competitor, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50"
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          {competitor.name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                            <h4 className="font-bold text-green-700 mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Their Strength
                            </h4>
                            <p className="text-sm text-gray-700 font-medium">{competitor.strength}</p>
                          </div>
                          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-700 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              Their Weakness
                            </h4>
                            <p className="text-sm text-gray-700 font-medium">{competitor.weakness}</p>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              Our Advantage
                            </h4>
                            <p className="text-sm text-gray-700 font-medium">{competitor.ourAdvantage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Award className="w-6 h-6 mr-3 text-blue-600" />
                      Our Unique Position
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold mb-4 text-lg text-gray-900">What Makes Us Different</h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                          {[
                            "Complete productivity workflow (not just transcription)",
                            "AI-powered task extraction and management",
                            "Student-friendly pricing and features",
                            "Modern tech stack with cloud-native architecture",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-4 text-lg text-gray-900">Our Target Advantages</h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                          {[
                            "50-70% lower cost than premium competitors",
                            "Better mobile experience than existing solutions",
                            "Focus on productivity, not just transcription",
                            "Academic backing and institutional credibility",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Success Metrics */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              <Award className="w-4 h-4 mr-2" />
              Success Metrics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proven Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real data from our beta testing and academic performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                value: "26+",
                label: "Beta Users (Students, Faculty, Coaches)",
                color: "from-blue-600 to-purple-600",
              },
              {
                icon: Target,
                value: "87-90%",
                label: "Transcription Accuracy Achieved",
                color: "from-green-600 to-blue-600",
              },
              {
                icon: Award,
                value: "3.68",
                label: "Team Average GPA",
                color: "from-purple-600 to-pink-600",
              },
              {
                icon: TrendingUp,
                value: "Growing",
                label: "Interest from Organizations",
                color: "from-orange-600 to-red-600",
              },
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{metric.value}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{metric.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-base">
              <Rocket className="w-5 h-5 mr-2" />
              Investment Opportunity
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Invest in Proven Student Innovation?
            </h2>

            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join us in scaling our validated prototype with real users, academic backing, and clear market opportunity
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: DollarSign, label: "Investment", value: "$25,000" },
                { icon: Users, label: "Equity Offered", value: "5-8%" },
                { icon: Target, label: "Validated Users", value: "26+" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-green-100 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
              >
                <Link href="/contact">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Contact for Investment
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
                asChild
              >
                <a
                  href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Our Prototype
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
