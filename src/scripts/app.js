//custom dependencies
var StringUtils = require('./StringUtils');
var template = require('./templates/template.hbs');

//bower dependencies
var gs = require("greensock");
var TweenLite = gs.TweenLite;
var Bounce = gs.easing.Bounce;
var Q = require("Q");

//npm dependencies
var $ = require("jquery");
var _ = require("lodash");

//vendor dependencies
var console = require("lumberjack");
var appLogger = console.stream('app', {color: '#FFFFFF', background: '#F4B350'});

module.exports = {

	one: function () {
		appLogger.log("Starting fuction one");
		var deferred = Q.defer();
		setTimeout(function(){
			appLogger.log("Finished with one");
			 deferred.resolve();
			},1000);
		return deferred.promise;
	},
	two: function () {
		appLogger.log("Starting fuction two");
		var deferred = Q.defer();
		setTimeout(function(){
			appLogger.log("Finished with two");
			 deferred.resolve();
			},1000);
		return deferred.promise;
	},
	setup: function () {

		var message = StringUtils.toLower("Hurray, it works!");

		appLogger.log(message);

		document.getElementById("template-container").innerHTML = template({ name: "Raul Uranga!" });

		TweenLite.to($(".box"), 1.5, {width:350, ease:Bounce.easeOut});

		var restult  = _.map([1, 2, 3], function(num) { return num * 3; });
		appLogger.log(restult);

		this.one()
		.then(this.two)
		.then(function () {
			appLogger.log("Done!");
		})
		.done();
	}
};


//hbsfy example with partial
//@see https://github.com/epeli/node-hbsfy/tree/master/example

// var Handlebars = require("hbsfy/runtime");
// var template = require("./template.hbs");

// Handlebars.registerPartial('link', require("./partial.hbs"));

// Handlebars.registerHelper("capitalize", function(name) {
//   return name[0].toUpperCase() + name.slice(1);
// });


// var data = {
//   name: "esa",
//   links: [
//     { name: "Blog", url: "http://esa-matti.suuronen.org/" },
//     { name: "Twitter", url: "https://twitter.com/esamatti" },
//     { name: "Github", url: "https://github.com/epeli" }
//   ]
// };

// window.onload = function() {
//   document.body.innerHTML = template(data);
// };