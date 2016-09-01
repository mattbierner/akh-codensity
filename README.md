[Akh](https://github.com/mattbierner/akh) continuation monad

## API

### `require('akh.cont').Cont`
Codensity. 

#### `Cont.run(m, k)` 
Perform a continuation computation `m` and complete with outer continuation `k`.

```js
const cont = requre('akh.Codensity').Codensity

var c = cont.of(3)
        .callcc(k =>
            k(4).map(x => x + 1))
        .map((x) => -x);

cont.run(c, console.log); // logs: -4
c.run(console.log)
```

----

### `require('akh.codensity').CodensityT`
The codensity transformer, layers codensity over a monad. 

#### `CodensityT.run(m, k)`
Same as `Codensity.run` but for transformed types

