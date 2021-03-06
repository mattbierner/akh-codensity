/**
 * Codensity.
 */
"use strict"
const tramp = require('akh.core.trampoline')
const spec = require('akh.core.spec')


var runCodensityT = (m, k) =>
    tramp.tail(m._run, k)

/**
 * Condensity monad transformer.
 * 
 * @param m Base monad.
 */
const CodensityT = m => {
    var Instance = function (run) {
        this._run = run
    }

    spec.Monad(Instance,
        x => new Instance(k => k(x)),

        function chain(f) {
            return new Instance(k =>
                runCodensityT(this, x => runCodensityT(f(x), k)))
        })

    spec.Monoid(Instance,
        new Instance(_ => m.zero),

        function (b) {
            return new Instance(k =>
                CodensityT.run(this, k)
                    .concat(CodensityT.run(b, k)))
        })

    spec.Transformer(Instance, m,
        t =>
            new Instance(k =>
                t.chain(x => tramp.trampoline(k(x)))))

    Instance.prototype.run = function(k) {
        return CodensityT.run(this, k);
    }

    return Instance
}

/**
 * Perform a continuation computation and complete with `k`.
 * 
 * @param m Codensity computation.
 * @param k Outer continuation.
 */
CodensityT.run = (m, k) =>
    tramp.trampoline(runCodensityT(m, k))


module.exports = CodensityT
