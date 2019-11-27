# Styles


## Sub-File

Styles are stored in `styles.json`.


## Medium Styles

Because KDF supports multiple mediums—currently [print][1] and
[web][2]—documents must be able to provide specific styles for each supported
medium.

These styles are defined in `styles.json`, under the key `mediums`. The
corresponding value is an object containing the name and styles of another
medium. For example:

```json
{
  "mediums": {
    "print": { ... },
    "web": { ... }
  }
}
```

[1]: #print
[2]: #web


### Print

```json
{
  "mediums": {
    "print": {
      "pageSize": "A4",
      "orientation": "portrait",
      "backgroundColor": "white"
    }
  }
}
```


### Web

```json
{
  "mediums": {
    "web": {
      "highlightColor": "#454545",
      "backgroundColor": "#F8F8F8"
    }
  }
}
```


## Elements

TODO


## Classes