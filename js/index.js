var a = parseInt(prompt("Digite um primeiro valor"));
var b = parseInt(prompt("Digite um segundo valor"));
var higher = 0;
var lower = 0;

if (a>b) {
	higher = a;
	lower = b;
}else {
	higher = b;
	lower = a;
}

if (higher%lower === 0) {
	document.body.append("Os valores " + a + " e " + b + " SÃO multiplos");
}else {
	document.body.append("Os valores " + a + " e " + b + " NÃO são multiplos");
}