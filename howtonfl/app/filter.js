const afc = document.getElementById("afc"); 
const nfc = document.getElementById("nfc"); 
const teamsAfc = document.getElementById("teams-afc");
const teamsNfc = document.getElementById("teams-nfc");
const boxTeams = document.querySelector("#box-teams");

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


function getTeamData(e) {
	boxTeams.classList.add("animate");	
	boxTeams.classList.add("slideInDown");		 
}

document.getElementById("btn-close").addEventListener("click", function(){
   	boxTeams.classList.remove("animate");	
	boxTeams.classList.remove("slideInDown");
});

const teams = Array.from(document.querySelectorAll('.map-marker'));
teams.forEach(team => team.addEventListener('click', getTeamData));

