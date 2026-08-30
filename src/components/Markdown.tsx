import React from 'react';
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/**
 * Renders trusted Markdown (authored by us, never user input) to HTML.
 * Works in SSR (string render) and in the browser.
 */
export default function Markdown({ source }: { source: string }) {
  const html = marked.parse(source, { async: false }) as string;
  return <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
