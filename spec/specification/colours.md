# Colours & Gradients

::: tip NOTE
Always use the spelling `color` when representing colours in a technical
setting for the sake of consistency.
:::

## Colour Notations

Colours may be written in a number of different formats, in order to maximise
ease of use. The following context-free grammar describes possible colour
formats.

```bnf
<color> ::= <hex>|<rgb>|<rgba>|<hsl>|<hsla>|<custom-shade>
```

### Hexadecimal

TODO introduce and describe hexadecimal notation.

```bnf
      <hex> ::= "#"<hex-token>{3,4}
<hex-token> ::= 0-9, a-f or A-F ; TODO Formalise
```

### RGB Function

TODO introduce and describe RGB functional notation

```bnf
<rgb> ::=
```

### HSL Function

TODO introduce and describe HSL functional notation

```bnf
<hsl> ::=
```

### Custom Shades

TODO introduce custom shades

Shades can be referenced anywhere that normal colours can, be prefixing their
unique id with a `$`. For example:

```json
{
  "type": "span",
  "styles": { "color": "$cosmic-blue-500" },
  "children": ["Look, I'm Cosmic Blue 500!"]
}
```


## Gradients

TODO Discuss gradients.

### Linear

TODO

### Radial

TODO

### Conical

TODO



## Document Shades

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

::: tip FOR APPLICATION DEVELOPERS
If you're writing an editor for KDF, we suggest you also include an application
level colour palette for users. Shades defined at this level would then be
accessible across all documents.
:::

::: tip
See [Custom Shades](#custom-shades) for a description of how to include these
colours in documents.
:::