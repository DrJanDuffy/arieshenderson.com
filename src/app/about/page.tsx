import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy | Exclusive Buyer Agent | Las Vegas Real Estate",
  description:
    "Learn about Dr. Jan Duffy, your trusted Las Vegas real estate expert specializing in exclusive buyer representation and new construction homes.",
  alternates: {
    canonical: "https://www.arieshenderson.com/about",
  },
};

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
