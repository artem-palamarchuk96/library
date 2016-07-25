//= ../bower_components/angular/angular.js
var model = [
	
	// books: [
	// 	{name: "", genre: "", pages: ""}
	// ]
]

var library = angular.module("libraryApp", []);
library.controller("libraryCtrl", function($scope) {

	if (localStorage.length == 0) {
		$scope.data = model;
	} else {
		$scope.data = JSON.parse(localStorage.getItem('data'));
	}

	$scope.addBook = function(name, surname, patronymic, bookName, bookGenre, bookPages) {
		$scope.data.push({name: name, surname: surname, patronymic: patronymic, books: {name: bookName, genre: bookGenre, pages: bookPages}});
		localStorage.setItem('data', JSON.stringify($scope.data));
	}

})