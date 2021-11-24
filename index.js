const Discord = require('discord.js');
const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS 
    ],
});

client.on('ready', () => {
    console.log("We're in")
})

client.on("message", async message => {
    if (message.content === "Peter") {
        message.channel.send("Rongkai Tian https://cdn.discordapp.com/attachments/691823245631946773/830719019567808552/peter.jpg")
    }
})

client.login("OTEzMDAyNTAxNjE0MjA2OTc2.YZ4J1w.5L8Cuaul55HrLw58BwiXUP7oiIg");