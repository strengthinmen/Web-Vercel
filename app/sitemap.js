// app/sitemap.js
// Next.js 14 generates /sitemap.xml automatically from this file.
// No extra packages needed — this is built into the framework.
//
// After deploying, verify it works by visiting:
//   https://www.strengthinmen.com/sitemap.xml
// Then submit that URL in Google Search Console under
//   Indexing → Sitemaps → Add a new sitemap

export default function sitemap() {
  const baseUrl = "https://www.strengthinmen.com";

  // ── Static pages ──────────────────────────────────────────────────────────
  // Add a new entry here every time you create a new page in /app.
  //
  // priority:    0.0–1.0  (homepage = 1.0, supporting pages = 0.7–0.8)
  // changeFrequency options:
  //   "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // ── Add pages below as you build them ──────────────────────────────────
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/21-day-reset`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/app`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];

  // ── Dynamic blog posts (when you add a blog) ──────────────────────────────
  // When you have blog posts in a CMS or as MDX files, replace the empty
  // array below with your fetched post data.
  //
  // Example with a CMS fetch:
  //
  // const posts = await fetch("https://your-cms.io/api/posts").then(r => r.json());
  // const blogPages = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  const blogPages = []; // replace with dynamic fetch when ready

  return [...staticPages, ...blogPages];
}
