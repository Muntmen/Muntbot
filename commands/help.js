const path = require('path');
const fs = require ("fs");
const generalHelpers = require('../helpers/generalHelpers');
const { MessageEmbed } = require('discord.js');

// automated, no need for tuchy
module.exports = {
    description: "shows this menu",
    execute(client, msg) {
        let desc = ""
        
        // read commands
        fs.readdir('./commands/', (_, files) => {
            files.forEach(file => {
                const c = require(`../commands/${file}`)
                const command = generalHelpers.getFullCommand(c, path.parse(file).name)

                // perms
                if (!generalHelpers.isUserAllowed (command, msg.member))
                    return

                // misc
                if (!command.showInHelp)
                    return;

                if (command.withPrefix)
                    desc += "`" + command.name + "` - " + command.description + "\n"
            })

            let helpEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setThumbnail("https://avatars.githubusercontent.com/u/94961737?s=200&v=4")
                .setTitle('Help')
                .setDescription("COQ")
                .addField ("Commands (use - as the prefix)", desc)
                .setTimestamp()

            msg.channel.send({embeds: [helpEmbed]});
        })
    },
}