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
    SUBSTRING_EXACT: 4,
    // needs to be at the start but can have anything after, doesnt need to match case, wang eeee <-> wAng ooooo
    START_WITH: 5,
    // needs to be at the start but can have anything after, checks case wang eee <-> wang ooo
    START_WITH_EXACT: 6,
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
                    execute(command, client, msg);
                    break;
                case matchType.SAME:
                    // lowercase both ends to ensure shit never hits the fan
                    if (msg.content.toLowerCase() === prefix + command.name.toLowerCase()) 
                        execute(command, client, msg);
                    break;
                case matchType.EXACT:
                    if (msg.content === prefix + command.name)
                        execute(command, client, msg);
                    break;
                case matchType.SUBSTRING:
                    if (msg.content.toLowerCase().includes(prefix+command.name.toLowerCase()))
                        execute(command, client, msg);
                    break;
                case matchType.SUBSTRING_EXACT:
                    if (msg.content.includes(prefix+command.name))
                        execute(command, client, msg);
                    break;
                case matchType.START_WITH:
                    if (msg.content.toLowerCase().startsWith(prefix+command.name.toLowerCase()))
                        execute(command, client, msg);
                    break;
                case matchType.START_WITH_EXACT:
                    if (msg.content.startsWith(prefix+command.name))
                        execute(command, client, msg);
                    break;
                default:
                    throw "shit hit the fan"
            }
        })
    })
}

// there used to be a really good reason for having this function
// but in general it might be useful to unify execution like this anyway
function execute(command, client, msg) {
    command.execute (client,  msg)
}
