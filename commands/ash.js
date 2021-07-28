const Discord = require("discord.js")
const botconfig = require("../settings.json");

module.exports.run = async (bot, message, args) => {
    message.reply ('is Cool !!!')
}

module.exports.config = {
    name: "ash",
    description: "Answers Ash is Cool",
    usage: "?ash",
    accessableby: "Members",
    aliases: []
}