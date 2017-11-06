// Le nom de fichier : romain.js
// Ce programme est presenté par Wael ABOU ALI
// Le programme fait la conversion d'un nombre entier entre 1 et 3999 en un texte
// correspondant à la numération romaine de ce nombre. 


// - La fonction romain initiale qui appele repeter et chiffre variable 
//   qui contient la valeur finale en romain.
// - une variable compteur (indice) pour le chiffre à la position qu'on veut évaluer.
// - variables pour tous les poids Romains opération pour identifier 
//   quelle sont les termes qu'on va utiliser.
// - la boucle qui détermine la base à sélectionner et qui appele la fonction
//   chiffre avec les chiffres romains convenables.
// - variable base va determiner si c'est 10^3,10^2,10^1,10^0.
    
    

var romain = function(nombreDec) { 	
    var nombreRomain ="";			   		 
    var lettres = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; 
    var longueur = nombreDec.toString().length-1;  
    for(var i = longueur; i >= 0; i--) {
        var base = Math.pow(10,i);     
        if(i == 3) {			    // juste les miliers  6('M')      6('M')        6('M') 
            nombreRomain += chiffre(nombreDec,base,lettres[2*i],lettres[2*i],lettres[2*i]);
        } else {
            nombreRomain += chiffre(nombreDec,base,lettres[2*i],lettres[2*i+1],lettres[2*i+2]);
			// Les termes seront les termes à la position 2i(4('C'),2('X'),0('I'))
            // ,2i+1(5('D'),3('L'),1('V')),2i+2(6('M'),4('C'),2('X')). 
        }
    }
    return nombreRomain; // retourne la valeur finale pour la fonction romain.
};
    

    
// - La fonction chiffre est responsable d'encoder en numérotation romaine un seul chiffre 
//   du nombre décimal(cette fonction prends 5 paramètres : 
// - nombreDec : le nombre décimale qu'on a choisi. 
// - Base : C'est la base qu'on travaille sur laquelle soit milliers
//   ,centaines,dizaines,entiers.
// - poidsPetit, Moyen, Grand : C'est le poids de chaque unité qu'on travaille 
//   sur laquelle.
//   M > D > C > L > X > V > I donc selon leur poids M est le plus grand et 
//   I est le plus petit.
// - indice : méthode pour avoir la puissance de 10(soit 3 ou 2 ou 1 ou 0).
// - une variable majeurP qui prend un char. dont la valeur représente le terme
//   avec le plus grand poids et qui est à la position longueur du string - l'indice de base qu'on
//   sur pour l'instant.

var chiffre = function(nombreDec,base,poidsPetit,poidsMoyen,poidsGrand) {  								
    var longueur = nombreDec.toString().length-1;
    var decimal = "";
    var indice = Math.ceil(Math.log(base)/Math.log(10)); 
    var majeurP = nombreDec.toString().charAt(longueur-indice);    
    if (majeurP >= 0 && majeurP <= 3) { 
        if(majeurP == 0) {
            decimal = ""; 
        } else {
            decimal += repeter(majeurP,poidsPetit);
        }
    } else if (majeurP == 4) {
        decimal += poidsPetit + poidsMoyen;	
    } else if (majeurP >= 5 && majeurP <= 8) {
        if(majeurP == 5) {
            decimal += poidsMoyen;
        } else {
            decimal += poidsMoyen + repeter(majeurP-5,poidsPetit);
        }
    } else {
        decimal += poidsPetit + poidsGrand;
    }	
    return decimal;		// la valeur retournée par la fonction chiffre. 
};

// - La fonction repeter prend deux paramètres, un entier n et un text t,
//   et retourne un texte composé de n répétitions du texte t.
// - Une variable String containeur pour avoir un string 
//   avec n répétitions de t.

var repeter = function(n,t) { 	 
    var string = "";			
    var i = 0;
    while(i < n) {				
        string += t;			
        i++;
    }
    return string;		// la valeur dont la fonction repeter va retourner.
};


var testRomain = function () {	// Les testes unitaires
    assert(romain(900) == "CM");  
    assert(romain(501) == "DI");
    assert(romain(8) == "VIII");
    assert(romain(1122) == 'MCXXII');
    assert(romain(243) == "CCXLIII");
    assert(romain(744) == "DCCXLIV");
    assert(romain(835) == "DCCCXXXV");
	assert(romain(606) == "DCVI");
    assert(romain(3997) == "MMMCMXCVII");
    assert(romain(2948) == "MMCMXLVIII");
    assert(romain(439) == "CDXXXIX");
	assert(romain(0) == "");
    
};

testRomain();		// L'appel de la fonction responsable au testes unitaires.