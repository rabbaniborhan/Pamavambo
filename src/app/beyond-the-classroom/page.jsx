import BeyondContent from "@/components/beyond/BeyondContent";
import BeyondHero from "@/components/beyond/BeyondHero";
import EnvironmentalSections from "@/components/beyond/EnvironmentalSections";
import ResearchInstitutes from "@/components/beyond/ResearchInstitutes";
import StudentClubsAccordion from "@/components/beyond/StudentClubsAccordion";
import CallToActionButton from "@/components/common/CallToActionButton";

export default function Beyond() {
  return (
    <>
      <BeyondHero />
      <BeyondContent />
      <CallToActionButton
        title="Harkness Travel Program"
        description="Embark on a transformative experience abroad with Pamavambo. From Bali to Brazil, our travel program offers an educational opportunity that will expand your view of the world and of yourself."
        buttonText="Learn More"
        imagePath="/beyond/header_travel-programs.jpg"
        imageAlt="Students hiking"
      />
      <ResearchInstitutes />
      <EnvironmentalSections />
      <CallToActionButton
        title="Outdoor Classroom"
        description="The Pamavambo School’s Outdoor Programs provide students with adventures in the outdoor environment that enhance both academic and non-academic skills like  leadership, community engagement, and character development"
        buttonText="Learn More"
        imagePath="/beyond/outdoor-programs.jpg"
        imageAlt="Students hiking"
      />
      <StudentClubsAccordion />
    </>
  );
}
