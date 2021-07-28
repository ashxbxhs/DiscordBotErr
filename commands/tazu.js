const Discord = require("discord.js")
const botconfig = require("../settings.json");

module.exports.run = async (bot, message, args) => {
    message.reply ('Tazu is Cool')
}

module.exports.config = {
    name: "tazu",
    description: "Answers tazu is Cool",
    usage: "?ash",
    accessableby: "Members",
    aliases: []
}