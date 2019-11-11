# Colours

Document level colours and shades are stored in the `colours.json` file. It
contains an ordered list of shades, where each shade has a unique identifier, a
human readable name, and a valid colour value.

```json
[
  {
    "id": "cosmic-blue-500",
    "name": "Cosmic Blue 500",
    "value": "#3647E2"
  },
  {
    "id": "cosmic-blue-400",
    "name": "Cosmic Blue 400",
    "value": "#4857E4"
  },
  {
    "id": "cosmic-blue-300",
    "name": "Cosmic Blue 300",
    "value": "#5A68E7"
  },
  ...
]
```

## Referencing Shades

Shades can be referenced anywhere that normal colours can, be prefixing their
unique id with a `$`. For example:

```json
{
  "type": "span",
  "styles": { "color": "$cosmic-blue-500" },
  "children": ["Look, I'm Cosmic Blue 500!"]
}
```