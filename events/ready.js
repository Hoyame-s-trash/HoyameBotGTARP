/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
const config = require("../config.json");
const MySQL = require("../utils/mysql.js");
const MySQLDev = require("../utils/mysqldev");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    MySQL.initialize();
    MySQLDev.initialize();

    setInterval(async () => {
        await MySQL.QueryAsync('SELECT 1', []);
        console.log('oiebngiob')
    }, 10000);
    
    
    client.user.setActivity(`obeir a hoyame`, {
        type: "PLAYING"
    });

    //client.user.setActivity(`Some Netflix`, {
    //    type: "WATCHING"
    //});

    //client.user.setActivity(`To some music`, {
    //    type: "LISTENING"
    //});

    //client.user.setActivity(`To some music`, {
    //    type: "STREAMING",
    //    url: "https://www.twitch.tv/routerabfrage"    // You have to use a Twitch link or else it won't work.
    //});
};