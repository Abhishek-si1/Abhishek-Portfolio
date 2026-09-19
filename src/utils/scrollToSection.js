// Height of the fixed navbar, so section headings aren't hidden underneath it.
const NAVBAR_OFFSET = 80;

/** Smooth-scrolls to the element with the given id. Returns false if it doesn't exist. */
export function scrollToSection(sectionId, offset = NAVBAR_OFFSET) {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}
