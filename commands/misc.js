const generalHelpers = require("../helpers/generalHelpers");

module.exports = {
    match: matchType.NONE,
    description: "random replies, try to put all custom matching here",
    
    execute(client, msg) {
        promptAndReply(msg)
        muntbot(msg)
        badstuck(msg)
        memberReply(msg)
    },
};

// general call and reply for the bot,
// user says a key and the bot replies with the value
function promptAndReply(msg) {
    const stuff = {
        "super idol": "https://www.youtube.com/watch?v=46pra8NwhzU",
        "coq": "**COQ**",
        "qola": "**you mean cOQ**",
//        "pull it in": "Guys!!! Teacher is using my P*ll it in method ! You can 300% use that in the exam",
        "$feed": "yum, never do that again",
        "$grades": "https://student-profiles-sso.ed.act.edu.au/AcademicRecord",
        "jungkook": "jungkook",
        "jimin": "jimin",
        "$rice": "i farm rice bitch :rice:",
        "sex": "by eden",
        "susan": "together",
    }

    Object.entries(stuff).forEach(([key, value]) => {
        if (msg.content.toLowerCase().includes(key))
            msg.reply(value)
    })
}

// reply to specific users, value is a parameterless string function
function memberReply(msg) {
    let thingtosay = {
        "913171847984582757" : (() => "so cool"), // coolbot
        "251576514188017664" : (() => generalHelpers.getRandomFrom(["okay jaredbot", "yes partybot", ":partying_face:"])) // jaredbot
    }
    
    Object.entries(thingtosay).forEach(([key, value]) => {
        if (msg.author.id === key)
            msg.reply (value())
    })
}

// block bad words
function badstuck(msg) {
    // TODO: neural network 
    if (generalHelpers.isBad(msg.content)) {
        // DM
        msg.member.send("https://youtu.be/IFOvTWSYCbc \nhomestuck? you should know better smh").then(() => {
            // Ban
            msg.member.ban().then (() => {
                msg.channel.send("homestuck bad like your mother xdxdxdxdx")
            }).catch(() => {
                msg.reply("you got lucky this time..")
            })
        })
    }
}

// reply to muntbot being said
function muntbot(msg) {
    if (msg.content.toLowerCase().includes ("muntbot"))
    {
        const reps = [
            "what the fuck do you want?",
            "yes my name is muntbot",
            "little bitch what do you want",
            "man maru o yama to you too bitch",
            "wot",
            "what do you desire",
            "wat u want",
            "your mother",
        ]
        msg.reply (generalHelpers.getRandomFrom(reps))
    }
}
