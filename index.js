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

const config = require('./config.json');
const token = config.token;

client.on('ready', () => {
    console.log("We're in")
})

client.on("messageCreate", async message => {
    if (message.content === "peter") {
        message.channel.send("Rongkai Tian https://cdn.discordapp.com/attachments/691823245631946773/830719019567808552/peter.jpg")
    }
})

client.login(token);