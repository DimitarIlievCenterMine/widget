var hb = require("handlebars");
require('./index.hbs.js');

module.exports = {
	render: function() {
		return hb.templates['index.hbs']();
	}
}