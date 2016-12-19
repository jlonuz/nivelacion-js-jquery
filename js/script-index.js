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
	



