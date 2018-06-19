var bouton = $("#click");
var multiplicateur = $("#multiplicateur");
var div = $("#display");
var score = 0;
var compteur = 0;
var prix_compteur = 50;




bouton.click(function ajout(){
	score = score + compteur;
	score++; // ou sinon : score = score +1;
	div.html(score);
});

multiplicateur.click(function incrementer(){
	score = score -50;
	compteur++;
	div.html(score)
});
