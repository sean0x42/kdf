# Introduction <Badge text="0.1.0-alpha" type="tip" />

::: danger
KDF is currently an experimental document format, and may change suddenly and
without notice at any time. 
:::

The following is a technical specification for the **Kauri Document Format**.
KDF is an [open source][1.2], [JSON][1.3] based document format, that aims to
breath some life back into your document editing experience. KDF was designed
to enable a brand new document processor that is currently in development,
codenamed *Kauri*. More on that later.

[1.2]: https://github.com/sean0x42/kdf
[1.3]: /specification/json


## Features

We've packed many great features into KDF. Here's some highlights:

 - **Everything you expect**: Support for all the document features you know
   and love. Because KDF is still experimental, some of these features may
   still be in development, however.
 - **Migrations**: Functions which automatically upgrade KDF documents to be in
   compliance with the latest version of the specification.
 - **More layout control**: KDF embraces nonlinear layouts, allowing you to
   design the documents of your dreams.
 - **Web & print documents**: Create documents for print or for the web. You can
   create your blogs, technical documentation, and more all in one document
   format.
 - **Collaboration**: A document format which enables authors to work
   collaboratively on documents. *Coming soon*.
 - **Colour palettes**: Create custom colour palettes that follow your documents
   wherever they go. Even to other collaborators!
 - **Open source**: KDF is 100% open source. We've built this specification so
   that other application developers can make the most of KDF too.


## Motivation

Modern document editors all suffer from the same issues—feature bloat,
formatting pains, and stagnation. It's an industry of convention and tradition,
where the dominant forces define everything from user interface to user
experience. As a result, we see almost no attempts to innovate or challenge
established ideas.

To begin resolving this issue, we need to first design a new document format
that considers the requirements of modern times. The design decisions we make at
the document format level are crucial, as they will flow on to impact the
experience of our document editors as well. To this extent, KDF has been
designed to embody the following needs:

 - Modern documents need to be accessible **both online and in print**.
 - Modern document formats **should be updated** as we learn more. They should
   embrace gradual improvement over time, and take advantage of the ideas of
   many contributors.
 - Modern documents must **embrace collaboration**.
 - Modern document formats **should encourage creativity and experimentation**,
   both in content and in design.
