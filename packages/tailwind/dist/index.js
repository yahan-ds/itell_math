"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const tailwindcss_animate_1 = __importDefault(require("tailwindcss-animate"));
const typography_1 = __importDefault(require("@tailwindcss/typography"));
const plugin_1 = __importDefault(require("./plugin"));
exports.default = {
    darkMode: "class",
    content: [],
    plugins: [plugin_1.default, tailwindcss_animate_1.default, typography_1.default],
};
