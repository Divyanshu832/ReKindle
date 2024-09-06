/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cdark: "#00404D",
        cpri: "#2C6975",
        csec: "#68B2A0",
        cter: "#CDE0C9",
        clight: "#E0ECDE",
        wlight: "#F1C27D",
        wter: "#E0AC69",
        wsec: "#C68642",
        wpri: "#8D5524",
        wdark: "#78350F",
        whover: "#784625",
      },
      fontFamily: {
        grotesk: "Space Grotesk",
        jetbrains: "JetBrains Mono",
        poppins: "Poppins",
        mono: "Space Mono",
      },
    }
  }
};
