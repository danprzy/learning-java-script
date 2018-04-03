var a = 5;
var b = 1;
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value > 0) {
    document.write('Wynik dodatni');
} else if (value == 0) {
    document.write('Wynik jest równy 0');
} else {
    document.write('Wynik ujemny');
}

