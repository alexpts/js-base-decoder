# js-base-decoder

[![Build Status](https://travis-ci.org/alexpts/js-base-decoder.svg?branch=master)](https://travis-ci.org/alexpts/js-base-decoder)
[![Code Coverage](https://scrutinizer-ci.com/g/alexpts/js-base-decoder/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/alexpts/js-base-decoder/?branch=master)


## What is Base encoding?

BaseDecoder encoding converts numbers to ASCII strings (0-9, a-z and A-Z) and vice
versa, which typically results in comparatively short strings. Such identifiers
also tend to more readily identifiable by humans.

* `1563211298668` => `"rwjxiKo"`
* `98668` => `"pFq"`


## Installation

```shell
npm i js-base-decoder
```

alternatively using Yarn:

```shell
yarn add js-base-decoder
```


## Usage


```javascript
let BaseDecoder = require('js-base-decoder');
let decoder = new BaseDecoder; // default base62 [0-1a-zA-Z]

decoder.encode(1563211298668);  // "rwjxiKo"
decoder.decode("rwjxiKo"); // 1563211298668
```

This uses the default **ASCII character set** for encoding/decoding.

It's also possible to define a **custom character set** instead:

```javascript
let BaseDecoder = require('js-base-decoder');
let decoder = new BaseDecoder('0123456789abcdef'); // base-16

decoder.encode(1563211298668);  // "0123456789abcdef"
decoder.decode("0123456789abcdef"); // 1563211298668
```
