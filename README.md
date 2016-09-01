Codensity for the [Akh](https://github.com/mattbierner/akh) Javascript Monad Transformer Library

## API

```js
// Continuation monad
require('akh.Codensity').Codensity
require('akh').Codensity
require('akh').type.codensity

// Continuation monad transformer
require('akh.Codensity').CodensityT
require('akh').CodensityT
require('akh').trans.codensity
```


#### `Codensity.run(m, k)` 
Perform a continuation computation `m` and complete with outer continuation `k`.

```js
const Codensity = requre('akh.Codensity').Codensity

var c = Codensity.of(3)
        .callcc(k =>
            k(4).map(x => x + 1))
        .map((x) => -x);

Codensity.run(c, console.log); // logs: -4
c.run(console.log)
```

----

### `require('akh.codensity').CodensityT`
The codensity transformer, layers codensity over a monad. 

#### `CodensityT.run(m, k)`
Same as `Codensity.run` but for transformed types

