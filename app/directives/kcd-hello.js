export default ngModule => {

	if (ON_TEST) {
		require('./kcd-hello.test').default(ngModule);
	}

	ngModule.directive('kcdHello', ['$log', function($log) {
		require('./kcd-hello.css');
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'directives/kcd-hello.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				vm.greeting = "Hello Webpack";
			}
		};
	}]);
};
