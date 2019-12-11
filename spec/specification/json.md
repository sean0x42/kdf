# What is JSON?

::: tip
This page serves as an introduction to JSON. If you're already familiar, we
suggest you continue on to the next section: [Document Structure][1].
:::

[JavaScript Object Notation][2]—or JSON for short—is a popular data
serialization and interchange format based on the JavaScript language. It's
quite simple, decently human readable, and there are reliable implementations
available for many programming languages. To get a feel for the format, I've
included some samples below:

```json
["Sean", "Adam", "Luke", "David", "Prajna"]
```

```json
{
  "common_name": "Queensland kauri pine",
  "species": "A. robusta",
  "genus": "Agathis",
  "family": "Araucariaceae"
}
```

In KDF, document content and other data is stored in a series of JSON files,
which are then bundled up into a single file. We'll explore this idea much
further, in the next section of the specification: [Document Structure][1].


## Further Reading

If you'd like to learn some more about JSON, the following resources my come in
handy:

 - [json.org][2]: The official JSON website.
 - [An Introduction to JSON][3]: a tutorial from the DigitalOcean community.

[1]: /specification/structure
[2]: https://json.org/
[3]: https://www.digitalocean.com/community/tutorials/an-introduction-to-json


