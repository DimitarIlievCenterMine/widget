/*var hb = require("handlebars");
require('./index.hbs.js');*/

var tp = require('./templates/index.hbs');

module.exports = {
	render: function() {
		return tp();
	}
}