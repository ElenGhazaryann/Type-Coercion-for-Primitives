Number("0x77") === 0x77; // false, conv to hexadecimal number
Number("077") === 077;
Number(" 12"); // =12 // removes spaces from  start and from end, and returns number or NaN

isNaN(" "); // =false
// at first converts " " to number,  " " =0 , and 0 isn't NaN

+""; // converts  "" to number, " " is 0
