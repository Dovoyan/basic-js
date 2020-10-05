const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

otv = '';
if (options.repeatTimes === undefined) options.repeatTimes = 1;
if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
if (options.addition === undefined)options.addition='';
if (options.separator === undefined) options.separator = '+';
if (options.additionSeparator === undefined) options.additionSeparator = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    otv = otv + str;
      for (let y = 0; y < options.additionRepeatTimes ; y++) {
      if (y != options.additionRepeatTimes-1){
        otv = otv + options.addition + options.additionSeparator;}
        else otv = otv + options.addition;

      }
    if (i == (options.repeatTimes - 1)){ otv = otv ;}
    else otv = otv + options.separator;
  }
 

return otv;

};
  