// The parseFloat function ignores the part of the number following the comma.
// So the comma should be replaced with a dot.
var val = "45,04561",
withCommaParsed  = parseFloat(val),
noCommaParsed  = parseFloat(val.replace(",", "."));
console.log(withCommaParsed); // Show 45
console.log(noCommaParsed); // Show 45.04561
