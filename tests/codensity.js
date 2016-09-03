"use strict";
const assert = require('chai').assert
const Codensity = require('../index').Codensity

const sqr = x => x * x

describe("Codensity", () => {
    it("simple of", () => {
        const c = Codensity.of(3)

        assert.deepEqual(9, Codensity.run(c, sqr))
        assert.deepEqual(9, c.run(sqr))
    })

    it("simple chain", () => {
        const c = Codensity.of(3).chain(function (x) {
            return Codensity.of(x + 5)
        })

        assert.deepEqual(
            Codensity.run(c, sqr),
            64)
    })

    it("chain", () => {
        const c = Codensity.of(3)
            .chain(function (x) {
                return Codensity.of(x + 5)
            })
            .chain(function (x) {
                return Codensity.of(x / 2)
            })

        assert.deepEqual(
            Codensity.run(c, sqr),
            16)
    })

    it("many chain", () => {
        let c = Codensity.of(0)

        for (let i = 0;  i < 10000;  ++i) {
            c = c.chain(function (x) {
                return Codensity.of(x + 1)
            })
        }

        assert.deepEqual(
            Codensity.run(c, sqr),
            10000 * 10000)
    })

    it("many inner chain", () => {
        const f = function (x) {
            if (x > 10000)
                return Codensity.of(x)
            return Codensity.of(x + 1).chain(f)
        }

        assert.deepEqual(
            Codensity.run(f(0), sqr),
            10001 * 10001)
    })

    it("fmap", () => {
        const c = Codensity.of(3)
            .map(function (x) {
                return x * x
            })
            .chain(function (x) {
                return Codensity.of(x + 1)
            })

        assert.deepEqual(
            Codensity.run(c, sqr),
            10 * 10)
    })
}) 