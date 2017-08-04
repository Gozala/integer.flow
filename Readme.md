# integer.flow
[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]


Library provides `integer` [opquae type alias][] for `number` and set of functions
to work with `integer` type values with guarantees that any `integer` returned
is not a floating point number, `NaN` or (`-`)`Infinity`.


## API

### Import

```js
import * as Integer from "integer.flow"
```

### `Integer.integer:number`

Library exposes `integer`, a subtype of a `number` that is guranteed to not be a floating point number, `NaN` or (`-`)`Infinity`.

### `Integer.parseInteger(string):?integer`

Try to turn given string into an `intgere`, unlike built-in `parseInt` this function never returns `NaN` or an `Infinity`, but rather retuns `null` (`?` portion of `?integer`). It also unlike built-in `parseInt` fails (returns `null`) on strings than aren't numbers like `"0what?"`.

```js
Integer.parseInteger("123") //> 123
Integer.parseInteger("+1234") //> 1234
Integer.parseInteger("-1234") //> -1234
Integer.parseInteger("0x001A") //> 26
Integer.parseInteger("0xBEEF") //> 48879
Integer.parseInteger("3.14") //> null
Integer.parseInteger("3.14") //> null
Integer.parseInteger("+3.14") //> null
Integer.parseInteger("-3.14") //> null
Integer.parseInteger("0") //> 0
Integer.parseInteger(".0") // > null
Integer.parseInteger("NaN") //> null
Integer.parseInteger("-Infinity") //> null
Integer.parseInteger("Infinity") //> null
Integer.parseInteger("0xFF") //> null
Integer.parseInteger("0what?") //> null
```

### `Integer.div(integer, integer):integer`

Integer division. The remainder is discarded.


### `Integer.rem(integer, integer):integer`

Find the remainder after dividing one number by another.

```js
Integer.rem(11, 4) //> 3
Integer.rem(12, 4) //> 0
Integer.rem(13, 4) //> 1
Integer.rem(-1, 4) //> -1
```

### `Integer.mod(integer, integer):integer`

Perform [modular arithmetic][].

```js
Integer.mod(7, 2) //> 1
Integer.mod(-1, 4) //> 3
```

### `Integer.round(number):integer`

Round a number to the nearest integer.

### `Integer.floor(number):integer`

Floor function, rounding down. 

### `Integer.ceiling(number):integer`

Ceiling function, rounding up. 

### `Integer.truncate(number):integer`

Truncate a number, rounding towards zero.

## Install

    npm install integer.flow


[modular arithmetic]:http://en.wikipedia.org/wiki/Modular_arithmetic
[opquae type alias]:https://flow.org/en/docs/types/opaque-types/

[travis.icon]: https://travis-ci.org/Gozala/integer.flow.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/integer.flow

[version.icon]: https://img.shields.io/npm/v/integer.flow.svg
[downloads.icon]: https://img.shields.io/npm/dm/integer.flow.svg
[package.url]: https://npmjs.org/package/integer.flow


[downloads.image]: https://img.shields.io/npm/dm/integer.flow.svg
[downloads.url]: https://npmjs.org/package/integer.flow

[prettier.icon]:https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]:https://github.com/prettier/prettier