const fs = require("fs");

// matching enum type
global.matchType = {
    // always called, least restrictive
    NONE: 0,
    // must match the letters exactly, different casing is allowed.  wAng <-> wang
    SAME: 1,
    // must match the characters exactly, must have the same case. wang <-> wang and wAng </-> wang most restrictive
    EXACT: 2,
    // needs to contain the command as a space separated substring, different casing allowed wAng <-> big wang s
    SUBSTRING: 3,
    // needs to contain the command with the same casing wAng <-> big wAng s
    SUBSTRING_EXACT: 4
}

module.exports = (client, msg) => {
    const LEGACY_PREFIX = "$"
    const PREFIX = "-"
    
    if (msg.author === client.user)
        return;

    // read commands
    fs.readdir('./commands/', (err, files) =>
    {
        files.forEach(file =>
        {
            const command = require(`../commands/${file}`)
            
            if (command.name === undefined) 
                throw "command has no name tag"
            
            const usePrefix = command.withPrefix === undefined ? true : command.withPrefix;
            const prefix = usePrefix ? PREFIX : "";
            
            switch (command.match) {
                case matchType.NONE:
                    command.execute(client, msg);
                    break;
                case matchType.SAME:
                    // lowercase both ends to ensure shit never hits the fan
                    if (msg.content.toLowerCase() === prefix + command.name.toLowerCase()) 
                        command.execute(client, msg);
                    break;
                case matchType.EXACT:
                    if (msg.content === prefix + command.name)
                        command.execute(client, msg);
                    break;
                case matchType.SUBSTRING:
                    if (msg.content.toLowerCase().includes(command.name.toLowerCase()))
                        command.execute(client, msg);
                    break;
                case matchType.SUBSTRING_EXACT:
                    if (msg.content.includes(command.name))
                        command.execute(client, msg);
                    break;
                default:
                    throw "shit hit the fan"
            }
        })
    })
}
