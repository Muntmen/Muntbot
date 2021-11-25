const Discord = require('discord.js');
const fs = require ("fs");

// munting
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

// read events
fs.readdir('./events/', (err, files) =>
{
    files.forEach(file =>
    {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, msg => eventHandler(client, msg))
    })
})

// authentication
const config = require('./config.json');
const token = config.token;

client.login(token);