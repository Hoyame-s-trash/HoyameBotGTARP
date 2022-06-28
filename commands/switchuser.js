const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (message.member.roles.cache.some(r => ["refund"].includes(r.name)) ) {
        if (message.author.bot) return;
        
        const oldLicense = await MySQL.QueryAsync("SELECT identifier FROM users WHERE character_id = ?", [args[0]])
        const newLicense = args[1]

        await MySQL.QueryAsync('DELETE FROM users WHERE identifier = ?', [newLicense]);

        
        await MySQL.QueryAsync('UPDATE users SET identifier = ? WHERE character_id = ?', [newLicense, args[0]]);
        await MySQL.QueryAsync('UPDATE owned_vehicles SET owner = ? WHERE owner = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE player_notes SET identifier = ? WHERE identifier = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE billing SET identifier = ? WHERE identifier = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE clothes_player SET identifier = ? WHERE identifier = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE sealife_bank SET identifier = ? WHERE identifier = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE tebex_fidelite SET license = ? WHERE license = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE sealife_crypto SET identifier = ? WHERE identifier = ?', [newLicense, oldLicense]);
        await MySQL.QueryAsync('UPDATE sealife_isDead SET license = ? WHERE license = ?', [newLicense, oldLicense]);
        
        await message.channel.send("Switch vehicule au pc effectuée");
    } else {
        await message.channel.send("Doucement mec c'est pas pour toi");
    }
};

module.exports.help = {
    name: "switchuser"
};

// amonegumeeee