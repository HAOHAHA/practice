(function() {

var app = angular.module('myApp', []);

app.controller('msgCtrl', function($scope) {
  $scope.loginUser = "魯小";

  $scope.msgs = [
    {
      "datetime": "2016/01/01 00:01",
      "name": "魯大神",
      "text": "你個小魯蛇"
    },{
      "datetime": "2016/01/01 00:01",
      "name": "魯大神",
      "text": "見本座還不行禮"
    },{
      "datetime": "2016/01/01 00:02",
      "name": "魯小",
      "text": "有大神快拜! orz"
    },{
      "datetime": "2016/01/01 00:00",
      "name": "魯大神",
      "text": "哈哈哈哈~ 好乖乖"
    }
  ];

  $scope.send = function(){
    if(!!$scope.text){
    	$scope.msgs.push({
    		"datetime": new Date(),
        "name": $scope.loginUser,
    		"text": $scope.text
    	});
    }
    $scope.text = '';
  };
});

})();
