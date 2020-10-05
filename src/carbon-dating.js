const CustomError = require("../extensions/custom-error");




module.exports = function dateSample( sampleActivity ) {
if (!sampleActivity || typeof sampleActivity !== "string" || sampleActivity<=0 ||sampleActivity > 15) return false;
let otv ;
let o = parseFloat(sampleActivity);
 let z = 0.693 / 5730;
otv = Math.ceil(Math.log(15 / o) / z);


if (Number.isNaN(otv)) return false;
 return otv;
};
