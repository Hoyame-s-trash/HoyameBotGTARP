const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["Fondateur", "Développeur", "Responsable"].includes(r.name)) ) {
        if (message.author.bot) return;

        const coins = await MySQL.QueryAsync("SELECT coins FROM users WHERE identifier = ?", [args[1]])
        const fCoins = parseInt(coins[0].coins) + parseInt(args[0]);

        await MySQL.QueryAsync('UPDATE users SET coins = ? WHERE identifier = ?', [fCoins, args[1]]);
        await message.channel.send("Remboursée effectuée");
    } else {
        await message.channel.send("Doucement");
    }
};

module.exports.help = {
    name: "addcoins"
};