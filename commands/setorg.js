const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r=>["Owner", "Administateur"].includes(r.name)) ) {
        if (message.author.bot) return;


        await MySQL.QueryAsync('UPDATE users SET job2 = ? WHERE identifier = ?', [args[1], args[0]]);
        await MySQL.QueryAsync('UPDATE users SET job_grade2 = ? WHERE identifier = ?', [args[2], args[0]]);
        await message.channel.send("Setjob effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "setorg"
};