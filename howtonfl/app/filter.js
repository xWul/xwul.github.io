const afc = document.getElementById("afc"); 
const nfc = document.getElementById("nfc"); 
const teamsAfc = document.getElementById("teams-afc");
const teamsNfc = document.getElementById("teams-nfc");
const gb = document.getElementById("gb");
const div = document.getElementById("box-team");

afc.onclick = (function(i){
	if(afc.className == "logo"){
		teamsAfc.setAttribute("style", "display: none");
		afc.setAttribute("class", "logo filter-gray");
	}else{
		teamsAfc.setAttribute("style", "");
		afc.setAttribute("class", "logo");
	}
}); 

nfc.onclick = (function(i){
	if(nfc.className == "logo"){
		teamsNfc.setAttribute("style", "display: none");
		nfc.setAttribute("class", "logo filter-gray");
	}else{
		teamsNfc.setAttribute("style", "");
		nfc.setAttribute("class", "logo");
	}
}); 


gb.onclick = (function(i){
	div.setAttribute("class", "box-team animate slideInDown");
});