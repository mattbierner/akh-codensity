"use strict"
const CodensityT = require('./trans/codensity');
const Codensity = require('./type/codensity');

module.exports = {
    CodensityT: CodensityT,
    Codensity: Codensity,

    trans: { codensity: CodensityT },
    type: { codensity: Codensity }
};
