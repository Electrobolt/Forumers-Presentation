import React from 'react';
import './developpers.css';

const Developpers = () => {
  const developerSections = [
    {
      title: "Easy API Integration",
      icon: "fa-code",
      paragraphs: [
        "Forumers provides a developer-friendly API that can be integrated seamlessly into your application. Our detailed documentation and examples make it easy to get started.",
        "With just a few lines of code, you can enable forum management features such as creating communities, organizing categories, and managing posts and comments.",
        "We ensure a smooth integration process with clear guidelines and support for RESTful API standards."
      ]
    },
    {
      title: "Community Management Tools",
      icon: "fa-users",
      paragraphs: [
        "Forumers offers tools to help you manage your communities effectively. Create public or private communities tailored to your audience's needs.",
        "Organize discussions into categories to keep conversations structured and easy to navigate.",
        "Enable features like post moderation and user roles to maintain a healthy and engaging environment for your users."
      ]
    },
    {
      title: "User Engagement Features",
      icon: "fa-comments",
      paragraphs: [
        "Encourage meaningful interactions with features like posts, comments, likes, and replies. These tools help foster active and engaging discussions within your community.",
        "Forumers makes it easy to track user activity and participation, helping you understand how your community interacts with your platform.",
        "Build a collaborative environment where users can share experiences, ask questions, and provide feedback."
      ]
    },
    {
      title: "Customizable Forum Experience",
      icon: "fa-cogs",
      paragraphs: [
        "Tailor your forums to match your application's branding and user needs. Customize categories, user permissions, and more.",
        "Enable or disable features based on your community's requirements, ensuring a personalized experience for your users.",
        "Forumers provides flexibility to adapt to your specific use case, whether you're building a small community or a large-scale forum."
      ]
    },
    {
      title: "Reliable and Scalable Infrastructure",
      icon: "fa-server",
      paragraphs: [
        "Forumers is built on a reliable infrastructure designed to handle growing communities and high traffic volumes.",
        "Our API ensures consistent performance with low latency, so your users can enjoy a seamless experience.",
        "Focus on building your community while we take care of the backend scalability and reliability."
      ]
    },
    {
      title: "Developer Support",
      icon: "fa-hands-helping",
      paragraphs: [
        "We provide dedicated support to help developers integrate and use the Forumers API effectively.",
        "Access our documentation, FAQs, and example use cases to get started quickly.",
        "If you encounter any issues, our support team is here to assist you every step of the way."
      ]
    }
  ];

  return (
    <div className="developpers-section">
      <div className="developpers-header">
        <h2 className="section-title">
          For <span className="title-highlight">Developers</span>
        </h2>
        <p className="section-subtitle">
          Build, manage, and scale your forums with ease using the Forumers API.
        </p>
      </div>
      
      <div className="developpers-grid">
        {developerSections.map((section, index) => (
          <div key={index} className="developpers-card">
            <div className="developpers-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="developpers-content">
              <h3 className="developpers-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="developpers-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developpers;