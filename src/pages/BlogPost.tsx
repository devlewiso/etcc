import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarDays, Clock, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import Markdown from '../components/Markdown';
import NotFound from './NotFound';
import { getPost, getPublishedPosts } from '../data/blog';

const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const canonical = `/blog/${post.slug}`;
  const url = `https://etsteamcarpetcleaning.com${canonical}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'E.T Carpet Cleaning' },
    publisher: {
      '@type': 'Organization',
      name: 'E.T Carpet Cleaning',
      logo: {
        '@type': 'ImageObject',
        url: 'https://etsteamcarpetcleaning.com/logo.png',
      },
    },
  };

  const related = (post.related || [])
    .map((s) => getPublishedPosts().find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="py-24">
      <SEO
        title={`${post.title} | E.T Carpet Cleaning`}
        description={post.description}
        canonical={canonical}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: canonical },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-10">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {fmtDate(post.publishedDate)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readMinutes} min read
          </span>
        </div>

        <Markdown source={post.body} />

        <div className="mt-14 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-blue-900 font-medium">
            E.T Carpet Cleaning &mdash; family-run, serving SLO County since 2023.
          </p>
          <a
            href="tel:+18057042301"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition whitespace-nowrap"
          >
            <Phone className="h-4 w-4" />
            (805) 704-2301
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Keep reading</h2>
            <ul className="space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={`/blog/${r.slug}`} className="text-blue-600 hover:underline font-medium">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-12">
          <Link to="/blog" className="text-blue-600 hover:underline">
            &larr; All articles
          </Link>
        </p>
      </article>
    </div>
  );
}
