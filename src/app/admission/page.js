import AdmissionsCTA from "@/components/admission/AdmissionCTA";
import AdmissionInquiry from "@/components/admission/AdmissionInquiry";
import AdmissionMessages from "@/components/admission/AdmissionMessages";
import AdmissionTeam from "@/components/admission/AdmissionTeam";
import ApplicationProcess from "@/components/admission/ApplicationProcess";
import VisitUsSection from "@/components/admission/VisitUsSection";
import SecondHero from "@/components/common/SecondHero";

export default function Admission() {
  return (
    <>
      <SecondHero
        title="Admission"
        subtitle="Are you ready to become a Lawrentian?"
        backgroundImage="/admission/header_admission.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />
      <AdmissionsCTA />
      <AdmissionInquiry />
      <VisitUsSection />
      <ApplicationProcess />
      <AdmissionTeam />
      <AdmissionMessages />
    </>
  );
}
