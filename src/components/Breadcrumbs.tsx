import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build the full breadcrumb list starting with Home
  const fullItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    ...items
  ];

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://etsteamcarpetcleaning.com${item.path}`
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="w-full bg-gray-50 py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {fullItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" aria-hidden="true" />
                )}
                {index === fullItems.length - 1 ? (
                  // Current page (last item)
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  // Link to other pages
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 transition flex items-center"
                  >
                    {index === 0 ? (
                      <HomeIcon className="h-4 w-4" aria-label="Home" />
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
