module.exports = {
  title: "KDF Specification",
  description: "A technical specification for the Kauri Document Format",
  dest: "public",
  themeConfig: {
    lastUpdated: "Last updated",
    repo: "sean0x42/kdf",
    docsDir: "spec",
    editLinks: true,
    searchPlaceholder: "Search...",
    sidebarDepth: 2,
    sidebar: [
      {
        title: "Introduction",
        path: "/",
        children: [
          "/motivation",
          "/implementations",
          "/authors",
        ]
      },
      {
        title: "Specification",
        children: [
          "/specification/archive",
          "/specification/content",
          "/specification/metadata",
          "/specification/styles",
          "/specification/colours",
          "/specification/dictionary",
          "/specification/resources",
          "/specification/thumbnail",
        ]
      },
      {
        title: "Element Reference",
        path: "/elements",
        children: [
          "/elements/footnote",
          "/elements/group",
          "/elements/heading",
          "/elements/paragraph",
          "/elements/text",
        ],
      },
      {
        title: "Migrations",
        path: "/migrations",
        children: [
          "/migrations/0-1-0",
        ]
      },
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Dart KDF", link: "https://github.com/sean0x42/dart-kdf" }
    ],
  }
}