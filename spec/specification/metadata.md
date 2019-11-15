# Metadata

This page explores the storage and use of metadata in KDF documents.


## Background

> Metadata is data that provides information about other data.  
> — [Wikipedia (Metadata)][1]

[1]: https://en.m.wikipedia.org/wiki/Metadata

All document formats require some form of metadata, and KDF is no different.
KDF powered applications can use metadata for statistical purposes, for
automatically upgrading documents, and for much more.


## Metadata Store

The basis of metadata in KDF is the metadata store. A key-value store that
applications can treat like a database.


## Required Metadata

The following items **must** be defined in the metadata store, in order maximise
compatibility between applications.

::: warning
Required metadata is likely to change in newer versions of KDF. As time goes on,
standard document editor features change and adapt, and so too does metadata.
:::


### Title

| Type             | Maximum Length |
| :--------------- | -------------: |
| String or `null` |      256 chars |

A human readable title for the document.


### Version

| Type   | Maximum Length |
| :----- | -------------: |
| String |       64 chars |