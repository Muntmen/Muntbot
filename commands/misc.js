module.exports = {
    name: "misc",
    match: matchType.NONE,
    withPrefix: false,
    description: "random replies, try to put all custom matching here",
    
    execute(client, msg) {
        promptAndReply(msg)
        muntbot(msg)
        badstuck(msg)
    }
}

function badstuck(msg) {
    // TODO: neural network
    const homestuck = [
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

    homestuck.some(word => {
        if (msg.content.toLowerCase().includes(word)) {
            msg.member.send("https://youtu.be/IFOvTWSYCbc \nhomestuck? you should know better smh").then(() => {
                msg.member.ban().then(() => msg.channel.send("homestuck bad like your mother xdxdxdxdx")).catch(() => msg.reply("you got lucky this time.."))
                return false
            })
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

        msg.reply (reps[Math.floor((Math.random() * (reps.length)))])
    }
}

function promptAndReply(msg) {
    const stuff = {
        "coq" : "**COQ**",
        "qola" : "**you mean cOQ**",
        "pull it in": "Guys!!! Teacher is using my P*ll it in method ! You can 300% use that in the exam",
        "$feed" : "yum, never do that again",
        "$grades" : "https://student-profiles-sso.ed.act.edu.au/AcademicRecord",
        "jungkook" :  "jungkook",
        "jimin" : "jimin",
        "$rice" : "i farm rice bitch :rice:",
        "sex" : "by eden",
        "susan" : "together",
    }

    Object.entries(stuff).forEach(([key, value]) => {
        if (msg.content.toLowerCase().includes(key))
            msg.reply (value)
    })
}
