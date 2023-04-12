/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      fontnormal: "#78828A",
      fontactive: "#F9F9F9",
      active: "rgba(115,40,150, 0.6)",
      title: "#9CA4AB",
      primary: "rgba(var(--color-primary),1)",
      link: "#b43feb",
      tobg: "#0D0C0F",
      viabg: "#0D0C0F50",
      frombg: "#0D0C0F00",
      cardmovies: "#0D0C0F50",
      cardmoviesto: "#0D0C0F01",
    },

    fontFamily: {
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      inset: {
        "72px": "72px",
      },
      fontSize: {
        16: "16px",
      },
      backgroundColor: {
        movies: "#4a4a4a10",
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#0D0C0F",
        "secondary-dark-bg": " #1A161F",
        "half-transparent": "rgba(144,50,188, 0.5)",
        link: "#b43feb",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        // width: calc(100vh - 400)
      },
      height: {
        80: "80px",
        72: "72px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
      variants: {
        width: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
