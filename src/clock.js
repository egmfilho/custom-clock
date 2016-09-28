/**
 * Created by egmfilho on 20/09/16.
 */

(function () {

	'use strict';

	angular.module('egmfilho.clock', [])
		.directive('customClock', ['$timeout', function ($timeout) {

			function controller($scope) {
				$scope.relogio = 'carregando relógio';

				function tick() {
					$scope.relogio = Date.now();
					$timeout(tick, 1000);
				}

				$timeout(tick, 1000);
			}

			return {
				restrict: 'E',
				scope: {
          format: '@'
				},
				controller: controller,
				template: '<span>{{relogio | date: (format || "medium")}}</span>'
			}

		}]);

} ());