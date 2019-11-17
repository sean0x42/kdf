# Introduction

![GitHub package.json version][1]

::: danger
KDF is currently an experimental document format, and may change suddenly and
without notice at any time. 
:::

The following is a technical specification for the **Kauri Document Format**.
KDF is an open source, JSON based document format, that aims to breath some life
back into your document editing experience. KDF was designed to enable a brand
new document processor that is currently in development, codenamed *Kauri*.


## Features

We've packed many great features into KDF. Here's some highlights:

 - **Everything you expect**: Support for all the document features you know and
   love. Some may still be in development, however.
 - **Migrations**: Functions which automatically upgrade KDF documents to be in
   compliance with the latest version of the specification.
 - **More layout control**: KDF embraces nonlinear layouts, allowing you to
   design the documents of your dreams.
 - **Web & print documents**: Create documents for print or for the web. You can
   create your blogs, technical documentation, and more all in one document
   format.
 - **Colour palettes**: Create custom colour palettes that follow your documents
   wherever they go. Even to other collaborators!
 - **Open source**: KDF is 100% open source. We've built this specification so
   that other application developers can make the most of KDF too.


## Motivation

There are currently two major, competing document formats (though other less
common ones do exist):

 1. [**Office Open XML (OOXML)**][2]: An open, XML based document format that
    was initially developed by Microsoft. OOXML is the specification behind the
    following file formats that you've likely seen before:
      - `.docx` for word processing.  
      - `.xlsx` for spreadsheets.
      - `.pptx` for presentations. 

 2. [**OpenDocument Format (ODF)**][3]: An open, XML based document format that
    is widely used amongst open source office suites. ODF defines the following
    file formats:
      - `.odt` for word processing.
      - `.ods` for spreadsheets.
      - `.odp` for presentations.
      - `.odg` for graphics.
      - `.odf` for formalae.

These formats played an important role in word processor history, but have
become stagnant.

TODO


[1]: https://img.shields.io/github/package-json/v/sean0x42/kdf?color=%233eaf7c&style=flat-square
[2]: http://officeopenxml.com/
[3]: http://opendocumentformat.org/