# Archive & Compression

This section explores the structure of a KDF document, and the archiving and
compression algorithms that power it.

## Structure

Much like other document formats, KDF documents are actually compressed archives
containing a number of smaller files. Each sub file is responsible for a
different part of the document. They are listed below:

 - [Content][1] (`content.json`) — This file contains the content and structure
   of a document, both linear and nonlinear. If you imagine the structure of a
   website, `content.json` is equivalent to the HTML.
 - [Colours][2] (`colours.json`) — This file defines a document level custom
   colour palette. Shades defined in this file can be used throughout the
   document.
 - [Dictionary][3] (`dictionary.json`) — An optional file that lists any words
   that document authors want added to the spellcheck dictionary. When this file
   doesn't exist, applications can safely assume that no additional words need
   to be added.
 - [Metadata][4] (`meta.json`) — A file which stores document metadata, such as
   the title, KDF version and a list of authors. Applications can also use this
   file as a generic metadata store.
 - [Styles][5] (`styles.json`) — A file which describes how pages and other
   elements in the document should be rendered. 
 - [Resources][6] (`resources/`) — A directory containing images, fonts, and any
   other static content that is included in the document.
 - [Thumbnail][7] (`thumbnail.png`) — An optional thumbnail image to display in
   the file system. 

::: tip
You can inspect the structure of a KDF file by changing the file extension from
`.kdf` to `.tar.gz`, and then extracting the contents of the archive to your
file system. If you're a Windows user, you may require a third party tool such
as 7zip or WinRAR to extract a `.tar.gz` file.
:::

[1]: /specification/content.md
[2]: /specification/colours.md
[3]: /specification/dictionary.md
[4]: /specification/metadata.md
[5]: /specification/styles.md
[6]: /specification/resources.md
[7]: /specification/thumbnail.md


## Compression

KDF documents should be collected into a single [tarball][8], and then
compressed with [gzip][9]. This makes the end result kind of like a `.tar.gz`
file, but the file extension should always be `.kdf` to avoid confusion.

[8]: https://en.wikipedia.org/wiki/Tar_(computing)
[9]: https://www.gnu.org/software/gzip