import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#06B6D4',
        accent: '#F97316',
        background: {
          light: '#F3F4F6',
          dark: '#1F2937',
        },
        text: {
          dark: '#111827',
          light: '#E5E7EB',
        },
        success: '#10B981',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
} satisfies Config;



// Color Palette

// Primary Color:
// Deep Blue: #1E3A8A
// (Represents trust and professionalism, a common theme in tech.)

// Secondary Color:

// Electric Cyan: #06B6D4
// (Adds a vibrant, tech-forward look.)

// Accent Color:
// Bright Orange: #F97316
// (Used for highlights, buttons, or calls to action, creating contrast and energy.)

// Background Colors:

// Light Gray: #F3F4F6
// (Soft, neutral, great for background areas.)
// Dark Gray: #1F2937
// (For dark mode or subtle text backgrounds.)

// Text Colors:
// Dark Text: #111827
// (Readable and modern for primary text.)
// Light Text: #E5E7EB
// (For text on dark backgrounds.)
// Success/Info Colors (Optional):

// Green (Success): #10B981
// Red (Error): #EF4444