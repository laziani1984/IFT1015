// Ce programme est presenté par Wael ABOU ALI 
// Il est daté à 21 Septembre 2017
// J'ai crée déjà variable annuel qui prend i/(12*100) , x = 1 + i/(12*100) , r = (1 + i / (12*100))^n
// l'équation c'est									  n 	
//								p * (1 + i / (12*100))  *  i / (12*100)
//						m  =  ---------------------------------------
//                          					      n
//              					(1 + i / (12*100))  - 1
// Ce programme sert à calculer les paiments mensuels  

var p = 200000;
var n = 360;
var i = 6.5;
var annuel = (i/(12*100));
var x = 1+annuel;
var r = Math.pow(x,n);
var m = p*r*annuel/(r-1);
print("Le paiment mensuel sera " + m + "$");
