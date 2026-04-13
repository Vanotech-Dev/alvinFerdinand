import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "on-background": "#1A1A1A",
        "inverse-on-surface": "#e5e2e1",
        "primary": "#c8501a",
        "on-secondary-fixed-variant": "#464744",
        "tertiary-container": "#6a6a6a",
        "surface-bright": "#FFFFFF",
        "surface-container-high": "#F0EFED",
        "on-error-container": "#690005",
        "surface": "#FAFAF9",
        "error-container": "#ffdad6",
        "surface-container-highest": "#E8E7E5",
        "outline": "#8B7068",
        "error": "#ba1a1a",
        "inverse-primary": "#ffb59b",
        "secondary-fixed": "#e3e2df",
        "primary-fixed": "#ffdbcf",
        "secondary": "#4A4A4A",
        "on-secondary-fixed": "#1b1c1a",
        "on-primary": "#ffffff",
        "tertiary": "#4A4A4A",
        "surface-container-low": "#F5F5F3",
        "surface-tint": "#c8501a",
        "tertiary-fixed-dim": "#c7c6c6",
        "surface-dim": "#E0DFDD",
        "surface-variant": "#F0EFED",
        "on-primary-fixed": "#380d00",
        "secondary-fixed-dim": "#c7c6c3",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#FFFFFF",
        "on-error": "#ffffff",
        "on-surface-variant": "#5A5A5A",
        "primary-fixed-dim": "#ffb59b",
        "on-secondary-container": "#4A4A4A",
        "primary-container": "#fe7743",
        "inverse-surface": "#313030",
        "on-tertiary-fixed-variant": "#464747",
        "secondary-container": "#E8E7E5",
        "on-tertiary-fixed": "#1b1c1c",
        "on-surface": "#1A1A1A",
        "tertiary-fixed": "#e3e2e2",
        "on-tertiary-container": "#353636",
        "background": "#FFFFFF",
        "outline-variant": "#d4b8ae",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#ffffff",
        "on-primary-fixed-variant": "#812800",
        "surface-container": "#F0EFED"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Syne", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "epilogue": ["Epilogue", "sans-serif"]
      }
    },
  },
  plugins: [
    containerQueries,
    forms
  ],
}
