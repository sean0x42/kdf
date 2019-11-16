# Colours & Gradients

This page explores how colours and gradients can be used in KDF documents.

::: tip NOTE
Always use the spelling `color` when representing colours in a technical
setting for the sake of consistency.
:::


## Document Palette

The `colours.json` file allows document authors to create their own custom
colour palette. It contains an ordered list of shades, where each shade has a
unique identifier, a human readable name, and a valid colour. Authors may reuse
these shades throughout their document, such that any modifications to a shade
will immediately propagate throughout the document.

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


## Colours

There are several ways to define colours in KDF, with each format providing
different levels of control over the final colour. For example, HSL is the
perfect format for thinking logically about colours, whilst hexadecimal is a
highly shareable and recognisable format. 

Throughout this section you will see the use of context free grammars, like the
one below. These grammars formally define the structure of a colour string.

```bnf
<color> ::= <hex>|<rgb()>|<rgba()>|<hsl()>|<hsla()>|<custom-shade>
```


### Hexadecimal

TODO introduce and describe hexadecimal notation.

```bnf
      <hex> ::= "#"<hex-token>{3,4}
<hex-token> ::= <hex-char>{2}
 <hex-char> ::= 0-9, a-f, or A-F
```


### RGB Function

TODO introduce and describe RGB functional notation

```bnf
    <rgb()> ::= "rgb("<rgb-token><delimiter><rgb-token><delimiter><rgb-token>")"
<rgb-token> ::= <percentage>|
<delimiter> ::= ","|" "
```


### HSL Function

TODO introduce and describe HSL functional notation

```bnf
<hsl()> ::=
```


### Author Defined Shades

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

KDF also supports a number of formats for gradients.


### Linear

TODO


### Radial

TODO


### Conical

TODO