module.exports = {
    match: matchType.START_WITH,
    description: "nuke n times, this bitch boy takes time, also ensure nobody else is using it",
    perms : ["G Gang","wangman"],

    execute(_, msg) { 
        let n = parseInt(msg.content.slice (6))
        let author = msg.author.id

        if (isNaN (n) || n < 1){
            msg.reply (`no, idiot. How the hell do you expect me to delete ${n} messages?? do u not understand numbers??`)
            return
        }

        let s = n == 1 ? "" : "s"

        msg.channel.bulkDelete(n + 1)
            .then ((m) => msg.channel.send (`<@${author}> nuked ${n} message${s}`));
    }
} 