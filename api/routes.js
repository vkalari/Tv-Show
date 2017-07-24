var superagent = require('superagent');
//var data = require('./data');

module.exports = function (app) {
	app.get('/api/:type', function (req, res) {
		superagent
			.get('http://api.tvmaze.com/search/' + req.params.type + '?q=' + req.query.q)
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				res.json(response.body);
			});

	});

	app.get('/api/:type/:id', function (req, res) {

		//console.log("type: "+req.params.type+ "id: "+req.params.id);
		superagent
			.get('http://api.tvmaze.com/'+ req.params.type + '/' + req.params.id + "?embed=cast")
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				res.json(response.body);
			});

	});


}