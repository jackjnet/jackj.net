/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        bskyblue: "#0085ff",
        githubgreen: "#2dba4e",
        linkedinblue: "#0a66c2",
        transblue: "#5bcefa",
        transpink: "#f5a9b8",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavor: "mocha",
    }),
  ],
};
