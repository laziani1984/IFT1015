/* 
- Nom de fichier : question2.js
- Ce fichier est presenté par Wael ABOU ALI.
- On devrait rendre le programme plus lisible en indentant correctement chacune des lignes.
*/

print("Binaire");

var n = Math.pow(2, 31) - 1;
var bits = 0;
while(n > 0) {
    bits += n & 1;
    n >>= 1;
}

print("Nombre de bits à 1 : " + bits);

for(var i=1; i<=bits; i++) {
    var str = "";
	if(i % 3 == 0) {
        str += "Fizz";
    }
	if(i % 5 == 0) {
        str += "Buzz";
    }
	if(i % 3 != 0) 
    if(i % 5 != 0)
	str += i;
	print(str);
}
var x = 2;
var y = 4;
var z = 4;
for(var i=0; i<x; i++) {
	for(var j=0; j<y; j++) {
        str = "";
        for(var k=0; k<z; k++) {
			str += j == k ? 'x' : ' ';
		}
		print(str);
    }
    if(i < x - 1)
        print("");
}