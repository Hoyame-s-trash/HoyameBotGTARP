const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {   
    if (message.member.roles.cache.some(r=>["Owner", "Administateur", "Staff"].includes(r.name)) ) {
        if (message.author.bot) return;
        const player = await MySQL.QueryAsync("SELECT * FROM seashield_banlist WHERE License = ?", [args[0]])

        if (!player[0]) return await message.channel.send('Joueur Introuvable');

        let embed = new Discord.MessageEmbed()
        .setTitle("Joueur")
        .setColor(651611)
        .addField("ID", `${player[0]['ID'] || 'Aucun'}`, true)
        .addField("License", `${player[0]['License'] || 'Aucun'}`, true)
        .addField("Discord", `${player[0]['Discord'] || 'Aucun'}`, true)
        .addField("Raison", `${player[0]['Reason'] || 'Aucun'}`, true)
        .addField("Etat du ban", `${player[0]['isBanned'] == 1 ? 'Oui' : 'Non' || 'Aucun'}`, true)
        .addField("Permanent", `${player[0]['permanent'] == 1 ? 'Oui' : 'Non' || 'Aucun'}`, true)
        .setImage(`${player[0]['banimg'] || 'Aucun'}`)

        .setTimestamp()
        .setFooter({ text: `Hoyame`, iconURL: 'https://cdn.discordapp.com/avatars/807969721660080138/a_cc9d997b851767c4912cb014ee08ec01.gif?size=256' });

        await message.channel.send(embed);
    } else {
        await message.channel.send("Doucement");
    }
};

module.exports.help = {
    name: "getbaninfo"
};