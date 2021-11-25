const { MessageEmbed } = require('discord.js');
const fs = require ("fs")

module.exports = {
    name: "help",
    match: matchType.SAME,
    withPrefix: true,
    description: "shows this menu",
    async execute(client, msg) {
        let desc = ""
        
        // read commands
        fs.readdir('./commands/', (err, files) => {
            files.forEach(file => {
                const command = require(`../commands/${file}`)
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
                .setFooter("Also did not steal this from google.com")

            msg.channel.send({embeds: [helpEmbed]});
        })
    },
