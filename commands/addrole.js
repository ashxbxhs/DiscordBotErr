module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('868134869379719198');
    const member = message.mentions.members.first();

    member.roles.add(epicRole);
    message.channel.send('Role Added')
}

module.exports.config = {
    name: "addrole",
    description: "",
    usage: "?addrole",
    accessableby: "Members",
    aliases: []
}
