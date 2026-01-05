import ScrollUp from "@/components/Common/ScrollUp";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import HeroSection from "@/components/Homepage/HeroSection";
import ProblemSection from "@/components/Homepage/ProblemSection";
import DifferentiatorSection from "@/components/Homepage/DifferentiatorSection";
import ValuePropsSection from "@/components/Homepage/ValuePropsSection";
import CredentialsSection from "@/components/Homepage/CredentialsSection";
import ProcessSection from "@/components/Homepage/ProcessSection";
import TwoPathNavigation from "@/components/Homepage/TwoPathNavigation";
import PricingSection from "@/components/Homepage/PricingSection";
import PropertySearchWidget from "@/components/Homepage/PropertySearchWidget";
import FeaturedCommunities from "@/components/Homepage/FeaturedCommunities";
import FAQSection from "@/components/Homepage/FAQSection";
import CTASection from "@/components/Homepage/CTASection";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GET REAL HOMEBUYER REPRESENTATION | Exclusive Buyer Agent",
  description:
    "Builder's rep works for builder—who's working for YOU? Get exclusive buyer representation with an agent who puts your interests first, not the builder's bottom line.",
  alternates: {
    canonical: "https://www.arieshenderson.com",
  },
  openGraph: {
    title: "GET REAL HOMEBUYER REPRESENTATION | Exclusive Buyer Agent",
    description:
      "Builder's rep works for builder—who's working for YOU? Get exclusive buyer representation with an agent who puts your interests first, not the builder's bottom line.",
    url: "https://www.arieshenderson.com",
    siteName: "Berkshire Hathaway HomeServices Nevada Properties",
    images: [
      {
        url: "https://www.arieshenderson.com/images/blog/blog-01.jpg",
        width: 1200,
        height: 630,
        alt: "Exclusive Buyer Agent - Dr. Jan Duffy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GET REAL HOMEBUYER REPRESENTATION | Exclusive Buyer Agent",
    description:
      "Builder's rep works for builder—who's working for YOU? Get exclusive buyer representation with an agent who puts your interests first, not the builder's bottom line.",
    images: ["https://www.arieshenderson.com/images/blog/blog-01.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <ScrollUp />
      {/* 1. Hero Section with Value Proposition */}
      <HeroSection />
      
      {/* 2. Problem Section */}
      <ProblemSection />
      
      {/* 3. Differentiator Statement */}
      <DifferentiatorSection />
      
      {/* 4. Value Props */}
      <ValuePropsSection />
      
      {/* 5. Credentials/Certifications Visual */}
      <CredentialsSection />
      
      {/* 6. Process */}
      <ProcessSection />
      
      {/* 7. Two-Path Navigation */}
      <TwoPathNavigation />
      
      {/* 8. Pricing/Packages */}
      <PricingSection />
      
      {/* 9. Trust Signals: Testimonials */}
      <Testimonials />
      
      {/* 10. Property Search Widget */}
      <PropertySearchWidget />
      
      {/* 11. Featured Communities */}
      <FeaturedCommunities />
      
      {/* 12. FAQ */}
      <FAQSection />
      
      {/* 13. Final CTA */}
      <CTASection />
      
      {/* 14. Blog/News Feed */}
      <Blog />
    </>
  );
}
