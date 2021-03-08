const CustomError = require("../extensions/custom-error");

const chainMaker = {
  "cep": [],
  getLength() {
    return this.cep.length();
  },
  addLink(value) {
    this.cep.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.cep.length - 1) {
      throw new Error();
    } else {
      this.cep.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.cep.reverse();
    return this;
  },
  finishChain() {
    let y = '';
    this.cep.forEach(cepe => {
      y += '( ' + cepe + ' )~~'
    });
    this.cep = [];
    return y.substring(0, y.length - 2);

  }
};

module.exports = chainMaker;
