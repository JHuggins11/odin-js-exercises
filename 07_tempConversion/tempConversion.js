const ftoc = function(ftemp) {
  let ctemp = (ftemp - 32) * (5/9);

  return Number(ctemp.toFixed(1));
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
