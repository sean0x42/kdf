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
    sidebar: [
      {
        title: "Introduction",
        path: "/",
        children: [
          "/motivation",
          "/dart-kdf",
          "/authors",
        ]
      },
      {
        title: "Specification",
        children: [
          "/content",
          "/metadata",
          "/colours",
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
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Dart KDF", link: "https://github.com/sean0x42/dart-kdf" }
    ],
  }
}