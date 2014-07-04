(function(ns) {
	var logger = {};
	logger.log = function(argument) {
		if (console) {
			console.log(argument);
		}
	};
	ns.utils.logger = logger;
}(App));