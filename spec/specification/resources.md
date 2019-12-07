# Images & Resources

Images and resources play a crucial role in the composition and design of
documents. So it's vital that KDF takes these kinds of files into account. The
following page outlines how images, media, and fonts should be stored and
included in KDF documents.


## Resources

In KDF, any kind of media included in a document is called a *resource*.
Resources are bundled up and included within a single directory within the root
of the document called `resources/`. These resources are then referenced via
the use of resource URIs.


### Resource URIs

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
