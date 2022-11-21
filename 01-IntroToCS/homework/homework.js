"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  return [...num].reverse().reduce((acc,curr,ind)=>{
    return +acc+(+curr*(2**ind))
   })
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = "";
  let current = num;

  while (current) {
    result += current % 2;
    current = Math.floor(current / 2);
  }

  return result.split("").reverse().join("");
}

//----------RunJs

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
