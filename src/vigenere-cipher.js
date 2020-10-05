const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(znak = true) {
    this.znak = znak;
  }

  encrypt(testStr, testKey) {
    testStr = testStr.toLowerCase();
    testKey = testKey.toLowerCase();
    let z = [];
    let o = [];
    for (let i = 0; i < testStr.length; i++) {
      z[i] = testStr.charCodeAt(i);
    }
    for (let i = 0; i < testKey.length; i++) {
      o[i] = testKey.charCodeAt(i);
    }
    let res = [];
    let x = 0;
    let n = 0;
    for (let i = 0; i < z.length; i++) {
      if (z[i] > 96 && z[i] < 123) {
        if (x > o.length - 1) x = 0;
        res[i] = (z[i] - 97 + o[x] - 97) % 26;

        x++;
      } else res[i] = z[i];
    }
    let otv = "";
    for (let i = 0; i < res.length; i++) {
      if (res[i] > -1 && res[i] < 26) res[i] = res[i] + 65;
      otv = otv + String.fromCharCode(res[i]);
    }

    if (this.znak){
     return otv;}
      else return otv.split('').reverse().join('');
  }
  decrypt(message, testKey) {
    message = message.toLowerCase();
    testKey = testKey.toLowerCase();
    let z = [];
    let o = [];
    for (let i = 0; i < message.length; i++) {
      z[i] = message.charCodeAt(i);
    }
    for (let i = 0; i < testKey.length; i++) {
      o[i] = testKey.charCodeAt(i);
    }
    let res = [];
    let x = 0;

    for (let i = 0; i < z.length; i++) {
      if (z[i] > 96 && z[i] < 123) {
        if (x > o.length - 1) x = 0;
        res[i] = (z[i]  - o[x]  + 26) % 26;

        x++;
      } else res[i] = z[i];
    }
    let otv = "";
    for (let i = 0; i < res.length; i++) {
      if (res[i] > -1 && res[i] < 26) res[i] = res[i] + 65;
      otv = otv + String.fromCharCode(res[i]);
    }

    
  if (this.znak) {
    return otv;
  } else return otv.split("").reverse().join("");
    
  }
}

module.exports = VigenereCipheringMachine;
