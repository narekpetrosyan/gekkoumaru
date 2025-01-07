/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        700: "700px",
        760: "760px",
        1048: "1048px",
        560: "560px",
        888: "888px",
        954: "954px",
        338: "338px",
        365: "365px",
        175: "175px",
        288: "288px",
        406: "406px",
        479: "479px",
        488: "488px",
        300: "300px",
        263: "263px",
        444: "444px",
        248: "248px",
        485: "485px",
        327: "327px",
        519: "519px",
        349: "349px",
        430: "430px",
      },
      fontSize: {
        36: "36px",
        48: "48px",
        52: "52px",
        64: "64px",
      },
      colors: {
        "main-text": "#BBB822",
        "main-bg": "#1E3B1B",
        "text-shadow": "#252525",
        "secondary-bg": "#848419",
      },
      textColor: {
        main: "#BBB822",
      },
      backgroundColor: {
        main: "#1E3B1B",
      },
      backgroundImage: {
        bg: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
}
