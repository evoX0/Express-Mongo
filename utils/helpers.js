const decimalToBinary = num => {
    let arr = [];
    while (num) {
      if (num % 2) arr.push(1);
      else arr.push(0);
      num = Math.floor(num / 2);
    }
    return parseInt(arr.reverse().join(""), 10);
};
  
const binaryToDecimal = num => {
    let arr = String(num)
      .split("")
      .reverse();
    let n = 0;
    arr.forEach((item, index) => {
      n += item * Math.pow(2, index);
    });
    return n;
};

module.exports.decimalToBinary = decimalToBinary;
module.exports.binaryToDecimal = binaryToDecimal;
