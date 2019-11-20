# Footnote

| Type        | Interface |
| :---------- | :-------- |
| [Linear][1] | Element   |

[1]: ../specification/content.md#linear-content

The footnote element adds a comment or note to the page footer. This note may
contain author commentary, references, or otherwise.

```json
{
  "type": "Paragraph",
  "children": [
    "One promising approach to solving this problem came from a 2011 blog post",
    " by Grady Kuhnline, titled Length Unit Conversion in JavaScript",
    {
      "type": "Footnote",
      "children": ["https://mnmlurl.ml/#unit-conversion"]
    },
    "."
  ]
}
```

This element adds content to two separate areas of the document. Firstly, a
marker is inserted at the location of the element in the tree, containing a
unique numerical index. The marker also acts as a hyperlink, which directs the
reader to the footnote itself. Secondly, a note is added to a reserved area in
the footer of the page. This note also includes a hyperlink and a unique
numerical index.


## Attributes

This element has no special attributes.