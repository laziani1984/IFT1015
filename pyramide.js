// Le nom de fichier : pyramide.js
// Ce programme est presenté par Wael ABOU ALI
// Le programme définit la fonction pyramide(cote,n) qui dessine une pyramide de
// triangles équilatéraux ayant des côtés de longueur "cote" et une
// hauteur de "n" triangles.

var pyramide = function (cote,n) {
    for (var i = n; i > 0; i--) { 		// une boucle iterative pour dessiner la ligne droite des bases
        for(var j = 0; j < i; j++) { 	// la boucle pour dessiner le nombre requis des triangles(n,n-1,etc..) 
         	fd(cote);					// se déplacer d'un côté pour commencer le dessin
            triangle(cote);			   	// on appele la fonction triangle pour dessiner un.
        }
        pu(); bk(cote*i); rt(60); fd(cote); lt(60); pd(); // la réinitialisation de la tortue dans la nouvelle ligne.
    }
};

var triangle = function (cote) {	// La fonction triangle qui est responsable a produire un triangle à chaque
	for(var i = 0; i < 3; i++) {	// itération de la boucle en dessus dans la fonction pyramide.
    	rt(120);			   		// l'angle sera 120 qui est 1/3(360) pour un avoir un côté équilatérale
        fd(cote);
    }
};

pyramide(16,5);					   	// l'appel de la fonction avec les paramètres choisi.


    

