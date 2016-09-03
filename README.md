# Codensity for the [Akh  Javascript Monad Transformer Library](https://github.com/mattbierner/akh)

Includes both regular [codensity][] monad `Codensity` and codensity monad transformer `CodensityT`.

```bash
# To use as standalone package
$ npm install --save akh.codensity

# To use as part of akh library
$ npm install --save akh
```

## Usage
The codensity monad/transformer implements the [Fantasy Land][fl] monad and monoid interfaces. 

<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

```js
// Codensity monad
require('akh.codensity').Codensity
require('akh').Codensity

// Codensity monad transformer
require('akh.codensity').CodensityT
require('akh').CodensityT
```

#### `Codensity.run(m, k)`, `m.run(k)`
Perform a codensity computation `m` and complete with outer continuation `k`.

```js
const Codensity = requre('akh.Codensity').Codensity

var c = Codensity.of(3).map(x => -x)

Codensity.run(c, console.log) // logs: -3
c.run(console.log)
```

#### `CodensityT.run(m, k)`, `m.run(k)`
Same as `Codensity.run` but for transformed types


## Contributing
Contributions are welcome.

To get started:

```bash
$ cd akh-codensity
$ npm install # install dev packages
$ npm test # run tests
```



[codensity]: http://www.maths.ed.ac.uk/~tl/sydney/sydney_talk.pdf
[fl]: https://github.com/fantasyland/fantasy-land
