//= ../bower_components/angular/angular.js
var model = {
	name: "",
	surname: "",
	patronymic: "",
	books: [
		{name: "", genre: "", pages: ""}
	]
}

var library = angular.module("libraryApp", []);

library.controller("libraryCtrl", function($scope) {
	$scope.data = model;
	$scope.addBook = function() {
		$scope.data.books.push({name: "", genre: "", pages: ""});
	}
	


})