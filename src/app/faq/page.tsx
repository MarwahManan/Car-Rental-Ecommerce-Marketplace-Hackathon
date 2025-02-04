'use client';

import { useState } from 'react';

const faqs = [

  {
    question: 'What documents do I need to rent a car?',
    answer: 'To rent a car, you need a valid driver’s license, a credit card, and proof of insurance. International drivers may also need a passport and international driving permit.',
  },
  {
    question: 'Is insurance included in the rental price?',
    answer: 'Basic insurance coverage is included in the rental price, but you can choose to add extra coverage for more protection during your rental period.',
  },
  {
    question: 'Can I pick up my car at one location and drop it off at another?',
    answer: 'Yes, we offer one-way rentals for an additional fee. You can pick up your car at one location and drop it off at another.',
  },
  {
    question: 'What is the minimum age to rent a car?',
    answer: 'The minimum age to rent a car is typically 21, but drivers under 25 may incur an additional young driver fee.',
  },
  {
    question: 'Can I add an additional driver to my rental?',
    answer: 'Yes, you can add an additional driver to your rental for a small daily fee. They must meet the same requirements as the primary driver.',
  },
  {
    question: 'What happens if I return the car late?',
    answer: 'If you return the car late, you may be charged an additional late fee based on the length of the delay. Please inform us ahead of time if you anticipate being late.',
  },
  {
    question: 'Are there any mileage limits?',
    answer: 'Most of our rentals come with unlimited mileage, but some cars may have a daily mileage limit. Be sure to check the terms of your specific rental agreement.',
  },
  {
    question: 'Can I rent a car with a debit card?',
    answer: 'We primarily accept credit cards for rentals. Debit card rentals are possible but require additional verification and may have restrictions.',
  },
  {
    question: 'What should I do if I get into an accident with the rental car?',
    answer: 'In the event of an accident, please call the local authorities, then contact us immediately to report the incident. We will guide you through the next steps and insurance claims process.',
  },
  {
    question: 'Is there a mileage charge for renting a car for a long trip?',
    answer: 'There is no mileage charge for most long-term rentals, but please review your rental agreement for specific terms or restrictions on mileage for your car.',
  },
  {
    question: 'How can I reset my password?',
    answer: 'To reset your password, go to the login page, click on Forgot Password, and  follow the instructions sent to your email.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact support by using the form below or sending an email to r.manan0786@gmail.com.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription anytime from your account settings.',
  },
];


export default function FAQHelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-blue-700">FAQ & Help Center</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions or contact our support team.</p>
        </div>

        {/* Search FAQ */}
        <div className="mb-8 relative max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-4 top-3 w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found for &quot;{searchQuery}&quot;.</p>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-6">Need further help? Fill out the form below, and we’ll get back to you as soon as possible.</p>
          {!submitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-medium">Thank you! Your message has been sent.</p>
          )}
        </div>
      </div>
    </div>
  );
}