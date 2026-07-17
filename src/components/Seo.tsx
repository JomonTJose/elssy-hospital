import { useEffect } from "react";
import { site } from "../data/site";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description,
  path = "",
  jsonLd,
}: {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object;
}) {
  useEffect(() => {
    const fullTitle = `${title} | ${site.name}`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", site.name, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    const url = `https://www.elssyhospital.com${path}`;
    setMeta("og:url", url, "property");
    setLinkCanonical(url);

    const defaultJsonLd = {
      "@context": "https://schema.org",
      "@type": "Hospital",
      name: site.name,
      description: site.tagline,
      url: "https://www.elssyhospital.com",
      telephone: site.primaryPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Main Road, Mulluru, Carmelaram P.O, Off Sarjapur Road",
        addressLocality: "Bengaluru",
        postalCode: "560035",
        addressCountry: "IN",
      },
      medicalSpecialty: [
        "Gastroenterology",
        "GeneralMedicine",
        "Otolaryngologic",
        "Gynecologic",
        "Dermatologic",
        "Musculoskeletal",
      ],
    };

    setJsonLd("ld-hospital", jsonLd ?? defaultJsonLd);
  }, [title, description, path, jsonLd]);

  return null;
}
