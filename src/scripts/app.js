
var logger = require('./logger');
var template = require('./templates/template');

module.exports = {
	setup: function () {
		logger.log("Hurray, it works!");

		document.getElementById("template-container").innerHTML = template({ name: "Raul Uranga!" });
	}
}