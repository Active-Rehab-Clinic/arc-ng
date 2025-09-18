# CSS Styling Rules

## Tailwind CSS Guidelines
- Use Tailwind utility classes exclusively in SCSS files with @apply directive
- Never use Tailwind classes directly in HTML files
- Never use inline CSS anywhere
- Follow mobile-first responsive design with breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Always write mobile styles first, then add responsive variants
- Use consistent spacing scale: `py-16`, `px-4`, `mb-6`, `gap-8`
- Always include dark mode variants for all components

## SCSS Structure
```scss
.component-class {
  @apply bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl;
  @apply dark:bg-gray-800 dark:shadow-gray-900/20;
}
```

## Color Palette
- Primary: `blue-600`, `blue-700`, `blue-800`
- Secondary: `green-600`, `green-700`
- Accent colors: `purple-600`, `orange-600`
- Neutrals: `gray-50`, `gray-600`, `gray-900`
- Background: `white`, `gray-50`, `blue-50`
- Dark mode: `dark:bg-gray-800`, `dark:bg-gray-900`, `dark:text-gray-100`

## Layout Patterns
```scss
// Container
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

// Grid layouts
.grid-layout {
  @apply grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3;
}

// Cards
.card {
  @apply bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transition-shadow hover:shadow-xl;
  @apply dark:bg-gray-800 dark:shadow-gray-900/20;
}
```

## Typography
- Headings: `text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-100`, `text-lg sm:text-xl font-semibold dark:text-gray-200`
- Body: `text-base sm:text-lg text-gray-600 dark:text-gray-300`
- Links: `text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300`

## Interactive Elements
- Buttons: `px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all`
- Hover effects: `hover:shadow-xl`, `hover:scale-105`, `transform`
- Focus states: Always include for accessibility
- Touch targets: Minimum 44px for mobile accessibility

## Spacing
- Sections: `py-8 sm:py-12 md:py-16` (mobile-first approach)
- Cards: `p-4 sm:p-6 md:p-8` internal padding
- Margins: `mb-4 sm:mb-6` for consistent vertical rhythm
- Gaps: `gap-4 sm:gap-6 md:gap-8` for grid layouts