var bouton = $("#click");
var multiplicateur = $("#multiplicateur");
var div = $("#display");
var score = 0;
var compteur = 0;




bouton.click(function(){
	score++; // ou sinon : score = score +1;
	score = score + compteur;
	div.html(score);
});

multiplicateur.click(function incrementer(){
	score = score + compteur;
	compteur++;
	div.html(score)
});
