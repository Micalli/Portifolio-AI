/** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["DM Sans", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
