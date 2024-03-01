const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["refund"].includes(r.name)) ) {
        if (message.author.bot) return;

        await MySQL.QueryAsync('UPDATE owned_vehicles SET owner = ? WHERE plate = ?', [args[0], args[1]]);
        await message.channel.send("Changement du proprietaire du vehicule effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "setvehicleowner"
};