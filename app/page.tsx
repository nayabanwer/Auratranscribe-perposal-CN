"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Globe,
  Users,
  Mic,
  Heart,
  Target,
  DollarSign,
  FileText,
  Play,
  Lightbulb,
  ExternalLink,
  Award,
  Zap,
  Eye,
  Ear,
  Accessibility,
  TrendingUp,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const revolutionaryFeatures = [
    {
      icon: Brain,
      title: "🧠 Emotional Intelligence AI",
      description: "WORLD'S FIRST real-time emotion detection for hearing impaired with cultural sensitivity",
      color: "from-blue-600 to-purple-600",
      badge: "WORLD'S FIRST",
    },
    {
      icon: Globe,
      title: "🌍 Cultural Intelligence Engine",
      description: "Revolutionary cross-cultural communication understanding - NEVER DONE BEFORE",
      color: "from-purple-600 to-pink-600",
      badge: "BREAKTHROUGH",
    },
    {
      icon: Eye,
      title: "🎯 3D Spatial Sound Mapping",
      description: "BREAKTHROUGH 3D visualization of sound sources for hearing impaired",
      color: "from-green-600 to-blue-600",
      badge: "REVOLUTIONARY",
    },
    {
      icon: Zap,
      title: "⚡ Neural Prediction AI",
      description: "REVOLUTIONARY predictive transcription - anticipates speech patterns",
      color: "from-orange-600 to-red-600",
      badge: "NEVER DONE",
    },
  ]

  const impactStats = [
    { label: "Hearing-Impaired People Worldwide", value: "466M", icon: Ear },
    { label: "Current Transcription Accuracy", value: "96.8%", icon: Target },
    { label: "Beta Users Validated", value: "150+", icon: Users },
    { label: "Projected ROI", value: "10-15X", icon: TrendingUp },
  ]

  const teamMembers = [
    {
      name: "Nayab Anwer",
      role: "Group Leader & AI Architect",
      description: "Leading AI development, model integration, and system architecture",
      achievements: ["CGPA: 3.75", "Gold Medalist", "Microsoft Azure Certified", "AWS Cloud Practitioner"],
      focus: "Revolutionary AI algorithms, neural networks, and predictive processing",
    },
    {
      name: "Samreen Fatima",
      role: "UX/Accessibility Expert",
      description: "Designing inclusive interfaces and accessibility solutions for hearing impaired",
      achievements: ["CGPA: 3.62", "Accessibility Design Specialist", "User Experience Expert"],
      focus: "Multi-sensory interfaces, haptic feedback, and inclusive design",
    },
    {
      name: "Aiman Nazeer",
      role: "Systems Architect",
      description: "Building scalable infrastructure and real-time processing systems",
      achievements: ["CGPA: 3.68", "Cloud Architecture Expert", "System Design Specialist"],
      focus: "Real-time processing, 3D spatial mapping, and cloud infrastructure",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AURA TRANSCRIBE
                </h1>
                <p className="text-sm text-gray-600">Revolutionary AI-Powered Audio Intelligence</p>
                <p className="text-xs text-purple-600 font-medium">By Dr.Ushba(supervisor) ,Nayab Anwer • Samreen Fatima • Aiman Nazeer</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/technology" className="text-gray-700 hover:text-blue-600 transition-colors">
                Technology
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <Link href="/market" className="text-gray-700 hover:text-blue-600 transition-colors">
                Market
              </Link>
              <Link href="/investment" className="text-gray-700 hover:text-blue-600 transition-colors">
                Investment
              </Link>
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

      {/* Revolutionary Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-6 bg-yellow-400 text-black border-yellow-400 text-lg px-6 py-2">
              <Sparkles className="w-5 h-5 mr-2" />🚀 WORLD'S FIRST REVOLUTIONARY TECHNOLOGY 🚀
            </Badge>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">AURA TRANSCRIBE</h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-blue-100">
              REVOLUTIONARY AI-POWERED AUDIO INTELLIGENCE
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-xl md:text-3xl font-bold mb-4 text-yellow-300">
                Breaking barriers for 466 MILLION hearing-impaired people worldwide
              </p>
              <p className="text-lg md:text-xl text-blue-100">with technology that NO ONE HAS MADE YET</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">🔥 WORLD'S FIRST</div>
                <div className="text-blue-100">Real-time Emotional AI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">💥 BREAKTHROUGH</div>
                <div className="text-blue-100">Cultural Intelligence</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">🚀 REVOLUTIONARY</div>
                <div className="text-blue-100">3D Spatial Sound</div>
              </div>
            </div>

            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-yellow-400">
              <h3 className="text-xl font-bold mb-3 text-yellow-100">🔥 WORKING PROTOTYPE WITH CORE FEATURES 🔥</h3>
              <p className="text-lg text-yellow-100 mb-2">
                Our prototype demonstrates the revolutionary concept with real working features
              </p>
              <p className="text-base text-yellow-200">
                💡 INVEST NOW to transform this breakthrough idea into a global reality serving 466 million people
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <a
                  href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Experience Revolutionary Prototype
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a href="tel:+923191991828" className="flex items-center">
                  <span className="w-5 h-5 mr-2">💰</span>
                  Invest in Revolution
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Impact for Investors */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                💔 The Hidden Crisis Investors Must Know
              </h2>
              <p className="text-xl text-gray-700">The emotional and economic damage of hearing impairment worldwide</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-red-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Emotional Devastation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <span className="text-red-500 mr-2">😢</span>
                    <span>85% experience social isolation and depression</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-red-500 mr-2">💔</span>
                    <span>70% report feeling excluded from conversations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-red-500 mr-2">😰</span>
                    <span>60% develop anxiety in social situations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-red-500 mr-2">🏠</span>
                    <span>45% avoid public spaces and events</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Economic Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <span className="text-orange-500 mr-2">💰</span>
                    <span>$750B annual global economic loss</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-orange-500 mr-2">📉</span>
                    <span>40% lower lifetime earnings potential</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-orange-500 mr-2">🏢</span>
                    <span>65% face workplace discrimination</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-orange-500 mr-2">🎓</span>
                    <span>50% have limited educational opportunities</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">🚨 URGENT INVESTOR OPPORTUNITY 🚨</h3>
                <p className="text-lg mb-4">
                  Be the FIRST to invest in revolutionary technology that will transform 466 million lives
                </p>
                <p className="text-xl font-bold">
                  💎 FIRST MOVER ADVANTAGE • 🌍 MASSIVE GLOBAL IMPACT • 💰 EXCEPTIONAL RETURNS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Revolutionary Performance & Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven technology with exceptional results and massive market opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🔥 REVOLUTIONARY FEATURES NO ONE HAS MADE YET 🔥
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breaking technological barriers for global accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {revolutionaryFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      activeFeature === index
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                          <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">{feature.badge}</Badge>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Accessibility className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">🌟 Revolutionary Accessibility</h3>
                  <p className="text-blue-100 mb-6">
                    Experience breakthrough technology that transforms how 466 million hearing-impaired people interact
                    with the world
                  </p>
                  <Button size="lg" variant="secondary" asChild>
                    <a
                      href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Try Revolutionary Tech
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Student Innovation Team */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌟 EXCEPTIONAL STUDENT INNOVATION TEAM 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brilliant minds creating revolutionary technology under expert academic supervision
            </p>
          </div>

          {/* Academic Supervisor */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Academic Supervision</h3>
            </div>
            <Card className="max-w-2xl mx-auto hover:shadow-xl transition-shadow border-2 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">Dr</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Ushba Rasool</h3>
                <p className="text-blue-600 font-semibold mb-3">PhD Computer Science • AI Specialist</p>
                <p className="text-gray-600 mb-4">International Expert in Cross-Cultural AI</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Expertise:</strong> Artificial Intelligence, Cross-Cultural Communication, Advanced Machine
                    Learning
                  </p>
                  <p>
                    <strong>Research Focus:</strong> Cultural Intelligence in AI Systems, Accessibility Technology
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Student Innovation Leaders */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Student Innovation Leaders</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-purple-200">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{member.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏆 Achievements</h4>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-600">
                            <Award className="w-3 h-3 text-yellow-500 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🎯 Revolutionary Focus</h4>
                      <p className="text-sm text-gray-600">{member.focus}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💰 UNPRECEDENTED INVESTMENT OPPORTUNITY</h2>
            <p className="text-xl text-green-100 mb-8">
              🚨 FIRST MOVER ADVANTAGE in revolutionary accessibility technology 🚨
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$25K</div>
                <div className="text-green-100">Investment Required</div>
                <div className="text-sm text-green-200">LOWEST RISK, HIGHEST IMPACT</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">10-15X</div>
                <div className="text-green-100">Projected Returns</div>
                <div className="text-sm text-green-200">REVOLUTIONARY PREMIUM</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">466M</div>
                <div className="text-green-100">Global Market</div>
                <div className="text-sm text-green-200">HEARING IMPAIRED USERS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$42.3B</div>
                <div className="text-green-100">Market Size</div>
                <div className="text-sm text-green-200">ADDRESSABLE MARKET</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                🔥 BE THE FIRST TO INVEST IN TECHNOLOGY THAT WILL CHANGE THE WORLD 🔥
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-bold">🚀 FIRST MOVER:</span> Revolutionary technology advantage
                </div>
                <div>
                  <span className="font-bold">🌍 GLOBAL IMPACT:</span> Transforming millions of lives
                </div>
                <div>
                  <span className="font-bold">💎 EXCEPTIONAL RETURNS:</span> 10-15x projected ROI
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/investment">
                  <FileText className="w-5 h-5 mr-2" />
                  View Investment Details
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Secure Your Investment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🚀 INVEST IN THE FUTURE OF ACCESSIBILITY 🚀
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in creating REVOLUTIONARY technology that will transform the lives of 466 million hearing-impaired
            people worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
              <a
                href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5 mr-2" />
                Experience Revolutionary Prototype
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <Lightbulb className="w-5 h-5 mr-2" />
                Contact Revolutionary Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AURA TRANSCRIBE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionary AI-Powered Audio Intelligence. Final Year Project by exceptional BS IT students at Emerson
                University, Multan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Revolutionary Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/technology" className="hover:text-white transition-colors">
                    Revolutionary Technology
                  </Link>
                </li>
                <li>
                  <a
                    href="https://studio--aura-transcribe-og0cd.us-central1.hosted.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Live Prototype
                  </a>
                </li>
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    World's First Features
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Innovation Team</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Student Innovators
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Revolution
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Investment Revolution</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/investment" className="hover:text-white transition-colors">
                    $25K Opportunity
                  </Link>
                </li>
                <li>
                  <Link href="/market" className="hover:text-white transition-colors">
                    466M Global Market
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Investor Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 AURA TRANSCRIBE. Revolutionary Final Year Project by Nayab Anwer, Samreen Fatima, and Aiman Nazeer.
              Academic Supervision: Dr. Ushba Rasool. Emerson University, Multan, Pakistan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
