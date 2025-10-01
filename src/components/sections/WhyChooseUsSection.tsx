'use client';

import React, { useState } from 'react';
import { Clock, Shield, DollarSign, Users, Star, Phone } from 'lucide-react';
import { useIntersectionObserver, useCountUp } from '@/hooks/useIntersectionObserver';
import { buildWhatsApp } from '@/utils/whatsapp';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  features: Feature[];
}

const iconMap = {
  Clock,
  Shield,
  DollarSign,
  Users,
  Star,
  Phone,
};

export default function WhyChooseUsSection({ features }: WhyChooseUsSectionProps) {
  const { ref: sectionRef } = useIntersectionObserver(0.2);
  
  const IconComponent = ({ iconName }: { iconName: string }) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="h-12 w-12 text-primary" /> : null;
  };

  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = buildWhatsApp('917021751691', message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-16" style={{ backgroundColor: '#F8F3ED' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Travel Partner Anytime, Anywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.filter(feature => feature.title !== "Quality Service").map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent iconName={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
          
          {/* Pricing Card - Affordable Price Guaranteed with Quality Service */}
          <div className="group relative bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <DollarSign className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Affordable Price Guaranteed with Quality Service
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transparent pricing with no hidden charges. Get the best value for premium transportation services.
              </p>
              
              {/* WhatsApp CTA Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppClick("Get Quote - Local Rides")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  Get Quote - Local Rides
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Get Quote - Outstation")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  Get Quote - Outstation
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Get Quote - Corporate")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  Get Quote - Corporate
                </button>
              </div>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
        
        {/* Get Your Custom Quote Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Get Your Custom Quote
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to experience our premium service? Get a customized quote tailored to your specific needs and preferences.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleWhatsAppClick("Get Custom Quote - Local Rides")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex flex-col items-center space-y-2"
                >
                  <span className="text-lg">Local Rides</span>
                  <span className="text-sm opacity-90">City travel & daily commutes</span>
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick("Get Custom Quote - Outstation")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex flex-col items-center space-y-2"
                >
                  <span className="text-lg">Outstation</span>
                  <span className="text-sm opacity-90">Long-distance travel & tours</span>
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick("Get Custom Quote - Corporate")}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex flex-col items-center space-y-2"
                >
                  <span className="text-lg">Corporate</span>
                  <span className="text-sm opacity-90">Business travel solutions</span>
                </button>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  Need immediate assistance? 
                  <button 
                    onClick={() => handleWhatsAppClick("Immediate Assistance Needed")}
                    className="text-primary hover:underline ml-1"
                  >
                    Chat with us now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
