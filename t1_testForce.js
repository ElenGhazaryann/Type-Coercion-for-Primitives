Number("0x77") === 0x77; // false, conv to hexadecimal number
Number("077") === 077;
Number(" 12"); // =12 // removes spaces from  start and from end, and returns number or NaN

isNaN(" "); // =false
// at first converts " " to number,  " " =0 , and 0 isn't NaN

+""; // converts  "" to number, " " is 0

0.1 + 0.2 == 0.3; // false // .1 + .2 == .3 is 0.300...004, due to floating point
9007199254740992 + 1 == 9007199254740992; // false // 2**53 is not safe integer
9007199254740992 + 2 == 9007199254740992; // false,

/*
0 === +0 // true, 0 is equal to -0, they show difference only in Object.is() and in division with infinities
+0 === -0  // true

*/

1 / "2"; // 0.5, division is not defined for strings
1 / 0; // Infinity  Բաժանման արդյունքում ձախից ձգտում է զրոյին, բայց չի հասցնում,
1 / -0; // -Infinity,  Բաժանման արդյունքում աջից ձգտում է զրոյին, բայց չի հասցնում,
