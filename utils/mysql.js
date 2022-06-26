const mysql = require("mysql");

module.exports = class MySQL {
	static MySQL;

	static async initialize() {
		this.MySQL = mysql.createConnection({
			host: "51.254.34.28",
			database: "velocityrp",
			user: "velocityrp",
			password: "Ci2uwG@4bef@G6WifbIBF",
		});
		this.MySQL.config.timezone = "UTC";
		this.MySQL.connect((err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("[GM] | [MySQL] : Connected");
		});

		console.log("[GM] | [Module] - MySQL Initialized");
	}

	static QueryAsync(query, params) {
		return new Promise((resolve, reject) => {
			this.MySQL.query(query, params, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}
