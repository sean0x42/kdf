# Document Structure

If you've seen a `.kdf` file before, you may have been mislead into thinking it
was a single file. In actuality, a KDF file is an [archive][100]—a collection
of many smaller files bundled into one using the [Tar][101] utility. Each
smaller file has a specific responsibility, and contains data that describes
one component of the overall document. We will explore the purpose of these
smaller files below.

[100]: https://en.wikipedia.org/wiki/Archive_file
[101]: https://en.wikipedia.org/wiki/Tar_(computing)


## Archive Layout

A KDF document has the following layout of files and directories. Each
file/folder contains a link to the section of the specification that defines
it.

| File/Folder            | Purpose                                           |
| :--------------------- | :------------------------------------------------ |
| [content.json][2.1]    | Contains the content and structure of a document. |
| [colours.json][2.2]    | Defines the document level colour palette.        |
| [dictionary.json][2.3] | An optional file that lists words to include in the document level dictionary. |
| [metadata.json][2.4]   | Stores document metadata, such as title, authors, etc. |
| [styles.json][2.5]     | Describes how pages and other elements should look. |
| [resources/][2.6]      | A directory containing images, fonts, and other static content. |
| [thumbnail.png][2.7]   | An optional thumbnail image to display in the file system. |

::: tip
You can inspect the layout of a KDF file by changing the file extension from
`.kdf` to `.tar.gz`, and then extracting the contents of the archive to your
file system. If you're a Windows user, you may require a third party tool such
as [7zip][2.8] or [WinRAR][2.9] to extract a `.tar.gz` file.
:::

[2.1]: /specification/content.md
[2.2]: /specification/colours.md
[2.3]: /specification/dictionary.md
[2.4]: /specification/metadata.md
[2.5]: /specification/styles.md
[2.6]: /specification/resources.md
[2.7]: /specification/thumbnail.md
[2.8]: https://www.7-zip.org/
[2.9]: https://www.win-rar.com/


## Compression

KDF documents should be [compressed][3.1] to reduce their overall footprint.
This has a number of benefits, such as taking less space on the user's file
system, and improving transfer speeds across networks. The compression
algorithm of choice for KDF is [Gzip][3.2].

[3.1]: https://en.wikipedia.org/wiki/Data_compression
[3.2]: https://www.gnu.org/software/gzip
