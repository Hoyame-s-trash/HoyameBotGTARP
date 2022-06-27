const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {   
    let f = args[0]
    args[1] ? f = f + " " + args[1] : null
    args[2] ? f = f + " " + args[2] : null

    console.log(f)

    if (message.member.roles.cache.some(r=>["Fondateur", "Développeur", "Responsable", "Staff"].includes(r.name)) ) {
        if (message.author.bot) return;
        const player = await MySQL.QueryAsync("SELECT * FROM account_info WHERE name = ?", [f])

        if (!player[0]) return await message.channel.send('Joueur Introuvable');

        let embed = new Discord.MessageEmbed()
        .setTitle("Identifiants")
        .setColor(3447003)
        .addField("Account ID", `${player[0].account_id || 'Aucun'}`, true)
        .addField("License", `${player[0].license || 'Aucun'}`, true)
        .addField("Steam", `${player[0].steam || 'Aucun'}`, true)
        .addField("Xbl", `${player[0].xbl || 'Aucun'}`, true)
        .addField("Discord", `${player[0].discord || 'Aucun'}`, true)
        .addField("Live", `${player[0].live || 'Aucun'}`, true)
        .addField("FiveM", `${player[0].fivem || 'Aucun'}`, true)
        .addField("Name", `${player[0].name || 'Aucun'}`, true)
        .addField("GUID", `${player[0].guid || 'Aucun'}`, true)
        .setTimestamp()
        .setFooter(`© Hoyameeeeee`);

        await message.channel.send(embed);
    } else {
        await message.channel.send("Doucement");
    }
};

module.exports.help = {
    name: "gname"
};