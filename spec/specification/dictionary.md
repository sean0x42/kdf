# Dictionary

There are many circumstances in which a user may wish to add their own words to
the spell check dictionary. Consider each of the following edge cases for
example:

 * Jargon, and industry standard mispellings. See [HTTP Referer][1].
 * Invented words, such as product and brand names.
 * Including words and phrases from another language, amongst the spell check
   language.
 * Onomatopoeia. e.g. ZAAAAAAAAAAAAAAAAAAAAAAAAP.
 * Unsupported language variations. E.g. Many Australians are accustomed to
   adding *colour*, *metre*, *organise*, *analogue*, etc. to our spell check
   dictionaries when `English (Australia)` or `English (UK)` is not available.
 * A word is missing from the standard dictionary for some other reason.

A document level dictionary containing additional words for the spell check
function, is stored in `dictionary.json`. It contains a single JSON array of
strings, where each string contains a single word.

```json
["Snuffleupagus", "referer", "Git"]
```

[1]: https://en.wikipedia.org/wiki/HTTP_referrer