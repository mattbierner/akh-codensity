"use strict"
const Identity = require('akh.identity').type.identity;
const CodensityT = require('../trans/codensity');

/**
 * Codensity monad
 */
const Codensity = CodensityT(Identity);

/**
 * Perform a codensity computation.
 * 
 * @param m Computation.
 * @param k Outer continuation.
 */
Codensity.run = (m, k) =>
    Identity.run(CodensityT.run(m, x => Identity.of(k(x))))

Codensity.prototype.run = function(k) {
    return Codensity.run(this, k)
}

module.exports = Codensity;
