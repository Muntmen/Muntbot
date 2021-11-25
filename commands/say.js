const {isBad} = require("../helpers/generalHelpers");
module.exports = {
    name: "say",
    match: matchType.START_WITH,
    withPrefix: true,
    description: "get the bot to say anything (sort of)",
    execute(client, msg) { 
        let thingtosay = msg.content.slice (5)
        if (isBad(thingtosay)) 
            msg.reply ("no bitch")
        else
            msg.delete().then(msg.channel.send(thingtosay))
    }
} 