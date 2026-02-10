import SubNav from "@/components/common/SubNav";
import ThirdHero from "@/components/common/ThirdHero";
import BoardOfTrustees from "@/components/leadership/BoardOfTrustees";
import HeadOfSchool from "@/components/leadership/HeadOfSchool";
import HeadOfSchoolCommunications from "@/components/leadership/HeadOfSchoolCommunications";
import SeniorStaff from "@/components/leadership/SeniorStaff";
import TrusteesEmeriti from "@/components/leadership/TrusteesEmeriti";
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
  breadcrumbs: [],
  title: "Leadership",
  description:
    "Pamavambo challenges a diverse community of promising young people to lead lives of learning, integrity, and high purpose. Our mission is to inspire the best in each to seek the best for all.",
  tintColor: "#7e0b1a",
  tintOpacity: 95,
};

export default function LeaderPage() {
  return (
    <>
      <ThirdHero {...heroData} />
      <SubNav subNavItems={subNavItems} />
      <HeadOfSchool />
      <HeadOfSchoolCommunications />
      <SeniorStaff />
      <BoardOfTrustees />
      <TrusteesEmeriti />
    </>
  );
}
