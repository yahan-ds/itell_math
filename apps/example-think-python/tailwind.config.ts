import type { Config } from "tailwindcss";
import tailwindPreset from "@itell/tailwind";
export default {
	presets: [tailwindPreset],
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./content/**/*.mdx"],
} satisfies Config;
