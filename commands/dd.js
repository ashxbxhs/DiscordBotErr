const Nuggies = require("nuggies");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const options = new Nuggies.dropdownroles().addrole({
        label: 'Kay/O',
        role: '868327501435400243',
        emoji: '868327446250913923'
    }).addrole({
        label: 'Astra',
        role: '868326857886564372',
        emoji: '868326246898081792'
    });

    Nuggies.dropdownroles.create({
        message: message,
        role: options, /*dropdownroles constructor*/ 
        content: new Discord.MessageEmbed().setTitle('Click to get role').setDescription('Bugged AF').setColor("0000FF"),
        channelID: message.channel.id
    });
}

module.exports.config = {
    name: "dd",
    aliases: []
}