const mysql = require("mysql");

module.exports = class MySQLDev {
	static MySQLDev;

	static async initialize() {
		this.MySQLDev = mysql.createConnection({
			host: "51.254.34.28",
			database: "velocityrp",
			user: "velocityrp",
			password: "e56465e@rh1651h6er1hh1he",
		});
		this.MySQLDev.config.timezone = "UTC";
		this.MySQLDev.connect((err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("[GM] | [MySQLDev] : Connected");
		});

		console.log("[GM] | [Module] - MySQLDev Initialized");
	}

	static QueryAsync(query, params) {
		return new Promise((resolve, reject) => {
			this.MySQLDev.query(query, params, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}

