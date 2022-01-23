const random = require ("random")

// TODO: need to store this in a better place

// how to detect commands
global.matchType = {
    // predicates of type (shit user says, command including prefix)

    // always called, least restrictive
    NONE:               (_, __) => true,

    // must match the letters exactly, different casing is allowed.  wAng <-> wang
    SAME:               (u, c) => u.toLowerCase() === c.toLowerCase(),

    // must match the characters exactly, must have the same case. wang <-> wang and wAng </-> wang most restrictive
    EXACT:              (u, c) => u === c,

    // needs to contain the command as a space separated substring, different casing allowed wAng <-> big wang s
    SUBSTRING:          (u, c) => u.toLowerCase().includes(c.toLowerCase()),

    // needs to contain the command with the same casing wAng <-> big wAng s
    SUBSTRING_EXACT:    (u, c) => u.includes(c),

    // needs to be at the start but can have anything after, doesnt need to match case, wang eeee <-> wAng ooooo
    START_WITH:         (u, c) => u.toLowerCase().startsWith(c.toLowerCase()),

    // needs to be at the start but can have anything after, checks case wang eee <-> wang ooo
    START_WITH_EXACT:   (u, c) => u.startsWith(c),
}

global.DEFAULTS = {
    match : global.matchType.SAME,
    withPrefix : true,
    description : "someone forgot to give this one a description HAH L",
    perms : [],
    execute : (c, m) => { }
}

module.exports = {
    // combine with default to get all parameters
    getFullCommand : (comm, fileName = "") => {
        let ret = {
            //path.parse(file).name
            ...{ name : fileName },
            ...global.DEFAULTS,
            ...comm
        }

        if (!ret.name)
            throw ("this command has no name")

        return ret;
    },

    // whether a user is allowed to use a command
    isUserAllowed : (command, usr) => {
        // by default user does have permission (array lenght 0)
        let permission = true;

        if (command.perms.length > 0) {
            // there are permissions so assume user has no perms
            // and show user has permission
            permission = false
            command.perms.every (cRoleName => {
                if (usr.roles.cache.some (aRole => aRole.name === cRoleName)) {
                    permission = true;
                    return false
                }
            })
        }

        return permission
    },

    getRandomFrom : (collection) => {
        return collection[random.int (collection.length)]
    },
    
    isBad : function(word) {
        homestuck = [
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

        return homestuck.includes(word)
    }
}