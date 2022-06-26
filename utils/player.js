const MySQL = require("../utils/mysql.js");

module.exports.getIdentifiersWithDiscordid = (discordid) => {
    const player = MySQL.QueryAsync("SELECT * FROM account_info WHERE ?", [discordid])

    return player
}