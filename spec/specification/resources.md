# Resources & Images

The term *resource* describes any media or data that is included within a KDF
document. Resources may be images, fonts, videos, scripts, or even plain data.
Resources may be stored within the document file under the `resources/`
directory, or may link to online content.


## What are URIs?

KDF uses [Universal Resource Identifiers][1.1] (URIs) to locate resources, both
online and embedded within the document. As such, there are two main use cases
we need to cover.

[1.1]: https://www.w3.org/Addressing/URL/uri-spec.html

 1. **Online resources**: In which the URL/URI of the content may be used *as
    is*. This is generally not recommended as the document editor or viewer
    must fetch the resource before it can be used within the document.

    ```json
    {
      "image": "http://www.example.com/heading.png"
    }
    ```

 2. **Embedded resources**: In which a relative URI is used with the following
    form: `resource://<resource-path>`. Imagine the `resources/` directory
    contained the following files:

    ```
    resources/images/
      aardvark.png
      arctic-fox.png
      cane-toad.jpg
      toucan.png
    ```

    To create a URI which points to `arctic-fox.png`, the following URI should
    be constructed: `resource://images/arctic-fox.png`.


## Hashing Embedded Resource Names

To help prevent potential problems arising when embedding many similar
resources, applications should always rename resources to a hash of their
content. The standard hashing algorithm for performing this task is SHA256.
This ensures that there will be no resource duplication, and may help with
versioning documents in future.
