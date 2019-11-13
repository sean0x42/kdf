# Directory Structure

Much like other document formats, KDF documents are actually archives
containing a number of sub files.

::: tip
You can inspect the structure of a KDF file by changing the file extension from
`.kdf` to `.zip`, and then extracting the contents of the archive to your file
system.
TODO Should this be `.tar.gz`?
:::

 - [`content.json`][1]: This file contains the content and structure of your
   document.
 - [`colours.json`][2]: An optional file containing the document's custom colour
   palette.
 - [`dictionary.json`][3]: An optional file that lists any words that the user
   has added to the document's dictionary.
 - [`meta.json`][4]: A file which stores document metadata, such as the title
   and a list of authors.
 - [`styles.json`][5]: A file which describes how pages and other elements in
   your document should look.
 - [`resources/`][6]: A directory containing images, fonts, and any other static
   content.
 - [`thumbnail.png`][7]: A thumbail to display in the file system.

[1]: /specification/content.md
[2]: /specification/colours.md
[3]: /specification/dictionary.md
[4]: /specification/metadata.md
[5]: /specification/styles.md
[6]: /specification/resources.md
[7]: /specification/thumbnail.md