let sa = function decrypt(message, testKey) {
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
      if (res[i] > -1 && res[i] < 25) res[i] = res[i] + 65;
      otv = otv + String.fromCharCode(res[i]);
    }

    
       return otv;
    
  }



console.log(sa("56", "8QBHH#(WR2"));