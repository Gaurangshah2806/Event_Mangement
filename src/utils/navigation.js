export const NAV_SCROLL_OFFSET = 88;

export function scrollToSection(href) {
  const id = href.replace(/^#/, '');
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

export function handleSectionClick(e, href) {
  e.preventDefault();
  scrollToSection(href);
}

export function serviceAnchorId(title) {
  return `service-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
}
