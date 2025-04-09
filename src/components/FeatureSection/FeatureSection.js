/* FeaturesSection.js */
import React from "react";
import { FaUsersCog, FaTag, FaCommentDots, FaThumbsUp } from "react-icons/fa";
import "./FeatureSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaUsersCog,
      title: "Community Management",
      desc: "Build and manage communities tailored to your audience, whether public or private.",
      color: "#25D366"
    },
    {
      icon: FaTag,
      title: "Category Organization",
      desc: "Structure discussions within communities using customizable categories.",
      color: "#3498db"
    },
    {
      icon: FaCommentDots,
      title: "Post & Comment Interaction",
      desc: "Enable users to create posts, engage with comments, and participate in meaningful conversations.",
      color: "#cc822e"
    },
    {
      icon: FaThumbsUp,
      title: "User Interaction",
      desc: "Encourage interaction with features like likes, dislikes, and replies to comments.",
      color: "#9b59b6"
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Key  <span className="title-highlight">Features</span></h2>
          <p className="section-subtitle">
            Everything you need to build and manage a thriving community.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ borderTopColor: feature.color }}>
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                <feature.icon size={40} color="white" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.desc}</p>
              <a href="https://forumers-documentation.vercel.app/docs/category/api-endpoints" className="feature-link">Discover →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;