import { defineConfig } from "vite";

export default defineConfig({
    define: {
        __YEAR__: JSON.stringify("2024"),
    },
})