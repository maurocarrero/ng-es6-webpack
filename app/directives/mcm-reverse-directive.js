'use strict';
export default ngModule => {
	ngModule.directive('mcmReverse', () => {
		return {
			restrict: 'E',
			template: '<strong>{{ ctrl.result }}</strong>',
			scope: {
				text: '='
			},
			controllerAs: 'ctrl',
			controller: function ($scope) {
				let that = this;
				$scope.$watch('text', function (newVal, prevVal) {
					if (newVal !== prevVal) {
						that.result = newVal.split('').reverse().join('');
					}
				});
			}
		};
	});
};