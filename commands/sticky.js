const Discord = require('discord.js');
const MySQL = require("../utils/mysql.js");



module.exports.run = async (client, message, args) => {   
    const parseMsg = (arg) => {
        let c = ""
        arg.map((v, k) => {
            c = c + v + ' '
        })

        return c
    }

    let chanId
    let author
    let stop = []

    if (message.member.roles.cache.some(r=>["Fondateur", "Développeur", "Responsable", "Staff"].includes(r.name)) ) {
        author = message.author.id

        if (message.author.bot) return;
       
        let d = await message.channel.send(":warning: __**Message épinglée**__ :warning: : " + parseMsg(args));
        chanId = message.channel.id

        const listener = async (message) => {
            if (message.channel.id === chanId && message.author.id !== "990671344872083457" && !stop[chanId]) {
                d.delete()
                d = await message.channel.send(":warning: __**Message épinglée**__ :warning: : " + parseMsg(args));
            }

            if (message.channel.id === chanId && message.author.id == author && message.content == "+stopstick") {
                stop[chanId] = true
                client.removeListener('message', listener);
            }
        }

        client.on('message', listener)
    } else {
        await message.channel.send("Doucement");
    }
};

module.exports.help = {
    name: "sticky"
};