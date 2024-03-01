// const Discord = require('discord.js');
// const MySQLDev = require("../utils/mysqldev.js");
// const MySQL = require("../utils/mysql.js");

// const weapon = {
//     "blastm4": 3750,
//     "snake": 3750,
//     "tec9mf": 3250,
//     "katana": 450,
//     "glock": 1000,
//     "doubleaction": 2000,
//     "navyrevolver": 2500,
//     "gadgetpistol": 1500,
//     "assaultrifle": 3500,
//     "combatpdw": 2500,
//     "scar17fm": 3000,
//     "bullpupshotgun": 5000,
//     "specialcarbine": 5000,
//     "compactrifle": 2500,
//     "gusenberg": 2500,
//     "bullpuprifle": 2500,
//     "sawnoffshotgun": 1000,
//     "smg_mk2": 1000,
//     "gadget_parachute": 1000,
//     "dbshotgun": 1000,
//     "assaultsmg": 500,
//     "vintagepistol": 500,
//     "musket": 500,
//     "hatchet": 450,
//     "sovereign": 2000,
//     "midasgun": 3750,
//     "coachgun": 5000,
//     "pistol_mk2": 500,
//     "machinepistol": 500,
//     "battleaxe": 500,
//     "stone_hatchet": 500,
//     "pumpshotgun": 1000,
//     "heavyshotgun": 1000,
//     "appistol": 1000,
//     "m4a1fm": 1000,
//     "doublebarrelfm": 1000,
//     "combatmg_mk2": 2000,
//     "mg": 2000,
//     "combatmg": 2000,
//     "marksmanrifle_mk2": 2000,
//     "heavysniper_mk2": 2000,
//     "assaultshotgun": 2000,
// }

// const = (arg) => {
//     let coinscalc = 0;
//     const inventory = arg.inventory
//     const charid = arg.character_id

//     if (inventory == "[]") return;

//     let inv = JSON.parse(inventory)
//     inv.map((v, k) => {
//         if (weapon[v.name.toLowerCase()]) {
//             coinscalc = coinscalc + (weapon[v.name.toLowerCase()] * 0.40)
//         }
//         // 
//     })

//     if (coinscalc > 0) {
//         return [charid, coinscalc]
//     }

//     // arg.inventory()
// } 

// module.exports.run = async (client, message, args) => {
//     let tab = []
//     if (message.author.bot) return;

//     if (message.member.roles.cache.some(r => ["refund"].includes(r.name)) ) {
//         if (message.author.bot) return;
        
//         const oldInventory = await MySQLDev.QueryAsync("SELECT * FROM users", [])

//         oldInventory.map((v, k) => {
//             const value = calc(v)

//             if (value != undefined) {
//                 tab.push({id: value[0], coins: value[1]})
//             }
//         })

//         tab.sort((a, b) => {
//             return a.coins - b.coins
//         })

//         tab.map(async (v, k) => {
//             console.log(v, k)
//             await MySQL.QueryAsync('UPDATE users SET coins = coins + ? WHERE character_id = ?', [v.coins, v.id]);
//         })

//     } else {
//         // await message.channel.send("Doucement mec c'est pas pour toi");
//     }
// };

// module.exports.help = {
//     name: ""
// };

// // amonegumeeee