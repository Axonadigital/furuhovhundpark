// Shared SEO constants for Furuhov Hundpark.
export const SITE_NAME = "Furuhov Hundpark";
export const SITE_URL = "https://furuhov.se";
export const SITE_DESCRIPTION =
  "Furuhov Hundpark — två stängslade hundparker i fin skogsmiljö i Östersund och Ås. Öppet dygnet runt, halvtimmar för 40 kr via Bokamera.";
export const PHONE = "+46703764278";
export const PHONE_DISPLAY = "070-376 42 78";
export const EMAIL = "markus@furuhov.se";
export const BOKA_URL = "https://furuhov.bokamera.se";
export const FACEBOOK_URL = "https://www.facebook.com/Furuhov/";

export const abs = (path: string): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: abs("/android-chrome-512x512.png"),
  image: abs("/og-image.png"),
  description: SITE_DESCRIPTION,
  email: EMAIL,
  telephone: PHONE,
  areaServed: ["Östersund", "Ås", "Krokoms kommun", "Jämtland"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Östersund",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  sameAs: [FACEBOOK_URL],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    email: EMAIL,
    contactType: "customer service",
    areaServed: "SE",
    availableLanguage: ["sv"],
  },
};
