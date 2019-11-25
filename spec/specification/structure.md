# File Structure

## File Extension

The standard file extension for KDF documents is `.kdf`. 


## JSON

[JavaScript Object Notation][1], or JSON for short, is a popular data
serialization and interchange format. JSON is great for many reasons—it's quite
simple, decently human readable, and is supported by *many* programming
languages. All data in KDF is serialized to this format. See the following
example:

```json
{
  "students": [
    { "name": "Sean" },
    { "name": "Adam" },
    { "name": "Luke" },
    { "name": "David" },
    { "name": "Prajna" }
  ],
  "teacher": {
    "name": "Alex",
    "title": "Professor"
  }
}
```

::: tip
JSON plays a major role in the Kauri Document Format, so I highly recommend
becoming acquainted with JSON before continuing if you haven't already. 

To learn more, visit the [official JSON website][1] or read [An Introduction to
JSON][2], a tutorial from the DigitalOcean community.
:::

[1]: https://json.org/
[2]: https://www.digitalocean.com/community/tutorials/an-introduction-to-json


## Archive Layout 

Much like other document formats, KDF documents are actually compressed archives
containing a number of smaller files. Each sub-file is responsible for a
different part of the document. They are listed below:

 - [Content][3] (`content.json`) — This file contains the content and structure
   of a document, both linear and nonlinear. If you imagine the structure of a
   website, `content.json` is equivalent to the HTML.
 - [Colours][4] (`colours.json`) — This file defines a document level custom
   colour palette. Shades defined in this file can be used throughout the
   document.
 - [Dictionary][5] (`dictionary.json`) — An optional file that lists any words
   that document authors want added to the spellcheck dictionary. When this file
   doesn't exist, applications can safely assume that no additional words need
   to be added.
 - [Metadata][6] (`metadata.json`) — A file which stores document metadata, such
   as the title, KDF version and a list of authors. Applications can also use
   this file as a generic metadata store.
 - [Styles][7] (`styles.json`) — A file which describes how pages and other
   elements in the document should be rendered. 
 - [Resources][8] (`resources/`) — A directory containing images, fonts, and any
   other static content that is included in the document.
 - [Thumbnail][9] (`thumbnail.png`) — An optional thumbnail image to display in
   the file system. 

::: tip
You can inspect the structure of a KDF file by changing the file extension from
`.kdf` to `.tar.gz`, and then extracting the contents of the archive to your
file system. If you're a Windows user, you may require a third party tool such
as [7zip][10] or [WinRAR][11] to extract a `.tar.gz` file.
:::

[3]: /specification/content.md
[4]: /specification/colours.md
[5]: /specification/dictionary.md
[6]: /specification/metadata.md
[7]: /specification/styles.md
[8]: /specification/resources.md
[9]: /specification/thumbnail.md
[10]: https://www.7-zip.org/
[11]: https://www.win-rar.com/


## Compression

KDF documents should be [compressed][12] to reduce their overall foot print.
This has a number of benefits, such as taking less space on the user's file
system, and improving transfer speeds across networks.

Applications should start by collecting each of the sub-files listed [above][13]
and storing them within a single [tar][14] archive, or **tarball**. The
resulting archive should then be compressed with the [Gzip][15] algorithm. You
may have encountered `.tar.gz` files before, and the logic and methodology here
is the same. Note however that the file extension should always be `.kdf` to
avoid confusion.

[12]: https://en.wikipedia.org/wiki/Data_compression
[13]: #archive-layout
[14]: https://en.wikipedia.org/wiki/Tar_(computing)
[15]: https://www.gnu.org/software/gzip