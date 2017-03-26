


$("body").click (function getElemetId(event){
var elementId = event.target.id
var splitElementId = elementId.split("")
var filterElementId= []

for (var i = 0; i<splitElementId.length;i++){
	if (splitElementId[i]==splitElementId[i].toUpperCase()){
		break
	}
	else{

		filterElementId[i]=splitElementId[i]
	}

filterElementId[0]= filterElementId[0].toUpperCase()

var rdyElementId= filterElementId.join("")
var setId= "#counter"+rdyElementId

}

idSearch (elementId , setId)

toggleTalentsColor (elementId)
sumCombatSKills()
sumCivilSkills ()


return 

})




 function btnPlus(setId){
	var count = parseInt($(setId).text()); 
	var clickbtn = 1;


	$(setId).text(count+clickbtn)
	totalPointsChange(setId, clickbtn)
	return

}


function idSearch(elementId, setId){
	var searchRes 
	if (elementId.search(/Plus/) > -1){
		btnPlus (setId)
	}
	else{
		btnMinus(setId)

	}
	return
}


function btnMinus (setId){
	var count = parseInt($(setId).text()); 
	var clickbtn = -1;

	 if ($(setId).hasClass("attribute") && count <= 10 ) {
 		$(setId).text(count)

 		return

	 }

	 if (count >0){
 	 	$(setId).text(count+clickbtn)
 	 	totalPointsChange(setId, clickbtn)
 	 	return
	 }

	 if (count <=0){
 	 	 $(setId).text(count)
 	 	 return
	 }


return
}

function totalPointsChange(setId, clickbtn){
	var totalCount = setId
	if ($(totalCount).hasClass("TotalAttr")) {
		var total = parseInt($("#counterTotalAttr").text());
	 	$("#counterTotalAttr").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalWep")) {
		var total = parseInt($("#counterTotalWep").text());
	 	$("#counterTotalWep").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalDef")) {
		var total = parseInt($("#counterTotalDef").text());
	 	$("#counterTotalDef").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalSkills")) {
		var total = parseInt($("#counterTotalSkills").text());
	 	$("#counterTotalSkills").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalPers")) {
		var total = parseInt($("#counterTotalPers").text());
	 	$("#counterTotalPers").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalCraft")) {
		var total = parseInt($("#counterTotalCraft").text());
	 	$("#counterTotalCraft").text(total+clickbtn)

	}
	if ($(totalCount).hasClass("TotalNasty")) {
		var total = parseInt($("#counterTotalNasty").text());
	 	$("#counterTotalNasty").text(total+clickbtn)

	}
	return
}


function sumCombatSKills(){
	var totalWep = parseInt($("#counterTotalWep").text())
	var totalDef = parseInt($("#counterTotalDef").text())
	var totalSkills = parseInt($("#counterTotalSkills").text())
	var totalCombatSkills = parseInt($("#counterTotalCombatSkills").text())
	var sum = totalWep+totalDef+totalSkills

	if (sum != totalCombatSkills ){
		($("#counterTotalCombatSkills").text(sum))
	}
		return
}

function sumCivilSkills (){
	var totalPers = parseInt($("#counterTotalPers").text())
	var totalCraft = parseInt($("#counterTotalCraft").text())
	var totalNasty = parseInt($("#counterTotalNasty").text())
	var totalCivilSkills = parseInt($("#counterTotalCivilSkills").text())
	var sum = totalPers+totalCraft+totalNasty


	if (sum != totalCivilSkills ){
		($("#counterTotalCivilSkills").text(sum))
	}
		return
}

function toggleTalentsColor (elementId){
	var talentId= "#"+elementId 
	if ($(talentId).hasClass("talent")){
		$(talentId).toggleClass("setActive")
			classCheck(elementId, talentId)

	}
	return
}


function classCheck (elementId, talentId){
	var classCheck = $("#"+elementId).attr("class")
	if ($(talentId).hasClass("incompatible")){
	var classList = classCheck.split(" ")
	var i
		for (i = 0 ; i<classList.length;i++){
			if (classList[i].indexOf("Talent")>0){
				var talentComplete =  "#"+classList[i]
				$(talentComplete).toggleClass("setIncompatible")
			}
		}
	}
	return
}

