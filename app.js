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
	if(score < 50){
		alert("vous devez obtenir au moins 50 points pour pouvoir utiliser le multiplicateur");	
	}
	else
	score = score -50;
	compteur++;
	multiplicateur.html('multiplicateur = '+compteur);
	div.html(score)
});
