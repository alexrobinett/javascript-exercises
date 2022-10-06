const ftoc = function(temp) {
  let conTemp = (temp - 32 ) * .5556
  return Math.round(conTemp * 10) /10
};

const ctof = function(temp) {
  let conTemp = (temp * 1.8) + 32
  return Math.round(conTemp * 10) /10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
