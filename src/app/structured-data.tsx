import Script from 'next/script';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jambula Venkata Jaya Prakash Reddy",
  "jobTitle": "Computer Science Engineer & Full Stack Developer",
  "description": "Computer Science Engineer specializing in embedded systems, IoT, blockchain technology, and full-stack development",
  "url": "https://www.jayaprakash.space",
  "email": "prakashprakash2459@gmail.com",
  "telephone": "+91-93470-26387",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressCountry": "India"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Mahatma Gandhi Institute of Technology"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Neonflake Enterprises OPC Pvt Ltd"
  },
  "knowsAbout": [
    "Computer Science",
    "Embedded Systems",
    "IoT Development",
    "Blockchain Technology",
    "Machine Learning",
    "Full Stack Development",
    "Python Programming",
    "Java Programming",
    "React Development",
    "Raspberry Pi Development"
  ],
  "award": [
    "1st Place - Intra Institution Innovation Competition and Hackathon (MGIT, 2023)",
    "1st Place - Idea Pitching Contest at Idea Incubator (MGIT, 2023)",
    "2nd Place - Smart India Hackathon 2023 (Finals)"
  ],
  "sameAs": [
    "https://github.com/Prakash2459",
    "https://www.jayaprakash.space",
    "https://www.linkedin.com/in/jaya-prakash-jaya-prakash-127757233"
  ]
};

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
