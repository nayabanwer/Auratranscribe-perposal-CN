"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mic,
  ExternalLink,
  Play,
  ArrowRight,
  Mail,
  MapPin,
  Send,
  Calendar,
  DollarSign,
  Users,
  MessageSquare,
  GraduationCap,
  Heart,
  Globe,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investmentAmount: "",
    message: "",
    inquiryType: "investment",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `AuraTranscribe ${formData.inquiryType === "investment" ? "Investment" : "Partnership"} Inquiry`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
${formData.investmentAmount ? `Investment Amount: ${formData.investmentAmount}` : ""}

Message:
${formData.message}

---
Sent from AuraTranscribe Contact Form`

    const mailtoLink = `mailto:nayabkawal955@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Team Leader",
      value: "nayabkawal955@gmail.com",
      phone: "+92 319 1991828",
      description: "Nayab Anwer - Investment discussions, technical development",
    },
    {
      icon: Mail,
      title: "Academic Supervisor",
      value: "Available through university",
      phone: "+86 155 1959 1043",
      description: "Dr. Ushba Tariq - Research collaboration, academic guidance",
    },
    {
      icon: MapPin,
      title: "University Location",
      value: "Emerson University, Multan, Pakistan",
      description: "Our academic base and development center",
    },
    {
      icon: Calendar,
      title: "Project Timeline",
      value: "Final Year Project - Active Development",
      description: "Ready for investment and scaling phase",
    },
  ]

  const teamContacts = [
    {
      name: "Nayab Anwer",
      role: "Team Lead & Full-Stack Developer",
      email: "nayabkawal955@gmail.com",
      phone: "+92 319 1991828",
      focus: "Investment discussions, technical architecture, project leadership",
      achievements: "CGPA: 3.75, Gold Medalist, Microsoft Azure Certified, AWS Cloud Practitioner",
    },
    {
      name: "Samreen Fatima",
      role: "AI/NLP Specialist",
      phone: "+92 309 7248340",
      focus: "AI model development, transcription accuracy, data science",
      achievements: "CGPA: 3.62, AI & Data Science specialization",
    },
    {
      name: "Aimen Nazeer",
      role: "UI/UX Designer & QA Lead",
      phone: "+92 313 7007927",
      focus: "Product design, user experience, mobile interface",
      achievements: "CGPA: 3.68, University UI/UX Design Competition Winner",
    },
    {
      name: "Dr. Ushba Tariq",
      role: "Academic Supervisor",
      phone: "+86 155 1959 1043",
      focus: "Research guidance, international collaboration, AI expertise",
      achievements: "Research Scientist, Zhengzhou University, China",
    },
  ]

  const inquiryTypes = [
    { value: "investment", label: "Investment Opportunity ($25K)", icon: DollarSign },
    { value: "demo", label: "Product Demonstration", icon: Play },
    { value: "academic", label: "Academic Collaboration", icon: GraduationCap },
    { value: "general", label: "General Inquiry", icon: Mail },
  ]

  const investmentHighlights = [
    {
      icon: Award,
      title: "Proven Prototype",
      value: "26+ Users",
      description: "Real validation from faculty and professionals",
    },
    {
      icon: DollarSign,
      title: "Investment Needed",
      value: "$25,000",
      description: "Strategic funding for global scaling",
    },
    {
      icon: Globe,
      title: "Market Opportunity",
      value: "$18.6B",
      description: "AI transcription market by 2026",
    },
    {
      icon: Users,
      title: "Target Users",
      value: "10,000+",
      description: "Goal within 12 months of funding",
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
                <p className="text-sm text-gray-600">Contact & Investment</p>
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
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Ready to Scale • Investment Opportunity • Global Partnership
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Build the Future Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              We've proven our concept with 26+ users. Now we're seeking strategic partners and investors to scale our
              AI platform globally. Join us in transforming how the world processes audio content.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Opportunity Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics and opportunities for strategic investors and partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.value}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Ready to discuss investment, partnership, or collaboration opportunities? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization/Company</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your company or investment firm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.inquiryType === "investment" && (
                    <div>
                      <Label htmlFor="investmentAmount">Investment Interest (Optional)</Label>
                      <Input
                        id="investmentAmount"
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}
                        placeholder="e.g., $25,000 or strategic partnership"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interest in AuraTranscribe. What specific opportunities are you exploring?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message to Team
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Direct Contact Information</CardTitle>
                  <CardDescription>Multiple ways to reach our team for different types of discussions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                            <p className="text-blue-600 font-medium mb-1">{contact.value}</p>
                            {contact.phone && (
                              <a
                                href={`tel:${contact.phone}`}
                                className="text-green-600 font-medium block mb-1 hover:underline"
                              >
                                📞 {contact.phone}
                              </a>
                            )}
                            <p className="text-sm text-gray-600">{contact.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Partner with AuraTranscribe?</CardTitle>
                  <CardDescription>The opportunity for strategic investors and partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <h4 className="font-semibold">Proven Concept</h4>
                        <p className="text-sm text-gray-600">26+ validated users with positive feedback</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold">Global Market</h4>
                        <p className="text-sm text-gray-600">$18.6B AI transcription market opportunity</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold">Academic Excellence</h4>
                        <p className="text-sm text-gray-600">University-backed with international supervision</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-purple-500 mt-1" />
                      <div>
                        <h4 className="font-semibold">Clear Roadmap</h4>
                        <p className="text-sm text-gray-600">Detailed scaling plan from prototype to 10,000+ users</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our team members based on your specific interests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamContacts.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-3">{member.focus}</p>
                  <p className="text-gray-500 text-xs mb-4">{member.achievements}</p>
                  <div className="space-y-2">
                    {member.email && (
                      <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                        <a href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    )}
                    {member.phone && (
                      <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                        <a href={`tel:${member.phone}`}>
                          <span className="mr-2">📞</span>
                          Call
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Audio Intelligence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We've built the foundation. Now we need strategic partners to scale globally. Let's discuss how we can work
            together to capture this massive market opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:nayabkawal955@gmail.com?subject=AuraTranscribe Investment Inquiry">
                <Mail className="w-5 h-5 mr-2" />
                Email Us Directly
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
              <a href="tel:+923191991828">
                <span className="w-5 h-5 mr-2">📞</span>
                Call Nayab Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
