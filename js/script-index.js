$(document).ready( function(){

	$("#ocultar-flecha").toggle();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);


	function printNews(){
		var nuevoParrafo = $('<p>NUEVAS RECETAS</p>');
		nuevoParrafo.appendTo('#elemento-nuevo');
	}	
	printNews(); 
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
		
		var propiedadTrue = null;
		for(var i=0; i< recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			//console.log(recipesArray[i]);
			renderRecipe(recipesArray[i].title);
		}


	}
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
/*
var titulo_receta = document.get

	var a = document.createElement("a");
	a.classList.add("item-recipe");
	var span = document.createElement("span");
	span.classList.add("attribution");
	var span_1 = document.createElement("span");
	span_1.classList.add("title-recipe");
	var title = document.createTextNode()
	var span_2 = document.createElement("span");
	span_2.classList.add("metadata-recipe");
	var span_3 = document.createElement("span");
	span_3.classList.add("author-recipe");
	var span_4 = document.createElement("span");
	span_4.classList.add("bookmarks-recipe");
	var span_5 = document.createElement("span");
	span_5.classList.add("icon-bookmark");
	var img = document.createElement("img");
	img.setAttribute.add("src")

}*/
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe){

}
	



