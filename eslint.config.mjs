import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ["src/components/sections/Hero.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off"
    }
  },
  {
    files: ["src/components/sections/Testimonial.tsx"],
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;
