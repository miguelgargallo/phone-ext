# Phonext

A simple library to get country phone codes and related information. This package allows you to find country information based on their name, dial code, or ISO country code.

## Installation

```bash
npm install phonext
```

## Usage

```

const {
  countryCodes,
  findByCode,
  findByName,
  findByDialCode
} = require('phonext');

// Get the full list of country phone codes
console.log(countryCodes);

// Find country information by ISO country code
console.log(findByCode('US'));

// Find country information by name
console.log(findByName('United States'));

// Find country information by dial code
console.log(findByDialCode('+1'));

```

## API

An array of country objects containing `name`, `dial_code`, and `code` properties.

### findByCode(code)

Finds a country object by its ISO country code.

- `code` (String): The ISO country code, e.g., 'US'.

### findByName(name)

Finds a country object by its name.

- `name` (String): The country name, e.g., 'United States'.

### findByDialCode(dialCode)

Finds a country object by its dial code.

- `dialCode` (String): The country dial code, e.g., '+1'.

## License

Pylar AI creative ML License 0.0.4

Copyright (c) 2023 Miguel Gargallo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use the Software solely for non-commercial purposes and to show the code or result for scientific purposes. Any commercial use, including without limitation the rights to sell, copy, modify, merge, publish, distribute, sublicense, or use the Software as part of a commercial product, is strictly prohibited.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
