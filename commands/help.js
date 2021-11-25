const fs = require("fs");
module.exports = {
    name: "help",
    match: matchType.SAME,
    withPrefix: true,
    description: "shows this menu",
    execute(client, msg) {
        // TODO: make the menu look nicer
        
        let ret = "Help\n\n";
        
        // read commands
        fs.readdir('./commands/', (err, files) =>
        {
            console.log (files)
            files.forEach(file => {
                const command = require(`../commands/${file}`)
                if (command.withPrefix) {
                    ret += "``-" + command.name + "``" + ` - ${command.description}\n`; // <- somebody please stop this 
                }
            })
            
            msg.channel.send(ret);
        })
    },
};