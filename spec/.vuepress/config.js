module.exports = {
  title: "KDF Specification",
  description: "A technical specification for the Koi Document Format",
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
        title: "Koi Document Format",
        children: [
          "/",
          "/implementations",
          "/authors",
        ]
      },
      {
        title: "Specification",
        children: [
          "/specification/json",
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
        title: "Style Reference",
        children: [
          "/styles/"
        ]
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
      { text: "Rust KDF", link: "https://github.com/sean0x42/rust-kdf" }
    ],
  }
}
