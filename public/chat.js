var app = angular.module('chat', []);

app.controller('ChatCtrl', function($scope) {
	$scope.messages = [{ time: '0:44', text: 'Hoi!' }];

	$scope.addMsg = function() {
		var date = new Date();
		$scope.messages.push({
			time: date.getHours() + ':' + date.getMinutes(),
			text: $scope.msg.text
		});
	}
});