'use strict';
export default ngModule => {
	ngModule.directive('mcmReverse', () => {

		require('./mcm-reverse.css'); // css-loader and style-loader required

		return {
			restrict: 'E',
			template: require('./mcm-reverse.html'), // raw-loader module required
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