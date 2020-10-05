const CustomError = require("../extensions/custom-error");

module.exports = function transform(res) {
let arr = [];
for(let i = 0;i<res.length;i++){
  arr[i] = res[i]

}

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case "--discard-next":
            if (i + 1 == arr.length) {
              break;
            } else {
              arr.splice(i + 1, 1);
            }
            break;
          case "--discard-prev":
            if (i == 0) {
              break;
            } else {
              arr.splice(i - 1, 1);
            }
            break;
          case "--double-next":
            if (arr[i + 1] != arr.length) {
              arr[i] = arr[i + 1] ;
            }
            break;
          case "--double-prev":
            if (arr[i] != 0) {
              arr[i] = arr[i - 1] ;
            }
            break;
          default:
  
        }
    }
  } else throw new Error();

let atrium = [];
let z=0;
for (let i = 0; i < arr.length; i++) {
  if (
    arr[i] != "--discard-next" &&
    arr[i] != "--discard-prev" &&
    arr[i] != "--double-next" &&
    arr[i] != "--double-prev"
  )
  {
   if(arr[i] != undefined){ atrium[z] = arr[i];
    z++}
  }
  
}

return atrium;
};
