// class Note {
// 	constructor(titulo, tipo, nota){
// 		this.titulo = titulo;
// 		this.tipo = tipo;
// 		this.nota = nota;
// }}
// 	class UI(){
// 			const tomarBtn = document.querySelector(".accept");
// 		tomarBtn.addEventListener("click", mostrarData=()=>{
// 			const tomarTitle = document.querySelector(".title").value;
// 			const tomarType = document.querySelector(".type").value;
// 			const tomarNote = document.querySelector(".note").value;
// 			//elements
// 			const viewContent = document.createElement("div");
// 			viewContent.innerHTML = `<h1 class="text-center display-1">El contenido escrito es:</h1> 
// 			<div class="card text-center">
// 			<p>El título es:</h2><br>${tomarTitle}</p>
// 			<p>El tipo es:<br>${tomarType}</p>
// 			<p>La nota es:<br>${tomarNote}</p>
// 			</div>
// 			`;
// 	}
// 	class removeNote(){
// 		//
// 	}
	
// 			const tomarFather = document.querySelector(".container_obj");
// 			tomarFather.appendChild(viewContent);
// 			//objet instanciado
// 			const Nota1 = new Note(viewContent);
// 			const newUI = new UI (Nota1)	
// 			const removeNote = new removeNote(Nota1);

//Switch color
const tomarMoon = document.querySelector(".moon");
tomarMoon.addEventListener("click", changeMoon=()=>{
	const body = document.querySelector("#body");
	const nav = document.querySelector(".navigator");
	const title = document.querySelector(".title");
	const iconMoon = document.querySelector(".moon1");
	const takeP = document.querySelector(".p_title");
	const takeSpanish = document.querySelector(".spanish");
	const takeEnglish = document.querySelector(".english");
	const takeP_info = document.querySelector(".p_info");
	takeP_info.classList.remove("font-weight-bold");
	const takeSimpleInput = document.querySelector("#simpleInput");


	//create element sun
	const sun = document.createElement("span");
	sun.innerHTML = `<i class="far fa-sun"></i>`;
	sun.classList.add("sun", "mt-2", "ml-4");
	nav.appendChild(sun);

	//delete elemnt moon
	iconMoon.classList.toggle("active");

    //insert function to sun 
    //CHANGE TO COLOR WHITE
    sun.addEventListener("click", changeSun=()=>{
    	title.style.color="#000";
    	nav.style.background="#11B6C6";
    	body.style.background="#fff";
    	takeP.style.color="#000";

 		//add icon moon before to clicked sun
    	iconMoon.classList.remove("active");

    	//delete element sun
    	sun.classList.toggle("active");
});
    //CHANGE TO COLOR DARK
	title.style.color="#fff";
	nav.style.background="#5E5D5D";
	body.style.background="#3B3B3B";
	takeP.style.color="#fff";
	takeEnglish.style.color="#fff";
	takeP_info.style.color="#fff";
	takeSimpleInput.style.color="#fff";
});

//change language
const takeLanguage = document.querySelector(".english");
takeLanguage.addEventListener("click", spanish=()=>{
	const takeNav = document.querySelector(".navigator");
	const languageSpanish = document.createElement("p");
	const takeP_title = document.querySelector(".p_title");
	takeP_title.innerHTML = `Bienvenidos a "Mis notas"`;
	languageSpanish.setAttribute("class", "spanish ml-4 mt-3 font-weight-bold");
	languageSpanish.innerHTML = "Español";

		//Adding node to replace by before languageSpanish
	takeNav.appendChild(languageSpanish);
	takeNav.replaceChild(languageSpanish, takeLanguage);
	const takeTitle = document.querySelector(".title");
	takeTitle.innerHTML = "Mis notas";

	//Here replacing language spanish by english
	languageSpanish.addEventListener("click", englishChange=()=>{
		languageSpanish.classList.toggle("active");
		takeNav.replaceChild(takeLanguage,languageSpanish);
		takeP_title.innerHTML = `Welcome to "MyNotes"`;
		takeTitle.innerHTML = "MyNotes";
});
});
// here creation to examples form
//Examples to form
const takeSpanDude = document.querySelector(".span-active");
takeSpanDude.addEventListener("click", HelpForm=()=>{
	const takeFather = document.querySelector(".form-type-example");

	//Creating inputs type and adding attributes
	const simpleForm = document.createElement("input");
	const simpleForm2 = document.createElement("textarea");
	const simpleFormInfo = document.createElement("p");
	simpleFormInfo.innerHTML = "This is a simple form";
	simpleForm.setAttribute("class", "inputTitle");
	simpleForm.setAttribute("type", "text");
	simpleForm.setAttribute("placeholder", "Write the title of your note here");

	//Creating textarea simple
	simpleForm2.setAttribute("class", "simple-text-area");
	simpleForm2.setAttribute("max-width", "200px");
	simpleForm2.setAttribute("max-height", "300px");
	simpleForm2.setAttribute("min-height", "300px");
	simpleForm2.setAttribute("placeholder", "Write the title of your note here");
	simpleForm2.style.marginTop = "20px";

	//Adding to father
	takeFather.appendChild(simpleForm);
	takeFather.appendChild(simpleForm2);
	takeFather.appendChild(simpleFormInfo);

	//Example full complete
	const newTextInfo = document.createElement("p");
	const newInputTitle = document.createElement("input");
	const newInputType = document.createElement("input");
	const newInputTags = document.createElement("input");
	const newTextArea = document.createElement("textarea");

	//Stilyng form full
	newTextInfo.innerHTML = "This is a form full";
	newTextInfo.style.marginTop = "20px";
	newTextInfo.setAttribute("class", "textInfo");
	newInputTitle.setAttribute("class", "inputTitle");
	newInputTitle.setAttribute("placeholder", "Write the title of your note here");
	newInputTags.setAttribute("class", "inputTags");
	newInputTags.setAttribute("placeholder", "Write here the tags of your note");
	newInputType.setAttribute("class", "inputType");
	newInputType.setAttribute("placeholder", "Write here the type of text the your note");
	newTextArea.setAttribute("class", "textArea");
	newTextArea.setAttribute("placeholder", "Write the title of your note here");
	newTextArea.setAttribute("max-width", "200px");
	newTextArea.setAttribute("max-height", "300px");
	newTextArea.setAttribute("min-height", "300px");


	//Adding to DOM 
	takeFather.appendChild(newTextInfo);
	takeFather.appendChild(newInputTitle);
	takeFather.appendChild(newInputType);
	takeFather.appendChild(newInputTags);
	takeFather.appendChild(newTextArea);
});