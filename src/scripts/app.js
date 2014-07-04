
var logger = require('./logger');
var template = require('./templates/template.hbs');

module.exports = {
	setup: function () {
		logger.log("Hurray, it works!");

		document.getElementById("template-container").innerHTML = template({ name: "Raul Uranga!" });
	}
}