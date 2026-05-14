// Shared SEO constants for Furuhov Hundpark.
export const SITE_NAME = "Furuhov Hundpark";
export const PHONE = "+46703764278";
export const PHONE_DISPLAY = "070-376 42 78";
export const EMAIL = "markus@furuhov.se";
export const BOKA_URL = "https://furuhov.bokamera.se";
export const FACEBOOK_URL = "https://www.facebook.com/Furuhov/";

export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: "/",
  logo: "/og-default.png",
  email: EMAIL,
  telephone: PHONE,
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
