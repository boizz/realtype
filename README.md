# realtype

[![](https://img.shields.io/travis/BoizZ/realtype.svg?style=flat-square)](https://travis-ci.org/BoizZ/realtype)
[![npm package](https://img.shields.io/npm/v/realtype.svg?style=flat-square)](https://www.npmjs.org/package/realtype)
[![NPM downloads](http://img.shields.io/npm/dm/realtype.svg?style=flat-square)](https://npmjs.org/package/realtype)
[![Dependency Status](https://david-dm.org/BoizZ/realtype.svg?style=flat-square)](https://david-dm.org/BoizZ/realtype)

Can be used to distinguish between these types: boolean, number, string, function, array, date, regexp, object, error.

## Usage

```bash
npm i --save realtype
```

```js
var realtype = require('realtype');
realtype(['Heleth']);
// => array
```

## API

```js
realtype(obj: any): 'boolean' | 'number' | 'string' | 'function' | 'array' | 'date' | 'regexp' | 'object' | 'error'
```

Return real type.

## License

MIT
