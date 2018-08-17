app.controller('divulgazioneCtrl', function($scope, $rootScope, $routeParams, $location, $http, $sce) { 
  /*------------------------------
    default values
  ------------------------------*/
  let def = {
    nphoto: 2,          // number of photos
    theme:  "divulgazione",    // resources theme and overall title
    color:  "#82C168",  // theme color
  };
  let pages = [{
    /*------------------------------
      home page
    ------------------------------*/
    title:    "Home",
    painter:  function(db) {
                return db.contents;
              }
  }, {
    /*------------------------------
      topics page
    ------------------------------*/
    title:    "Work in Progress",
    painter:  function(db) {
                return db.contents;
              }
  }];
  $rootScope.pageSet($scope, $location, $http, $sce, $routeParams.page, def, pages);
});
