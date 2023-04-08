import { defineConfig, presetWind, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetWind(), presetIcons()],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      dark: "#313131",
      gray: "#414141",
      lightGray: "#525252",
      primary:"#EC625F",
      light: "#F5F5F5",
    }
  }
});
