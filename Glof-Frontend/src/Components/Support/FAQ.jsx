import React, { Component } from "react";
import { Link } from "react-router-dom";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      searchTerm: "",
    };
  }

  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { activeIndex, searchTerm } = this.state;

    const faqCategories = [
      {
        title: "General Information",
        icon: "🌊",
        questions: [
          {
            question: "What is a Glacial Lake Outburst Flood (GLOF)?",
            answer:
              "A Glacial Lake Outburst Flood (GLOF) is a type of flood that occurs when water dammed by a glacier or moraine is released suddenly. This can happen due to erosion, avalanches of rock or snow, or the collapse of moraine dams due to water pressure.",
          },
          {
            question: "How does the GLOF Early Warning System work?",
            answer:
              "Our system uses a network of sensors placed in glacial lakes to monitor water levels, temperature, and seismic activity. When abnormal patterns are detected, the system sends alerts to authorities and communities at risk through multiple channels including emails.",
          },
          {
            question: "Which regions are covered by this warning system?",
            answer:
              "Currently, our system monitors high-risk areas in India. We're continuously expanding to other vulnerable regions based on glacial retreat patterns and population density in downstream areas.",
          },
        ],
      },
      {
        title: "Alerts & Notifications",
        icon: "⚠️",
        questions: [
          {
            question: "How will I receive GLOF alerts?",
            answer:
              "You can receive alerts through email and in some areas, through community warning sirens. You will get alert messages based on your region.",
          },
          {
            question: "What should I do when I receive a GLOF alert?",
            answer:
              "If you receive a GLOF alert, move to higher ground immediately. Follow evacuation routes if provided. Do not attempt to cross flowing water that is above ankle depth. Stay tuned to official channels for further instructions.",
          },
          {
            question: "How often are false alarms issued?",
            answer:
              "Our system has a false positive rate of less than 2%. While we strive for accuracy, we recommend treating all alerts as genuine threats to ensure safety. Regular system tests are conducted to maintain reliability.",
          },
        ],
      },
      {
        title: "Technical Support",
        icon: "🔧",
        questions: [
          {
            question: "How do I report a problem with the alert system?",
            answer:
              "You can report issues through the 'Contact Support' page on our website or mobile app. Please include specific details about the problem, your location, and if possible, screenshots of any error messages.",
          },
          {
            question: "What should I do if I'm not receiving alerts?",
            answer:
              "First, ensure your region is correctly set. Verify that your contact information is up to date. If problems persist, contact our support team for assistance.",
          },
          {
            question: "Is there a mobile app available?",
            answer:
              "No, we don't have any mobile app yet, but we are working on that also",
          },
        ],
      },
      {
        title: "Account Management",
        icon: "👤",
        questions: [
          {
            question: "How do I create an account?",
            answer:
              "Click on the 'Sign Up' button on our website or mobile app. You'll need to provide your name, email address and region. Account registration is free for individuals.",
          },
          
        ],
      },
    ];

    // Filter FAQs based on search term
    const filteredCategories = faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="w-full bg-gradient-to-r from-cyan-700 to-blue-500 px-4 md:px-8 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3 flex-shrink-0 text-white">
            <span className="text-3xl select-none">🌊</span>
            <span className="font-bold text-lg tracking-wide select-none">
              GLOF Early Warning System
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/overview"
              className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Overview
            </Link>
            <Link
              to="/recent-alerts"
              className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Recent Alerts
            </Link>
            <Link
              to="/historical-reports"
              className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Historical Reports
            </Link>
            <Link
              to="/support"
              className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Support
            </Link>
            <Link
              to="/login"
              className="ml-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-5 py-2 rounded shadow transition backdrop-blur text-center"
            >
              LOGIN
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about Glacial Lake Outburst Floods
              and our early warning system.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-6 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={this.handleSearchChange}
              />
              <button className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">{category.icon}</span>
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const faqIndex = `${categoryIndex}-${index}`;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          className="w-full px-6 py-4 text-left focus:outline-none"
                          onClick={() => this.toggleFAQ(faqIndex)}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">
                              {item.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                                activeIndex === faqIndex ? "transform rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>

                        <div
                          className={`px-6 pb-4 pt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex === faqIndex
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700">No results found</h3>
              <p className="text-gray-500 mt-2">
                Try different search terms or browse the categories above
              </p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our support team is here to help you with any questions about glacial
              lake outburst floods and our early warning system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/support"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              >
                Contact Support
              </Link>
              
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">GLOF Early Warning System</h3>
              <p className="text-gray-300">
                Protecting communities from glacial lake outburst floods through
                advanced monitoring and early warnings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/overview"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recent-alerts"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Recent Alerts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/historical-reports"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Historical Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i> 123 Climate Street,
                Mountain City
              </p>
              <p className="text-gray-300 mb-2">
                <i className="fas fa-phone mr-2"></i> +1 (555) 123-4567
              </p>
              <p className="text-gray-300">
                <i className="fas fa-envelope mr-2"></i>{" "}
                <a href="mailto:support@glofwarning.org" className="hover:underline">
                  support@glofwarning.org
                </a>
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 GLOF Early Warning System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default FAQ;
