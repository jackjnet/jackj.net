/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        bskyblue: "#0085ff",
        githubgreen: "#2dba4e",
      },
    },
  },
  plugins: [],
};
