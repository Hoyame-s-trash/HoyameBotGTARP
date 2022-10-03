const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {   
    const getMoney = (data, type) => {
        let d = JSON.parse(data)
        let f
        d.map((v, k) => {
            if (v.name == type) {
                f = v.money
            } 
        })

        return f
    }

    if (message.member.roles.cache.some(r=>["Owner", "Administateur", "Staff"].includes(r.name)) ) {
        if (message.author.bot) return;
        let player = await MySQL.QueryAsync("SELECT * FROM users WHERE identifier = ?", [args[0]])

        if (!player[0]) return await message.channel.send('Joueur Introuvable');

        let embed = new Discord.MessageEmbed()
        .setTitle("Joueur")
        .setColor(651611)
        .addField("Character ID", `${player[0].character_id || 'Aucun'}`, true)
        .addField("Permissions", `${player[0].permission_group || 'Aucun'}`, true)
        .addField("Coins", `${player[0].coins || 'Aucun'}`, true)
        .addField("Argent Cash", `${getMoney(player[0].accounts, 'cash') || '0'}`, true)
        .addField("Argent Sale", `${getMoney(player[0].accounts, 'dirtycash') || '0'}`, true)
        .addField("Argent Banque", `${getMoney(player[0].accounts, 'bank') || '0'}`, true)
        .addField("Job", `${player[0].job + " - " + player[0].job_grade || 'Aucun'}`, true)
        .addField("Orga", `${player[0].job2 + " - " + player[0].job2_grade || 'Aucun'}`, true)
        .addField("Jail", `${player[0].jail_time || 'Aucun'}`, true)
        .addField("Nom", `${player[0].firstname || 'Aucun'}`, true)
        .addField("Prenom", `${player[0].lastname || 'Aucun'}`, true)
        .addField("XP", `${player[0].xp || 'Aucun'}`, true)
        .setTimestamp()
        .setFooter(`© Hoyameeeeee`);

        await message.channel.send(embed);
    } else {
        await message.channel.send("Doucement");
    }
};

module.exports.help = {
    name: "getplayer"
};