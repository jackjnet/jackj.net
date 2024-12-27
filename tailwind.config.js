/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bskyblue: "#0085ff",
        githubgreen: "#2dba4e",
        linkedinblue: "#0a66c2",
      },
    },
  },
  plugins: [],
};
