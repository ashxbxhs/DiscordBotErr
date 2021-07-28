const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('ASTRA')
        .setURL('https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ')
        .setDescription('')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/773740323192307732/816345607173570580/TX_Character_Thumb_Rift.png')
        .setFooter('Valorant Graphics Community', 'https://cdn.discordapp.com/attachments/866655655880425482/867965294872776734/Server_Icon.png')
        .addField('All 3D Files related to Astra', [
            `[\u200b](\u200b)`,
            `[**Agent Utility**](https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ/folder/RKZBBKZa")`,
            `[**Animations**](https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ/folder/4Po0DSbY")`,
            `[**Char Select Rig**](https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ/folder/ta4GTJpY")`,
            `[**First-Person Rig**](https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ/folder/hWhQWJpC")`,
            `[**In Game Rig**](https://mega.nz/folder/8W5TUYLZ#T4x2ZBWxf0B-H1Ykpqx_mQ/folder/YSoXkIrJ")`
          ])


    message.channel.send(embed);
}

module.exports.config = {
    name: "astra",
    description: "Gives Link for Astra 3D Assets.",
    usage: "?astra",
    accessableby: "Members",
    aliases: []
}