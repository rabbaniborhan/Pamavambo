import CampusMapSection from "@/components/campus/CampusMapSection";
import FeaturedSpaces from "@/components/campus/FesturedSpaces";

import OurLocation from "@/components/campus/OurLocation";
import SliderSection from "@/components/campus/SliderSection";
import ToursAccordion from "@/components/campus/TourAccordion";
import CallToActionButton from "@/components/common/CallToActionButton";
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
    { label: "Student Life", href: "/life/student-life" },
    { label: "News and Events" }, // Last item without link
  ],
  title: "News and Media",
  description:
    "Welcome to the Lawrenceville community! Read stories about what matters to us and what's happening on campus.",
  tintColor: "#7e0b1a",
  tintOpacity: 95,
};
const housesData = {
  // Data for HousesSliderSection
  sliderData: {
    title: "Houses",
    descriptionParagraphs: [
      "Each Lawrenceville student belongs to a House. A House is a residential building which also serves as home base for our day students.",
      "Our 18 residential Houses are intentionally designed to support growth and engagement at each grade level.",
    ],
    learnMoreText: "LEARN MORE ABOUT STUDENT LIFE",
    learnMoreLink: "/student-life",
    sliderImages: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=1000",
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },

  // Data for VirtualToursAccordion
  accordionData: {
    accordionTitle: "Virtual House Tours",
    virtualTours: [
      {
        house: "DAWES HOUSE",
        location: "GIRLS' LOWER",
        thumb:
          "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        house: "DICKINSON HOUSE",
        location: "THE CIRCLE",
        thumb:
          "https://images.unsplash.com/photo-1580587767303-9cd3f02e6462?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        house: "RAYMOND HOUSE",
        location: "BOYS' LOWER",
        thumb:
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        house: "STEPHENS HOUSE",
        location: "THE CRESCENT",
        thumb:
          "https://images.unsplash.com/photo-1448630360428-65ff2f0a57e7?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },
};

const libraryData = {
  sliderData: {
    title: "Classrooms and Library",
    descriptionParagraphs: [
      "Our academic building are designed for their subject matter. From our quiet, comfortable Harkness classrooms to our science labs, workshops, and large meeting spaces, we are always aware of how an environment affects learning. Sitting around one common table in light-filled, uncrowded classrooms makes our learning environment feel comfortable, safe, and inclusive.",
      "The Bunn Library is a presence in all aspects of life at Lawrenceville and, while it is felt throughout the campus, its physical space is an important part of our community. Whether students are looking for a quiet space to relax and focus or a welcoming gathering room to facilitate group work, club events, presentations, or just reading together, the library has something for everyone.",
    ],
    learnMoreText: "Explore academics at Lawrenceville",
    learnMoreLink: "/library",
    sliderImages: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000", // Library interior
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000", // Study area
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000", // Bookshelves
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000", // Digital lab
    ],
    sectionBgColor: "bg-white", // White background
  },

  // Data for VirtualToursAccordion (library version)
  accordionData: {
    accordionTitle: "Virtual Tours of Academic Buildings",
    virtualTours: [
      {
        house: "MAIN READING ROOM",
        location: "HISTORIC WING",
        thumb:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example1",
      },
      {
        house: "DIGITAL MEDIA LAB",
        location: "TECHNOLOGY CENTER",
        thumb:
          "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example2",
      },
      {
        house: "ARCHIVES COLLECTION",
        location: "SPECIAL COLLECTIONS",
        thumb:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example3",
      },
      {
        house: "GROUP STUDY ROOMS",
        location: "LEARNING COMMONS",
        thumb:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example4",
      },
      {
        house: "RARE BOOKS ROOM",
        location: "PRESERVATION AREA",
        thumb:
          "https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example5",
      },
      {
        house: "QUIET STUDY ZONES",
        location: "EAST WING",
        thumb:
          "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/example6",
      },
    ],
    sectionBgColor: "bg-white", // White background
  },
};
const athleticsData = {
  // Data for HousesSliderSection (athletics version)
  sliderData: {
    title: "Athletics & Wellness",
    descriptionParagraphs: [
      "Lawrenceville's athletic program promotes physical fitness, teamwork, and sportsmanship through a wide range of competitive and recreational activities.",
      "Our state-of-the-art facilities include an Olympic-sized swimming pool, indoor track, multiple gymnasiums, and outdoor fields supporting 25 varsity sports.",
    ],
    learnMoreText: "VIEW ATHLETICS SCHEDULE",
    learnMoreLink: "/athletics",
    sliderImages: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000", // Hockey rink
      "https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=1000", // Basketball court
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000", // Soccer field
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000", // Swimming pool
      "https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?q=80&w=1000", // Track field
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000", // Tennis courts
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },

  // Data for VirtualToursAccordion (athletics version)
  accordionData: {
    accordionTitle: "Virtual Facility Tours",
    virtualTours: [
      {
        house: "MAIN GYMNASIUM",
        location: "ATHLETICS COMPLEX",
        thumb:
          "https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/gym-tour",
      },
      {
        house: "OLYMPIC POOL",
        location: "AQUATICS CENTER",
        thumb:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/pool-tour",
      },
      {
        house: "INDOOR TRACK",
        location: "FITNESS COMPLEX",
        thumb:
          "https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/track-tour",
      },
      {
        house: "HOCKEY RINK",
        location: "ICE SPORTS CENTER",
        thumb:
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/hockey-tour",
      },
      {
        house: "SOCCER FIELD",
        location: "OUTDOOR COMPLEX",
        thumb:
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/soccer-tour",
      },
      {
        house: "TENNIS CENTER",
        location: "OUTDOOR COURTS",
        thumb:
          "https://images.unsplash.com/photo-1595435934247-5d33b7f92c74?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/tennis-tour",
      },
      {
        house: "WRESTLING ROOM",
        location: "COMBAT SPORTS WING",
        thumb:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/wrestling-tour",
      },
      {
        house: "WEIGHT ROOM",
        location: "STRENGTH CENTER",
        thumb:
          "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/weights-tour",
      },
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },
};
const artsData = {
  // Data for HousesSliderSection (arts version)
  sliderData: {
    title: "Arts & Creativity",
    descriptionParagraphs: [
      "Lawrenceville's arts program nurtures creativity, self-expression, and technical skill across visual, performing, and digital arts.",
      "Our state-of-the-art facilities include professional-grade studios, theaters, and exhibition spaces where students explore their artistic passions.",
    ],
    learnMoreText: "VIEW ARTS CALENDAR",
    learnMoreLink: "/arts",
    sliderImages: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000", // Theater
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000", // Art studio
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000", // Music room
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000", // Digital arts
      "https://images.unsplash.com/photo-1508817628294-4a6fa1a6a4f5?q=80&w=1000", // Dance studio
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000", // Gallery
    ],
    sectionBgColor: "bg-white",
  },

  // Data for VirtualToursAccordion (arts version)
  accordionData: {
    accordionTitle: "Virtual Arts Facility Tours",
    virtualTours: [
      {
        house: "PERFORMING ARTS CENTER",
        location: "MAIN THEATER",
        thumb:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/performing-arts-tour",
      },
      {
        house: "VISUAL ARTS STUDIO",
        location: "NORTH WING",
        thumb:
          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/visual-arts-tour",
      },
      {
        house: "MUSIC HALL",
        location: "SOUND BUILDING",
        thumb:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/music-hall-tour",
      },
      {
        house: "DIGITAL ARTS LAB",
        location: "TECHNOLOGY CENTER",
        thumb:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/digital-arts-tour",
      },
      {
        house: "DANCE STUDIO",
        location: "MOVEMENT ARTS",
        thumb:
          "https://images.unsplash.com/photo-1508817628294-4a6fa1a6a4f5?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/dance-studio-tour",
      },
      {
        house: "EXHIBITION GALLERY",
        location: "ART WALK",
        thumb:
          "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/gallery-tour",
      },
      {
        house: "PHOTOGRAPHY DARKROOM",
        location: "IMAGING STUDIO",
        thumb:
          "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/photography-tour",
      },
      {
        house: "CERAMICS STUDIO",
        location: "SCULPTURE WING",
        thumb:
          "https://images.unsplash.com/photo-1574737421496-9d9b4c5eabb6?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/ceramics-tour",
      },
    ],
    sectionBgColor: "bg-white",
  },
};
const diningData = {
  // Data for HousesSliderSection (dining version)
  sliderData: {
    title: "Dining & Community",
    descriptionParagraphs: [
      "Our dining halls are more than just places to eat—they're vibrant community hubs where students gather, connect, and build relationships.",
      "With multiple dining locations across campus, we offer diverse culinary options that accommodate all dietary needs and preferences.",
    ],
    learnMoreText: "VIEW DINING MENUS",
    learnMoreLink: "/dining",
    sliderImages: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000", // Dining hall
      "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1000", // Cafeteria
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000", // Food station
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000", // Outdoor dining
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000", // Coffee shop
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1000", // Community space
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },

  // Data for VirtualToursAccordion (dining version)
  accordionData: {
    accordionTitle: "Virtual Dining & Community Tours",
    virtualTours: [
      {
        house: "MAIN DINING HALL",
        location: "CENTRAL CAMPUS",
        thumb:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/main-dining-tour",
      },
      {
        house: "COMMONS CAFETERIA",
        location: "STUDENT UNION",
        thumb:
          "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/commons-tour",
      },
      {
        house: "THE GRAB & GO",
        location: "ACADEMIC QUADRANT",
        thumb:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/grab-go-tour",
      },
      {
        house: "OUTDOOR PATIO",
        location: "GARDEN DINING",
        thumb:
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/patio-tour",
      },
      {
        house: "COFFEE HOUSE",
        location: "STUDENT CENTER",
        thumb:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/coffee-house-tour",
      },
      {
        house: "COMMUNITY LOUNGE",
        location: "RESIDENTIAL HUB",
        thumb:
          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=600",
        videoUrl: "https://www.youtube.com/embed/lounge-tour",
      },
    ],
    sectionBgColor: "bg-[#f2e9d9]",
  },
};
export default function CampusPage() {
  return (
    <>
      <ThirdHero {...heroData} />
      <SubNav subNavItems={subNavItems} />
      <OurLocation />
      <FeaturedSpaces />
      <SliderSection {...housesData.sliderData} />
      <ToursAccordion {...housesData.accordionData} />
      <SliderSection {...libraryData.sliderData} />
      <ToursAccordion {...libraryData.accordionData} />
      <SliderSection {...athleticsData.sliderData} />
      <ToursAccordion {...athleticsData.accordionData} />
      <SliderSection {...artsData.sliderData} />
      <ToursAccordion {...artsData.accordionData} />
      <SliderSection {...diningData.sliderData} />
      <ToursAccordion {...diningData.accordionData} />
      <CampusMapSection />
      <CallToActionButton
        title="
News and Events"
        description="Our campus is the setting for life-changing experiences. Events, accomplishments, discoveries, and connections bring Lawrenceville to life; take a look at what's going on this year."
        buttonText="Whats Happening"
        imagePath="/academic/hisj_big-stickies.jpg"
        imageAlt="Students hiking"
      />
    </>
  );
}
