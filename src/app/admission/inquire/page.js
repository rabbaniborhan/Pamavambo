import AdmissionsCTA from "@/components/admission/AdmissionCTA";
import AdmissionInquiry from "@/components/admission/AdmissionInquiry";
import VisitUsSection from "@/components/admission/VisitUsSection";
import SubNav from "@/components/common/SubNav";
import ThirdHero from "@/components/common/ThirdHero";
const subNavItems = [
  { label: "CAMPUS", href: "/campus" },
  { label: "DINING", href: "/dining" },
  { label: "HEALTH AND WELLNESS", href: "/health" },
  { label: "PUBLIC SAFETY", href: "/safety" },
  { label: "DIVERSITY AND BELONGING", href: "/diversity" },
  { label: "NEWS AND MEDIA", href: "/news" },
];
const heroData = {
  backgroundImage: "/beyond/BeyondHero.jpg",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Admission", href: "/admission" },
  ],
  title: "Inquire",
  description:
    "Welcome to the Pamavambo community! Read stories about what matters to us and what's happening on campus.",
  tintColor: "#7e0b1a",
  tintOpacity: 95,
};

export default function InquirePage() {
  return (
    <>
      <ThirdHero {...heroData} />
      <SubNav subNavItems={subNavItems} />
      <AdmissionsCTA />
      <AdmissionInquiry />
      <VisitUsSection />
    </>
  );
}
