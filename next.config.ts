import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        'button-blue': '#FFFFFF',  // ← Your blue color!
      },
      fontSize: {
        'normal': '16px',  // ← Your text size!
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // ← Your font!
      },
      spacing: {
        'box': '20px',  // ← Your spacing!
      },
    },
  },
}
export default nextConfig;
