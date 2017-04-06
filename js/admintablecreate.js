(function() {
	angular.module('formtool',[])
		.directive('onFinishRender', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				if (scope.$last === true) {
					$timeout(function () {
						scope.$emit(attr.onFinishRender);
					});
				}
			}
		}
	}).controller('adminCreateController',function($scope, $timeout) {
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			$('#side-menu').metisMenu();
		});
		var cntlref = this;
		cntlref.dblist = [];
		cntlref.addDatabase = function() {
			bootbox.prompt("Please enter the database name", function(input) {
				if (input === null) return;
				$timeout(function() {
					cntlref.dblist.push({id: 0, name: input, tables: []});
				});
			});
		};
		cntlref.addTable = function(rec) {
			bootbox.prompt("Please enter the database name", function(input) {
				if (input === null) return;
				$timeout(function() {
					rec.tables.push({name: input});
				});
			});
		};
	});
})();

