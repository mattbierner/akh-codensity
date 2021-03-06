"use strict"
const assert = require('chai').assert
const CodensityT = require('../index').CodensityT
const State = require('akh.state').State
const List = require('akh.list').List

const run = function (c, s, k) {
    return State.eval(
        CodensityT.run(
            c,
            function (x) { return State.of(k(x)) }),
        s)
}

const id = function (x) { return x }

const sqr = function (x) { return x * x }

const M = CodensityT(State)


describe('CodensityT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.strictEqual(9, run(c, 's', sqr))
    })

    it("lift", () => {
        const c = M.of(3)
            .chain(function (x) {
                return M.lift(State.modify(function (s) { return s + x * 2 }))
            })
            .chain(function (x) {
                return M.lift(State.get)
            })

        assert.strictEqual(7, run(c, 1, id))
    })

    it("concat", () => {
        // See https://github.com/mattbierner/akh-codensity/issues/1

        const M = CodensityT(List)
        const run = (c, k) =>
            List.run(
                CodensityT.run(
                    c,
                    x => List.of(k(x))))

        assert.deepEqual(
            [1, 4],
            run(M.of(1).concat(M.of(2)), sqr)
        )
    })
})
