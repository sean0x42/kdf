# Resources

The term *resource* describes any media or data that is included within a KDF
document. Resources may be images, fonts, videos, scripts, or even plain data.
Resources may be stored within the document file under the `resources/`
directory, or may link to online content.


## URIs

KDF uses Universal Resource Identifiers (URIs) to 

Resource URIs are a type of URI that uniquely points to a single KDF resource.
For example, imagine a KDF document with the following content in the resources
directory:

```plain
resources/
  images/
    aardvark.png
    arctic-fox.png
    cane-toad.jpg
    toucan.png
```

If an element wanted to reference one of the above images, say `cane-toad.jpg`,
then the following resource URI could be constructed:

```
resource://images/cane-toad.jpg
```

Note that this resource URI points to one, and only one resource within the KDF
document.


### Hashing Resource Names

To help prevent potential problems arising when uploading many similar
resources, applications should always rename resources to a hash of their
content. The standard hashing algorithm for performing this task is SHA256.
This ensures that there will be no resource duplication, and may help with
versioning documents in future.
