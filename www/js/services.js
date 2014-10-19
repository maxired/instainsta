angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('FeedService', ['$resource',
  function($resource) {

    var userId = 3;
    var clientId = "304f2cdd2b3646a38895c48d9a4e80a7";
    var url = "https://api.instagram.com/v1/users/" + userId + "/media/recent/?client_id=" + clientId;

    return $resource(url, {
      callback: "JSON_CALLBACK"
    }, {
      getPosts: {
        method: "JSONP",
        isArray: false
      }
    });

  }
])