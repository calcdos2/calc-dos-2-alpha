$(document).ready(function(){
var db = JSON.parse(data);
	$(".tooltiptest").attr("data-toggle","tooltip")
	$(".tooltiptest").attr("data-html","true")

	$(".tooltiptest").mouseover(function(event){
	var elementIdTooltip = event.target.id

	 tooltipInfo (elementIdTooltip, db)
	})

	$(".tooltiptest").mouseout(function(event, elementIdTooltip){
	var elementIdTooltip = event.target.id
	tooltipRemove (elementIdTooltip)
	})

})


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

if (elementId == "resetAll"){ 

	resetAll ()
}
else {
idSearch (elementId , setId)

toggleTalentsColor (elementId)
sumCombatSKills()
sumCivilSkills ()
setLevel ()
}

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

function toggleTalentsColor (elementId, talentId){
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

function resetAll (){
	var attrDefaultValue = 10;
	var skillsDefaultValue = 0;
if ($(".resetClass").hasClass("attributeResetClass")){
	$(".attributeResetClass").text(attrDefaultValue)
}
if ($(".resetClass").hasClass("skillsResetClass")){
	$(".skillsResetClass").text(skillsDefaultValue)
}
if ($(".resetClass").hasClass("talentResetClass")){
	$(".talentResetClass").removeClass("setActive")
	$(".talentResetClass").removeClass("setIncompatible")

}

	return
}


function tooltipInfo (elementIdTooltip, db) {
	var value1 = db[elementIdTooltip].value1
	var value2 = db[elementIdTooltip].value2
	var desc1 = "%"+" " + db[elementIdTooltip].desc1 
	var desc2 = "%"+" " + db[elementIdTooltip].desc2
	var mainDesc =  " " +db[elementIdTooltip].descMain
	if(elementIdTooltip == db[elementIdTooltip].idname){
		
		if ($("#counter"+elementIdTooltip).hasClass("attribute")){
			var numberValue = parseInt($("#counter"+elementIdTooltip).text())-10;
			var fullDescription
			
			if(db[elementIdTooltip].desc2 === ""){
				fullDescription = numberValue * value1 + desc1 +"<br>" + mainDesc
				
				if(db[elementIdTooltip].idname == "Mem"){
					
					desc1 =" "+ db[elementIdTooltip].desc1
					fullDescription = numberValue * value1 + desc1+"<br>" + mainDesc
				}
				if(db[elementIdTooltip].idname == "Persuasion"){
					
					fullDescription =  mainDesc
				}
				
			}
			else{	

					if(db[elementIdTooltip].idname == "Wit"){

						desc2 = " " + db[elementIdTooltip].desc2
						fullDescription = numberValue * value1 + desc1+"<br>"+ numberValue * value2+ desc2 +"<br>"+ mainDesc
					}
					else{
						fullDescription = numberValue * value1 + desc1 +"<br>"+ numberValue * value2+ desc2+"<br>" + mainDesc
					}
	    		}
    	}
   		

   		if($("#"+elementIdTooltip).hasClass("talent")){
    	var fullDescription = mainDesc

    	}
    	


    	if($("#counter"+elementIdTooltip).hasClass("skillsResetClass")){
    		var numberValue = parseInt($("#counter"+elementIdTooltip).text());
    		var fullDescription
    		if(db[elementIdTooltip].desc2 === ""){
				fullDescription = numberValue * value1 + desc1+"<br>" + mainDesc
				if(db[elementIdTooltip].desc1 === ""){
					fullDescription = mainDesc
				}
			}
			else{	
				if (db[elementIdTooltip].idname == "Summon" || db[elementIdTooltip].idname == "Necr"){
					
						desc1 = db[elementIdTooltip].desc1 
						desc2 = db[elementIdTooltip].desc2
						fullDescription = desc1+" "+ numberValue * value1+"%"+" " +desc2 +"<br>"+ mainDesc
					}
				else{					
	    		fullDescription = numberValue * value1 + desc1 +"<br>"+ numberValue * value2+ desc2 +"<br>"+ mainDesc
	    		}
    		}
    	}

    $("#"+elementIdTooltip).attr("data-original-title", fullDescription)
    $('[data-toggle="tooltip"]').tooltip();
    
    return
}
}

function tooltipRemove (elementIdTooltip) {
    	$("#"+elementIdTooltip).removeAttr("title")
    return
}


function setLevel (){
	var levelAttr = setLevelAttr()
	var levelCombat =  setLevelCombatSkills()
	var levelCivil = setLevelCivilSkills()
	var levelTalents = setLevelTalents()
	var setLevelCount =  Math.max(levelAttr, levelCombat, levelCivil, levelTalents)
	$("#counterLevel").text(setLevelCount)

	if (levelAttr+levelTalents+levelCivil+levelCombat==0){
		$("#counterLevel").text(0)
	}
	return
}


function setLevelAttr (){
	var totalAttr = parseInt($("#counterTotalAttr").text())
	var levelAttr = 0

	if (totalAttr >= 0 && totalAttr <=3){
	levelAttr = 1
	
	}
	if (totalAttr > 3){
		levelAttr=1
		var i = totalAttr
		for (i;i>3;i=i-2){
			levelAttr = levelAttr+1
		}
	}
	if (totalAttr == 0 ){
		levelAttr = 0
	}
	return levelAttr
}

function setLevelCombatSkills (){
	var totalCombatSkills = parseInt($("#counterTotalCombatSkills").text())
	var levelCombat = 0; 

	if (totalCombatSkills >= 0 && totalCombatSkills <=2){
	levelCombat = 1
	
	}
	if (totalCombatSkills > 2){
		var i = totalCombatSkills
		for (i;i>1;i=i-1){
			levelCombat = levelCombat+1
		}
	}
	if (totalCombatSkills == 0 ){
		levelCombat = 0
	}
	return levelCombat
}

function setLevelCivilSkills (){
	var totalCivilSkills = parseInt($("#counterTotalCivilSkills").text())
	var levelCivil=0; 

	if (totalCivilSkills >= 0 && totalCivilSkills <=1){
	levelCivil = 1
	
	}
	if (totalCivilSkills ==2){
	levelCivil = 2
	
	}
	if (totalCivilSkills > 2){
		levelCivil = 2 
		var i = totalCivilSkills
		for (i;i>2;i=i-1/4){
			
			levelCivil= levelCivil+1
		}
	}
	if (totalCivilSkills == 0 ){
		levelCivil = 0
	}
	return levelCivil
}

function setLevelTalents (){
	var count = $(".setActive")
	var levelTalents = 0
	if (count.length >= 0 && count.length <=1){
	levelTalents = 1
	
	}
	if (count.length ==2){
	levelTalents = 4
	}	

	if (count.length > 2){
		levelTalents = 3 
		var i = count.length
		for (i;i>2;i=i-1/6){
			
			levelTalents= levelTalents+1	
		}
	}
	if (count.length== 0 ){
		levelTalents = 0
	}
	return levelTalents
}