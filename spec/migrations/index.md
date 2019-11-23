# Introduction

Migrations are specially designed functions that convert a KDF document from one
version to another. These functions allow tools to automatically upgrade
documents to the latest version of the KDF specification.

::: tip NOTE
Some versions of KDF will contain no breaking changes. This means that
migrations will simply bump document's version, without making any changes to
its content. Other versions may contain sweeping changes. That's okay!
:::

TODO This page could really use a diagram.