"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  ExternalLink,
  Play,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Globe,
  Brain,
  Palette,
  Database,
  BookOpen,
  Star,
  Trophy,
  Target,
  Heart,
  Code,
  Sparkles,
  ChevronRight,
  Rocket,
  Lightbulb,
  Building,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Nayab Anwer",
      role: "Team Lead & Full-Stack Developer",
      description: "Core logic, model integration, mobile interface (Flutter), deployment",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["Python", "TensorFlow", "PyTorch", "AI/ML", "Leadership"],
      achievements: ["CGPA: 3.75", "Gold Medalist", "Microsoft Azure Certified", "AWS Cloud Practitioner"],
      background:
        "3rd year Computer Science student specializing in Artificial Intelligence and Machine Learning. Passionate about using technology to break down barriers and create inclusive experiences.",
      icon: Brain,
      color: "from-blue-600 to-purple-600",
      gradient: "from-blue-50 to-purple-50",
    },
    {
      name: "Samreen Fatima",
      role: "Chief Product Officer & UX Lead",
      description:
        "Designing accessible user experiences and leading product development with focus on inclusive design",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["React", "UX Design", "Accessibility", "User Research", "Figma"],
      achievements: [
        "Volunteer web developer for 3 disability organizations",
        "Vice President of Women in Technology",
        "UX Design intern at regional tech startup",
        "GPA: 3.7/4.0 with HCI specialization",
      ],
      background:
        "3rd year Computer Science student specializing in Human-Computer Interaction. Dedicated to creating technology that works for everyone, not just the majority.",
      icon: Palette,
      color: "from-purple-600 to-pink-600",
      gradient: "from-purple-50 to-pink-50",
    },
    {
      name: "Aimen Nazeer",
      role: "Chief Engineering Officer & Systems Architect",
      description:
        "Building scalable backend systems and infrastructure with expertise in cloud computing and security",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["Node.js", "PostgreSQL", "AWS", "Docker", "Security"],
      achievements: [
        "Software engineering intern at tech company",
        "Teaching assistant for Database Systems",
        "Outstanding Student in Systems Engineering",
        "GPA: 3.9/4.0 with systems specialization",
      ],
      background:
        "3rd year Computer Science student specializing in Systems Engineering. Passionate about building robust, scalable systems that support meaningful social impact.",
      icon: Database,
      color: "from-green-600 to-blue-600",
      gradient: "from-green-50 to-blue-50",
    },
    {
      name: "Dr. Ushba",
      role: "Academic Supervisor & Research Advisor",
      description: "Providing academic guidance and cross-cultural AI expertise with international research background",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["Cross-Cultural AI", "Research", "International Markets", "Academic Leadership"],
      achievements: [
        "PhD in Computer Science from Beijing University",
        "25+ peer-reviewed publications",
        "Keynote speaker at 10+ international conferences",
        "Expert in cross-cultural AI applications",
      ],
      background:
        "Professor of Computer Science at Emerson University with expertise in cross-cultural AI and international education technology. Fluent in English, Mandarin, and Urdu.",
      icon: Globe,
      color: "from-orange-600 to-red-600",
      gradient: "from-orange-50 to-red-50",
    },
  ]

  const universitySupport = [
    {
      title: "Technology Transfer Office",
      description: "Guidance for commercialization and intellectual property protection",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Research Computing Resources",
      description: "High-performance computing cluster for AI model training",
      icon: Brain,
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Academic Advisory Committee",
      description: "Faculty oversight and research methodology guidance",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Innovation Programs",
      description: "Entrepreneurship support and startup incubation",
      icon: Trophy,
      color: "from-orange-500 to-amber-600",
    },
  ]

  const teamValues = [
    {
      title: "Student Innovation First",
      description: "Fresh perspectives and creative approaches to solving accessibility challenges",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Accessibility Without Compromise",
      description: "Universal design principles ensuring our platform serves all users effectively",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Academic Excellence",
      description: "Research-based development with peer review validation and university support",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Cross-Cultural Intelligence",
      description: "Global perspective with understanding of diverse communication patterns",
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const teamStats = [
    { label: "Team Members", value: "4", unit: "experts", icon: Users },
    { label: "Combined Experience", value: "10+", unit: "years", icon: Clock },
    { label: "Academic Excellence", value: "3.8", unit: "avg GPA", icon: GraduationCap },
    { label: "Research Publications", value: "25+", unit: "papers", icon: BookOpen },
  ]

  const recognitions = [
    {
      title: "University Innovation Challenge",
      description: "Winner of Emerson University Innovation Challenge 2024",
      award: "First Place",
      date: "2024",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Academic Excellence Recognition",
      description: "Team average GPA of 3.8/4.0 with academic honors",
      award: "Dean's List",
      date: "Ongoing",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Research Showcase Featured Project",
      description: "Featured in University Research Showcase",
      award: "Research Excellence",
      date: "2024",
      icon: Star,
      color: "from-green-500 to-blue-500",
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
                <p className="text-sm text-gray-600 font-medium">Our Team</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-green-600">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Student Innovation Team</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-medium">University Backed</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-6 py-2 text-base font-medium shadow-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Student Innovation Team • University Backed
            </Badge>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Exceptional Student
              <span className="block">Innovation Team</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              Talented computer science students from Emerson University with academic excellence, technical expertise,
              and genuine passion for accessibility technology
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                      <span className="text-sm text-gray-600 ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Members */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Innovation Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Each team member brings unique expertise and unwavering commitment to accessibility innovation
            </p>
          </div>

          <div className="space-y-24">
            {teamMembers.map((member, index) => {
              const Icon = member.icon
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Profile Card */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/30 overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
                            <p className="text-blue-600 font-semibold text-lg">{member.role}</p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-8">
                        {/* Background */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                            Background
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{member.background}</p>
                        </div>

                        {/* Technical Skills */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Code className="w-5 h-5 mr-2 text-purple-600" />
                            Key Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-3 py-1"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                            <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                            Achievements
                          </h4>
                          <div className="space-y-3">
                            {member.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-start group">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-700 font-medium leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Profile Image & Summary */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div className="text-center">
                      <div
                        className={`w-64 h-64 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white`}
                      >
                        <div className="text-center">
                          <div className="text-6xl font-bold text-gray-600 mb-2">{member.name.charAt(0)}</div>
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mx-auto`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Values */}
      <section className="py-24 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Heart className="w-4 h-4 mr-2" />
              Our Core Values & Mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Values that drive our student innovation and accessibility mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 group"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className={`w-10 h-10 ${value.color}`} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced University Support */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Building className="w-4 h-4 mr-2" />
              Emerson University Support & Resources
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">University Partnership</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive university backing providing credibility, resources, and guidance for our innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universitySupport.map((support, index) => {
              const Icon = support.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/30 group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${support.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${support.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{support.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{support.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Academic Recognition */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              <Award className="w-4 h-4 mr-2" />
              Academic Recognition & Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recognition & Awards</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our student innovation has received recognition from academic institutions and industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => {
              const Icon = recognition.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm group overflow-hidden"
                >
                  <div className={`h-3 bg-gradient-to-r ${recognition.color}`}></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${recognition.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{recognition.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{recognition.description}</p>
                    <Badge className="bg-yellow-100 text-yellow-800">{recognition.award}</Badge>
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
              <Rocket className="w-5 h-5 mr-2" />
              Join Our Mission
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Join Our Mission to Transform Accessibility
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Support student innovation and help us create technology that makes communication accessible for everyone
            </p>

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
                  Experience Our Work
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
                  <Users className="w-5 h-5 mr-2" />
                  Investment Opportunity
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
