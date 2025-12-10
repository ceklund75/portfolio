/**
 * Design System - Reusable Component Patterns
 *
 * This file contains TypeScript-based styling patterns for components.
 * For global styles, fonts, and CSS infrastructure, see globals.css
 */

export const styles = {
  // ============================================
  // LAYOUT
  // ============================================
  container:
    'container flex flex-col mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12 py-8 lg:py-12 items-center',
  section: 'w-full flex flex-col space-y-4 lg:space-y-8',
  hero: 'container flex flex-col items-center space-y-8 lg:space-y-12',
  header: 'flex flex-col max-w-3xl items-center px-4 space-y-4 lg:space-y-8',

  // ============================================
  // TYPOGRAPHY
  // ============================================
  heading: {
    // Display headlines (hero, major page titles)
    hero: 'font-[family-name:var(--font-tasa-orbiter)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50',

    // H1 - Page titles
    h1: 'font-[family-name:var(--font-tasa-orbiter)] text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50',

    // H2 - Major section titles
    h2: 'font-[family-name:var(--font-tasa-orbiter)] text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50',

    // H3 - Subsection titles (can use Geist for variety)
    h3: 'text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50',

    // H4 - Card titles, smaller headings
    h4: 'text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50',
  },

  text: {
    // Large body text (hero subheads, intro paragraphs)
    lead: 'text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed',

    // Standard body text
    body: 'text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed',

    // Muted/secondary text
    muted: 'text-base text-slate-600 dark:text-slate-400',

    // Small text (captions, meta info)
    small: 'text-sm text-slate-600 dark:text-slate-400',
  },

  // Eyebrow labels (category, section labels)
  eyebrow: 'text-sm tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400',
  //"text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400"

  // ============================================
  // INTERACTIVE ELEMENTS
  // ============================================
  link: {
    // Standard inline links
    default:
      'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-colors',

    // Navigation links (no underline)
    nav: 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 transition-colors',

    // Active navigation state
    navActive: 'text-slate-900 dark:text-slate-50 font-medium',

    // tiny link:
    tiny: 'text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4 transition-colors',
  },

  button: {
    // Primary CTA buttons
    primary:
      'inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors shadow-sm hover:shadow-md',

    // Secondary buttons
    secondary:
      'inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600 text-slate-900 dark:text-slate-50 font-medium transition-colors',

    // Ghost/minimal buttons
    ghost:
      'inline-flex items-center gap-2 px-4 py-2 space-y-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 font-medium transition-colors',
  },

  // ============================================
  // COMPONENTS
  // ============================================
  card: {
    // Static cards (no hover state)
    base: 'rounded-xl border border-slate-200 dark:border-slate-800 bg-50 dark:bg-slate-900 p-6 shadow-sm',

    // Interactive cards (links, clickable)
    interactive:
      'rounded-xl border border-slate-200 dark:border-slate-800 bg-50 dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer',

    // Featured/highlighted cards
    featured:
      'rounded-xl border-2 border-blue-200 dark:border-blue-900/50 bg-50 dark:bg-slate-900 p-6 lg:p-8 shadow-md',

    //ghost card, subtle border, minimal bg
    ghost:
      'rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-950/40 p-6 space-y-6 shadow-sm',
  },

  // Tech stack pills/badges
  pill: 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',

  // Status badges
  badge: {
    success:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
    warning:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
    info: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  },

  // ============================================
  // UTILITIES
  // ============================================
  // Focus ring for accessibility
  focusRing:
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950',

  // Dividers
  divider: 'border-t border-slate-200 dark:border-slate-800',
} as const

// Export type for autocomplete in consuming components
export type StylesType = typeof styles
