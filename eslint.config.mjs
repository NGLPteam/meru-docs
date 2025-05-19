import eslintPluginAstro from "eslint-plugin-astro";
import { baseConfig, jsConfig, tsConfig } from "@castiron/eslint-config";

export default [
  {
    ignores: ["dist/", ".astro/", ".vercel/", "src/lib/api/craft/gql/"],
  },
  {
    ...baseConfig,
    ignores: ["**/*.astro"],
  },
  jsConfig,
  tsConfig,
  ...eslintPluginAstro.configs.recommended,
];
