"use strict";
// converting from CSS to RGB
hexToRGB("#e1ab22");
function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);

  let g = parseInt(hex.substring(3, 5), 16);

  let b = parseInt(hex.substring(5), 16);
  //   console.log("r: ", r, "g: ", g, "b: ", b);
  return { r, g, b };
}

rgbToHEX(12, 2, 17);
function rgbToHEX(r, g, b) {
  //   console.log("r: ", r, "g: ", g, "b: ", b);
  let hex1 = r.toString(16);
  let hex2 = g.toString(16);
  let hex3 = b.toString(16);
  //   console.log(hex1, hex2, hex3);
  //   console.log(`rgb: #${hex1}${hex2}${hex3}`);
  if (hex1.length >= 0 || hex2.length >= 0 || hex3.length >= 0) {
    console.log(`rgb: #${hex1}${hex2}${hex3}`);
  }
}
