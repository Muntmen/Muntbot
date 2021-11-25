global.homestuck = [
    "hive swap",
    "hiveswap",
    "h1veswap",
    "h1v3swap",
    "hiv3swap",
    "h1ve swap",
    "h1v3 swap",
    "hiv3 swap",
    "homestuck",
    "homosucc",
    "homosuck",
    "http://www.mspaintadventures.com/",
]

module.exports = {
    name: "misc",
    match: matchType.NONE,
    withPrefix: false,
    description: "random replies, try to put all custom matching here",
    
    execute(client, msg) {
        promptAndReply(msg)
        muntbot(msg)
        badstuck(msg)
        memberReply(msg)
    }
}

function promptAndReply(msg) {
    const stuff = {
        "super idol": "https://www.youtube.com/watch?v=46pra8NwhzU",
        "coq": "**COQ**",
        "qola": "**you mean cOQ**",
        "pull it in": "Guys!!! Teacher is using my P*ll it in method ! You can 300% use that in the exam",
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

function memberReply(msg) {
    let thingtosay = {
        "913171847984582757" : (() => "so cool"), // coolbot
        "251576514188017664" : (() => getRandomFrom(["okay jaredbot", "yes partybot", ":partying_face:"])) // jaredbot
    }
    
    Object.entries(thingtosay).forEach(([key, value]) => {
        if (msg.author.id === key)
            msg.reply (value())
    })
}

function badstuck(msg) {
    // TODO: neural network

    homestuck.some(word => {
        if (msg.content.toLowerCase().includes(word)) {
            msg.member.send("https://youtu.be/IFOvTWSYCbc \nhomestuck? you should know better smh").then(() => {
            }).catch(() => msg.member.ban().then(() => {
                msg.channel.send("homestuck bad like your mother xdxdxdxdx").catch(() => msg.reply("you got lucky this time.."))
            }))
        }
    })
}

function muntbot(msg) {
    // muntbot
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
        msg.reply (getRandomFrom(reps))
    }
}

function getRandomFrom (collection) {
    return collection[Math.floor((Math.random() * (collection.length)))]
}
