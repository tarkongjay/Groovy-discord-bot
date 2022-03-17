const { MessageEmbed } = require("discord.js");
const { EMOJI_DONE , BOT_ID } = require('../config.json');

// message.react(EMOJI_DONE);

module.exports = {
  name: "h",
  aliases: ["help"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Help`)
      .setDescription(`This are the all commands of <@${BOT_ID}> ! ${EMOJI_DONE}`)
      
      .setColor("RED")

      .setFooter(`Developer:- Dayyan#8345`);
      
      
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
     


    });

   // helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};


console.log("help working")
