import React, { useState } from 'react';
import './pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Starter",
      price: {
        monthly: 0,
        yearly: 0
      },
      description: "Perfect for small projects and individual developers.",
      features: [
        "Up to 1,000 API requests per month",
        "Access to core API features",
        "Community support",
        "Basic analytics",
        "Regular updates"
      ],
      recommended: false
    },
    {
      name: "Pro",
      price: {
        monthly: 49,
        yearly: 499
      },
      description: "Ideal for growing businesses with advanced needs.",
      features: [
        "Up to 50,000 API requests per month",
        "Access to advanced API features",
        "Priority email support",
        "Customizable API responses",
        "Detailed analytics",
        "Enhanced security options"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: 199,
        yearly: 1999
      },
      description: "Comprehensive solution for large-scale applications.",
      features: [
        "Unlimited API requests",
        "Premium 24/7 support",
        "Dedicated account manager",
        "Advanced customization options",
        "SLA guarantees",
        "Custom integration support",
        "White-label solutions"
      ],
      recommended: false
    }
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2 className="section-title">
          <span className="title-highlight">Pricing</span> Plans
        </h2>
        <p className="section-subtitle">
          Choose the right plan to integrate the Forumers API into your application.
        </p>
        
        <div className="billing-toggle">
          <span>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={billingCycle === 'yearly'}
              onChange={toggleBillingCycle}
            />
            <span className="slider"></span>
          </label>
          <span>Yearly <span className="discount-badge">Save 15%</span></span>
        </div>
      </div>
      
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && <div className="recommended-badge">Most Popular</div>}
            <h3 className="pricing-title">{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            
            <div className="pricing-price">
              <span className="price-amount">
                {plan.price[billingCycle] === 0 ? 'Free' : `$${plan.price[billingCycle]}`}
              </span>
              <span className="price-period">
                {plan.price[billingCycle] === 0 ? '' : `/${billingCycle === 'monthly' ? 'month' : 'year'}`}
              </span>
            </div>
            
            <ul className="pricing-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="pricing-cta">
              {plan.price[billingCycle] === 0 ? 'Get Started' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
      
      <div className="pricing-footer">
        <p>Need a custom solution? <a href="#contact">Contact Us</a></p>
      </div>
    </div>
  );
};

export default Pricing;