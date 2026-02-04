// @ts-ignore
import changelogRaw from '../../CHANGELOG.md?raw';
import { useMemo } from 'react';
import './Changelog.css';

function parseSimpleMarkdown(md: string) {
  // Very small markdown -> HTML converter for headings, lists and paragraphs
  if (!md) return '';
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n{2,}/gim, '</p><p>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)(?=(?:\s*<li>|\s*$))/g, (match) => `<ul>${match}</ul>`);

  // ensure block is wrapped in <p> where appropriate
  if (!/^\s*<h1|<h2|<h3/.test(html)) {
    html = `<p>${html}</p>`;
  }

  return html;
}

function Changelog() {
  const html = useMemo(() => parseSimpleMarkdown(changelogRaw as string), []);

  return (
    <section className="changelog">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}

export default Changelog;
