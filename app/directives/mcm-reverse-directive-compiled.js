module.exports = function (ngModule) {
	"use strict";

	ngModule.directive('mcmReverse', function () {
		return {
			restrict: 'E',
			template: '<span>{{ ctrl.result }}</span> --> <span>{{ ctrl.result | uppercase }}</span>',
			scope: {
				text: '='
			},
			controllerAs: 'ctrl',
			controller: function ($scope) {
				var ctrl = this;
				console.log('WEatching');
				$scope.$watch('text', function (newVal, prevVal) {
					console.log('Hey');
					if (newVal !== prevVal) {
						ctrl.result = newVal.split('').reverse().join('');
					}
				});
			}
		};
	});
};

//# sourceMappingURL=mcm-reverse-directive-compiled.js.map