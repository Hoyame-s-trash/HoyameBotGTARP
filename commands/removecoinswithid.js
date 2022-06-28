const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["refund"].includes(r.name)) ) {
        if (message.author.bot) return;

        const coins = await MySQL.QueryAsync("SELECT coins FROM users WHERE character_id = ?", [args[1]])
        console.log(coins[0])
        if (coins[0] == undefined) return;
        const fCoins = parseInt(coins[0].coins) - parseInt(args[0]);

        await MySQL.QueryAsync('UPDATE users SET coins = ? WHERE character_id = ?', [fCoins, args[1]]);
        await message.channel.send("Remboursée effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "addcoinswithid"
};