import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy | Schedule Your Free Consultation",
  description:
    "Get in touch with Dr. Jan Duffy for your free consultation. Ask questions about new construction homes, exclusive buyer representation, or the Las Vegas real estate market.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about buying a new construction home? Get in touch with us for a free consultation. We're here to help you navigate the Las Vegas real estate market."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
