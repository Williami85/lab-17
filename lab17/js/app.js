var app = angular.module ('postApp', []);
//first thing you want to do is add a directive and then a name or post.//
app.directive('post', function() {
	return {
		restrict: "AE",
		templateUrl:'post.html'
	};
});

app.controller('feedCtrl', function($scope){
	//need to creat a scope and then name that array for the $scope?//
$scope.posts = [
{
title:"I Blog",
author: "Ithica",
image:{
path:"images/blog.jpg",
alt:"Traveler",
},
text:"This is an example of a blog page I created for my traveling group. I used bootstrap to structure the page.",
language: ["HTML", "CSS", "Angular"]


},
// Use ng-src in your html if you want to add comments. if we use images and have the path image it my confuse things. Easier to just label it path. so when access it it will be image.path//
{
title: "Ice Cream Shop", 
author: "Ithica",
image:{
path: "images/kream.jpg",
alt:"Yellow",
},
text: "This is an example of the ice cream page I am currently working on. I am working on my css, in which my goal was to work on my designing color schemes.",
//Put my comments in an array. Know when they appear. And will be able to access the array.//
language: ["HTML", "CSS", "Angular"]

},

{
title: "Grocery List",
author: "Ithica",
image:{
path: "images/grocery.jpg",
	alt:"Unfinished",

},
text:"This unfinished grocery list is similar to a lot of my projects. I have to go back and design the page, but adding items to the grocery list is functional.",
language: ["HTML", "CSS", "Angular"]

}


];

});