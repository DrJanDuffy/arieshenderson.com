import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "Free Buyer Consultation",
  description:
    "Schedule a free consultation with a Las Vegas exclusive buyer agent. No pressure, no obligation. Just honest advice about your home purchase.",
  canonical: "/contact",
  keywords: [
    "free consultation",
    "Las Vegas buyer agent",
    "real estate consultation",
    "homebuyer advice",
  ],
});

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about buying a new construction home? Get in touch with us for a free consultation. We're here to help you navigate the Las Vegas real estate market."
        path="contact"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
