import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { generateMetadata as genMeta } from "@/components/SEO/MetaTags";
import { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "About Our Exclusive Buyer Agents",
  description:
    "ABR and CSP certified agents representing only buyers. No dual agency, no builder conflicts. Meet the team fighting for Las Vegas homebuyers.",
  canonical: "/about",
  keywords: [
    "exclusive buyer agent",
    "Las Vegas real estate agent",
    "ABR certified",
    "buyer representation",
    "Dr. Jan Duffy",
  ],
});

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Your trusted Las Vegas real estate expert specializing in exclusive buyer representation and new construction homes."
        path="about"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
