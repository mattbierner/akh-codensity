"use strict"

const codensityT = require('./trans/codensity');
const codensity = require('./type/codensity');

module.exports = {
    CodensityT: codensityT,
    Codensity: codensity,

    trans: { codensity: codensityT },
    type: { codensity: codensity }
};
