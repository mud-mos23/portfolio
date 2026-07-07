const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, 'posts');
const OUT_DIR = path.join(__dirname);
const TEMPLATE = path.join(__dirname, 'template.html');

const POSTS_JSON = path.join(OUT_DIR, 'index.json');

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

function parseMarkdown(md) {
  let html = '';
  const lines = md.split('\n');
  let inCode = false;
  let codeBuf = [];
  let codeLang = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      if (inCode) {
        html += `<pre><code class="language-${codeLang}">${escapeHtml(codeBuf.join('\n'))}</code></pre>\n`;
        codeBuf = [];
        inCode = false;
        codeLang = '';
      } else {
        inCode = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      continue;
    }

    // Headers
    if (line.startsWith('### ')) { html += `<h3>${inlineHtml(line.slice(4))}</h3>\n`; continue; }
    if (line.startsWith('## ')) { html += `<h2>${inlineHtml(line.slice(3))}</h2>\n`; continue; }
    if (line.startsWith('# ')) { html += `<h1>${inlineHtml(line.slice(2))}</h1>\n`; continue; }

    // Horizontal rule
    if (line.trim() === '---') { html += '<hr>\n'; continue; }

    // Blockquote
    if (line.startsWith('> ')) { html += `<blockquote>${inlineHtml(line.slice(2))}</blockquote>\n`; continue; }

    // Unordered list
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const content = inlineHtml(line.trim().slice(2));
      if (!html.endsWith('</li>\n')) html += '<ul>\n';
      html += `  <li>${content}</li>\n`;
      // Close ul on next non-list line
      const next = lines[i + 1];
      if (!next || !(next.trim().startsWith('- ') || next.trim().startsWith('* '))) {
        html += '</ul>\n';
      }
      continue;
    }

    // Empty line
    if (line.trim() === '') { continue; }

    // Paragraph
    html += `<p>${inlineHtml(line)}</p>\n`;
  }

  return html;
}

function inlineHtml(text) {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Inline code
  text = text.replace(/`(.+?)`/g, '<code>$1</code>');
  // Links
  text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>');
  return text;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function loadTemplate() {
  return fs.readFileSync(TEMPLATE, 'utf-8');
}

function build() {
  const files = fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse();

  const template = loadTemplate();
  const posts = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');

    // Parse frontmatter
    let title = 'Untitled';
    let date = '';
    let excerpt = '';
    let body = raw;

    if (raw.startsWith('---')) {
      const end = raw.indexOf('---', 3);
      if (end !== -1) {
        const fm = raw.slice(3, end).trim();
        body = raw.slice(end + 3).trim();
        for (const line of fm.split('\n')) {
          const sep = line.indexOf(':');
          if (sep === -1) continue;
          const key = line.slice(0, sep).trim();
          const val = line.slice(sep + 1).trim();
          if (key === 'title') title = val.replace(/^"|"$/g, '');
          if (key === 'date') date = val.replace(/^"|"$/g, '');
          if (key === 'excerpt') excerpt = val.replace(/^"|"$/g, '');
        }
      }
    }

    const slug = slugify(title);
    const content = parseMarkdown(body);
    const pubDate = date || 'Upcoming';

    const html = template
      .replace(/{{TITLE}}/g, title)
      .replace(/{{DATE}}/g, pubDate)
      .replace(/{{CONTENT}}/g, content);

    // Create post directory and index.html
    const postDir = path.join(OUT_DIR, slug);
    if (!fs.existsSync(postDir)) fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), html);

    posts.push({ title, slug, date: pubDate, excerpt: excerpt || '...' });
  }

  // Write JSON index
  fs.writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2));
  console.log(`Built ${posts.length} post(s)`);
  console.log(`Posts: ${posts.map(p => p.slug).join(', ')}`);
}

build();
