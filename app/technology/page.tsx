"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Globe,
  Mic,
  ExternalLink,
  Play,
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Smartphone,
  Target,
  Users,
  BarChart3,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  Rocket,
  Star,
  Award,
  Clock,
  Activity,
  Code,
  Sparkles,
  ChevronRight,
  Heart,
  Languages,
} from "lucide-react"
import Link from "next/link"

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("current")
  const [animatedMetrics, setAnimatedMetrics] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)

  // Animate metrics on load
  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setAnimatedMetrics([90, 75, 92, 85])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const currentTechStack = [
    {
      category: "Frontend & Mobile",
      icon: Smartphone,
      technologies: ["Next.js 14", "React 18", "Flutter", "Tailwind CSS", "TypeScript"],
      description: "Lightning-fast responsive web app with native mobile development",
      status: "✅ Production Ready",
      metrics: "99.2% uptime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      technologies: ["AWS Transcribe", "OpenAI GPT-4", "spaCy NLP", "Custom ML Models", "TensorFlow"],
      description: "State-of-the-art AI with 87-90% accuracy and intelligent task extraction",
      status: "✅ AI-Powered",
      metrics: "2.3s avg response",
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Backend & Cloud",
      icon: Cloud,
      technologies: ["Firebase", "Cloudflare R2", "Heroku", "Google Cloud", "Redis Cache"],
      description: "Enterprise-grade scalable architecture handling thousands of requests",
      status: "✅ Scalable",
      metrics: "Auto-scaling enabled",
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Data & Security",
      icon: Database,
      technologies: ["Firestore", "Cloud Storage", "Real-time Sync", "End-to-End Encryption"],
      description: "Bank-level security with real-time data synchronization",
      status: "✅ Secure",
      metrics: "256-bit encryption",
      color: "from-orange-500 to-red-500",
    },
  ]

  const plannedUpgrades = [
    {
      category: "Next-Gen AI Models",
      icon: Brain,
      improvements: [
        "95%+ transcription accuracy",
        "Real-time multilingual support",
        "Emotion & sentiment analysis",
        "Speaker identification",
        "Custom vocabulary training",
      ],
      timeline: "Q1 2024",
      investment: "$8,000",
      impact: "3x accuracy improvement",
      color: "from-violet-500 to-purple-600",
    },
    {
      category: "Native Mobile Apps",
      icon: Smartphone,
      improvements: [
        "iOS App Store launch",
        "Android Play Store launch",
        "Offline transcription mode",
        "Push notifications & alerts",
        "Apple Watch integration",
      ],
      timeline: "Q2 2024",
      investment: "$6,000",
      impact: "10x user accessibility",
      color: "from-blue-500 to-indigo-600",
    },
    {
      category: "Enterprise Platform",
      icon: Users,
      improvements: [
        "Team collaboration workspace",
        "Advanced admin dashboard",
        "Custom API integrations",
        "White-label solutions",
        "Enterprise SSO",
      ],
      timeline: "Q3 2024",
      investment: "$5,000",
      impact: "B2B market entry",
      color: "from-emerald-500 to-green-600",
    },
    {
      category: "Global Infrastructure",
      icon: Globe,
      improvements: [
        "Multi-region deployment",
        "Edge computing optimization",
        "99.99% uptime guarantee",
        "Auto-scaling architecture",
        "Global CDN network",
      ],
      timeline: "Q4 2024",
      investment: "$10,000",
      impact: "Worldwide availability",
      color: "from-orange-500 to-amber-600",
    },
  ]

  const performanceMetrics = [
    {
      label: "Transcription Accuracy",
      current: "87-90%",
      target: "95%+",
      progress: 90,
      icon: Target,
      improvement: "+8% planned",
      color: "text-blue-600",
    },
    {
      label: "Processing Speed",
      current: "<3 sec",
      target: "<1 sec",
      progress: 75,
      icon: Zap,
      improvement: "3x faster",
      color: "text-purple-600",
    },
    {
      label: "User Satisfaction",
      current: "4.6/5",
      target: "4.8/5",
      progress: 92,
      icon: Heart,
      improvement: "+0.2 target",
      color: "text-pink-600",
    },
    {
      label: "System Uptime",
      current: "99.2%",
      target: "99.9%",
      progress: 85,
      icon: Shield,
      improvement: "+0.7% SLA",
      color: "text-green-600",
    },
  ]

  const userTestimonials = [
    {
      user: "Dr. Sarah Chen",
      role: "University Professor",
      feedback:
        "Revolutionary for lecture transcription. The AI task extraction saves me hours every week. Can't wait for the mobile app!",
      rating: 4.8,
      avatar: "👩‍🏫",
      usage: "15+ hours/week",
      feature: "Lecture Transcription",
    },
    {
      user: "Marcus Rodriguez",
      role: "Content Creator",
      feedback:
        "Game-changer for my podcast workflow. The accuracy is incredible and it catches nuances other tools miss completely.",
      rating: 4.7,
      avatar: "🎙️",
      usage: "20+ recordings/month",
      feature: "Podcast Processing",
    },
    {
      user: "Jennifer Walsh",
      role: "Executive Coach",
      feedback:
        "My clients love the session summaries. This tool has transformed how I deliver value. Premium features would be amazing!",
      rating: 4.9,
      avatar: "💼",
      usage: "50+ sessions/month",
      feature: "Coaching Sessions",
    },
  ]

  const liveStats = [
    { label: "Active Users", value: "26+", trend: "+15%", icon: Users },
    { label: "Hours Transcribed", value: "1,247", trend: "+23%", icon: Clock },
    { label: "Tasks Extracted", value: "3,891", trend: "+31%", icon: CheckCircle },
    { label: "Accuracy Rate", value: "89.3%", trend: "+2.1%", icon: Target },
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
                <p className="text-sm text-gray-600 font-medium">Technology & Innovation</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live Prototype</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">26+ Active Users</span>
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
                  className="flex items-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Live Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-6 py-2 text-base font-medium shadow-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Working Prototype • 26+ Validated Users • Ready to Scale
            </Badge>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              From Prototype to
              <span className="block">Global Platform</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              We've built and validated an AI-powered transcription platform with real users. Now we're ready to scale
              with cutting-edge technology, mobile apps, and enterprise features.
            </p>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {liveStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                    <div className="flex items-center justify-center text-xs text-green-600 font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.trend}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
              >
                <a
                  href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Experience Live Demo
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 hover:bg-gray-50 text-lg px-8 py-4 bg-transparent"
              >
                <Link href="/investment">
                  <Rocket className="w-5 h-5 mr-2" />
                  View Investment Plan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Performance Metrics */}
      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Activity className="w-4 h-4 mr-2" />
              Live Performance Data
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proven Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time data from our working prototype with 26+ active beta users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color === "text-blue-600" ? "from-blue-500 to-blue-600" : metric.color === "text-purple-600" ? "from-purple-500 to-purple-600" : metric.color === "text-pink-600" ? "from-pink-500 to-pink-600" : "from-green-500 to-green-600"} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        Target: {metric.target}
                      </Badge>
                    </div>

                    <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.current}</div>
                    <div className="text-sm text-gray-600 mb-4 font-medium">{metric.label}</div>

                    <div className="space-y-3">
                      <Progress value={isVisible ? animatedMetrics[index] : 0} className="h-3 bg-gray-100" />
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Current</span>
                        <span className="text-green-600 font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {metric.improvement}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Code className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Current vs Future Technology</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              What we've built and what we're building next with strategic investment
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
              <TabsTrigger
                value="current"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Current Stack
              </TabsTrigger>
              <TabsTrigger
                value="planned"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                Planned Upgrades
              </TabsTrigger>
              <TabsTrigger
                value="feedback"
                className="text-base font-medium py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                User Feedback
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentTechStack.map((stack, index) => {
                  const Icon = stack.icon
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30 group overflow-hidden"
                    >
                      <div className={`h-2 bg-gradient-to-r ${stack.color}`}></div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-r ${stack.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold">{stack.category}</CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge className="bg-green-100 text-green-800 text-xs font-medium">
                                  {stack.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 mb-4 leading-relaxed">{stack.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500 font-medium">Performance:</span>
                          <span className="text-sm font-bold text-blue-600">{stack.metrics}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {stack.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs font-medium px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="planned" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plannedUpgrades.map((upgrade, index) => {
                  const Icon = upgrade.icon
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-2xl transition-all duration-500 border-2 border-blue-200/50 shadow-lg bg-gradient-to-br from-white to-blue-50/30 group overflow-hidden"
                    >
                      <div className={`h-3 bg-gradient-to-r ${upgrade.color}`}></div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-r ${upgrade.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold">{upgrade.category}</CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge className="bg-blue-100 text-blue-800 text-xs font-medium">
                                  {upgrade.investment}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {upgrade.timeline}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Expected Impact:</span>
                            <span className="text-sm font-bold text-green-600">{upgrade.impact}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {upgrade.improvements.map((improvement, impIndex) => (
                            <div key={impIndex} className="flex items-center text-sm group/item">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 font-medium">{improvement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {userTestimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{testimonial.avatar}</div>
                          <div>
                            <h3 className="font-bold text-gray-900">{testimonial.user}</h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold">{testimonial.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm italic mb-6 leading-relaxed">"{testimonial.feedback}"</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Usage:</span>
                          <span className="font-medium text-blue-600">{testimonial.usage}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Primary Feature:</span>
                          <Badge variant="secondary" className="text-xs">
                            {testimonial.feature}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="max-w-4xl mx-auto border-2 border-green-200/50 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Top User Requests</h3>
                    <p className="text-gray-600">Features our users are actively requesting and willing to pay for</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        { icon: Smartphone, text: "Native mobile applications (iOS/Android)", priority: "High" },
                        { icon: Languages, text: "Multi-language transcription support", priority: "High" },
                        { icon: Target, text: "Enhanced transcription accuracy (95%+)", priority: "Critical" },
                      ].map((request, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                          <div className="flex items-center space-x-3">
                            <request.icon className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">{request.text}</span>
                          </div>
                          <Badge
                            className={`text-xs ${request.priority === "Critical" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"}`}
                          >
                            {request.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {[
                        { icon: Users, text: "Team collaboration & workspace features", priority: "Medium" },
                        { icon: DollarSign, text: "Premium subscription tiers", priority: "High" },
                        { icon: BarChart3, text: "Advanced analytics & reporting dashboard", priority: "Medium" },
                      ].map((request, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                          <div className="flex items-center space-x-3">
                            <request.icon className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">{request.text}</span>
                          </div>
                          <Badge
                            className={`text-xs ${request.priority === "High" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"}`}
                          >
                            {request.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Scaling Roadmap */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Rocket className="w-4 h-4 mr-2" />
              Growth Roadmap
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Scaling to Global Platform</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our strategic roadmap from 26 validated users to 10,000+ users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 to-orange-500"></div>

            {[
              {
                phase: "Current Phase",
                users: "26+ Users",
                description: "Working prototype with validated user feedback and proven technology stack",
                icon: Zap,
                color: "from-green-500 to-emerald-600",
                status: "✅ Complete",
                metrics: ["89.3% accuracy", "99.2% uptime", "4.6/5 rating"],
              },
              {
                phase: "Phase 1",
                users: "500+ Users",
                description: "Mobile app launch, enhanced AI accuracy, and improved user experience",
                icon: Smartphone,
                color: "from-blue-500 to-indigo-600",
                status: "🚀 Q2 2024",
                metrics: ["95% accuracy", "Mobile apps", "Multi-language"],
              },
              {
                phase: "Phase 2",
                users: "2,500+ Users",
                description: "Enterprise features, team collaboration, and global infrastructure deployment",
                icon: Globe,
                color: "from-purple-500 to-violet-600",
                status: "📈 Q3-Q4 2024",
                metrics: ["Enterprise ready", "Global CDN", "Team features"],
              },
              {
                phase: "Phase 3",
                users: "10,000+ Users",
                description: "Market leadership, Series A funding readiness, and international expansion",
                icon: Award,
                color: "from-orange-500 to-red-600",
                status: "🎯 2025",
                metrics: ["Market leader", "Series A ready", "Global presence"],
              },
            ].map((phase, index) => {
              const Icon = phase.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group relative z-10"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <Badge className="mb-4 bg-gray-100 text-gray-800 font-medium">{phase.status}</Badge>

                    <h3 className="font-bold text-xl text-gray-900 mb-2">{phase.phase}</h3>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {phase.users}
                    </div>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">{phase.description}</p>

                    <div className="space-y-2">
                      {phase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-center text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          <span className="text-gray-700 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-base">
              <Sparkles className="w-5 h-5 mr-2" />
              Investment Opportunity
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Scale Proven Technology?</h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We've validated the concept with real users and proven technology. Now help us build the global platform
              that millions of users are waiting for.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Users, label: "Validated Users", value: "26+" },
                { icon: Target, label: "Accuracy Rate", value: "89.3%" },
                { icon: TrendingUp, label: "Growth Rate", value: "+23%" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
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
                <a
                  href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Experience Our Prototype
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
                asChild
              >
                <Link href="/investment">
                  <DollarSign className="w-5 h-5 mr-2" />
                  $25K Investment Details
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
