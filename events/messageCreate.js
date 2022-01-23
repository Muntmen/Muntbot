const fs = require("fs");
const path = require('path');
const { getRandomFrom, getFullCommand, isUserAllowed } = require("../helpers/generalHelpers");

module.exports = (client, msg) => {
    const PREFIX = "-"
    
    if (msg.author === client.user)
        return;

    // read commands
    fs.readdir('./commands/', (err, files) =>
    {
        files.forEach(file =>
        {
            // combine with default to get all parameters
            const comm = require(`../commands/${file}`)
            const command = getFullCommand (comm, path.parse(file).name)

            // prefixes
            const prefix = command.withPrefix ? PREFIX : "";

            // matching
            if (!command.match(msg.content, prefix + command.name))
                return;

            // permission
            if (!isUserAllowed (command, msg.member)) {
                msg.reply (getRandomFrom (["hah L", "here you dropped this --> L"]))
                return;
            }
                
            command.execute (client,  msg)
        })
    })
}
