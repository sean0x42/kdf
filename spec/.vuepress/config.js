module.exports = {
  title: "KDF v0.1.0-alpha",
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
        title: "Kauri Document Format",
        children: [
          "/",
          "/implementations",
          "/authors",
        ]
      },
      {
        title: "Specification",
        children: [
          "/specification/structure",
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
        children: [
          "/elements/",
          "/elements/footnote",
          "/elements/group",
          "/elements/heading",
          "/elements/paragraph",
          "/elements/text",
        ],
      },
      {
        title: "Migrations",
        children: [
          "/migrations/",
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