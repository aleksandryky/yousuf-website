import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [profile.linkedin],
    knowsAbout: [
      "Software Architecture",
      "AI Systems",
      "Cloud Computing",
      "AWS",
      "Web3",
      "Blockchain",
      "Next.js",
      "React",
      "Laravel",
      "Node.js",
      "DevOps",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Khulna University of Engineering and Technology (KUET)",
    },
    worksFor: {
      "@type": "Organization",
      name: "Silicon Orchard Limited",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} · ${profile.title}`,
    description: profile.summary,
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: `${profile.name} · ${profile.title}`,
    description: profile.summary,
    mainEntity: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
