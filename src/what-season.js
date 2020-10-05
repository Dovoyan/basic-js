const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date == null) return 'Unable to determine the time of year!';
  if (isNaN(Date.parse(date)))  throw new Error()
  let Month = date.getMonth();
   if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }

  if (Month > 1 && Month < 5) return 'spring'
  if (Month > 4 && Month < 8) return 'summer'
  if (Month > 7 && Month < 11) return 'autumn'
  return 'winter'


};
