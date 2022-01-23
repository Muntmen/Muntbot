module.exports = {
    match: matchType.START_WITH,
    description: "nuke n messages",
    perms : ["G Gang","wangman"],

    execute(_, msg) { 
        let args = msg.content.split(" ")
        args.shift()
        let n = parseInt(args[0])
        let hush = args[1] === "--hush"
        let author = msg.author.id

        if (isNaN (n) || n < 1){
            msg.reply (`no, idiot. How the hell do you expect me to delete ${n} messages?? do u not understand numbers??`)
            return
        }

        let s = n == 1 ? "" : "s"

        msg.channel.bulkDelete(n + 1)
            .then (m => { if (!hush) msg.channel.send (`<@${author}> nuked ${n} message${s}`) })
            .catch(e => msg.reply ("```" + e.toString() + "```"))
    }
} 