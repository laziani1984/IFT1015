/* 
Nom de fichier : question1.js
- Ce fichier est presenté par Wael ABOU ALI.
- Ce fichier aide à calculer la valeur exacte de Pi jusqu'à presque les premiers 20000 termes en 
utilisant les nombres impaires.
- J'ai essayé d'éviter les redondances de calculs en assignants plusieurs variables dont chacun a 
un fonctionement différent. 
*/

var pi = 0;							// - containeur pour ajouter les valeurs des termes de la serie.
var isTrue = false; 				// - booléen pour transferer entre addition et soustraction.

for(var i = 1; i < 10000; i+=2) { 	// - Une boucle des termes impairs (1,3,5,7....etc) [1 - 10000]
    var pt = 4/i;					// - pt sera le prochain terme de la serie. 
    isTrue = !isTrue;				// - on change la valeur isTrue de vrai à faux et l'inverse.  
    if(isTrue == true) {			// - la condition si vrai on addition et si faux on soustrait.    
        pi += (pt);
    } else {
        pi -= (pt);
    }
}

print(pi);							// - print va imprimer la valeur totale de Pi