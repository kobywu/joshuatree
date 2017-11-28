// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp

function resetAll(){
	document.getElementById("one").classList.remove("tan");
	document.getElementById("two").classList.remove("tan");
	document.getElementById("three").classList.remove("tan");
	document.getElementById("four").classList.remove("tan");
	document.getElementById("one").innerHTML= "";
	document.getElementById("two").innerHTML= "";
	document.getElementById("three").innerHTML= "";
	document.getElementById("four").innerHTML= "";
}

function toggleBlueBackground1(elem){
	elem.innerHTML = "JavaScriptSorcery";
	document.getElementById("one").classList.toggle("tan");
	
}
function toggleBlueBackground2(elem){
	elem.innerHTML = "JavaScriptSorcery";
	document.getElementById("two").classList.toggle("tan");
}
function toggleBlueBackground3(elem){
	elem.innerHTML = "JavaScriptSorcery";
	document.getElementById("three").classList.toggle("tan");
}
function toggleBlueBackground4(elem){
	elem.innerHTML = "JavaScriptSorcery";
	document.getElementById("four").classList.toggle("tan");
}
