angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('FeedIndexCtrl', function($scope, FeedService) {
	// "Pets" is a service returning mock data (services.js)

	FeedService.getPosts().$promise.then(
		function(posts) {

			$scope.posts = posts.data;

		},
		function(error) {

			// If something goes wrong with a JSONP request in AngularJS,
			// the status code is always reported as a "0". As such, it's
			// a bit of black-box, programmatically speaking.
			//alert("Something went wrong!");
		}
	);
})



// A simple controller that shows a tapped item's data
.controller('PostDetailCtrl', function($scope, FeedService, $stateParams) {
	// "Feed" is a service returning mock data (services.js)
	/*$scope.post = { title:"title", description:"desc"};
	console.log("start post detail", $stateParams);*/
	FeedService.getPosts().$promise.then(function(posts) {

		var post = posts.data.filter(function(post){
			return post.id === $stateParams.postId;
		})

		$scope.post = post[0];
		console.log(post[0]);
	}, function(err) {

	});

});