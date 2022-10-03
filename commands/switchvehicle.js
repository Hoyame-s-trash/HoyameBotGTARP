const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["Owner", "Administateur"].includes(r.name)) ) {
        if (message.author.bot) return;

        await MySQL.QueryAsync('UPDATE owned_vehicles SET garage = ? WHERE plate = ?', ["Parking Central", args[0]]);
        await message.channel.send("Switch vehicule au pc effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "switchvehicle"
};