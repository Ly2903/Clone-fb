/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-bar-bg": "#242526",
        "comment-bg": "#3a3b3c",
        "primary-text": "#E4E6EB", //rgb(228,230,235)
        "secondary-text": "#B0B3B8",
        "text-gray": "#4b4f56",
        "text-description": "#606770",
        "primary-color": "#2E89FF",
        "secondary-color": "#1877f2",
        "secondary-button-bg": "#ffffff1a",
        "hover-bg": "#4e4f50",
        "primary-bg": "#18191a",
        "color-border": "#393a3b",
        "secondary-border": "#161718",
        "text-input": "#1D2129",
        "border-input": "#dddfe2",
        "color-success": "#42b72a",
        "hover-success": "#36a420",
        divider: "#3E4042",
        "bg-disable-button": "#ffffff33",
        "text-disable": "#ffffff4d",
        "bg-hover-img": "#ffffff1a", //rgba(255,255,255,0.1)
        "bg-tooltip": "#ffffffe6",
        "text-tooltip": "#1C1E21",
        errors: "#BE4B49",
        colorIcon: {
          green: "#45bd62",
          blue: "#1877f2",
          yellow: "#f6b828",
          red: "#f02849",
          turquoise: "#39afd5",
        },
      },
      boxShadow: {
        loginItem: `0 0 0 1px #dddfe2`,
        loginItemHover: "0 1px 8px 5px #dddfe2",
        borderForm: "0 8px 16px #0000001a",
      },
    },
    screens: {
      xs: "0",
      sm: "640px",
      md: "768px",
      "max-md": "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("ps-scrollbar-tailwind")],
};
