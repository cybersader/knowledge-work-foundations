// @ts-check
// TRUNK VARIANT — rendered into `knowledge-work-foundations` by the extractor.
// If you edit this, also check `astro.config.mjs` (agentic default) for parity
// on shared config (vite polling, remark/rehype plugins, head scripts).
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightImageZoom from "starlight-image-zoom";
import starlightSiteGraph from "starlight-site-graph";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkObsidianCallout from "remark-obsidian-callout";
import remarkWikiLink from "remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  site: "https://cybersader.github.io",
  base: "/knowledge-work-foundations",

  vite: {
    define: {
      "process.platform": '"browser"',
      "process.version": '"v0.0.0"',
      "process.env": "{}",
    },
    server: {
      allowedHosts: true,
      watch: { usePolling: true, interval: 300 },
    },
  },

  markdown: {
    remarkRehype: { allowDangerousHtml: true },
    remarkPlugins: [
      remarkObsidianCallout,
      [remarkWikiLink, { aliasDivider: "|" }],
    ],
    rehypePlugins: [
      rehypeRaw,
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
  },

  integrations: [
    starlight({
      title: "00 — Knowledge Work Foundations",
      description:
        "Universal principles for structured knowledge work — substrate-agnostic foundations that hold with paper and pencil, with digital files, and with LLM agents alike.",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Knowledge Work Foundations",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      lastUpdated: true,

      editLink: {
        baseUrl:
          "https://github.com/cybersader/knowledge-work-foundations/edit/main/",
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cybersader/knowledge-work-foundations",
        },
      ],

      components: {
        PageTitle: "./src/components/PageTitle.astro",
      },

      head: [
        {
          // starlight-site-graph bug workaround — graph data-slug needs trailing slash
          tag: "script",
          content: [
            "document.addEventListener('DOMContentLoaded', () => {",
            "  for (const c of document.querySelectorAll('graph-component[data-slug]')) {",
            "    const slug = c.getAttribute('data-slug');",
            "    if (slug && !slug.endsWith('/')) c.setAttribute('data-slug', slug + '/');",
            "  }",
            "});",
          ].join("\n"),
        },
        {
          // Collapsible-callout toggle (remark-obsidian-callout emits data-expandable/-expanded)
          tag: "script",
          content: [
            "document.addEventListener('DOMContentLoaded', () => {",
            "  document.querySelectorAll('[data-expandable=\"true\"]').forEach((cb) => {",
            "    const title = cb.querySelector('.callout-title');",
            "    if (!title) return;",
            "    title.addEventListener('click', () => {",
            "      const expanded = cb.getAttribute('data-expanded') === 'true';",
            "      cb.setAttribute('data-expanded', expanded ? 'false' : 'true');",
            "    });",
            "  });",
            "});",
          ].join("\n"),
        },
      ],

      plugins: [
        starlightThemeFlexoki(),
        starlightImageZoom(),
        starlightSiteGraph(),
      ],

      customCss: ["./src/styles/global.css", "./src/styles/brand.css"],

      // Trunk sidebar — substrate-agnostic sections only. No stack/skills/agents/work.
      sidebar: [
        {
          label: "Start here",
          autogenerate: { directory: "start" },
        },
        {
          label: "Principles & Foundations",
          autogenerate: { directory: "principles" },
        },
        {
          label: "Patterns",
          autogenerate: { directory: "patterns" },
          collapsed: true,
        },
        {
          label: "Kernel Reference",
          autogenerate: { directory: "kernel" },
          collapsed: true,
        },
      ],
    }),
  ],
});
