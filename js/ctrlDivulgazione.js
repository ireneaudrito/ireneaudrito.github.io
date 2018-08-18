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
    teaser:   true,
    painter:  function(db) { 
                return [
                  {
                    title:      "",
                    items: [{
                      title:      "",
                      main:       db.home,
                      _template:  "box",
                      _color:     "#fff",
                      _show:      false
                    }],
                    _template:  "section"
                  }
                ];
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
