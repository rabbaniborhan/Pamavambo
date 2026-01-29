import SchoolNewsCarousel from "@/components/common/SchoolNewsCarousel";
import ThirdHero from "@/components/common/ThirdHero";
import SocialFeed from "@/components/news/SocialFeed";
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
const newsData = {
  title: "School News",
  description:
    "Stories of the community members, programs, and happenings that shape life at Lawrenceville.",
  buttonText: "Read All News Stories",
  buttonLink: "/news",
  newsPosts: [
    {
      id: 1,
      title:
        "Beyond the Boards: Lawrenceville Coaches Build Confidence One Shift at a Time",
      date: "JANUARY 26, 2026",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "How our hockey coaches are teaching life lessons through sports",
    },
    {
      id: 2,
      title: "Learning How to Think",
      date: "JANUARY 23, 2026",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "New critical thinking curriculum transforms classroom discussions",
    },
    {
      id: 3,
      title: "MLK's 'Single Garment of Destiny' Inspires Lawrentians",
      date: "JANUARY 21, 2026",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Annual MLK Day celebrations spark campus-wide conversations about social justice",
    },
    {
      id: 4,
      title: "The Future of Digital Arts at Lawrenceville",
      date: "JANUARY 18, 2026",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "New digital arts program prepares students for creative careers in technology",
    },
    {
      id: 5,
      title: "Student-Led Sustainability Initiative Reaches Major Milestone",
      date: "JANUARY 15, 2026",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Campus achieves 50% reduction in carbon footprint through student efforts",
    },
  ],
};
const blogsData = {
  title: "School Blogs",
  description:
    "Insights, reflections, and perspectives from across the Lawrenceville School communit.",
  buttonText: "Read All Blogs Stories",
  buttonLink: "/news",
  newsPosts: [
    {
      id: 1,
      title:
        "Beyond the Boards: Lawrenceville Coaches Build Confidence One Shift at a Time",
      date: "JANUARY 26, 2026",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "How our hockey coaches are teaching life lessons through sports",
    },
    {
      id: 2,
      title: "Learning How to Think",
      date: "JANUARY 23, 2026",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "New critical thinking curriculum transforms classroom discussions",
    },
    {
      id: 3,
      title: "MLK's 'Single Garment of Destiny' Inspires Lawrentians",
      date: "JANUARY 21, 2026",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Annual MLK Day celebrations spark campus-wide conversations about social justice",
    },
    {
      id: 4,
      title: "The Future of Digital Arts at Lawrenceville",
      date: "JANUARY 18, 2026",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "New digital arts program prepares students for creative careers in technology",
    },
    {
      id: 5,
      title: "Student-Led Sustainability Initiative Reaches Major Milestone",
      date: "JANUARY 15, 2026",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Campus achieves 50% reduction in carbon footprint through student efforts",
    },
  ],
};

export default function News() {
  return (
    <>
      <ThirdHero {...heroData} />
      <SchoolNewsCarousel {...newsData} />

      <SchoolNewsCarousel {...blogsData} />
      <SocialFeed />
    </>
  );
}
