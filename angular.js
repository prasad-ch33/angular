head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AngularJS Example with Data Binding</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body>

  <div ng-app="myApp" ng-controller="myCtrl">
    <p>Enter your name: <input type="text" ng-model="name"></p>
    <h1>Hello, {{ name }}!</h1>
  </div>

  <script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
      $scope.name = '';
    });
  </script>

</body>
