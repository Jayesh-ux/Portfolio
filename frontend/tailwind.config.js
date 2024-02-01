/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "rgba(57, 62, 70, 0.5)",
          "200": "rgba(57, 62, 70, 0.75)",
        },
        "color-31": "#eee",
        "color-3": "#00adb5",
        lime: {
          "100": "#2cf00a",
          "200": "#03ff10",
        },
        dominant: "#fff",
        black: "#000",
        "color-1": "#222831",
        whitesmoke: {
          "100": "rgba(238, 238, 238, 0.75)",
          "200": "rgba(238, 238, 238, 0.5)",
        },
        gray1: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(0, 0, 0, 0.3)",
        },
        royalblue: "#094db2",
        lightseagreen: "rgba(0, 173, 181, 0.5)",
        accent: "#457eff",
        gray: "#676f82",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        pacifico: "Pacifico",
        "text-small": "Inter",
        kavoon: "Kavoon",
        "princess-sofia": "'Princess Sofia'",
      },
      borderRadius: {
        "2xl-3": "21.3px",
        "7xl-8": "26.8px",
        "5xl-8": "24.8px",
        "smi-7": "12.7px",
        "sm-4": "13.4px",
        "11xl-3": "30.3px",
        "13xl-6": "32.6px",
        "9xl-8": "28.8px",
        "18xl-4": "37.4px",
      },
    },
    fontSize: {
      "base-9": "15.9px",
      "xl-1": "20.1px",
      "48xl": "67px",
      "39xl-9": "58.9px",
      "lg-6": "18.6px",
      "mini-3": "14.3px",
      "base-1": "15.1px",
      "31xl": "50px",
      xs: "12px",
      "3xs-2": "9.2px",
      "smi-3": "12.3px",
      "11xl": "30px",
      "30xl-5": "49.5px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
