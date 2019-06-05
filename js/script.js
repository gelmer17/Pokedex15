var pokemon = angular.module("pokemon",[])
pokemon.controller("pokedex",function($rootScope,$scope,$http){
	$scope.pokedexB = [];
	for (var i = 0; i <= 100; i++) {
		$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	}).then(function callbackSuccess(y){
		$scope.pokedexB.push(y);
	})
}
})
	