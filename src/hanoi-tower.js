const CustomError = require("../extensions/custom-error");
//
module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
 // throw new CustomError('Not implemented');
      
   let col_xod = Math.pow(2, disksNumber)-1
   let time_v_s = turnsSpeed / 3600;
   let res = col_xod / time_v_s;

   return { turns: col_xod, seconds: Math.trunc(res) }


};
