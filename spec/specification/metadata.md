# Metadata

This page explores the storage and use of metadata in KDF documents.


## Background

> Metadata is data that provides information about other data.  
> — [Wikipedia (Metadata)][1]

All document formats require some form of metadata, and KDF is no different.
KDF powered applications can use metadata for statistical purposes, for
orienting new document authors, and for much more.


## Metadata Store

In KDF, metadata is stored within the `metadata.json` file as key-value pairs.
Each key is a string in lower camelCase (e.g. `"editDuration"`), and each value
can be any valid JSON type.

::: tip NOTE
There are some required key-value pairs that will be discussed in the next
section. Other than these, application developers are free to use the metadata
store as they see fit.
:::

```json
{
  "title": "15 Reasons Comic Sans is the World's Greatest Font",
  "authors": [
    "Sean Bailey",
    "Adam Crocker",
    "Prajna Sariputra",
    "Luke Ingram",
    "David Abraham"
  ],
  "createdAt": "2019-02-01T12:59:15+11:00",
  "updatedAt": "2019-11-17T11:38:23+11:00",
  "editDuration": "P0Y11M4DT12H30M5S",
  "supportedMediums": ["print", "web"],
  "kdfVersion": "0.1.0-alpha"
}
```


## Required Metadata

The following items **must** be defined in the metadata store, in order maximise
compatibility between applications. Items have been listed in alphabetical
order, but may be defined in any order.


### Authors

| Type                | Maximum String Length |
| :------------------ | --------------------: |
| Array&lt;String&gt; |             128 chars |

The `authors` key provides a human readable list of names, where each name
belongs to an author that contributed to the document. An author's name will
*only* be added once a modification is made, and never from simply opening the
document.

```json{3}
{
  "title": "On Colour and Brand Identity",
  "authors": ["Sean Bailey"],
  ...
}
```


### Created At

| Type   | Format        | Standard      |
| :----- | :------------ | :------------ |
| String | [Datetime][3] | [ISO 8601][2] |

The `createdAt` key contains the date and time that the document was originally
created. Applications should automatically determine this value when a new
document is created, not when it is saved for the first time.

```json
{
  ...,
  "createdAt": "2019-08-03T02:37:12+11",
  ...
}
```


### Edit Duration

| Type   | Format        | Standard      |
| :----- | :------------ | :------------ |
| String | [Duration][4] | [ISO 8601][2] |

Edit duration is used purely for statistical purposes, and should be tracked by
all applications. Note that this value does not track total edit time across all
contributors, but rather the total amount of time the document has been open. In
other words, if 5 authors are editing a document simultaneously for 1 hour,
the total duration will be 1 hour, not 5.

```json
{
  ...,
  "editDuration": "PT12H30M5S",
  ...
}
```


### KDF Version

| Type   | Standard    |
| :----- | :---------- |
| String | [Semver 2.0.0][5] |

The KDF version key defines the version of KDF that was used to build the
document. Applications can use this value to automatically upgrade KDF documents
with [migrations](/migrations). When creating new documents, be sure to always
use the latest version of KDF.

```json
{
  ...,
  "kdfVersion": "1.0.5",
  ...
}
```


### Supported Mediums

| Type     | Possible Values  |
| :------- | :--------------- |
| String[] | `web` or `print` |

The `supportedMediums` key defines whether this document has been designed for
use in print (e.g. as a PDF) and/or for the web. Application developers can use
this value to provide different tools depending on the mediums that the document
supports.

```json
{
  ...,
  "supportedMediums": ["print", "web"],
  ...
}
```


### Title

| Type             | Maximum Length |
| :--------------- | -------------: |
| String or `null` |      256 chars |

Every document must have a human readable title. Application developers may wish
to prompt the author for a title when the document is created, but this is not a
requirement.

```json
{
  "title": "The Lincolnshire Poacher",
  ...
}
```


### Updated At

| Type   | Format        | Standard      |
| :----- | :------------ | :------------ |
| String | [Datetime][3] | [ISO 8601][2] |

The `updatedAt` key contains the date and time that the document was last edited.
Initially, this value will be set to the same timestamp as the [`createdAt`][6]
key, but will diverge once the first modification to the document is made.

::: tip NOTE
Much like the [`createdAt`][6] key, this value should be updated whenever an
edit to the document is made, not when the document is saved.
:::

```json
{
  ...,
  "updatedAt": "2019-08-03T02:37:12+11",
  ...
}
```



[1]: https://en.m.wikipedia.org/wiki/Metadata
[2]: https://www.iso.org/iso-8601-date-and-time-format.html
[3]: https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations
[4]: https://en.wikipedia.org/wiki/ISO_8601#Durations
[5]: https://semver.org/
[6]: #created-at