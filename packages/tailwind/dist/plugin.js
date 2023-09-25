"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const defaultTheme_1 = require("tailwindcss/defaultTheme");
const core_1 = require("@itell/core");
const camelToKebab = (str) => {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};
const extractCssVariables = (obj) => {
    const cssVariables = {};
    for (const key in obj) {
        const value = obj[key];
        cssVariables[`--${camelToKebab(key)}`] = value;
    }
    return cssVariables;
};
exports.default = (0, plugin_1.default)(function ({ addBase, config }) {
    const itellConfig = config("itell");
    let lightColors = core_1.ItellDefaultConfig["theme"]["light"];
    let darkColors = core_1.ItellDefaultConfig["theme"]["dark"];
    if (itellConfig) {
        if (itellConfig["theme"]) {
            if (itellConfig["theme"]["light"]) {
                lightColors = extractCssVariables(itellConfig["theme"]["light"]);
            }
            if (itellConfig["theme"]["dark"]) {
                darkColors = extractCssVariables(itellConfig["theme"]["dark"]);
            }
        }
    }
    // css variables
    addBase({
        ":root": lightColors,
        ".dark": darkColors,
    });
    // global styles
    addBase({
        "*": { "@apply border-border": {} },
        html: { "--font-sans": "'Inter', sans-serif" },
        ":focus": { outline: "none" },
        body: {
            "@apply bg-background text-foreground": {},
            fontFeatureSettings: '"rlig" 1, "calt" 1',
            scrollBehavior: "smooth",
        },
        thead: {
            "@apply px-4 text-left align-middle font-medium text-muted-foreground": {},
        },
        "tr:hover": { "@apply bg-muted/50": {} },
        tr: { "@apply border-b transition-colors": {} },
        td: { "@apply p-4 align-middle": {} },
        th: { "@apply max-w-[10rem]": {} },
    });
}, {
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        screens: {
            xs: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1600px",
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                info: "hsl(var(--info))",
                warning: "hsl(var(--warning))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            "margin-top": "1.25em",
                        },
                        h2: {
                            "margin-top": "1em",
                        },
                        h3: {
                            "margin-top": "0.75em",
                        },
                        h4: {
                            "margin-top": "0.5em",
                        },
                        p: {
                            "margin-top": "1em",
                            "margin-bottom": "1em",
                        },
                        ul: {
                            "margin-top": "1em",
                            "margin-bottom": "1em",
                            "line-height": "1.5em",
                        },
                        li: {
                            "margin-top": "0.3em",
                            "margin-bottom": "0.3em",
                        },
                        figure: {
                            "margin-top": "1em",
                            "margin-bottom": "1em",
                        },
                        img: {
                            "margin-top": "1em",
                            "margin-bottom": "1em",
                        },
                    },
                },
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": { content: "none" },
                        "blockquote p:first-of-type::after": { content: "none" },
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme_1.fontFamily.sans],
                serif: ["var(--font-serif)", ...defaultTheme_1.fontFamily.serif],
                mono: ["var(--font-mono)", ...defaultTheme_1.fontFamily.mono],
                handwritten: ["var(--font-handwritten)"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
});
