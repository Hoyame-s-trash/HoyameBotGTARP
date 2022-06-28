const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["Fondateur", "Développeur", "Responsable", "Gérant"].includes(r.name)) ) {
        if (message.author.bot) return;


        await MySQL.QueryAsync('UPDATE users SET permission_group = ? WHERE identifier = ?', ['user']);
        await message.channel.send("Unrank staff effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "unrankstaff"
};