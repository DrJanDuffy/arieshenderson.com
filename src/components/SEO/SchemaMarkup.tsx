import StructuredData from "./StructuredData";

type SchemaMarkupProps = {
  type: "LocalBusiness" | "BreadcrumbList" | "FAQPage" | "Service" | "Place";
  data: Record<string, any>;
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  // Add @context and @type if not present
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return <StructuredData data={schemaData} />;
}
