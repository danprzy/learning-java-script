var a = 5;
var b = 1;
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

// Method A
if (value > 0) {
    document.write('Wynik dodatni');
} else {
value == 0 ? document.write('Wynik jest równy 0') : document.write('Wynik ujemny');
};

/* Method B
value > 0 ? document.write('Wynik dodatni') : (value == 0 ? document.write('Wynik jest równy 0') : document.write('Wynik ujemny'));
*/

/* Method C
if (value > 0) {
    document.write('Wynik dodatni');
} else if (value == 0) {
    document.write('Wynik jest równy 0');
} else {
    document.write('Wynik ujemny');
}
*/
