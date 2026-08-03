import { education, experience, profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const profilePageId = `${siteUrl}/#profilepage`;
  const currentRole = experience[0];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: profile.shortName,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${profile.photo}`,
          caption: `${profile.name}, ${profile.title}`,
        },
        jobTitle: [profile.title, ...profile.roles],
        description: profile.summary,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.school,
          url: education.url,
          sameAs: education.url,
        },
        knowsAbout: [
          "Software Architecture",
          "Solution Architecture",
          "Distributed Systems",
          "Event-Driven Architecture",
          "Microservices",
          "AI Agents",
          "Retrieval Augmented Generation",
          "OpenAI API",
          "Cloud Architecture",
          "AWS",
          "DevOps",
          "Docker",
          "Kubernetes",
          "Data Architecture",
          "MySQL",
          "Redis",
          "Next.js",
          "React",
          "Node.js",
          "Laravel",
        ],
        sameAs: [profile.linkedin, profile.github],
        worksFor: {
          "@type": "Organization",
          name: currentRole.company,
        },
        homeLocation: {
          "@type": "Place",
          name: profile.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dhaka",
            addressCountry: "BD",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: `${profile.name} · ${profile.title}`,
        description: profile.summary,
        publisher: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: `${profile.name} · ${profile.title}`,
        description: profile.summary,
        mainEntity: { "@id": personId },
        about: { "@id": personId },
        isPartOf: { "@id": websiteId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
